// Map dataset for ConTech News — construction sites rendered as multi-layer
// "lab" views (CAD plan / BIM model / Trimble field / LiDAR scan / 4D schedule).
// Sourced from the BEV map lab `contechConstruction` fixtures.
const mapData = {
  meta: {
    title: 'ConTech Build Map',
    subtitle:
      'Active construction sites as interactive lab views — toggle by build type and open a site to see its phase, footprint, and the render modes (CAD, BIM, Trimble field, LiDAR, 4D schedule) it supports.',
    accent: '#f59e0b',
    center: [-97.74, 30.27],
    zoom: 12,
    // Live: real OSM construction zones (site / vertical / transport) for the
    // viewport. Falls back to the flagship BIM/CAD seed sites below.
    endpoint: '/api/map/sites',
    attribution: 'Live construction zones © OpenStreetMap (ODbL); seed fixtures from the BEV map lab.',
  },
  categories: [
    { id: 'sports-infrastructure', label: 'Sports infrastructure', color: '#f59e0b', glyph: '🏟️' },
    { id: 'vertical-construction', label: 'Vertical construction', color: '#6366f1', glyph: '🏗️' },
    { id: 'transportation', label: 'Transportation', color: '#14b8a6', glyph: '🚆' },
    { id: 'mass-timber-campus', label: 'Mass-timber campus', color: '#84cc16', glyph: '🪵' },
  ],
  points: [
    {
      id: 'austin-smart-stadium',
      title: 'Austin Smart Stadium Retrofit',
      lat: 30.2836,
      lng: -97.7325,
      category: 'sports-infrastructure',
      blurb: 'A sports-infrastructure stadium retrofit in Austin, Texas in the coordination phase.',
      facts: {
        City: 'Austin, TX',
        Phase: 'coordination',
        Status: 'design-field-sync',
        Footprint: '18,600 m²',
        'Render modes': 'site-map, cad-plan, bim-model, trimble-field',
      },
    },
    {
      id: 'miami-resilience-tower',
      title: 'Miami Resilience Tower',
      lat: 25.7617,
      lng: -80.1918,
      category: 'vertical-construction',
      blurb: 'A coastal vertical-construction tower in Miami, Florida undergoing scan-to-BIM review.',
      facts: {
        City: 'Miami, FL',
        Phase: 'reality-capture',
        Status: 'scan-to-bim-review',
        Footprint: '9,200 m²',
        'Render modes': 'site-map, bim-model, lidar-scan, schedule-4d',
      },
    },
    {
      id: 'denver-rail-depot',
      title: 'Denver Rail Depot Modernization',
      lat: 39.753,
      lng: -104.9992,
      category: 'transportation',
      blurb: 'A transportation rail depot modernization in Denver, Colorado in active field layout.',
      facts: {
        City: 'Denver, CO',
        Phase: 'field-layout',
        Status: 'active-layout',
        Footprint: '24,100 m²',
        'Render modes': 'site-map, cad-plan, trimble-field, lidar-scan',
      },
    },
    {
      id: 'seattle-timber-campus',
      title: 'Seattle Timber Campus',
      lat: 47.608,
      lng: -122.3352,
      category: 'mass-timber-campus',
      blurb: 'A mass-timber campus in Seattle, Washington in prefab-install with issue review.',
      facts: {
        City: 'Seattle, WA',
        Phase: 'prefab-install',
        Status: 'issue-review',
        Footprint: '13,400 m²',
        'Render modes': 'site-map, bim-model, schedule-4d, lidar-scan',
      },
    },
  ],
}

export default mapData
