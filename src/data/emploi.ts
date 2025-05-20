interface Emploi {
  id: string
  titre: string
  contrat: string
  temps: string
  service: string
  description: string[]
  profil?: string
  avantages?: string
  annonce?: string
  url?: string
  image?: string
  contact: {
    responsable?: string
    email?: string
    telephone: string
    adresse: string
  }
}

const Emplois: Emploi[] = [
  {
    id: "1",
    titre: "ADJOINT ADMINISTRATIF",
    service: "CCAS de Belin Beliet",
    contrat: "CDD mois",
    temps: "Temps complet",
    description: [
      "Le CCAS de la commune recherche pour un remplacement de poste suite à un congé maladie au sein de son Service d’Aide à Domicile, un candidat(e) pour exercer les missions suivantes :",
      "Encadrer les aides à domicile (recrutement, planning (logiciel APOLOGIC), suivi des dossiers du personnel...)",
      "Réceptionner les demandes des bénéficiaires et évaluer leurs besoins.",
      "Gérer la comptabilité du service",
      "Gestion des dossiers des bénéficiaires du SAAD",
      "Facturation des prestations",
      "Gestion administrative générale ",
    ],
    profil:
      "Formation DEAES en apprentissage. Qualités : Disponibilité, réactivité, discrétion et bonne communication.",
    avantages:
      "Travail en équipe, accompagnement continu, téléphone pro, frais kilométriques remboursés. Contrat d'un an, temps complet, poste à pourvoir le 9/09/24.",
    annonce: "Voir l'annonce complète",
    url: "https://www.emploi-territorial.fr/offre/o033250407000505-adjoint-administratif/1/xzEa0PWH...pE,,,?pk_campaign=alerte",
    image:
      "https://sandbox-tailwind-template.netlify.app/assets/img/photos/co3@2x.png",
    contact: {
      responsable: "",
      email: "",
      telephone: "05.56.88.81.51",
      adresse:
        "N’hésitez pas à nous envoyer votre candidature à Mairie de Belin-Beliet à l’attention de monsieur le Président, 29 avenue Aliénor 33830 Belin-Beliet",
    },
  },
  {
    id: "2",
    titre: "AIDE A DOMICILE OU AUXILIAIRE DE VIE SOCIALE (H/F)",
    contrat: "Contrat d'apprentissage",
    temps: "30h/semaine",
    service: "CIAS de Blaye",
    description: [
      "Accompagnement quotidien, aide aux activités (repas, toilette, habillage, transferts) et maintien de la vie sociale.",
    ],
    profil:
      "Formation DEAES en apprentissage. Qualités : Disponibilité, réactivité, discrétion et bonne communication.",
    avantages:
      "Travail en équipe, accompagnement continu, téléphone pro, frais kilométriques remboursés. Contrat d'un an, temps complet, poste à pourvoir le 9/09/24.",
    image:
      "https://sandbox-tailwind-template.netlify.app/assets/img/photos/co3@2x.png",
    contact: {
      responsable: "Charline SERDOT",
      email: "social@cias-fronsadais.com",
      telephone: "05.57.84.07.09",
      adresse:
        "Pour rejoindre notre équipe, veuillez transmettre votre candidature au CIAS du Fronsadais. – Maison des services communautaires 1 Avenue Charles De Gaulle 33240 ST GERMAIN DE LA RIVIERE",
    },
  },
  {
    id: "3",
    titre: "AIDE A DOMICILE OU AUXILIAIRE DE VIE SOCIALE (H/F)",
    contrat: "Contrat d'apprentissage",
    temps: "30h/semaine",
    service: "CIAS de Blaye",
    description: [
      "Accompagnement quotidien, aide aux activités (repas, toilette, habillage, transferts) et maintien de la vie sociale.",
    ],
    profil:
      "Formation DEAES en apprentissage. Qualités : Disponibilité, réactivité, discrétion et bonne communication.",
    avantages:
      "Travail en équipe, accompagnement continu, téléphone pro, frais kilométriques remboursés. Contrat d'un an, temps complet, poste à pourvoir le 9/09/24.",
    image:
      "https://sandbox-tailwind-template.netlify.app/assets/img/photos/co3@2x.png",
    contact: {
      responsable: "Charline SERDOT",
      email: "social@cias-fronsadais.com",
      telephone: "05.57.84.07.09",
      adresse:
        "Pour rejoindre notre équipe, veuillez transmettre votre candidature au CIAS du Fronsadais. – Maison des services communautaires 1 Avenue Charles De Gaulle 33240 ST GERMAIN DE LA RIVIERE",
    },
  },
]

export default Emplois
