// Live construction-zone data — proxies OSM Overpass (free, libre, ODbL)
// server-side and returns the MapExplorer contract.
import { OVERPASS_ENDPOINT, buildConstructionQuery, normalizeConstruction } from '@/lib/map/overpass'

export default async function handler(req, res) {
  const bbox = req.query.bbox
  try {
    const upstream = await fetch(OVERPASS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'contechnews-map/1.0 (https://www.contechnews.com)',
        Accept: 'application/json',
      },
      body: 'data=' + encodeURIComponent(buildConstructionQuery(bbox)),
    })
    if (!upstream.ok) throw new Error('overpass ' + upstream.status)
    const json = await upstream.json()
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800')
    res.status(200).json(normalizeConstruction(json))
  } catch (e) {
    res.status(200).json({ error: String(e.message || e), points: [] })
  }
}
