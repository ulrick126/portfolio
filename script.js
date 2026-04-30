const photos = [
  "assets/c__Users_uni_AppData_Roaming_Cursor_User_workspaceStorage_2afea92d850d166265320cd72457581a_images_WhatsApp_Image_2026-04-23_at_12.54.32-3c16fd39-e0d6-4b80-867d-a309eca3d3cc.png",
  "assets/c__Users_uni_AppData_Roaming_Cursor_User_workspaceStorage_2afea92d850d166265320cd72457581a_images_WhatsApp_Image_2026-04-23_at_12.53.01-fcb6a21d-eae4-46f2-a9d1-4e80c37c6914.png"
];

const cvPath = "file:///C:/Users/uni/AppData/Roaming/Cursor/User/workspaceStorage/2afea92d850d166265320cd72457581a/pdfs/d549caa4-9198-4400-8d73-b07a0696496c/CV-Mbajoun%20-%20Ingenieur%20test%20et%20validation.pdf";

let currentPhotoIndex = 0;

const heroPhoto = document.getElementById("hero-photo");
const cvLink = document.getElementById("cv-link");
const yearEl = document.getElementById("year");
const langButtons = document.querySelectorAll(".lang-switch__btn");
const navToggler = document.getElementById("navbar-toggler");
const topbarActions = document.querySelector(".topbar__actions");

const i18n = {
  fr: {
    htmlLang: "fr",
    pageTitle: "Portfolio - Ulrick Mbajoun Ngambe",
    metaDescription:
      "Portfolio de Ulrick Mbajoun Ngambe, ingénieur Test & Validation spécialisé en réseaux, systèmes embarqués, cybersécurité et qualité logicielle.",
    ogLocale: "fr_FR",
    ogDescription:
      "Ingénieur Test & Validation orienté fiabilité, performance et qualité des systèmes réseau et logiciels.",
    twitterDescription:
      "Ingénieur Test & Validation, expert en validation réseau, logiciels et systèmes embarqués.",
    jsonLdJobTitle: "Ingénieur Test & Validation",
    langSwitchAriaLabel: "Choix de langue",
    navToggleLabel: "Ouvrir le menu",
    navLabel: "Navigation principale",
    nav: ["À propos", "Compétences", "Expériences", "Formations", "Contact"],
    heroTag: "Ingénieur Test & Validation",
    heroSubtitle:
      "J'accompagne les équipes dans la validation de systèmes réseau et logiciels complexes, avec une approche orientée fiabilité, performance et qualité.",
    downloadCv: "Télécharger le CV",
    contactMe: "Me contacter",
    heroHighlights: [
      "<strong>7+ ans</strong> d'expérience internationale",
      "<strong>3 domaines</strong> clés : réseaux, embarqué, logiciel",
      "<strong>Objectif</strong>: mission Test/Validation en France"
    ],
    photoAlt: "Photo de Ulrick Mbajoun Ngambe",
    aboutTitle: "À propos",
    aboutText:
      "Ingénieur passionné par l'innovation technologique, je suis actuellement en recherche d'une opportunité en Test & Validation. J'interviens sur l'analyse de performances, la résolution d'anomalies et l'amélioration continue de la qualité des systèmes.",
    skillsTitle: "Compétences principales",
    skillsCards: [
      {
        title: "Intelligence artificielle",
        items: [
          "Machine Learning et Deep Learning",
          "Modèles prédictifs et détection d'anomalies",
          "Traitement et valorisation de données"
        ]
      },
      {
        title: "Réseaux et télécoms",
        items: [
          "LAN, WAN, Cloud Networking",
          "TCP/IP, UDP, VPN, Firewall, IDS/IPS",
          "Optimisation et virtualisation d'infrastructures"
        ]
      },
      {
        title: "Cybersécurité",
        items: [
          "Protection des données et des infrastructures",
          "Gestion et qualification des incidents",
          "Chiffrement, authentification et contrôle d'accès"
        ]
      },
      {
        title: "Systèmes embarqués",
        items: [
          "Développement sur Raspberry Pi, ARM, FPGA",
          "Automatisation et supervision de capteurs",
          "Bluetooth, Zigbee, WiFi"
        ]
      }
    ],
    techText:
      "Outils et langages : Python, C/C++, JavaScript, TensorFlow, Keras, Scikit-learn, Wireshark.",
    expTitle: "Expériences professionnelles",
    expCards: [
      {
        title: "Ingénieur Test et Validation - Setelia France (Stage)",
        items: [
          "Tests d'applications mobiles et STB (Bouygues Telecom)",
          "Validation en environnement live network",
          "Analyse de flux et résolution d'anomalies (ADB, XCode, Wireshark)"
        ]
      },
      {
        title: "Projet de surveillance environnementale embarquée",
        items: [
          "Conception d'un système sur Raspberry Pi",
          "Collecte temps réel : température, humidité, qualité de l'air"
        ]
      },
      {
        title: "Projet système embarqué multi-cœur Big Data",
        items: [
          "Optimisation du traitement parallèle sur architecture embarquée",
          "Mise en œuvre sur carte Zedboard"
        ]
      },
      {
        title: "Technicien maintenance électronique - Inter TV SARL",
        items: [
          "Maintenance préventive et corrective d'équipements électroniques",
          "Câblage, soudure, diagnostic de pannes et interventions terrain"
        ]
      }
    ],
    educationTitle: "Formations & certifications",
    educationItems: [
      "<strong>Google Cybersecurity Certificate</strong> - 2024/2025",
      "<strong>Ingénieur IA</strong> - ESEM, France (2023-2024)",
      "<strong>D.U. Start-ups Innovantes</strong> - Université Paris-Saclay (2020-2022)",
      "<strong>Master 2 Réseaux et Télécommunications</strong> - Université Paris-Saclay (2019-2020)",
      "<strong>Master 2 Systèmes Embarqués</strong> - Université Paris-Saclay (2017-2018)",
      "<strong>Master 2 Logiciels Embarqués</strong> - Université de Zhejiang, Chine (2014-2016)"
    ],
    languagesTitle: "Langues",
    languagesItems: [
      "Français : langue natale",
      "Anglais: courant",
      "Chinois: courant"
    ],
    contactTitle: "Contact",
    contactPhone: "Téléphone : 06 62 99 37 31",
    contactEmail: "Email: mbajoun@gmail.com",
    contactCountry: "Pays: France",
    footerSuffix: " - Portfolio v2"
  },
  en: {
    htmlLang: "en",
    pageTitle: "Portfolio - Ulrick Mbajoun Ngambe",
    metaDescription:
      "Portfolio of Ulrick Mbajoun Ngambe, Test & Validation engineer specialized in networks, embedded systems, cybersecurity, and software quality.",
    ogLocale: "en_US",
    ogDescription:
      "Test & Validation engineer focused on reliability, performance, and quality for network and software systems.",
    twitterDescription:
      "Test & Validation engineer with expertise in network, software, and embedded systems validation.",
    jsonLdJobTitle: "Test & Validation Engineer",
    langSwitchAriaLabel: "Language switch",
    navToggleLabel: "Open navigation menu",
    navLabel: "Main navigation",
    nav: ["About", "Skills", "Experience", "Education", "Contact"],
    heroTag: "Test & Validation Engineer",
    heroSubtitle:
      "I help teams validate complex network and software systems with a reliability-, performance-, and quality-driven approach.",
    downloadCv: "Download CV",
    contactMe: "Contact me",
    heroHighlights: [
      "<strong>7+ years</strong> of international experience",
      "<strong>3 core areas</strong>: network, embedded, software",
      "<strong>Goal</strong>: Test/Validation role in France"
    ],
    photoAlt: "Photo of Ulrick Mbajoun Ngambe",
    aboutTitle: "About",
    aboutText:
      "Engineer passionate about technological innovation, I am currently seeking a Test & Validation opportunity. I contribute to performance analysis, issue resolution, and continuous improvement of system quality.",
    skillsTitle: "Key skills",
    skillsCards: [
      {
        title: "Artificial intelligence",
        items: [
          "Machine Learning and Deep Learning",
          "Predictive models and anomaly detection",
          "Data processing and value extraction"
        ]
      },
      {
        title: "Networks and telecom",
        items: [
          "LAN, WAN, Cloud Networking",
          "TCP/IP, UDP, VPN, Firewall, IDS/IPS",
          "Infrastructure optimization and virtualization"
        ]
      },
      {
        title: "Cybersecurity",
        items: [
          "Data and infrastructure protection",
          "Incident management and qualification",
          "Encryption, authentication, and access control"
        ]
      },
      {
        title: "Embedded systems",
        items: [
          "Development on Raspberry Pi, ARM, FPGA",
          "Sensor automation and supervision",
          "Bluetooth, Zigbee, WiFi"
        ]
      }
    ],
    techText:
      "Tools and languages: Python, C/C++, JavaScript, TensorFlow, Keras, Scikit-learn, Wireshark.",
    expTitle: "Professional experience",
    expCards: [
      {
        title: "Test and Validation Engineer - Setelia France (Internship)",
        items: [
          "Mobile app and STB testing (Bouygues Telecom)",
          "Validation in live network environments",
          "Traffic analysis and issue resolution (ADB, XCode, Wireshark)"
        ]
      },
      {
        title: "Embedded environmental monitoring project",
        items: [
          "Designed a Raspberry Pi based system",
          "Real-time collection: temperature, humidity, air quality"
        ]
      },
      {
        title: "Multi-core embedded Big Data system project",
        items: [
          "Optimized parallel processing on embedded architecture",
          "Implemented on Zedboard"
        ]
      },
      {
        title: "Electronics Maintenance Technician - Inter TV SARL",
        items: [
          "Preventive and corrective maintenance of electronic equipment",
          "Wiring, soldering, troubleshooting, and on-site interventions"
        ]
      }
    ],
    educationTitle: "Education & certifications",
    educationItems: [
      "<strong>Google Cybersecurity Certificate</strong> - 2024/2025",
      "<strong>AI Engineer</strong> - ESEM, France (2023-2024)",
      "<strong>D.U. Innovative Startups</strong> - Paris-Saclay University (2020-2022)",
      "<strong>Master's in Networks and Telecommunications</strong> - Paris-Saclay University (2019-2020)",
      "<strong>Master's in Embedded Systems</strong> - Paris-Saclay University (2017-2018)",
      "<strong>Master's in Embedded Software</strong> - Zhejiang University, China (2014-2016)"
    ],
    languagesTitle: "Languages",
    languagesItems: [
      "French: native",
      "English: fluent",
      "Chinese: fluent"
    ],
    contactTitle: "Contact",
    contactPhone: "Phone: 06 62 99 37 31",
    contactEmail: "Email: mbajoun@gmail.com",
    contactCountry: "Country: France",
    footerSuffix: " - Portfolio v2"
  }
};

function detectLanguage() {
  const savedLanguage = localStorage.getItem("preferredLanguage");
  if (savedLanguage === "fr" || savedLanguage === "en") {
    return savedLanguage;
  }
  const browserLanguage = (navigator.language || "fr").toLowerCase();
  return browserLanguage.startsWith("fr") ? "fr" : "en";
}

function setMeta(name, value) {
  const element = document.querySelector(`meta[name="${name}"]`);
  if (element) {
    element.setAttribute("content", value);
  }
}

function setMetaProperty(property, value) {
  const element = document.querySelector(`meta[property="${property}"]`);
  if (element) {
    element.setAttribute("content", value);
  }
}

function applyLanguage(lang) {
  const t = i18n[lang] || i18n.fr;

  document.documentElement.lang = t.htmlLang;
  document.title = t.pageTitle;
  localStorage.setItem("preferredLanguage", lang);
  setMeta("description", t.metaDescription);
  setMetaProperty("og:locale", t.ogLocale);
  setMetaProperty("og:description", t.ogDescription);
  setMeta("twitter:description", t.twitterDescription);

  const jsonLdScript = document.querySelector('script[type="application/ld+json"]');
  if (jsonLdScript) {
    try {
      const jsonLdData = JSON.parse(jsonLdScript.textContent || "{}");
      jsonLdData.jobTitle = t.jsonLdJobTitle;
      jsonLdScript.textContent = JSON.stringify(jsonLdData, null, 2);
    } catch (error) {
      // Keep rendering even if JSON-LD is not parseable.
    }
  }

  const nav = document.querySelector(".menu");
  const navLinks = document.querySelectorAll(".menu a");
  const langSwitch = document.querySelector(".lang-switch");
  if (nav) {
    nav.setAttribute("aria-label", t.navLabel);
  }
  if (navToggler) {
    navToggler.setAttribute("aria-label", t.navToggleLabel || "Open navigation menu");
  }
  if (langSwitch) {
    langSwitch.setAttribute("aria-label", t.langSwitchAriaLabel || "Language switch");
  }
  navLinks.forEach((link, index) => {
    if (t.nav[index]) {
      link.textContent = t.nav[index];
    }
  });
  langButtons.forEach((button) => {
    const buttonLang = button.getAttribute("data-lang");
    const isActive = buttonLang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  const heroTag = document.querySelector(".hero__tag");
  const heroSubtitle = document.querySelector(".hero__subtitle");
  const ghostButton = document.querySelector(".btn--ghost");
  const heroHighlights = document.querySelectorAll(".hero__highlights li");
  if (heroTag) heroTag.textContent = t.heroTag;
  if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
  if (cvLink) cvLink.textContent = t.downloadCv;
  if (ghostButton) ghostButton.textContent = t.contactMe;
  heroHighlights.forEach((item, index) => {
    if (t.heroHighlights[index]) {
      item.innerHTML = t.heroHighlights[index];
    }
  });
  if (heroPhoto) {
    heroPhoto.alt = t.photoAlt;
  }

  const sections = document.querySelectorAll("main .panel");
  const aboutSection = sections[0];
  const skillsSection = sections[1];
  const experienceSection = sections[2];
  const educationSection = sections[3];
  const contactSection = sections[4];

  if (aboutSection) {
    const title = aboutSection.querySelector("h2");
    const text = aboutSection.querySelector("p");
    if (title) title.textContent = t.aboutTitle;
    if (text) text.textContent = t.aboutText;
  }

  if (skillsSection) {
    const title = skillsSection.querySelector("h2");
    const cards = skillsSection.querySelectorAll(".card");
    const tech = skillsSection.querySelector(".tech");
    if (title) title.textContent = t.skillsTitle;
    cards.forEach((card, cardIndex) => {
      const cardData = t.skillsCards[cardIndex];
      if (!cardData) return;
      const cardTitle = card.querySelector("h3");
      const cardItems = card.querySelectorAll("li");
      if (cardTitle) cardTitle.textContent = cardData.title;
      cardItems.forEach((item, itemIndex) => {
        if (cardData.items[itemIndex]) {
          item.textContent = cardData.items[itemIndex];
        }
      });
    });
    if (tech) tech.textContent = t.techText;
  }

  if (experienceSection) {
    const title = experienceSection.querySelector("h2");
    const cards = experienceSection.querySelectorAll(".timeline article");
    if (title) title.textContent = t.expTitle;
    cards.forEach((card, cardIndex) => {
      const cardData = t.expCards[cardIndex];
      if (!cardData) return;
      const cardTitle = card.querySelector("h3");
      const cardItems = card.querySelectorAll("li");
      if (cardTitle) cardTitle.textContent = cardData.title;
      cardItems.forEach((item, itemIndex) => {
        if (cardData.items[itemIndex]) {
          item.textContent = cardData.items[itemIndex];
        }
      });
    });
  }

  if (educationSection) {
    const title = educationSection.querySelector("h2");
    const items = educationSection.querySelectorAll(".list-plain li");
    if (title) title.textContent = t.educationTitle;
    items.forEach((item, index) => {
      if (t.educationItems[index]) {
        item.innerHTML = t.educationItems[index];
      }
    });
  }

  if (contactSection) {
    const columns = contactSection.querySelectorAll(":scope > div");
    const languageColumn = columns[0];
    const contactColumn = columns[1];
    if (languageColumn) {
      const title = languageColumn.querySelector("h2");
      const items = languageColumn.querySelectorAll("li");
      if (title) title.textContent = t.languagesTitle;
      items.forEach((item, index) => {
        if (t.languagesItems[index]) {
          item.textContent = t.languagesItems[index];
        }
      });
    }
    if (contactColumn) {
      const title = contactColumn.querySelector("h2");
      const items = contactColumn.querySelectorAll("li");
      if (title) title.textContent = t.contactTitle;
      if (items[0]) items[0].textContent = t.contactPhone;
      if (items[1]) items[1].textContent = t.contactEmail;
      if (items[2]) items[2].textContent = t.contactCountry;
    }
  }

  const footer = document.querySelector("footer p");
  if (footer) {
    footer.innerHTML = `© <span id="year"></span> Ulrick Mbajoun Ngambe${t.footerSuffix}`;
    const updatedYear = document.getElementById("year");
    if (updatedYear) {
      updatedYear.textContent = new Date().getFullYear();
    }
  }
}

function closeMobileMenu() {
  if (!navToggler || !topbarActions) return;
  navToggler.setAttribute("aria-expanded", "false");
  topbarActions.classList.remove("is-open");
}

if (heroPhoto) {
  heroPhoto.src = photos[currentPhotoIndex];
}

if (cvLink) {
  cvLink.href = cvPath;
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const initialLanguage = detectLanguage();
applyLanguage(initialLanguage);

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLanguage = button.getAttribute("data-lang");
    if (selectedLanguage === "fr" || selectedLanguage === "en") {
      applyLanguage(selectedLanguage);
    }
  });
});

if (navToggler && topbarActions) {
  navToggler.addEventListener("click", () => {
    const isExpanded = navToggler.getAttribute("aria-expanded") === "true";
    navToggler.setAttribute("aria-expanded", isExpanded ? "false" : "true");
    topbarActions.classList.toggle("is-open", !isExpanded);
  });

  const menuLinks = document.querySelectorAll(".menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 620) {
        closeMobileMenu();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 620) {
      closeMobileMenu();
    }
  });
}
