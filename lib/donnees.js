// DONNÉES TEMPORAIRES (en attendant le vrai backend)

// Rôle de l'utilisateur connecté : "admin", "enseignant", "eleve" ou "parent"

export let role = "admin";

export const donneesEnseignants = [
  {
    id: 1,
    idEnseignant: "1234567890",
    nom: "John Doe",
    email: "john@doe.com",
    photo:
      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    matieres: ["Mathématiques", "Géométrie"],
    classes: ["1B", "2A", "3C"],
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 2,
    idEnseignant: "1234567890",
    nom: "Jane Doe",
    email: "jane@doe.com",
    photo:
      "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    matieres: ["Physique", "Chimie"],
    classes: ["5A", "4B", "3C"],
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 3,
    idEnseignant: "1234567890",
    nom: "Mike Geller",
    email: "mike@geller.com",
    photo:
      "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    matieres: ["Biologie"],
    classes: ["5A", "4B", "3C"],
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 4,
    idEnseignant: "1234567890",
    nom: "Jay French",
    email: "jay@gmail.com",
    photo:
      "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    matieres: ["Histoire"],
    classes: ["5A", "4B", "3C"],
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 5,
    idEnseignant: "1234567890",
    nom: "Jane Smith",
    email: "jane@gmail.com",
    photo:
      "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    matieres: ["Musique", "Histoire"],
    classes: ["5A", "4B", "3C"],
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 6,
    idEnseignant: "1234567890",
    nom: "Anna Santiago",
    email: "anna@gmail.com",
    photo:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    matieres: ["Physique"],
    classes: ["5A", "4B", "3C"],
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 7,
    idEnseignant: "1234567890",
    nom: "Allen Black",
    email: "allen@black.com",
    photo:
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    matieres: ["Anglais", "Espagnol"],
    classes: ["5A", "4B", "3C"],
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 8,
    idEnseignant: "1234567890",
    nom: "Ophelia Castro",
    email: "ophelia@castro.com",
    photo:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    matieres: ["Mathématiques", "Géométrie"],
    classes: ["5A", "4B", "3C"],
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 9,
    idEnseignant: "1234567890",
    nom: "Derek Briggs",
    email: "derek@briggs.com",
    photo:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    matieres: ["Littérature", "Anglais"],
    classes: ["5A", "4B", "3C"],
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 10,
    idEnseignant: "1234567890",
    nom: "John Glover",
    email: "john@glover.com",
    photo:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    matieres: ["Biologie"],
    classes: ["5A", "4B", "3C"],
    adresse: "12 rue Principale, Dakar",
  },
];

export const donneesEleves = [
  {
    id: 1,
    idEleve: "1234567890",
    nom: "John Doe",
    email: "john@doe.com",
    photo:
      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    niveau: 5,
    classe: "1B",
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 2,
    idEleve: "1234567890",
    nom: "Jane Doe",
    email: "jane@doe.com",
    photo:
      "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    niveau: 5,
    classe: "5A",
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 3,
    idEleve: "1234567890",
    nom: "Mike Geller",
    email: "mike@geller.com",
    photo:
      "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    niveau: 5,
    classe: "5A",
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 4,
    idEleve: "1234567890",
    nom: "Jay French",
    email: "jay@gmail.com",
    photo:
      "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    niveau: 5,
    classe: "5A",
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 5,
    idEleve: "1234567890",
    nom: "Jane Smith",
    email: "jane@gmail.com",
    photo:
      "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    niveau: 5,
    classe: "5A",
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 6,
    idEleve: "1234567890",
    nom: "Anna Santiago",
    email: "anna@gmail.com",
    photo:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    niveau: 5,
    classe: "5A",
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 7,
    idEleve: "1234567890",
    nom: "Allen Black",
    email: "allen@black.com",
    photo:
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    niveau: 5,
    classe: "5A",
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 8,
    idEleve: "1234567890",
    nom: "Ophelia Castro",
    email: "ophelia@castro.com",
    photo:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    niveau: 5,
    classe: "5A",
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 9,
    idEleve: "1234567890",
    nom: "Derek Briggs",
    email: "derek@briggs.com",
    photo:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    niveau: 5,
    classe: "5A",
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 10,
    idEleve: "1234567890",
    nom: "John Glover",
    email: "john@glover.com",
    photo:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
    telephone: "1234567890",
    niveau: 5,
    classe: "5A",
    adresse: "12 rue Principale, Dakar",
  },
];

export const donneesParents = [
  {
    id: 1,
    nom: "John Doe",
    eleves: ["Sarah Brewer"],
    email: "john@doe.com",
    telephone: "1234567890",
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 2,
    nom: "Jane Doe",
    eleves: ["Cecilia Bradley"],
    email: "jane@doe.com",
    telephone: "1234567890",
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 3,
    nom: "Mike Geller",
    eleves: ["Fanny Caldwell"],
    email: "mike@geller.com",
    telephone: "1234567890",
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 4,
    nom: "Jay French",
    eleves: ["Mollie Fitzgerald", "Ian Bryant"],
    email: "mike@geller.com",
    telephone: "1234567890",
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 5,
    nom: "Jane Smith",
    eleves: ["Mable Harvey"],
    email: "mike@geller.com",
    telephone: "1234567890",
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 6,
    nom: "Anna Santiago",
    eleves: ["Joel Lambert"],
    email: "mike@geller.com",
    telephone: "1234567890",
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 7,
    nom: "Allen Black",
    eleves: ["Carrie Tucker", "Lilly Underwood"],
    email: "mike@geller.com",
    telephone: "1234567890",
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 8,
    nom: "Ophelia Castro",
    eleves: ["Alexander Blair"],
    email: "mike@geller.com",
    telephone: "1234567890",
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 9,
    nom: "Derek Briggs",
    eleves: ["Susan Webster", "Maude Stone"],
    email: "mike@geller.com",
    telephone: "1234567890",
    adresse: "12 rue Principale, Dakar",
  },
  {
    id: 10,
    nom: "John Glover",
    eleves: ["Stella Scott"],
    email: "mike@geller.com",
    telephone: "1234567890",
    adresse: "12 rue Principale, Dakar",
  },
];

export const donneesMatieres = [
  {
    id: 1,
    nom: "Mathématiques",
    enseignants: ["Alice Phelps", "Russell Davidson"],
  },
  {
    id: 2,
    nom: "Anglais",
    enseignants: ["Manuel Becker", "Eddie Chavez"],
  },
  {
    id: 3,
    nom: "Physique",
    enseignants: ["Lola Newman", "Darrell Delgado"],
  },
  {
    id: 4,
    nom: "Chimie",
    enseignants: ["Nathan Kelly", "Benjamin Snyder"],
  },
  {
    id: 5,
    nom: "Biologie",
    enseignants: ["Alma Benson", "Lina Collier"],
  },
  {
    id: 6,
    nom: "Histoire",
    enseignants: ["Hannah Bowman", "Betty Obrien"],
  },
  {
    id: 7,
    nom: "Géographie",
    enseignants: ["Lora French", "Sue Brady"],
  },
  {
    id: 8,
    nom: "Arts plastiques",
    enseignants: ["Harriet Alvarado", "Mayme Keller"],
  },
  {
    id: 9,
    nom: "Musique",
    enseignants: ["Gertrude Roy", "Rosa Singleton"],
  },
  {
    id: 10,
    nom: "Littérature",
    enseignants: ["Effie Lynch", "Brett Flowers"],
  },
];

export const donneesClasses = [
  {
    id: 1,
    nom: "1A",
    capacite: 20,
    niveau: 1,
    responsable: "Joseph Padilla",
  },
  {
    id: 2,
    nom: "2B",
    capacite: 22,
    niveau: 2,
    responsable: "Blake Joseph",
  },
  {
    id: 3,
    nom: "3C",
    capacite: 20,
    niveau: 3,
    responsable: "Tom Bennett",
  },
  {
    id: 4,
    nom: "4B",
    capacite: 18,
    niveau: 4,
    responsable: "Aaron Collins",
  },
  {
    id: 5,
    nom: "5A",
    capacite: 16,
    niveau: 5,
    responsable: "Iva Frank",
  },
  {
    id: 5,
    nom: "5B",
    capacite: 20,
    niveau: 5,
    responsable: "Leila Santos",
  },
  {
    id: 7,
    nom: "7A",
    capacite: 18,
    niveau: 7,
    responsable: "Carrie Walton",
  },
  {
    id: 8,
    nom: "6B",
    capacite: 22,
    niveau: 6,
    responsable: "Christopher Butler",
  },
  {
    id: 9,
    nom: "6C",
    capacite: 18,
    niveau: 6,
    responsable: "Marc Miller",
  },
  {
    id: 10,
    nom: "6D",
    capacite: 20,
    niveau: 6,
    responsable: "Ophelia Marsh",
  },
];

export const donneesCours = [
  {
    id: 1,
    matiere: "Mathématiques",
    classe: "1A",
    enseignant: "Tommy Wise",
  },
  {
    id: 2,
    matiere: "Anglais",
    classe: "2A",
    enseignant: "Rhoda Frank",
  },
  {
    id: 3,
    matiere: "Sciences",
    classe: "3A",
    enseignant: "Della Dunn",
  },
  {
    id: 4,
    matiere: "Éducation civique",
    classe: "1B",
    enseignant: "Bruce Rodriguez",
  },
  {
    id: 5,
    matiere: "Arts plastiques",
    classe: "4A",
    enseignant: "Birdie Butler",
  },
  {
    id: 6,
    matiere: "Musique",
    classe: "5A",
    enseignant: "Bettie Oliver",
  },
  {
    id: 7,
    matiere: "Histoire",
    classe: "6A",
    enseignant: "Herman Howard",
  },
  {
    id: 8,
    matiere: "Géographie",
    classe: "6B",
    enseignant: "Lucinda Thomas",
  },
  {
    id: 9,
    matiere: "Physique",
    classe: "6C",
    enseignant: "Ronald Roberts",
  },
  {
    id: 10,
    matiere: "Chimie",
    classe: "4B",
    enseignant: "Julia Pittman",
  },
];

export const donneesExamens = [
  {
    id: 1,
    matiere: "Mathématiques",
    classe: "1A",
    enseignant: "Martha Morris",
    date: "2025-01-01",
  },
  {
    id: 2,
    matiere: "Anglais",
    classe: "2A",
    enseignant: "Randall Garcia",
    date: "2025-01-01",
  },
  {
    id: 3,
    matiere: "Sciences",
    classe: "3A",
    enseignant: "Myrtie Scott",
    date: "2025-01-01",
  },
  {
    id: 4,
    matiere: "Éducation civique",
    classe: "1B",
    enseignant: "Alvin Swanson",
    date: "2025-01-01",
  },
  {
    id: 5,
    matiere: "Arts plastiques",
    classe: "4A",
    enseignant: "Mabelle Wallace",
    date: "2025-01-01",
  },
  {
    id: 6,
    matiere: "Musique",
    classe: "5A",
    enseignant: "Dale Thompson",
    date: "2025-01-01",
  },
  {
    id: 7,
    matiere: "Histoire",
    classe: "6A",
    enseignant: "Allie Conner",
    date: "2025-01-01",
  },
  {
    id: 8,
    matiere: "Géographie",
    classe: "6B",
    enseignant: "Hunter Fuller",
    date: "2025-01-01",
  },
  {
    id: 9,
    matiere: "Physique",
    classe: "7A",
    enseignant: "Lois Lindsey",
    date: "2025-01-01",
  },
  {
    id: 10,
    matiere: "Chimie",
    classe: "8A",
    enseignant: "Vera Soto",
    date: "2025-01-01",
  },
];

export const donneesDevoirs = [
  {
    id: 1,
    matiere: "Mathématiques",
    classe: "1A",
    enseignant: "Anthony Boone",
    dateLimite: "2025-01-01",
  },
  {
    id: 2,
    matiere: "Anglais",
    classe: "2A",
    enseignant: "Clifford Bowen",
    dateLimite: "2025-01-01",
  },
  {
    id: 3,
    matiere: "Sciences",
    classe: "3A",
    enseignant: "Catherine Malone",
    dateLimite: "2025-01-01",
  },
  {
    id: 4,
    matiere: "Éducation civique",
    classe: "1B",
    enseignant: "Willie Medina",
    dateLimite: "2025-01-01",
  },
  {
    id: 5,
    matiere: "Arts plastiques",
    classe: "4A",
    enseignant: "Jose Ruiz",
    dateLimite: "2025-01-01",
  },
  {
    id: 6,
    matiere: "Musique",
    classe: "5A",
    enseignant: "Katharine Owens",
    dateLimite: "2025-01-01",
  },
  {
    id: 7,
    matiere: "Histoire",
    classe: "6A",
    enseignant: "Shawn Norman",
    dateLimite: "2025-01-01",
  },
  {
    id: 8,
    matiere: "Géographie",
    classe: "6B",
    enseignant: "Don Holloway",
    dateLimite: "2025-01-01",
  },
  {
    id: 9,
    matiere: "Physique",
    classe: "7A",
    enseignant: "Franklin Gregory",
    dateLimite: "2025-01-01",
  },
  {
    id: 10,
    matiere: "Chimie",
    classe: "8A",
    enseignant: "Danny Nguyen",
    dateLimite: "2025-01-01",
  },
];

export const donneesResultats = [
  {
    id: 1,
    matiere: "Mathématiques",
    classe: "1A",
    enseignant: "John Doe",
    eleve: "John Doe",
    date: "2025-01-01",
    type: "examen",
    note: 90,
  },
  {
    id: 2,
    matiere: "Anglais",
    classe: "2A",
    enseignant: "John Doe",
    eleve: "John Doe",
    date: "2025-01-01",
    type: "examen",
    note: 90,
  },
  {
    id: 3,
    matiere: "Sciences",
    classe: "3A",
    enseignant: "John Doe",
    eleve: "John Doe",
    date: "2025-01-01",
    type: "examen",
    note: 90,
  },
  {
    id: 4,
    matiere: "Éducation civique",
    classe: "1B",
    enseignant: "John Doe",
    eleve: "John Doe",
    date: "2025-01-01",
    type: "examen",
    note: 90,
  },
  {
    id: 5,
    matiere: "Arts plastiques",
    classe: "4A",
    enseignant: "John Doe",
    eleve: "John Doe",
    date: "2025-01-01",
    type: "examen",
    note: 90,
  },
  {
    id: 6,
    matiere: "Musique",
    classe: "5A",
    enseignant: "John Doe",
    eleve: "John Doe",
    date: "2025-01-01",
    type: "examen",
    note: 90,
  },
  {
    id: 7,
    matiere: "Histoire",
    classe: "6A",
    enseignant: "John Doe",
    eleve: "John Doe",
    date: "2025-01-01",
    type: "examen",
    note: 90,
  },
  {
    id: 8,
    matiere: "Géographie",
    classe: "6B",
    enseignant: "John Doe",
    eleve: "John Doe",
    date: "2025-01-01",
    type: "examen",
    note: 90,
  },
  {
    id: 9,
    matiere: "Physique",
    classe: "7A",
    enseignant: "John Doe",
    eleve: "John Doe",
    date: "2025-01-01",
    type: "examen",
    note: 90,
  },
  {
    id: 10,
    matiere: "Chimie",
    classe: "8A",
    enseignant: "John Doe",
    eleve: "John Doe",
    date: "2025-01-01",
    type: "examen",
    note: 90,
  },
];

export const donneesEvenements = [
  {
    id: 1,
    titre: "Sortie au lac",
    classe: "1A",
    date: "2025-01-01",
    heureDebut: "10:00",
    heureFin: "11:00",
  },
  {
    id: 2,
    titre: "Pique-nique",
    classe: "2A",
    date: "2025-01-01",
    heureDebut: "10:00",
    heureFin: "11:00",
  },
  {
    id: 3,
    titre: "Sortie à la plage",
    classe: "3A",
    date: "2025-01-01",
    heureDebut: "10:00",
    heureFin: "11:00",
  },
  {
    id: 4,
    titre: "Visite du musée",
    classe: "4A",
    date: "2025-01-01",
    heureDebut: "10:00",
    heureFin: "11:00",
  },
  {
    id: 5,
    titre: "Concert de musique",
    classe: "5A",
    date: "2025-01-01",
    heureDebut: "10:00",
    heureFin: "11:00",
  },
  {
    id: 6,
    titre: "Spectacle de magie",
    classe: "1B",
    date: "2025-01-01",
    heureDebut: "10:00",
    heureFin: "11:00",
  },
  {
    id: 7,
    titre: "Sortie au lac",
    classe: "2B",
    date: "2025-01-01",
    heureDebut: "10:00",
    heureFin: "11:00",
  },
  {
    id: 8,
    titre: "Course cycliste",
    classe: "3B",
    date: "2025-01-01",
    heureDebut: "10:00",
    heureFin: "11:00",
  },
  {
    id: 9,
    titre: "Exposition d'art",
    classe: "4B",
    date: "2025-01-01",
    heureDebut: "10:00",
    heureFin: "11:00",
  },
  {
    id: 10,
    titre: "Tournoi sportif",
    classe: "5B",
    date: "2025-01-01",
    heureDebut: "10:00",
    heureFin: "11:00",
  },
];

export const donneesAnnonces = [
  {
    id: 1,
    titre: "Contrôle de maths de la 4A",
    classe: "4A",
    date: "2025-01-01",
  },
  {
    id: 2,
    titre: "Contrôle de maths de la 3A",
    classe: "3A",
    date: "2025-01-01",
  },
  {
    id: 3,
    titre: "Contrôle de maths de la 3B",
    classe: "3B",
    date: "2025-01-01",
  },
  {
    id: 4,
    titre: "Contrôle de maths de la 6A",
    classe: "6A",
    date: "2025-01-01",
  },
  {
    id: 5,
    titre: "Contrôle de maths de la 8C",
    classe: "8C",
    date: "2025-01-01",
  },
  {
    id: 6,
    titre: "Contrôle de maths de la 2A",
    classe: "2A",
    date: "2025-01-01",
  },
  {
    id: 7,
    titre: "Contrôle de maths de la 4C",
    classe: "4C",
    date: "2025-01-01",
  },
  {
    id: 8,
    titre: "Contrôle de maths de la 4B",
    classe: "4B",
    date: "2025-01-01",
  },
  {
    id: 9,
    titre: "Contrôle de maths de la 3C",
    classe: "3C",
    date: "2025-01-01",
  },
  {
    id: 10,
    titre: "Contrôle de maths de la 1C",
    classe: "1C",
    date: "2025-01-01",
  },
];


// Emploi du temps : change les dates pour la semaine en cours si tu veux voir les cours dans le calendrier
export const evenementsCalendrier = [
  // Lundi 16 novembre
  {
    titre: "Mathématiques",
    journeeEntiere: false,
    debut: new Date(2026, 10, 16, 8, 0),
    fin: new Date(2026, 10, 16, 8, 45),
  },
  {
    titre: "Anglais",
    journeeEntiere: false,
    debut: new Date(2026, 10, 16, 9, 0),
    fin: new Date(2026, 10, 16, 9, 45),
  },
  {
    titre: "Biologie",
    journeeEntiere: false,
    debut: new Date(2026, 10, 16, 10, 0),
    fin: new Date(2026, 10, 16, 10, 45),
  },
  {
    titre: "Physique",
    journeeEntiere: false,
    debut: new Date(2026, 10, 16, 11, 0),
    fin: new Date(2026, 10, 16, 11, 45),
  },
  {
    titre: "Chimie",
    journeeEntiere: false,
    debut: new Date(2026, 10, 16, 13, 0),
    fin: new Date(2026, 10, 16, 13, 45),
  },
  {
    titre: "Histoire",
    journeeEntiere: false,
    debut: new Date(2026, 10, 16, 14, 0),
    fin: new Date(2026, 10, 16, 14, 45),
  },

  // Mardi 17 novembre
  {
    titre: "Anglais",
    journeeEntiere: false,
    debut: new Date(2026, 10, 17, 9, 0),
    fin: new Date(2026, 10, 17, 9, 45),
  },
  {
    titre: "Biologie",
    journeeEntiere: false,
    debut: new Date(2026, 10, 17, 10, 0),
    fin: new Date(2026, 10, 17, 10, 45),
  },
  {
    titre: "Physique",
    journeeEntiere: false,
    debut: new Date(2026, 10, 17, 11, 0),
    fin: new Date(2026, 10, 17, 11, 45),
  },
  {
    titre: "Histoire",
    journeeEntiere: false,
    debut: new Date(2026, 10, 17, 14, 0),
    fin: new Date(2026, 10, 17, 14, 45),
  },

  // Mercredi 18 novembre
  {
    titre: "Mathématiques",
    journeeEntiere: false,
    debut: new Date(2026, 10, 18, 8, 0),
    fin: new Date(2026, 10, 18, 8, 45),
  },
  {
    titre: "Biologie",
    journeeEntiere: false,
    debut: new Date(2026, 10, 18, 10, 0),
    fin: new Date(2026, 10, 18, 10, 45),
  },
  {
    titre: "Chimie",
    journeeEntiere: false,
    debut: new Date(2026, 10, 18, 13, 0),
    fin: new Date(2026, 10, 18, 13, 45),
  },
  {
    titre: "Histoire",
    journeeEntiere: false,
    debut: new Date(2026, 10, 18, 14, 0),
    fin: new Date(2026, 10, 18, 14, 45),
  },

  // Jeudi 19 novembre
  {
    titre: "Anglais",
    journeeEntiere: false,
    debut: new Date(2026, 10, 19, 9, 0),
    fin: new Date(2026, 10, 19, 9, 45),
  },
  {
    titre: "Biologie",
    journeeEntiere: false,
    debut: new Date(2026, 10, 19, 10, 0),
    fin: new Date(2026, 10, 19, 10, 45),
  },
  {
    titre: "Physique",
    journeeEntiere: false,
    debut: new Date(2026, 10, 19, 11, 0),
    fin: new Date(2026, 10, 19, 11, 45),
  },
  {
    titre: "Histoire",
    journeeEntiere: false,
    debut: new Date(2026, 10, 19, 14, 0),
    fin: new Date(2026, 10, 19, 14, 45),
  },

  // Vendredi 20 novembre
  {
    titre: "Mathématiques",
    journeeEntiere: false,
    debut: new Date(2026, 10, 20, 8, 0),
    fin: new Date(2026, 10, 20, 8, 45),
  },
  {
    titre: "Anglais",
    journeeEntiere: false,
    debut: new Date(2026, 10, 20, 9, 0),
    fin: new Date(2026, 10, 20, 9, 45),
  },
  {
    titre: "Physique",
    journeeEntiere: false,
    debut: new Date(2026, 10, 20, 11, 0),
    fin: new Date(2026, 10, 20, 11, 45),
  },
  {
    titre: "Chimie",
    journeeEntiere: false,
    debut: new Date(2026, 10, 20, 13, 0),
    fin: new Date(2026, 10, 20, 13, 45),
  },
  {
    titre: "Histoire",
    journeeEntiere: false,
    debut: new Date(2026, 10, 20, 14, 0),
    fin: new Date(2026, 10, 20, 14, 45),
  },
];

// Utilisateur "connecté" (en attendant la vraie connexion avec le backend)
export const utilisateurConnecte = {
  nom: "Karim Kane",
  email: "karim@kane.com",
  telephone: "+221 77 000 00 00",
  adresse: "Dakar, Sénégal",
  photo: "/avatar.png",
};

export const donneesPresences = [
  { id: 1, eleve: "John Doe", classe: "1A", date: "2025-01-01", present: true },
  { id: 2, eleve: "Jane Doe", classe: "1A", date: "2025-01-01", present: false },
  { id: 3, eleve: "Mike Geller", classe: "2A", date: "2025-01-01", present: true },
  { id: 4, eleve: "Jay French", classe: "2A", date: "2025-01-02", present: true },
  { id: 5, eleve: "Jane Smith", classe: "3C", date: "2025-01-02", present: false },
];

export const donneesMessages = [
  { id: 1, expediteur: "John Doe", objet: "Réunion parents-profs", date: "2025-01-01", texte: "La réunion aura lieu vendredi à 17h." },
  { id: 2, expediteur: "Jane Doe", objet: "Absence de mon enfant", date: "2025-01-02", texte: "Mon fils sera absent lundi pour raison médicale." },
  { id: 3, expediteur: "Mike Geller", objet: "Sortie scolaire", date: "2025-01-03", texte: "Merci de rendre l'autorisation signée avant mercredi." },
];

// Le nom du rôle à afficher à l'écran (avec majuscule et accents)
export const nomDuRole = (unRole) => {
  if (unRole === "admin") return "Administrateur";
  if (unRole === "enseignant") return "Enseignant";
  if (unRole === "eleve") return "Élève";
  return "Parent";
};
