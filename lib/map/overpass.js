// OSM Overpass helper for the construction map — real construction zones tagged
// in OpenStreetMap. Free + libre (OSM, ODbL), server-side only. (Live BIM/CAD
// layers aren't in OSM; the render-mode narrative stays in the seed fixtures.)
export const OVERPASS_ENDPOINT =
  process.env.OSM_OVERPASS_ENDPOINT || 'https://overpass-api.de/api/interpreter'

const SITE = { id: 'site-development', label: 'Site development', color: '#f59e0b', glyph: '🏗️' }
const VERTICAL = { id: 'vertical', label: 'Vertical / buildings', color: '#6366f1', glyph: '🏢' }
const TRANSPORT = { id: 'transport', label: 'Transport works', color: '#14b8a6', glyph: '🚧' }

export function buildConstructionQuery(bbox) {
  // landuse + building construction = meaningful sites/vertical work. We omit
  // highway=construction to avoid flooding the map with road-link fragments.
  const safe = String(bbox || '30.20,-97.80,30.35,-97.68')
  return `[out:json][timeout:25];(nwr["landuse"="construction"](${safe});nwr["building"="construction"](${safe}););out center tags;`
}

function styleFor(tags) {
  if (tags.building === 'construction') return VERTICAL
  if (tags.highway === 'construction') return TRANSPORT
  return SITE
}

export function normalizeConstruction(json) {
  const elements = (json && json.elements) || []
  const used = {}
  const points = []
  for (const el of elements) {
    const tags = el.tags || {}
    const lat = el.lat != null ? el.lat : el.center && el.center.lat
    const lng = el.lon != null ? el.lon : el.center && el.center.lon
    if (lat == null || lng == null) continue
    const style = styleFor(tags)
    used[style.id] = style
    const what = tags.construction || tags['construction:building'] || ''
    points.push({
      id: `${el.type}/${el.id}`,
      title: tags.name || (what ? `Construction: ${what}` : 'Construction site'),
      lat,
      lng,
      category: style.id,
      blurb: `${style.label} zone mapped in OpenStreetMap${what ? ' (' + what + ')' : ''}.`,
      facts: {
        Type: style.label,
        Detail: what || tags.landuse || tags.building || tags.highway || '',
        'Start date': tags.start_date || '',
        Opening: tags.opening_date || '',
      },
      url: `https://www.openstreetmap.org/${el.type}/${el.id}`,
    })
  }
  return {
    categories: Object.values(used),
    points,
    meta: {
      attribution: 'Live construction zones © OpenStreetMap contributors (ODbL) via Overpass.',
    },
  }
}
