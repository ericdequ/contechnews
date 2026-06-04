// Generated from packages/blog-kit/src/projects.js. Run "node scripts/blogs.mjs sync-projects" after editing the global catalog.
const projectsData = [
  {
    "key": "quantum-construction-solutions",
    "title": "Quantum Construction Solutions",
    "description": "Helping Construction companies Migrate to cutting edge Technology Solutions",
    "url": "https://www.quantumcybersolutions.com/Construction",
    "imgSrc": "https://www.quantumcybersolutions.com/mine.png",
    "category": "construction",
    "tags": [
      "construction",
      "technology",
      "quantum-cyber-solutions"
    ],
    "ecosystemGroups": [
      "construction",
      "digital-twin",
      "infrastructure"
    ],
    "mapRequests": [
      {
        "id": "qcs-construction-sites",
        "datasetId": "contech:construction-sites",
        "label": "Construction site map",
        "status": "active",
        "relation": "uses",
        "groups": [
          "construction",
          "infrastructure",
          "digital-twin"
        ],
        "features": [
          "live-bbox-api",
          "seed-fixtures",
          "category-filters",
          "project-map-card",
          "construction-site-pois",
          "future-project-embed"
        ],
        "reason": "Use active construction POIs and build-tech categories for demos, posts, and future client-facing embedded maps.",
        "dataset": {
          "id": "contech:construction-sites",
          "title": "Construction Site POIs",
          "blog": "contechnews",
          "mapPath": "/map",
          "endpoint": "/api/map/sites",
          "status": "active",
          "provider": "OpenStreetMap Overpass",
          "source": "OSM construction zones with BEV map-lab seed fixtures",
          "groups": [
            "construction",
            "infrastructure",
            "digital-twin"
          ],
          "features": [
            "live-bbox-api",
            "seed-fixtures",
            "category-filters",
            "project-map-card"
          ]
        },
        "datasetTitle": "Construction Site POIs",
        "endpoint": "/api/map/sites",
        "blog": "contechnews",
        "mapPath": "/map",
        "mapUrl": "https://www.contechnews.com/map"
      }
    ]
  },
  {
    "key": "quantum-learning",
    "title": "Quantum Learning",
    "description": "A learning platform for students to learn about quantum computing and Other Computer Science topics",
    "url": "https://www.robotric.org/Classroom/",
    "imgSrc": "https://www.quantumcybersolutions.com/entanglement.webp",
    "category": "education",
    "tags": [
      "learning",
      "quantum",
      "computer-science"
    ],
    "ecosystemGroups": [
      "education",
      "tst",
      "interactive-lessons"
    ]
  },
  {
    "key": "robot-ric",
    "title": "Robot Ric",
    "description": "My Book Series about a robot who learns about the world and humanity",
    "url": "https://robotric.org/",
    "imgSrc": "https://robotric.org/lp.webp",
    "category": "story",
    "tags": [
      "robotric",
      "books",
      "story"
    ],
    "ecosystemGroups": [
      "robotric",
      "story-geography",
      "education"
    ],
    "mapRequests": [
      {
        "id": "robotric-story-places",
        "datasetId": "robotric:story-places",
        "label": "Story place anchors",
        "status": "requested",
        "relation": "requests",
        "groups": [
          "robotric",
          "story-geography",
          "education"
        ],
        "features": [
          "api-request-needed",
          "story-place-grounding",
          "tst-records",
          "future-map-layer"
        ],
        "reason": "Create a reusable story/location API so Robotric stories can ground places, realms, lessons, and map embeds.",
        "dataset": {
          "id": "robotric:story-places",
          "title": "Robotric Story Places",
          "blog": "",
          "mapPath": "",
          "endpoint": "",
          "status": "requested",
          "provider": "Robotric story/location API requested",
          "source": "Future story, project, and worldbuilding place anchors",
          "groups": [
            "robotric",
            "story-geography",
            "education"
          ],
          "features": [
            "api-request-needed",
            "story-place-grounding",
            "tst-records"
          ]
        },
        "datasetTitle": "Robotric Story Places",
        "endpoint": "",
        "blog": "",
        "mapPath": "",
        "mapUrl": ""
      }
    ]
  },
  {
    "key": "bev",
    "title": "Bev",
    "description": "A Bar Discovery App that helps you find the perfect Place To drink with Friends!",
    "url": "https://www.bev.cool",
    "imgSrc": "https://www.bev.cool/BEV.svg",
    "category": "app",
    "tags": [
      "bars",
      "local-discovery",
      "social"
    ],
    "ecosystemGroups": [
      "bev",
      "local-discovery",
      "social-places"
    ],
    "mapRequests": [
      {
        "id": "bev-venue-pois",
        "datasetId": "bev:venue-pois",
        "label": "Venue POI API",
        "status": "requested",
        "relation": "requests",
        "groups": [
          "bev",
          "local-discovery",
          "social-places"
        ],
        "features": [
          "api-request-needed",
          "venue-clustering",
          "place-reviews",
          "safe-social-routing",
          "reviews",
          "rss-place-feed"
        ],
        "reason": "Create the canonical venue/place API that BEV and the blogs can reuse for nightlife, local discovery, and social place posts.",
        "dataset": {
          "id": "bev:venue-pois",
          "title": "BEV Venue POIs",
          "blog": "",
          "mapPath": "",
          "endpoint": "",
          "status": "requested",
          "provider": "BEV + OpenStreetMap venue provider requested",
          "source": "Future bar, nightlife, restaurant, and local social venue data",
          "groups": [
            "bev",
            "local-discovery",
            "social-places"
          ],
          "features": [
            "api-request-needed",
            "venue-clustering",
            "place-reviews",
            "safe-social-routing"
          ]
        },
        "datasetTitle": "BEV Venue POIs",
        "endpoint": "",
        "blog": "",
        "mapPath": "",
        "mapUrl": ""
      }
    ]
  },
  {
    "key": "legelet",
    "title": "Legelet",
    "description": "A platform that connects legal professionals with clients seeking legal services, providing a seamless experience for both parties.",
    "url": "https://www.leopiolet.com/",
    "imgSrc": "https://www.leopiolet.com/TTP.png",
    "category": "legal",
    "tags": [
      "legal",
      "marketplace",
      "services"
    ]
  }
]

export default projectsData
