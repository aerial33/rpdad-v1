interface Emploi {
  id: string
  titre: string
  contrat: string
  temps: string
  service: string
  description: string
  profil: string
  avantages: string
  annonce?: string
  image?: string
  contact: {
    responsable: string
    email: string
    telephone: string
    adresse: string
  }
}

const Emplois: Emploi[] = [
  {
    id: "1",
    titre: "AIDE A DOMICILE OU AUXILIAIRE DE VIE SOCIALE (H/F)",
    contrat: "Contrat d'apprentissage",
    temps: "30h/semaine",
    service: "CIAS de Blaye",
    description:
      "Accompagnement quotidien, aide aux activités (repas, toilette, habillage, transferts) et maintien de la vie sociale.",
    profil:
      "Formation DEAES en apprentissage. Qualités : Disponibilité, réactivité, discrétion et bonne communication.",
    avantages:
      "Travail en équipe, accompagnement continu, téléphone pro, frais kilométriques remboursés. Contrat d'un an, temps complet, poste à pourvoir le 9/09/24.",
    annonce: "Voir l'annonce complète",
    image:
      "https://sandbox-tailwind-template.netlify.app/assets/img/photos/co3@2x.png",
    contact: {
      responsable: "M. BIDOIS",
      email: "ccb@ccb-blaye.com",
      telephone: "0557423333",
      adresse:
        "Envoyez CV & lettre à M. le Président via ccb@ccb-blaye.com\nCIAS BLAYE – Maison des services au public, 32 rue des macons bp 154, 33391 Blaye cedex",
    },
  },
  {
    id: "2",
    titre: "AIDE A DOMICILE OU AUXILIAIRE DE VIE SOCIALE (H/F)",
    contrat: "Contrat d'apprentissage",
    temps: "30h/semaine",
    service: "CIAS de Blaye",
    description:
      "Accompagnement quotidien, aide aux activités (repas, toilette, habillage, transferts) et maintien de la vie sociale.",
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
    description:
      "Accompagnement quotidien, aide aux activités (repas, toilette, habillage, transferts) et maintien de la vie sociale.",
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
