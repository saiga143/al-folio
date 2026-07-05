// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Research and academic projects spanning geospatial science, urban sustainability, civil engineering, and more.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Journal articles, conference proceedings, and theses on geospatial science, urban informality, coastal management, and Earth observation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching and instructional contributions at Karlstad University.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-travel",
              title: "travel",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/hobbies/travel/";
              },
            },{id: "dropdown-gaming",
              title: "gaming",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://www.youtube.com/@hoomangunny";
              },
            },{id: "post-from-forest-to-pit-a-decade-of-mining-in-hasdeo-arand",
        
          title: "From Forest to Pit: A Decade of Mining in Hasdeo Arand",
        
        description: "A satellite-based spatial analysis of a decade of coal mining and forest loss in the Hasdeo Arand coalfield, Chhattisgarh, India.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/hasdeoarand/";
          
        },
      },{id: "post-mapping-kerala-39-s-coastal-defences-from-field-survey-to-shoreline-management-plans",
        
          title: "Mapping Kerala&#39;s Coastal Defences: From Field Survey to Shoreline Management Plans",
        
        description: "How a team of ten scientists surveyed over 1,200 coastal protection structures across Kerala&#39;s 600 km coastline and shaped the state&#39;s first Shoreline Management Plan.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/kerala-structures/";
          
        },
      },{id: "post-the-erosion-of-rushikonda-39-s-legacy-a-hill-that-paid-the-price-for-power",
        
          title: "The Erosion of Rushikonda&#39;s Legacy: A Hill that Paid the Price for Power...",
        
        description: "How satellite imagery exposed the destruction of a pristine coastal hill in Visakhapatnam and the green mats used to hide it.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/rushikonda/";
          
        },
      },{id: "post-thengaipattinam-harbour-waves-walls-and-the-stories-they-tell",
        
          title: "Thengaipattinam Harbour: Waves, Walls and the Stories They Tell",
        
        description: "How a fishing harbour on Tamil Nadu&#39;s southwestern coast is locked in a battle against some of India&#39;s most powerful waves and what it means for the 400 families caught between the sea and a river.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/thengaipattinam-harbour/";
          
        },
      },{id: "post-between-the-waves-personal-observations-on-kerala-39-s-coastal-infrastructure-developments",
        
          title: "Between the Waves: Personal Observations on Kerala&#39;s Coastal Infrastructure Developments",
        
        description: "Personal field observations and satellite imagery analysis of the Vizhinjam International Seaport and Muthalapozhi Harbour, exploring the tensions between large-scale coastal development and local fishing communities.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/kerala-vizhinjam-port/";
          
        },
      },{id: "post-madras-crocodile-bank-trust-amp-the-irula-snake-catcher-39-s-society",
        
          title: "Madras Crocodile Bank Trust &amp; the Irula Snake Catcher&#39;s Society",
        
        description: "How the Madras Crocodile Bank Trust and the Irula Snake Catchers Cooperative Society are tackling India&#39;s most overlooked health crisis — snakebite — through community-led venom collection, antivenom production, and conservation.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/mcbt/";
          
        },
      },{id: "post-plant-trees-to-fight-climate-change",
        
          title: "Plant Trees to Fight Climate Change",
        
        description: "How Telangana&#39;s Telanganaku Harita Haram programme — targeting 2.3 billion tree plantations is tackling deadly heatwaves and declining green cover, and why other states should follow suit.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/plant-trees-to-fight-climate-change/";
          
        },
      },{id: "post-circular-cities-a-way-forward-for-building-sustainable-and-climate-resilient-future-cities-of-asia",
        
          title: "Circular Cities: A Way Forward for Building Sustainable and Climate-Resilient Future Cities of...",
        
        description: "How the concept of circular cities rooted in reducing waste, extending asset lifetimes, and closing resource loops can help Asia&#39;s rapidly growing megacities become sustainable and climate-resilient, with case studies from Kolkata, Tokyo, and Hong Kong.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/circular-cities/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-to-humble-beginnings-of-my-professional-career",
          title: 'To humble beginnings of my professional career',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-12-02-wii-joining/";
            },},{id: "news-my-last-day-at-wildlife-institute-of-india-bh-lab",
          title: 'My last day at Wildlife Institute of India, BH Lab',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-07-31-wii-lastday/";
            },},{id: "news-joining-at-project-scientist-i-at-national-centre-for-coastal-research",
          title: 'Joining at Project Scientist I at National Centre for Coastal Research',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-08-13-nccr-joining/";
            },},{id: "news-start-of-a-month-long-kerala-fieldwork",
          title: 'Start of a month long Kerala fieldwork',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-10-13-kerala-fieldworkstart/";
            },},{id: "news-happy-to-share-my-first-scientific-research-publication",
          title: 'Happy to share my first scientific research publication',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-11-02-masterthesis-publication/";
            },},{id: "news-presenting-research-at-8th-geoinformation-science-symposium-indonesia",
          title: 'Presenting research at 8th Geoinformation Science Symposium, Indonesia',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-08-30-8thgeoinfo-conf/";
            },},{id: "news-presenting-research-at-indian-geophysical-union-39-s-igu-diamond-jubilee-convention-focused-on-coastal-hazards",
          title: 'Presenting research at Indian Geophysical Union&amp;#39;s (IGU) Diamond Jubilee Convention focused on Coastal...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-11-23-iguconference/";
            },},{id: "news-stakeholder-meeting-on-ecosystem-services-of-coringa-mangroves-in-andhra-pradesh",
          title: 'Stakeholder meeting on ecosystem services of Coringa Mangroves in Andhra Pradesh',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-11-30-coringameeting/";
            },},{id: "news-conducted-drone-survey-at-coringa-mangroves-andhra-pradesh",
          title: 'Conducted Drone Survey at Coringa Mangroves, Andhra Pradesh',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-12-02-coringadronesurvey/";
            },},{id: "news-presenting-research-at-ingarss-2023-conference-banglore-india",
          title: 'Presenting research at InGARSS 2023 Conference, Banglore, India',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-12-15-ingarss2023/";
            },},{id: "news-three-papers-published-as-full-length-articles-in-spie-proceedings",
          title: 'Three papers published as full-length articles in SPIE Proceedings',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-01-29-spieproceedings/";
            },},{id: "news-paper-published-in-ieeexplore-uav-based-topographic-survey-of-inaccessible-remote-terrains",
          title: 'Paper published in IEEExplore - UAV based Topographic Survey of Inaccessible Remote Terrains...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-04-09-ingarsspublication/";
            },},{id: "news-bidding-farewell-to-national-centre-for-coastal-research",
          title: 'Bidding farewell to National Centre for Coastal Research',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-07-29-nccr-lastday/";
            },},{id: "news-starting-my-phd-at-karlstad-university-sweden",
          title: 'Starting my PhD at Karlstad University, Sweden',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-08-15-kaujoining/";
            },},{id: "news-thrilled-to-launch-the-deprimap-project-website-where-you-can-explore-our-work-on-mapping-and-modelling-deprived-urban-areas-duas-using-advanced-earth-observation-geospatial-data-and-machine-learning-techniques-link-to-website",
          title: 'Thrilled to launch the DEPRIMAP project website, where you can explore our work...',
          description: "",
          section: "News",},{id: "news-amazing-experience-attending-one-week-long-crs-writing-retreat",
          title: 'Amazing experience attending one-week long CRS Writing Retreat',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-10-15-crs-writingretreat/";
            },},{id: "news-i-had-the-opportunity-to-attend-the-crs-symposium-sustainability-under-negotiation-read-my-full-reflection-here",
          title: 'I had the opportunity to attend the CRS Symposium ‘Sustainability under negotiation’. Read...',
          description: "",
          section: "News",},{id: "news-delivering-my-first-ever-lecture-on-uavs-and-their-applications",
          title: 'Delivering my first-ever lecture on UAVs and their applications.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-12-12-uavlecture/";
            },},{id: "news-sudden-demise-of-mr-satya-kiran-raju-alluri-paying-tribute",
          title: 'Sudden demise of Mr. Satya Kiran Raju Alluri. Paying tribute',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-01-27-rajudemise/";
            },},{id: "news-paper-published-in-ocean-amp-amp-coastal-management-integrating-coastal-protection-structures-into-vulnerability-assessments-a-case-study-from-kerala-india-check-it-out-here",
          title: 'Paper published in Ocean &amp;amp;amp; Coastal Management. “Integrating coastal protection structures into vulnerability...',
          description: "",
          section: "News",},{id: "news-very-happy-to-be-part-of-neogeo-research-lab-and-build-it-together-with-its-incredible-researchers-link-to-full-details-here",
          title: 'Very happy to be part of NEOGEO Research Lab and build it together...',
          description: "",
          section: "News",},{id: "news-my-research-titled-towards-a-spatial-measure-of-sdg-11-1-1-open-data-for-urban-deprivation-mapping-presented-at-ieee-jurse-2025-in-tunisia-tunis-read-the-full-details-here",
          title: 'My research titled ‘Towards a Spatial Measure of SDG 11.1.1: Open Data for...',
          description: "",
          section: "News",},{id: "news-fun-and-rewarding-experience-teaching-and-conducting-practical-sessions-on-drones-as-well-as-supervising-student-projects-in-the-course-read-full-details-here",
          title: 'Fun and rewarding experience teaching and conducting practical sessions on drones as well...',
          description: "",
          section: "News",},{id: "news-engaging-sessions-at-the-earsel-2025-symposium-in-prague",
          title: 'Engaging sessions at the EARSeL 2025 Symposium in Prague',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-02-earsel2025/";
            },},{id: "news-reflections-from-the-esa-living-planet-symposium-2025",
          title: 'Reflections from the ESA Living Planet Symposium 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-30-lps2025/";
            },},{id: "news-wrote-a-blog-on-scalable-downloads-of-google-s-2-5d-building-dataset-read-it-here",
          title: 'Wrote a blog on scalable downloads of Google’s 2.5D Building Dataset. Read it...',
          description: "",
          section: "News",},{id: "news-wrote-a-blog-on-how-to-use-telegram-bot-to-notify-when-your-jupyternotebook-finishes-running-code-read-it-here",
          title: 'Wrote a blog on how to use Telegram bot to notify when your...',
          description: "",
          section: "News",},{id: "news-paper-published-in-ieeexplore-towards-a-spatial-measure-of-sdg-11-1-1-open-data-for-urban-deprivation-mapping-check-it-out-here",
          title: 'Paper published in IEEExplore. “Towards a Spatial Measure of SDG 11.1.1: Open Data...',
          description: "",
          section: "News",},{id: "news-wrote-a-blog-on-accessing-google-buildings-v3-dataset-efficiently-read-it-here",
          title: 'Wrote a blog on accessing Google buildings v3 dataset efficiently. Read it here....',
          description: "",
          section: "News",},{id: "news-paper-published-in-journal-of-coastal-conservation-statewide-field-assessment-of-coastal-protection-structures-in-kerala-india-structural-and-functional-insights-check-it-out-here",
          title: 'Paper published in Journal of Coastal Conservation. “Statewide field assessment of coastal protection...',
          description: "",
          section: "News",},{id: "news-happy-to-share-news-about-the-new-project-dyn4eoslums-space-time-dynamics-of-slums-and-vulnerable-communities-exposed-to-multiple-hazards-a-two-year-research-project-funded-by-belspo-belgian-science-policy-office-read-full-details-here",
          title: 'Happy to share news about the new project Dyn4EOSLUMS: Space-time dynamics of slums...',
          description: "",
          section: "News",},{id: "news-poster-presentation-at-flood-risk-sweden-conference",
          title: 'Poster presentation at Flood Risk Sweden Conference',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-10-09-floodrisksweden/";
            },},{id: "news-attended-two-day-short-course-on-artificial-intelligence-for-environmental-data-organized-by-climes-swedish-centre-for-impacts-of-climate-extremes-read-full-details-here",
          title: 'Attended two-day short course on ‘Artificial Intelligence for Environmental Data’ organized by Climes...',
          description: "",
          section: "News",},{id: "news-paper-published-in-discover-cities-satellite-monitoring-for-post-clearance-accountability-lessons-from-rushikonda-hill-check-it-out-here",
          title: 'Paper published in Discover Cities. “Satellite monitoring for post-clearance accountability: lessons from Rushikonda...',
          description: "",
          section: "News",},{id: "news-i-am-happy-to-share-the-preprint-of-our-latest-research-the-hidden-burden-of-morphological-deprivation-is-small-and-medium-cities-currently-under-review-at-nature-cities-read-full-details-here",
          title: 'I am happy to share the preprint of our latest research: ‘The Hidden...',
          description: "",
          section: "News",},{id: "news-my-phd-research-highlighted-at-human-planet-forum-2025",
          title: 'My PhD research highlighted at Human Planet Forum 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-12-20-humanplanetforum2025/";
            },},{id: "news-happy-to-share-news-about-the-new-project-sesac-swedish-competence-centre-for-satellite-enabled-social-science-analytics-the-mission-is-to-dissovle-the-traditional-boundaries-between-advanced-earth-observation-eo-technology-and-social-science-research-read-full-details-here",
          title: 'Happy to share news about the new project SESAC: Swedish Competence Centre for...',
          description: "",
          section: "News",},{id: "news-my-phd-work-highlighted-at-sesac-launch-event",
          title: 'My PhD work highlighted at SESAC Launch Event',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-10-sesaclaunch/";
            },},{id: "news-exciting-and-inspiring-week-at-the-ellis-winter-school-2026-in-athens-greece",
          title: 'Exciting and inspiring week at the ELLIS Winter School 2026 in Athens, Greece...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-25-elliswinterschool2026/";
            },},{id: "news-my-phd-research-got-featured-in-climate-ai-nordics-newsletter-and-also-as-a-featured-project-in-their-website-take-a-look-here",
          title: 'My PhD Research got featured in Climate AI Nordics Newsletter and also as...',
          description: "",
          section: "News",},{id: "news-my-phd-work-presented-in-sesac-open-session-1",
          title: 'My PhD work presented in SESAC Open Session 1',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-04-01-sesacos1/";
            },},{id: "news-the-dyneo4slums-project-successfully-held-its-first-steering-committee-meeting-in-brussels-at-ulb-it-was-so-good-to-meet-the-team-in-person-in-the-beautiful-city-of-brussels-the-steering-commitee-was-very-encouraging-of-the-work-done-and-provided-valubale-feedback-on-the-project-s-progress-read-full-details-here",
          title: 'The DynEO4SLUMS project successfully held its first Steering Committee meeting in Brussels at...',
          description: "",
          section: "News",},{id: "news-visited-faculty-of-geo-information-science-and-earth-observation-itc-of-the-university-of-twente-and-the-city-of-enschede-after-6-years-this-time-as-an-alumnus-and-in-the-new-campus-read-full-reflection-here",
          title: 'Visited Faculty of Geo-Information Science and Earth Observation (ITC) of the University of...',
          description: "",
          section: "News",},{id: "news-visited-lund-university-for-a-sesac-meeting-and-strategic-planning-sessions-we-kickedoff-hackathon-planning-with-two-industry-partners-read-the-full-deatils-here-also-attended-the-inauguration-of-hägestrand-lab-read-full-details-here",
          title: 'Visited Lund University for a SESAC meeting and strategic planning sessions. We kickedoff...',
          description: "",
          section: "News",},{id: "news-paper-published-in-applied-geomatics-a-mobile-gis-framework-for-in-situ-measurement-of-coastal-defence-conditions",
          title: 'Paper published in Applied Geomatics. A mobile GIS framework for in-situ measurement of...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-05-26-geomaticspublication/";
            },},{id: "news-paper-published-in-discover-sustainability-multi-temporal-satellite-mapping-of-coal-mine-expansion-and-forest-loss-in-the-hasdeo-arand-forest-india",
          title: 'Paper published in Discover Sustainability. Multi-temporal satellite mapping of coal mine expansion and...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-05-31-hasdeopublication/";
            },},{id: "news-participated-in-a-hackathon-in-stockholm-to-detect-forest-storm-damages",
          title: 'Participated in a hackathon in Stockholm to detect forest storm damages',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-06-15-deshackathon2026/";
            },},{id: "news-presented-sesac-at-climate-ai-nordics-2026-workshop-in-copenhagen-denmark",
          title: 'Presented SESAC at Climate AI Nordics 2026 workshop in Copenhagen, Denmark',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-01-sesac-cain2026/";
            },},{id: "news-presented-my-ongoing-phd-research-at-climate-ai-nordics-2026-workshop-in-denmark",
          title: 'Presented my ongoing PhD research at Climate AI Nordics 2026 Workshop in Denmark...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-02-cain2026/";
            },},{id: "projects-analysis-of-urban-heat-island-uhi-effect-in-ahmedabad-india-city",
          title: 'Analysis of Urban Heat Island (UHI) effect in Ahmedabad, India city',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AhmedabadUHI/";
            },},{id: "projects-design-of-a-5-storey-building-consisting-of-rcc-structure-with-masonry-infills",
          title: 'Design of a 5-storey building consisting of RCC structure with masonry infills',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/BachelorsCivilProject/";
            },},{id: "projects-deprimap",
          title: 'DEPRIMAP',
          description: "Unraveling the dynamics of deprived urban areas in the Majority World using AI and Earth Observation to foster evidence-based sustainable planning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DEPRIMAP/";
            },},{id: "projects-field-survery-project-at-harrapan-civilization-site-dholavira",
          title: 'Field survery project at Harrapan Civilization site Dholavira',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Dholavirasurvey/";
            },},{id: "projects-dyneo4slums",
          title: 'DynEO4SLUMS',
          description: "Space-time dynamics of slums and vulnerable communities exposed to multiple hazards",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DynEO4SLUMS/";
            },},{id: "projects-review-of-energy-efficient-technologies-for-control-of-emerging-pollutants-in-water-bodies",
          title: 'Review of energy efficient technologies for control of emerging pollutants in water bodies...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Emergingpollutants/";
            },},{id: "projects-freight-transport-analysis-amp-geo-visualization",
          title: 'Freight Transport analysis  &amp;amp; (geo)visualization',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Geovisualization/";
            },},{id: "projects-urban-sprawling-analysis-of-hyderabad-an-indian-city",
          title: 'Urban sprawling analysis of Hyderabad, an Indian city',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Hyderabadurbansprawl/";
            },},{id: "projects-modeling-urban-growth-scenarios-and-risk-assessment-for-envigado-aburra-valley-colombia",
          title: 'Modeling Urban Growth Scenarios and Risk assessment for Envigado, Aburra Valley, Colombia',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MastersProject1/";
            },},{id: "projects-assessing-the-solar-energy-production-through-rooftop-solar-installations-in-enschede-the-netherlands",
          title: 'Assessing the solar energy production through rooftop solar installations in Enschede, The Netherlands...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MastersProject2/";
            },},{id: "projects-assessing-sustainability-of-the-city-of-enschede-using-a-list-of-indicators-built-on-basis-of-a-sustainable-development-framework",
          title: 'Assessing sustainability of the city of Enschede using a list of indicators built...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MastersProject3/";
            },},{id: "projects-selection-of-suitable-solid-waste-disposal-site-for-the-municipality-of-chinchina-colombia",
          title: 'Selection of suitable solid waste disposal site for the municipality of Chinchina, Colombia...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MastersProject4/";
            },},{id: "projects-influence-of-urbanization-of-a-city-on-its-vegetated-area-case-study-on-the-city-of-enschede-the-netherlands",
          title: 'Influence of urbanization of a city on its vegetated area. Case study on...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MastersProject5/";
            },},{id: "projects-the-land-where-displaced-people-settle",
          title: 'The land where displaced people settle',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Nasaspaceappschallenge2018/";
            },},{id: "projects-mapping-technology-and-society-a-case-study-of-palaj-village-gujarat-india",
          title: 'Mapping Technology and Society - A case study of Palaj village, Gujarat, India...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Palajproject/";
            },},{id: "projects-sesac",
          title: 'SESAC',
          description: "Swedish Competence Centre for Satellite-Enabled Social Science Analytics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SESAC/";
            },},{id: "projects-how-is-tourism-affected-by-the-bifurcation-of-states-a-story-of-andhra-pradesh-and-telangana",
          title: 'How is tourism affected by the bifurcation of states? A story of Andhra...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/TourismProject/";
            },},{id: "projects-designing-a-drinking-water-treatment-plan-for-an-institute",
          title: 'Designing a drinking water treatment plan for an institute',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Watertreatmentplant/";
            },},{id: "projects-experimental-studies-on-properties-of-concrete-mixed-with-iron-ore-tailings-and-copper-slag",
          title: 'Experimental studies on properties of concrete mixed with iron ore tailings and copper...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/concreteproject/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/SGVeeravalli_CV_Nov2025.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%61%69.%76%65%65%72%61%76%61%6C%6C%69@%6B%61%75.%73%65", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qfnIdjQAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/saiga143", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/saiganeshveeravalli", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-1670-8703", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Sai-Veeravalli/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
