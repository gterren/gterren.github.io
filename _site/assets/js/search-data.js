// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-we-will-be-presenting-at-the-2025-forecasting-amp-amp-markets-workshop-organized-by-esig-in-nashville-tn-find-us-in-session-4a-advancements-in-forecasting-from-ders-and-data-centers-to-new-methods-for-wind-and-solar-forecasting-on-the-jan-26-sessions",
          title: 'We will be presenting at the 2025 Forecasting &amp;amp;amp; Markets Workshop organized by...',
          description: "",
          section: "News",},{id: "news-our-new-manuscript-is-available-online-you-can-read-extreme-day-ahead-renewables-scenario-selection-in-power-grid-operations-in-applied-energy",
          title: 'Our new manuscript is available online! You can read Extreme day-ahead renewables scenario...',
          description: "",
          section: "News",},{id: "news-we-have-a-new-preprint-you-can-read-joint-probabilistic-day-ahead-energy-forecast-for-power-system-operations-online",
          title: 'We have a new preprint. You can read Joint Probabilistic Day-Ahead Energy Forecast...',
          description: "",
          section: "News",},{id: "news-we-released-gridpath-india-a-capacity-expansion-and-production-cost-model-of-the-indian-electricity-system-it-is-based-on-gridpath-an-open-source-power-flow-modeling-platform-for-python-you-can-now-download-it-from-our-dryad-repository-gridpath-india-long-term-2020-2050-power-system-planning-model-data",
          title: 'We released GridPath-India! A capacity expansion and production cost model of the Indian...',
          description: "",
          section: "News",},{id: "news-our-new-manuscript-probabilistic-day-ahead-forecasting-of-system-level-renewable-energy-and-electricity-demand-is-now-online-you-can-read-it-in-nature-communications",
          title: 'Our new manuscript Probabilistic day-ahead forecasting of system-level renewable energy and electricity demand...',
          description: "",
          section: "News",},{id: "news-we-will-be-presenting-a-poster-in-the-next-2026-mes-workshop-at-the-georgia-institute-of-technology-in-atlanta-august-13-14",
          title: 'We will be presenting a poster in the next 2026 MES Workshop at...',
          description: "",
          section: "News",},{id: "news-we-will-also-be-presenting-a-poster-at-the-powerup-2026-conference-happening-at-the-university-of-colorado-boulder-on-september-9-11",
          title: 'We will also be presenting a poster at the PowerUp 2026 conference happening...',
          description: "",
          section: "News",},{id: "news-our-new-manuscript-affordable-low-carbon-electricity-pathways-for-india-under-uncertainty-is-available-on-arxiv-org-as-a-preprint",
          title: 'Our new manuscript Affordable low-carbon electricity pathways for India under uncertainty is available...',
          description: "",
          section: "News",},{id: "projects-energy-transition",
          title: 'Energy Transition',
          description: "Towards a robust integrated resource planning framework for low-carbon electricity systems operating under uncertainty in demand growth, technology costs, and weather-dependent generation. This research integrates capacity expansion planning, production cost simulation, planning reserve margin estimation, capacity credit evaluation, and resource adequacy assessment to characterize how investment and operational decisions jointly shape power system reliability.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-day-ahead-scheduling-and-operating-reserves",
          title: 'Day-ahead scheduling and operating reserves',
          description: "Improving probabilistic day-ahead energy forecasts by integrating numerical weather predictions with AI/ML models, and reducing the computational complexity of stochastic unit commitment and economic dispatch models through scenario selection, thereby mitigating the risks of energy curtailment, load shedding, and electricity price volatility. The goal is to dynamically determine operating reserve requirements by quantifying forecast uncertainty, thereby supporting ancillary service procurement and headroom allocation in unit commitment decisions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-energy-meteorology",
          title: 'Energy Meteorology',
          description: "Fusing information from multispectral sky imagers and weather sensors using computer vision and AI/ML models to improve solar generation nowcasting and coordinate real-time frequency response under cloud-driven irradiance variability. Rapid solar ramps caused by passing clouds create power imbalances that challenge grid reliability. This research develops sensing and forecasting technologies that provide decision support during solar ramps, enabling more efficient deployment of balancing reserves and frequency response resources.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%75%69%6C%6C%65%72%6D%6F%74%65%72%72%65%6E@%75%63%73%62.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/gterren", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/guillermo-terren-serrano-41136359", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-8688-2299", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=LSVOuPQAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://emlab.ucsb.edu/about/our-team/guillermo-terren-serrano", "_blank");
        },
      },{
        id: 'social-custom_social_1',
        title: 'Custom_social_1',
        section: 'Socials',
        handler: () => {
          window.open("https://cetlab.es.ucsb.edu/people/guillermo-terr%C3%A9n-serrano", "_blank");
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
