export const navItems = [
  {
    label: "Accueil",
    path: "/",
  },
  {
    label: "Actualités",
    path: "/actualites",
  },
  {
    label: "Services",
    path: "/services",
    subMenus: [
      {
        title: "Services",
        items: [
          {
            label: "Aide à la personne",
            description: "Aide aux personnes âgées en perte d’autonomie.",
            href: "/services/aide-a-la-personne",
          },
          {
            label: "Aide handicap",
            description: "Aide pour les personnes en situation de handicap",
            href: "/services/aide-handicap",
          },
          {
            label: "Autres services",
            description: "Améliorez votre visibilité",
            href: "/services/autres-services",
          },
        ],
      },
    ],
  },
  {
    label: "Contact",
    path: "/contact",
  },
]

export const megaNavItems = [
  {
    id: 1,
    label: "Accueil",
    link: "/",
  },
  {
    id: 2,
    label: "Services",
    subMenus: [
      {
        title: "Informations pratiques",
        items: [
          {
            label: "Accès au RPDAD",
            description: "Accès au RPDAD",
            href: "/services/",
            src: "https://assets.aceternity.com/demos/tailwindmasterkit.webp",
          },
          {
            label: "Offres d'emploi",
            description: "Offres d'emploi",
            href: "/offres-emploi/",
            src: "https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png",
          },
        ],
      },
      {
        title: "Services",
        items: [
          {
            label: "Aide à la personne",
            description: "Aide aux personnes âgées en perte d’autonomie.",
            href: "/services/aide-a-la-personne",
          },
          {
            label: "Aide handicap",
            description: "Aide pour les personnes en situation de handicap",
            href: "/services/aide-handicap",
          },
          {
            label: "Autres services",
            description: "Améliorez votre visibilité",
            href: "/services/autres-services",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Le RPDAD",
    subMenus: [
      {
        title: "Nos Équipes",
        items: [
          {
            label: "Présentation",
            description: "Présentation du RPDAD",
            href: "/le-rpdad/presentation",
          },
          {
            label: "Nos Partenaires",
            description: "Nos partenaires",
            href: "/le-rpdad/nos-partenaires",
          },
        ],
      },
      {
        title: "Par Secteur",
        items: [
          {
            label: "Les Interventions",
            description: "Les interventions du RPDAD",
            href: "/le-rpdad/les-interventions",
          },
          {
            label: "L'Administration des Services",
            description: "L'administration des services du RPDAD",
            href: "/le-rpdad/l-administration-des-services",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Actualités",
    link: "/actualites",
  },
  {
    id: 5,
    label: "Services membres",
    link: "/services-membres",
  },
]
