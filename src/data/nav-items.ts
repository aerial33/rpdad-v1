export const navItems = [
  {
    label: "Accueil",
    path: "/",
  },
  {
    label: "Blog",
    path: "/posts",
  },
  {
    label: "Framer Motion",
    path: "/framer-motion",
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
        title: "Produits Vedettes",
        items: [
          {
            label: "Tailwind Master Kit",
            description: "Composants prêts pour la production",
            href: "/produits/tailwind",
            src: "https://assets.aceternity.com/demos/tailwindmasterkit.webp",
          },
          {
            label: "Moonbeam",
            description: "Création de contenu par IA",
            href: "/produits/moonbeam",
            src: "https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png",
          },
        ],
      },
      {
        title: "Services",
        items: [
          {
            label: "Développement Web",
            description: "Solutions web personnalisées",
            href: "/services/dev-web",
          },
          {
            label: "Design d'Interface",
            description: "Design UI/UX élégant",
            href: "/services/design",
          },
          {
            label: "Optimisation SEO",
            description: "Améliorez votre visibilité",
            href: "/services/seo",
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
        title: "Pour les Équipes",
        items: [
          {
            label: "Entreprise",
            description: "Pour les grandes organisations",
            href: "/solutions/entreprise",
          },
          {
            label: "Startups",
            description: "Pour les entreprises en croissance",
            href: "/solutions/startups",
          },
        ],
      },
      {
        title: "Par Industrie",
        items: [
          {
            label: "E-commerce",
            description: "Solutions pour la vente en ligne",
            href: "/industries/ecommerce",
          },
          {
            label: "Santé",
            description: "Services médicaux et de santé",
            href: "/industries/sante",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Actualités",
    link: "/posts",
  },
  {
    id: 5,
    label: "Services membres",
    link: "/framer-motion",
  },
]
