# 📚 Tableau de bord scolaire — Next.js 16 + Tailwind v4

> **Support de cours & projet de référence.**
> Ce projet est l'interface (le « frontend ») d'un tableau de bord d'école : administrateur, enseignants, élèves, parents.
> Il sert de **modèle à recopier** pour tes futurs projets : la structure, les composants et les recettes ci-dessous se réutilisent tels quels.
>
> 🇫🇷 **Tout le projet est en français** : les textes affichés, les URL, les noms de fichiers, de composants, de variables et de champs. Les seules exceptions sont les noms imposés par Next.js et par les librairies (voir [section 3](#3-les-conventions-de-nommage-tout-en-français)).

---

## Sommaire

1. [Lancer le projet](#1-lancer-le-projet)
2. [Les outils utilisés (la « stack »)](#2-les-outils-utilisés-la--stack-)
3. [Les conventions de nommage (tout en français)](#3-les-conventions-de-nommage-tout-en-français)
4. [L'arborescence expliquée](#4-larborescence-expliquée)
5. [Comprendre Next.js (App Router)](#5-comprendre-nextjs-app-router)
6. [Comprendre Tailwind CSS v4](#6-comprendre-tailwind-css-v4)
7. [Les fausses données : `lib/donnees.js`](#7-les-fausses-données--libdonneesjs)
8. [Les composants un par un](#8-les-composants-un-par-un)
9. [Les formulaires (react-hook-form + zod)](#9-les-formulaires-react-hook-form--zod)
10. [Recettes pas à pas](#10-recettes-pas-à-pas)
11. [Erreurs classiques à éviter](#11-erreurs-classiques-à-éviter)
12. [Étape suivante : brancher un vrai backend](#12-étape-suivante--brancher-un-vrai-backend)
13. [Lexique](#13-lexique)

---

## 1. Lancer le projet

```bash
npm install      # installe les dépendances (une seule fois, ou après un git pull)
npm run dev      # lance le serveur de développement
```

Ouvre ensuite [http://localhost:3000](http://localhost:3000) : tu arrives sur la page de connexion.

**Pour se connecter**, il n'y a pas encore de vrai compte : n'importe quel email valide et n'importe quel mot de passe d'au moins 8 caractères fonctionnent (ex. `admin@test.com` / `12345678`).

| Commande        | À quoi elle sert                                                     |
| --------------- | -------------------------------------------------------------------- |
| `npm run dev`   | Mode développement : la page se recharge à chaque sauvegarde         |
| `npm run build` | Fabrique la version optimisée pour la mise en ligne                  |
| `npm run start` | Lance la version fabriquée par `build` (c'est ce qui tourne en prod) |
| `npm run lint`  | Vérifie le code et signale les erreurs courantes                     |

> 💡 **Node 20 minimum** est requis.

### Les pages disponibles

| URL | Ce qu'on voit |
| --- | --- |
| `/` | Redirige vers `/connexion` |
| `/connexion` | Page de connexion |
| `/tableau-de-bord` | Redirige vers l'accueil du rôle (`/tableau-de-bord/admin`, `/tableau-de-bord/enseignant`…) |
| `/tableau-de-bord/admin` | Accueil administrateur : cartes, graphiques, calendrier |
| `/tableau-de-bord/enseignant` | Emploi du temps de l'enseignant |
| `/tableau-de-bord/eleve` | Emploi du temps de l'élève |
| `/tableau-de-bord/parent` | Emploi du temps de l'enfant |
| `/tableau-de-bord/liste/enseignants` | Liste des enseignants (tableau) |
| `/tableau-de-bord/liste/enseignants/1` | Fiche détaillée d'un enseignant |
| `/tableau-de-bord/liste/eleves` | Liste des élèves |
| `/tableau-de-bord/liste/eleves/1` | Fiche détaillée d'un élève |
| `/tableau-de-bord/liste/parents`, `matieres`, `classes`, `cours`, `examens`, `devoirs`, `resultats`, `presences`, `evenements`, `annonces` | Les autres listes |
| `/tableau-de-bord/messages` | Messages reçus |
| `/tableau-de-bord/profil` | Profil de l'utilisateur connecté |
| `/tableau-de-bord/parametres` | Modifier ses informations |

> Tous les liens du menu mènent à une vraie page, et « Déconnexion » renvoie vers `/connexion`.

---

## 2. Les outils utilisés (la « stack »)

| Outil | Rôle | En une phrase |
| --- | --- | --- |
| **Next.js 16** | Framework | React + un système de pages basé sur les dossiers + rendu côté serveur |
| **React 19** | Bibliothèque d'interface | On découpe l'écran en petits morceaux réutilisables : les **composants** |
| **TypeScript** | Langage | Du JavaScript avec des **types** : l'éditeur te prévient si tu passes une mauvaise valeur |
| **Tailwind CSS v4** | Style | On écrit le style directement dans `className` avec des petites classes (`p-4`, `flex`, `bg-white`) |
| **Recharts** | Graphiques | Barres, courbes, camemberts à partir d'un tableau de données |
| **react-calendar** | Petit calendrier | Le calendrier du mois à droite de l'accueil |
| **react-big-calendar** + **moment** | Grand agenda | L'emploi du temps à la semaine |
| **react-hook-form** | Formulaires | Gère les champs, l'envoi et les erreurs sans écrire des dizaines de `useState` |
| **zod** | Validation | Décrit les règles d'un formulaire (« email valide », « 8 caractères min »…) |

---

## 3. Les conventions de nommage (tout en français)

### 3.1 Ce qui est en français

| Quoi | Exemples |
| --- | --- |
| Les URL (= les dossiers dans `app/`) | `/tableau-de-bord/liste/enseignants`, `/connexion`, `/parametres` |
| Les fichiers et composants | `Tableau.tsx`, `ModaleFormulaire.tsx`, `ChampSaisie.tsx`, `FormulaireEnseignant.tsx` |
| Les variables et fonctions | `afficherLigne`, `colonnes`, `dateChoisie`, `seConnecter` |
| Les props de nos composants | `<Tableau colonnes={...} donnees={...} afficherLigne={...} />` |
| Les champs des données | `nom`, `telephone`, `adresse`, `classe`, `matiere`, `dateLimite` |
| Les valeurs | rôles `"admin"`, `"enseignant"`, `"eleve"`, `"parent"` ; actions `"creer"`, `"modifier"`, `"supprimer"` |
| Les couleurs du thème | `bg-bleuCiel`, `bg-violetDoux`, `bg-jauneDoux` |
| Les textes affichés et les commentaires | « Tous les enseignants », « Se connecter »… |

### 3.2 Les règles d'écriture

- **Pas d'accents ni d'espaces dans le code** (noms de fichiers, URL, variables) : `eleve`, `matiere`, `parametres`. Les accents posent problème dans les URL et sur certains systèmes.
- **Les accents sont réservés aux textes affichés** : `"Élèves"`, `"Paramètres"`.
- **Composants** : `PascalCase` (une majuscule à chaque mot) → `GrandCalendrier`, `PageListeEleves`.
- **Variables, fonctions, champs** : `camelCase` (minuscule au début) → `donneesEnseignants`, `heureDebut`.
- **URL et dossiers** : minuscules et tirets → `tableau-de-bord`.

### 3.3 Ce qui reste en anglais (et pourquoi)

On ne peut pas tout traduire : certains noms sont **imposés**. Si tu les changes, ça ne marche plus.

| Reste en anglais | Imposé par |
| --- | --- |
| `page.tsx`, `layout.tsx`, `[id]`, `metadata`, `children` | Next.js : il cherche ces noms précis |
| `useState`, `useForm`, `register`, `handleSubmit`, `errors`, `dynamic`, `redirect`, `useRouter` | React, react-hook-form, Next.js |
| `className`, `key`, `onClick`, `onSubmit`, `href`, `src`, `alt` | React / HTML |
| `dataKey`, `fill`, `stroke`, `titleAccessor`… | Recharts, react-big-calendar |
| `flex`, `p-4`, `hidden md:table-cell`… | Tailwind |
| `/home.png`, `/teacher.png`… dans `public/` | Les images fournies avec le modèle (on pourrait les renommer, mais il faudrait changer chaque `src`) |

### 3.4 Lexique anglais → français du projet

Pratique quand tu suis un tutoriel en anglais :

| Anglais | Français dans ce projet |
| --- | --- |
| dashboard, list, sign-in, settings, profile | tableau-de-bord, liste, connexion, parametres, profil |
| teacher, student, subject, lesson, exam | enseignant, eleve, matiere, cours, examen |
| assignment, result, attendance, event, announcement | devoir, resultat, presence, evenement, annonce |
| Table, FormModal, InputField, Navbar, UserCard | Tableau, ModaleFormulaire, ChampSaisie, BarreNavigation, CarteUtilisateur |
| columns, renderRow, data, header, accessor | colonnes, afficherLigne, donnees, titre, cle |
| name, phone, address, grade, supervisor, dueDate | nom, telephone, adresse, niveau, responsable, dateLimite |
| create, update, delete | creer, modifier, supprimer |

---

## 4. L'arborescence expliquée

```
next-dashboard-uiTrain/
├── app/                              ← TOUT ce qui est page ou composant
│   ├── layout.tsx                    ← Mise en page RACINE : <html> + <body>, polices, CSS global
│   ├── page.tsx                      ← "/" : redirige vers /connexion
│   ├── globals.css                   ← CSS global + couleurs personnalisées
│   │
│   ├── connexion/page.tsx            ← "/connexion" : formulaire de connexion
│   │
│   ├── tableau-de-bord/
│   │   ├── layout.tsx                ← Cadre commun : menu à gauche + barre en haut
│   │   ├── page.tsx                  ← "/tableau-de-bord" : redirige selon le rôle
│   │   ├── admin/page.tsx            ← "/tableau-de-bord/admin"
│   │   ├── enseignant/page.tsx       ← "/tableau-de-bord/enseignant"
│   │   ├── eleve/page.tsx            ← "/tableau-de-bord/eleve"
│   │   ├── parent/page.tsx           ← "/tableau-de-bord/parent"
│   │   ├── messages/page.tsx         ← "/tableau-de-bord/messages"
│   │   ├── profil/page.tsx           ← "/tableau-de-bord/profil"
│   │   ├── parametres/page.tsx       ← "/tableau-de-bord/parametres"
│   │   └── liste/
│   │       ├── enseignants/
│   │       │   ├── page.tsx          ← "/tableau-de-bord/liste/enseignants"   (la liste)
│   │       │   └── [id]/page.tsx     ← "/tableau-de-bord/liste/enseignants/3" (une fiche)
│   │       ├── eleves/ ...           ← même principe
│   │       └── parents/, classes/, examens/, presences/ ...
│   │
│   └── composants/                   ← Morceaux d'interface réutilisables
│       ├── Menu.tsx, BarreNavigation.tsx
│       ├── CarteUtilisateur.tsx
│       ├── GraphiqueEffectif.tsx, GraphiquePresence.tsx, GraphiqueFinance.tsx, Performance.tsx
│       ├── CalendrierEvenements.tsx, GrandCalendrier.tsx, Annonces.tsx
│       ├── Tableau.tsx, RechercheTableau.tsx, Pagination.tsx
│       ├── ModaleFormulaire.tsx, ChampSaisie.tsx
│       └── formulaires/              ← un formulaire par table, tous construits pareil
│           ├── FormulaireEnseignant.tsx, FormulaireEleve.tsx, FormulaireParent.tsx
│           ├── FormulaireMatiere.tsx, FormulaireClasse.tsx, FormulaireCours.tsx
│           ├── FormulaireExamen.tsx, FormulaireDevoir.tsx, FormulaireResultat.tsx
│           └── FormulairePresence.tsx, FormulaireEvenement.tsx, FormulaireAnnonce.tsx
│
├── lib/donnees.js                    ← Fausses données (en attendant un vrai backend)
├── public/                           ← Images et icônes, accessibles via "/nom.png"
├── next.config.ts                    ← Réglages de Next (images externes autorisées, etc.)
├── tsconfig.json                     ← Réglages TypeScript (dont l'alias "@/")
└── package.json                      ← Liste des dépendances et des scripts npm
```

> 📌 **Règle d'or** : dans `app/`, un dossier = un morceau d'URL, et le fichier `page.tsx` = ce qui s'affiche à cette URL.

---

## 5. Comprendre Next.js (App Router)

### 5.1 Le routage par dossiers

Pas besoin de déclarer les routes à la main (comme avec `react-router`). **Next lit tes dossiers** :

| Fichier | URL |
| --- | --- |
| `app/page.tsx` | `/` |
| `app/connexion/page.tsx` | `/connexion` |
| `app/tableau-de-bord/admin/page.tsx` | `/tableau-de-bord/admin` |
| `app/tableau-de-bord/liste/enseignants/[id]/page.tsx` | `/tableau-de-bord/liste/enseignants/42` |

Un dossier **sans** `page.tsx` n'est pas une page : il sert juste à ranger.

> 💡 Le **nom du dossier** devient l'URL, donc tu le choisis librement (ici en français). Le **nom du fichier** `page.tsx`, lui, est imposé.

### 5.2 `page.tsx` : le contenu d'une page

Un `page.tsx` exporte **par défaut** (`export default`) un composant React :

```tsx
// app/tableau-de-bord/messages/page.tsx (simplifié)
const PageMessages = () => {
  return <div>Messages</div>;
};

export default PageMessages; // ← obligatoire : c'est ce que Next affiche
```

### 5.3 `layout.tsx` : le cadre autour des pages

Une mise en page (`layout.tsx`) **entoure** toutes les pages de son dossier et de ses sous-dossiers. Elle reçoit la page à afficher dans `children`.

Les mises en page s'emboîtent comme des poupées russes :

```
app/layout.tsx                                → <html><body> ... </body></html>
  └─ app/tableau-de-bord/layout.tsx           → menu à gauche + barre en haut + {children}
       └─ app/tableau-de-bord/admin/page.tsx  → le contenu de la page admin
```

```tsx
// app/tableau-de-bord/layout.tsx (simplifié)
export default function MiseEnPageTableauDeBord({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%]">   {/* colonne de gauche */}
        <Menu />
      </div>
      <div className="w-[86%]">   {/* colonne de droite */}
        <BarreNavigation />
        {children}                {/* ← ici s'affiche la page demandée */}
      </div>
    </div>
  );
}
```

> ⚠️ **Un seul `<html>` et un seul `<body>`** dans tout le projet : dans `app/layout.tsx`. Les autres mises en page renvoient un simple `<div>`.
> Sinon : **erreur d'hydratation**. L'explication complète est dans [EXPLICATION-ERREUR-HYDRATATION.md](EXPLICATION-ERREUR-HYDRATATION.md).

### 5.4 Les routes dynamiques `[id]`

Un dossier entre crochets attrape **n'importe quelle valeur** dans l'URL :
`/tableau-de-bord/liste/enseignants/1`, `/tableau-de-bord/liste/enseignants/42`… utilisent toutes `enseignants/[id]/page.tsx`.

Pour **lire** cette valeur (utile quand tu iras chercher l'enseignant dans l'API) — en Next 16, `params` est une **Promise**, il faut donc l'attendre avec `await` :

```tsx
// app/tableau-de-bord/liste/enseignants/[id]/page.tsx
export default async function PageFicheEnseignant({
  params,
}: PageProps<"/tableau-de-bord/liste/enseignants/[id]">) {
  const { id } = await params; // "42" (toujours une chaîne de caractères)
  // ... aller chercher l'enseignant n°id
}
```

> Pour l'instant, la fiche affiche des données écrites en dur ; `params` n'est pas encore utilisé.

### 5.5 Composant serveur vs composant client (`"use client"`)

C'est **LA** notion qui perd le plus les débutants.

| | Composant **serveur** (par défaut) | Composant **client** |
| --- | --- | --- |
| Comment le reconnaître | Rien en haut du fichier | `"use client";` en **toute première ligne** |
| Où il s'exécute | Sur le serveur | Dans le navigateur |
| `useState`, `useEffect`, `onClick`… | ❌ Interdit | ✅ Autorisé |
| Bibliothèques graphiques / calendriers | ❌ | ✅ |
| Avantage | Plus léger, plus rapide, peut appeler une API directement | Interactif |

**Règle simple** : ton composant a besoin d'un clic, d'un état (`useState`) ou d'une librairie qui manipule la page (graphiques, calendriers) ? → `"use client"`. Sinon, ne mets rien.

Dans ce projet :
- **Client** : `ModaleFormulaire`, les 4 graphiques, `CalendrierEvenements`, `GrandCalendrier`, tous les formulaires, et les pages `connexion` et `parametres` (elles contiennent un formulaire).
- **Serveur** : toutes les autres pages, `Menu`, `BarreNavigation`, `CarteUtilisateur`, `Tableau`, `Pagination`, `Annonces`.

> 💡 Une page serveur **peut** afficher un composant client (ex. la page admin affiche `<GraphiqueEffectif />`). C'est même la bonne pratique : on garde la page côté serveur et on isole l'interactivité dans de petits composants clients.

### 5.6 `<Suspense>` : quand un composant lit la date du jour

Dans ce projet, `next.config.ts` active `cacheComponents: true`. Next essaie alors de **préparer les pages à l'avance**, au moment du `npm run build`.

Problème : un calendrier qui fait `new Date()` (« aujourd'hui ») ne peut pas être préparé à l'avance, sinon il afficherait pour toujours la date du jour du build. Next bloque donc le build avec l'erreur :

```
Next.js encountered the unstable value `new Date()` in a Client Component.
```

La solution : entourer ce composant d'un `<Suspense>`. Next prépare tout le reste de la page à l'avance, et ne calcule cette partie qu'**au moment de la visite**. En attendant, il affiche le `fallback`.

```tsx
import { Suspense } from "react";

<Suspense fallback={<div>Chargement...</div>}>
  <CalendrierEvenements />
</Suspense>
```

Dans le projet :
- `CalendrierEvenements` fait lui-même `new Date()` → le `<Suspense>` est placé **autour** de lui, dans les pages `admin` et `eleve` ;
- `GrandCalendrier` utilise une librairie qui lit la date en interne → le `<Suspense>` est placé **à l'intérieur** de `GrandCalendrier.tsx`, une seule fois pour les 5 pages qui l'utilisent.

### 5.7 L'alias `@/`

Au lieu d'écrire `../../../composants/Menu`, on écrit :

```tsx
import Menu from "@/app/composants/Menu";
import { role } from "@/lib/donnees";
```

`@/` = la racine du projet. C'est configuré dans `tsconfig.json` (`"paths": { "@/*": ["./*"] }`).

### 5.8 `<Image>` et `<Link>` de Next

```tsx
import Image from "next/image";
import Link from "next/link";

<Image src="/logo.png" alt="logo" width={32} height={32} />   // fichier dans public/
<Link href="/tableau-de-bord">Accueil</Link>                   // navigation sans recharger la page
```

- `<Image>` optimise automatiquement les images. `width` et `height` sont **obligatoires**.
- Une image venant d'**un autre site** doit être autorisée dans `next.config.ts` :
  ```ts
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
  ```
  Sans ça → erreur « hostname is not configured ».
- `<Link>` remplace `<a>` pour les liens **internes** : la navigation est instantanée.

### 5.9 Rediriger vers une autre page

Il y a **deux façons** de rediriger, selon l'endroit où tu es :

| Où ? | Outil | Exemple dans le projet |
| --- | --- | --- |
| Dans une **page serveur**, avant d'afficher quoi que ce soit | `redirect()` de `next/navigation` | `app/page.tsx` et `app/tableau-de-bord/page.tsx` |
| Dans un **composant client**, après une action (clic, envoi de formulaire) | `useRouter()` puis `.push()` | `app/connexion/page.tsx` |

```tsx
// app/tableau-de-bord/page.tsx — composant SERVEUR
import { redirect } from "next/navigation";
import { role } from "@/lib/donnees";

export default function TableauDeBord() {
  redirect(`/tableau-de-bord/${role}`); // role = "enseignant" → "/tableau-de-bord/enseignant"
}
```

```tsx
// app/connexion/page.tsx — composant CLIENT
"use client";
import { useRouter } from "next/navigation";

const routeur = useRouter();
const seConnecter = handleSubmit((valeurs) => {
  routeur.push("/tableau-de-bord"); // après la connexion
});
```

> 💡 Les **valeurs des rôles** (`"enseignant"`, `"eleve"`…) sont **les mêmes** que les noms des dossiers (`app/tableau-de-bord/enseignant/`…). C'est ce qui permet d'écrire simplement `` `/tableau-de-bord/${role}` ``.
>
> La page `/tableau-de-bord` sert de **« porte d'entrée »** : le logo, le lien « Accueil » et la connexion envoient tous vers elle, et c'est elle qui choisit la bonne page. Si un jour la règle change, on ne la modifie qu'à **un seul endroit**.

---

## 6. Comprendre Tailwind CSS v4

### 6.1 Le principe

Au lieu d'écrire un fichier CSS, on colle de petites classes :

```tsx
<div className="bg-white p-4 rounded-md flex items-center justify-between">
```

| Classe | Signification |
| --- | --- |
| `bg-white` | fond blanc |
| `p-4` | marge intérieure (padding) de 16px — `p-2` = 8px, `p-8` = 32px |
| `rounded-md` | coins arrondis |
| `flex` | active Flexbox |
| `items-center` | centre verticalement les enfants |
| `justify-between` | écarte les enfants au maximum |
| `gap-4` | espace de 16px entre les enfants |
| `w-[14%]` | largeur personnalisée : les **crochets** permettent n'importe quelle valeur |

### 6.2 Le responsive (mobile d'abord)

Tailwind est **mobile-first** : une classe sans préfixe s'applique **partout**, une classe préfixée s'applique **à partir de** cette largeur.

| Préfixe | À partir de |
| --- | --- |
| *(aucun)* | 0px (mobile) |
| `md:` | 768px (tablette) |
| `lg:` | 1024px (petit écran d'ordinateur) |
| `xl:` | 1280px |
| `2xl:` | 1536px |

Exemple du menu :

```tsx
<span className="hidden lg:block">{element.libelle}</span>
```
→ Le texte est **caché** sur mobile/tablette (on ne voit que l'icône), puis **affiché** à partir de 1024px.

Exemple de colonne de tableau :

```tsx
{ titre: "Téléphone", cle: "telephone", className: "hidden lg:table-cell" }
```
→ La colonne « Téléphone » n'apparaît que sur grand écran.

### 6.3 Les couleurs personnalisées (`globals.css`)

En Tailwind v4, **il n'y a plus de `tailwind.config.js`** : on déclare ses couleurs dans le CSS avec `@theme`.

```css
@theme {
  --color-bleuCiel: #C3EBFA;
  --color-bleuCielClair: #EDF9FD;
  --color-violetDoux: #CFCEFF;
  --color-violetDouxClair: #F1F0FF;
  --color-jauneDoux: #FAE27C;
  --color-jauneDouxClair: #FEFCE8;
}
```

Chaque `--color-xxx` crée automatiquement `bg-xxx`, `text-xxx`, `border-xxx`, `ring-xxx`…
→ `--color-bleuCiel` donne `bg-bleuCiel`, `text-bleuCiel`, etc.

> ⚠️ **Les noms sont sensibles à la casse.** `--color-jauneDoux` crée `bg-jauneDoux`, mais **pas** `bg-JauneDoux`. Si tu tapes la mauvaise casse, Tailwind ne dit rien : la couleur n'apparaît simplement pas.
>
> ⚠️ **Évite les noms déjà pris par Tailwind.** Tailwind a déjà des couleurs `violet`, `yellow`, `sky`… C'est pour ça qu'on a choisi `violetDoux` et `jauneDoux`, et pas `violet` ou `jaune`.

### 6.4 Les astuces utilisées dans le projet

- `odd:bg-violetDoux even:bg-jauneDoux` → les éléments impairs/pairs ont une couleur différente (cartes, annonces).
- `hover:bg-bleuCiel` → couleur au survol de la souris.
- `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2` → **centrer parfaitement** un élément au-dessus d'un autre (l'icône au milieu du graphique rond). Le parent doit avoir `relative`.
- `bg-black/60` → noir à 60 % d'opacité (fond sombre derrière la modale).

### 6.5 Styler une librairie externe

Les calendriers ont leurs propres classes CSS (`.react-calendar`, `.rbc-event`…). On ne peut pas leur mettre du Tailwind directement, donc on les **surcharge** dans `globals.css` avec `!important` :

```css
.react-calendar__tile--active {
  color: black !important;
  background-color: #C3EBFA !important;
}
```

---

## 7. Les fausses données : `lib/donnees.js`

Tant qu'il n'y a pas de backend, toutes les données viennent de ce fichier :

```js
// Rôle de l'utilisateur connecté : "admin", "enseignant", "eleve" ou "parent"
export let role = "admin";

export const utilisateurConnecte = {   // ses infos (barre du haut, Profil, Paramètres)
  nom: "Karim Kane",
  email: "karim@kane.com",
  photo: "/avatar.png",
  // ...
};

export const donneesEnseignants = [ { id: 1, nom: "John Doe", telephone: "...", ... }, ... ];
export const donneesEleves = [ ... ];
export const donneesParents = [ ... ];
// donneesMatieres, donneesClasses, donneesCours, donneesExamens, donneesDevoirs,
// donneesResultats, donneesPresences, donneesEvenements, donneesAnnonces,
// donneesMessages, evenementsCalendrier

// Le nom du rôle à afficher à l'écran (avec majuscule et accents)
export const nomDuRole = (unRole) => {
  if (unRole === "admin") return "Administrateur";
  if (unRole === "enseignant") return "Enseignant";
  if (unRole === "eleve") return "Élève";
  return "Parent";
};
```

> 💡 Le rôle s'écrit `"eleve"` **sans accent** dans le code (il sert dans l'URL), mais s'**affiche** « Élève ». C'est le rôle de la petite fonction `nomDuRole`.
>
> 💡 Le nom et la photo de l'utilisateur sont écrits **une seule fois** dans `utilisateurConnecte`, puis réutilisés partout. Si tu les changes ici, ils changent dans la barre du haut, le Profil et les Paramètres en même temps.

### Tester les différents rôles

Change simplement la valeur de `role` :

```js
export let role = "enseignant"; // ou "eleve", "parent", "admin"
```

→ Le **menu** change (certains liens disparaissent), les **boutons d'action** (ajouter/modifier/supprimer) disparaissent pour les non-admins, la **barre du haut** affiche le nouveau rôle, et `/tableau-de-bord` redirige vers la bonne page d'accueil.

> Plus tard, `role` viendra du **token JWT** de l'utilisateur connecté (voir [section 12](#12-étape-suivante--brancher-un-vrai-backend)).

---

## 8. Les composants un par un

### 8.1 `Menu.tsx` — le menu de gauche filtré par rôle

Le menu est décrit **sous forme de données**, puis affiché avec une boucle. C'est un excellent réflexe : pour ajouter un lien, on ajoute juste un objet dans le tableau.

```tsx
const sectionsMenu = [
  {
    titre: "MENU",
    elements: [
      {
        icone: "/teacher.png",
        libelle: "Enseignants",
        lien: "/tableau-de-bord/liste/enseignants", // ← le chemin COMPLET (mêmes dossiers que dans app/)
        visiblePour: ["admin", "enseignant"],       // ← qui a le droit de voir ce lien
      },
      // ...
    ],
  },
];
```

À l'affichage :

```tsx
{section.elements.map((element) => {
  if (element.visiblePour.includes(role)) {   // le rôle actuel est-il dans la liste ?
    return <Link href={element.lien} key={element.libelle}>...</Link>;
  }
})}
```

> 🔑 **`key`** : quand on affiche une liste avec `.map()`, React exige une `key` **unique** sur chaque élément. Elle lui permet de savoir quel élément a changé.

> ✅ **Règle à respecter** : chaque `lien` du menu doit correspondre à un dossier qui contient un `page.tsx`. Ajouter un lien = créer la page **en même temps**.

### 8.2 `BarreNavigation.tsx` — la barre du haut

Barre de recherche (cachée sur mobile avec `hidden md:flex`), icônes messages/annonces, badge de notification (`absolute -top-3 -right-3`), nom + rôle + photo.

Le nom, le rôle et la photo viennent de `lib/donnees.js` :

```tsx
import { nomDuRole, role, utilisateurConnecte } from "@/lib/donnees";

<span>{utilisateurConnecte.nom}</span>
<span>{nomDuRole(role)}</span>   {/* "admin" s'affiche "Administrateur" */}
<Image src={utilisateurConnecte.photo} ... />
```

### 8.3 `CarteUtilisateur.tsx` — une carte de statistique

```tsx
const CarteUtilisateur = ({ libelle }: { libelle: string }) => { ... }

// utilisation
<CarteUtilisateur libelle="enseignants" />
<CarteUtilisateur libelle="parents" />
```

`libelle` est une **prop** : un paramètre qu'on passe au composant, comme un argument de fonction. Le même composant sert 4 fois avec un texte différent.

### 8.4 Les graphiques (Recharts)

Tous suivent le même schéma :

```tsx
"use client";                                     // 1. composant client obligatoire
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const donnees = [                                 // 2. un tableau d'objets
  { jour: "Lun", presents: 60, absents: 40 },
  { jour: "Mar", presents: 70, absents: 60 },
];

<ResponsiveContainer width="100%" height="90%">   {/* 3. s'adapte au parent */}
  <BarChart data={donnees}>
    <XAxis dataKey="jour" />                      {/* 4. dataKey = nom du champ à lire */}
    <Bar dataKey="presents" name="Présents" fill="#FAE27C" />
    <Bar dataKey="absents"  name="Absents"  fill="#C3EBFA" />
  </BarChart>
</ResponsiveContainer>
```

> 💡 `dataKey="presents"` lit le **champ** (sans accent, c'est du code). `name="Présents"` est le **texte affiché** dans la légende (avec accent).

| Composant | Ce qu'il montre | Type Recharts |
| --- | --- | --- |
| `GraphiqueEffectif` | Anneaux (filles / garçons) | `RadialBarChart` |
| `GraphiquePresence` | Barres (présents / absents par jour) | `BarChart` |
| `GraphiqueFinance` | Courbes (revenus / dépenses par mois) | `LineChart` |
| `Performance` | Demi-camembert (note sur 10) | `PieChart` avec `startAngle={180} endAngle={0}` |

> ⚠️ Un graphique **responsive** a besoin d'un parent qui a une **hauteur définie** (ex. `h-[450px]`), et il doit être placé **dedans** :
>
> ```tsx
> <div className="w-full h-[500px]">
>   <GraphiqueFinance />
> </div>
> ```
>
> Sans hauteur, il fait 0px et rien ne s'affiche.

### 8.5 Les calendriers

- **`CalendrierEvenements`** (react-calendar) : petit calendrier du mois + les 3 premiers événements de `donneesEvenements`. Il utilise `useState` pour retenir la date cliquée. `locale="fr-FR"` affiche les jours et les mois en français.
- **`GrandCalendrier`** (react-big-calendar) : agenda à la semaine, de 8h à 17h. Les cours viennent de `evenementsCalendrier`.

```tsx
import moment from "moment";
import "moment/locale/fr";   // charge la traduction française
moment.locale("fr");

const [vue, setVue] = useState<View>(Views.WORK_WEEK); // vue de départ : la semaine

<Calendar
  culture="fr"
  messages={{ work_week: "Semaine", day: "Jour", ... }} // textes des boutons
  events={evenementsCalendrier}
  titleAccessor="titre"     // ← nos champs sont en français :
  startAccessor="debut"     //   on dit à l'agenda où lire chaque information
  endAccessor="fin"
  views={["work_week", "day"]}
  view={vue}
  onView={(nouvelleVue) => setVue(nouvelleVue)}
/>
```

> 💡 Par défaut, react-big-calendar cherche des champs anglais (`title`, `start`, `end`). Comme nos événements utilisent `titre`, `debut` et `fin`, on le lui indique avec les props `...Accessor`. **Retiens ce réflexe** : quand une librairie attend des noms anglais, on garde nos noms français et on lui dit où lire.

### 8.6 Le trio des listes : `Tableau` + `RechercheTableau` + `Pagination`

C'est **le motif le plus réutilisable du projet**. Toutes les pages `liste/*` ont la même forme :

```
┌───────────────────────────────────────────────────────┐
│ Tous les enseignants   [🔍 Rechercher...] (⚙)(↕)(＋)  │  ← HAUT
├───────────────────────────────────────────────────────┤
│ Infos | ID enseignant | Matières | ... | Actions      │  ← <Tableau>
│ John  | 123...        | Maths    | ... | (👁)(🗑)      │
├───────────────────────────────────────────────────────┤
│ [Précédent]     1  2  3 ... 10          [Suivant]     │  ← <Pagination>
└───────────────────────────────────────────────────────┘
```

`Tableau` est **générique** : il ne sait rien des enseignants. On lui donne 3 choses :

```tsx
<Tableau
  colonnes={colonnes}                  // 1. les en-têtes de colonnes
  donnees={donneesEnseignants}         // 2. les données
  afficherLigne={afficherLigne}        // 3. une fonction qui dessine UNE ligne
/>
```

```tsx
// 1. Les colonnes
const colonnes = [
  { titre: "Infos", cle: "infos" },
  { titre: "Téléphone", cle: "telephone", className: "hidden lg:table-cell" },
  { titre: "Actions", cle: "actions" },
];

// 3. Comment dessiner une ligne
const afficherLigne = (element: Enseignant) => (
  <tr key={element.id}>
    <td>{element.nom}</td>
    <td className="hidden lg:table-cell">{element.telephone}</td>
    <td>
      <ModaleFormulaire table="enseignant" type="supprimer" id={element.id} />
    </td>
  </tr>
);
```

> 💡 Le `className` d'une colonne doit être **le même** sur le `<th>` (dans `colonnes`) et sur le `<td>` (dans `afficherLigne`), sinon les colonnes se décalent selon la taille de l'écran.

> `RechercheTableau` et `Pagination` sont pour l'instant **visuels uniquement** : ils ne filtrent ni ne changent de page.

### 8.7 `ModaleFormulaire.tsx` — un seul bouton pour ajouter / modifier / supprimer

```tsx
<ModaleFormulaire table="enseignant" type="creer" />                         // bouton ＋ → formulaire vide
<ModaleFormulaire table="enseignant" type="modifier" donnees={enseignant} /> // bouton ✏ → formulaire pré-rempli
<ModaleFormulaire table="enseignant" type="supprimer" id={enseignant.id} />  // bouton 🗑 → confirmation
```

Comment ça marche :

1. **`useState(false)`** : la modale est fermée au départ. Clic sur le bouton → `setOuverte(true)`.
2. Si `ouverte` est vrai, on affiche un fond noir (`fixed ... bg-black/60 z-50`) et une boîte blanche au centre.
3. Dans la boîte, on choisit le contenu :
   - `supprimer` → un message de confirmation ;
   - `creer` / `modifier` → le bon formulaire, trouvé dans l'objet `formulaires` grâce au nom de la table.

```tsx
// Le "dictionnaire" : nom de la table → le formulaire à afficher
const formulaires = {
  enseignant: (type, donnees) => <FormulaireEnseignant type={type} donnees={donnees} />,
  eleve: (type, donnees) => <FormulaireEleve type={type} donnees={donnees} />,
  // ... une ligne par table
};

// Choisit ce qu'on affiche dans la modale
const afficherContenu = () => {
  // 1. Suppression → message de confirmation
  if (type === "supprimer" && id) {
    return <form>... Voulez-vous vraiment supprimer ? ... <button>Supprimer</button></form>;
  }

  // 2. Création / modification → on cherche le formulaire de cette table
  const formulaire = formulaires[table]; // ex. formulaires["enseignant"]

  // Pas de formulaire pour cette table → message au lieu d'un plantage
  if (!formulaire) {
    return <p>Formulaire introuvable !</p>;
  }

  return formulaire(type, donnees);
};

// Dans le JSX de la modale :
{afficherContenu()}
```

> 💡 `afficherContenu` est une **simple fonction qu'on appelle** (`{afficherContenu()}`), pas un composant (`<Contenu />`).
> Pourquoi ? Si on **crée un composant à l'intérieur d'un autre composant**, React le considère comme un composant tout neuf à chaque rendu : il le détruit et le recrée, et le formulaire perd ce que l'utilisateur a tapé. ESLint signale cette erreur avec le message « Cannot create components during render ».

**Le chargement différé (`dynamic`)** :

```tsx
const FormulaireEnseignant = dynamic(() => import("./formulaires/FormulaireEnseignant"), {
  loading: () => <h1>Chargement...</h1>,
});
```

→ Le code du formulaire n'est **téléchargé qu'au moment où on ouvre la modale**. La page de liste se charge donc plus vite.

> ⚠️ Les options `{ loading: ... }` doivent être écrites **directement** dans l'appel à `dynamic()`. Si tu les mets dans une variable pour éviter de les répéter (`dynamic(() => import(...), mesOptions)`), le build échoue avec : « next/dynamic options must be an object literal ». Ici, la répétition est donc normale.

Les 12 tables ont leur formulaire : enseignant, eleve, parent, matiere, classe, cours, examen, devoir, resultat, presence, evenement, annonce. Ils sont tous construits **sur le même modèle** : quand tu en comprends un, tu les comprends tous.

### 8.8 `ChampSaisie.tsx` — un champ de formulaire réutilisable

Évite de répéter libellé + input + message d'erreur pour chaque champ :

```tsx
<ChampSaisie
  libelle="Email"                     // texte affiché au-dessus
  nom="email"                         // nom du champ (doit exister dans le schéma zod)
  enregistrer={register}              // la fonction register de react-hook-form
  erreur={errors.email}               // l'erreur éventuelle, affichée en rouge
  valeurParDefaut={donnees?.email}    // la valeur de départ (en modification)
/>
```

> `donnees?.email` : le **`?.`** (« optional chaining ») évite une erreur si `donnees` est `undefined` (cas de l'ajout). Il renvoie alors simplement `undefined`.

---

## 9. Les formulaires (react-hook-form + zod)

### 9.1 Étape 1 — décrire les règles avec zod

```tsx
import { z } from "zod";

const schema = z.object({
  nomUtilisateur: z.string().min(3, { message: "Au moins 3 caractères !" }).max(20),
  email:          z.string().email({ message: "Adresse email invalide !" }),
  motDePasse:     z.string().min(8, { message: "Le mot de passe doit contenir au moins 8 caractères !" }),
  sexe:           z.enum(["homme", "femme"], { message: "Choix obligatoire !" }),

  // Un <input type="date"> renvoie du TEXTE ("2000-01-01"), pas une Date
  dateNaissance:  z.string().min(1, { message: "Ce champ est obligatoire !" }),

  // Un <input type="file"> renvoie une LISTE de fichiers : on vérifie qu'il y en a au moins 1
  photo: z.any().refine((fichiers) => fichiers?.length > 0, { message: "La photo est obligatoire !" }),
});

type Valeurs = z.infer<typeof schema>; // TypeScript déduit le type tout seul
```

> ⚠️ **Le schéma doit décrire ce que l'input renvoie vraiment.** Un `<input>` renvoie presque toujours du **texte**, même avec `type="date"` ou `type="number"`. Si le schéma attend autre chose (une `Date`, un `File`…), la validation échoue à chaque fois.

### 9.2 Étape 2 — brancher le schéma sur le formulaire

```tsx
const {
  register,                  // relie un champ au formulaire
  handleSubmit,              // vérifie les règles AVANT d'appeler notre fonction
  formState: { errors },     // les erreurs à afficher en rouge
} = useForm<Valeurs>({
  resolver: zodResolver(schema), // ← "utilise les règles zod"
});

const envoyer = handleSubmit((valeurs) => {
  console.log(valeurs); // appelé SEULEMENT si tout est valide
});
```

> `register`, `handleSubmit` et `errors` sont les noms de **react-hook-form** : ils restent en anglais. Ce qu'on écrit nous-mêmes (`envoyer`, `valeurs`, `Valeurs`) est en français.

### 9.3 Étape 3 — le JSX

```tsx
<form onSubmit={envoyer}>
  <ChampSaisie libelle="Email" nom="email" enregistrer={register} erreur={errors.email} />
  <select {...register("sexe")}>
    <option value="homme">Homme</option>
    <option value="femme">Femme</option>
  </select>
  <button>Ajouter</button>
</form>
```

`{...register("sexe")}` « déplie » plusieurs propriétés (`name`, `onChange`, `onBlur`, `ref`) sur l'élément : c'est ce qui permet à react-hook-form de suivre sa valeur.

> 💡 Dans `<option value="homme">Homme</option>`, la **valeur** (`homme`) est du code, sans majuscule ; le **texte** (`Homme`) est ce que l'utilisateur voit.

### 9.4 Un même formulaire pour ajouter ET modifier

Le formulaire reçoit `type` (`"creer"` ou `"modifier"`) et `donnees` (les valeurs actuelles, seulement en modification) :

```tsx
<h1>{type === "creer" ? "Ajouter un enseignant" : "Modifier l'enseignant"}</h1>

<ChampSaisie nom="dateNaissance" valeurParDefaut={donnees?.dateNaissance} ... />

<button>{type === "creer" ? "Ajouter" : "Enregistrer"}</button>
```

> ⚠️ Les clés de `donnees` doivent avoir **exactement le même nom** que les champs du formulaire. Si tu passes `naissance` alors que le champ s'appelle `dateNaissance`, le champ reste vide.

### 9.5 Cas particuliers à pré-remplir

Parfois la donnée n'a pas la même **forme** que le champ. On la transforme dans `valeurParDefaut` :

| Donnée dans `lib/donnees.js` | Champ du formulaire | Transformation |
| --- | --- | --- |
| `enseignants: ["Alice", "Bob"]` (un tableau) | un input texte | `valeurParDefaut={donnees?.enseignants?.join(", ")}` → `"Alice, Bob"` |
| `present: true` (un booléen) | un `<select>` Présent / Absent | `defaultValue={donnees?.present === false ? "absent" : "present"}` |
| `capacite: 20` (un nombre) | `<input type="number">` | rien à faire, l'input l'affiche tel quel (mais renvoie `"20"`, du texte !) |

### 9.6 Un formulaire hors modale : Paramètres et Connexion

`/tableau-de-bord/parametres` et `/connexion` utilisent **exactement** la même méthode (zod + `useForm` + `register`), mais directement dans une page au lieu d'une modale. La page doit alors commencer par `"use client"`, puisqu'elle utilise un hook.

Astuce de Paramètres : un mot de passe **facultatif** (vide = on ne le change pas) :

```tsx
motDePasse: z.string().refine((valeur) => valeur === "" || valeur.length >= 8, {
  message: "Le mot de passe doit contenir au moins 8 caractères !",
}),
```

`.refine()` permet d'écrire **sa propre règle** : la fonction renvoie `true` si c'est valide, `false` sinon.

---

## 10. Recettes pas à pas

### 10.1 Ajouter une nouvelle page de liste (ex. : « Salles »)

1. **Données** — dans `lib/donnees.js` :
   ```js
   export const donneesSalles = [
     { id: 1, nom: "Salle A", capacite: 30 },
     { id: 2, nom: "Salle B", capacite: 25 },
   ];
   ```
2. **Page** — copie `app/tableau-de-bord/liste/matieres/page.tsx` (très courte) vers `app/tableau-de-bord/liste/salles/page.tsx`, puis adapte :
   - le type : `type Salle = { id: number; nom: string; capacite: number }` ;
   - le tableau `colonnes` ;
   - la fonction `afficherLigne` ;
   - le titre « Toutes les salles » et `donnees={donneesSalles}`.
3. **Menu** — dans `app/composants/Menu.tsx`, ajoute :
   ```tsx
   { icone: "/class.png", libelle: "Salles", lien: "/tableau-de-bord/liste/salles", visiblePour: ["admin"] },
   ```
4. Va sur `http://localhost:3000/tableau-de-bord/liste/salles` ✅

### 10.2 Ajouter un formulaire pour une table

1. Copie un formulaire court, par exemple `app/composants/formulaires/FormulaireClasse.tsx` → `FormulaireSalle.tsx`.
2. Adapte le `schema` zod et les `<ChampSaisie>` : un champ par donnée, avec **le même nom** que dans `donneesSalles`.
3. Dans `ModaleFormulaire.tsx` :
   ```tsx
   const FormulaireSalle = dynamic(() => import("./formulaires/FormulaireSalle"), {
     loading: () => <h1>Chargement...</h1>,
   });

   const formulaires = {
     enseignant: ...,
     // ...
     salle: (type, donnees) => <FormulaireSalle type={type} donnees={donnees} />,
   };
   ```
4. Ajoute `"salle"` dans la liste des valeurs autorisées de la prop `table` (le type `table: "enseignant" | "eleve" | ...`).
5. Utilise-le : `<ModaleFormulaire table="salle" type="creer" />` et `<ModaleFormulaire table="salle" type="modifier" donnees={element} />`.

### 10.3 Ajouter une page simple (pas un tableau)

Comme `messages`, `profil` ou `parametres` :

1. Crée le dossier et le fichier : `app/tableau-de-bord/ma-page/page.tsx`.
2. Écris un composant avec `export default`. Commence par la même « carte » blanche que les autres pages :
   ```tsx
   const MaPage = () => {
     return (
       <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
         <h1 className="text-lg font-semibold">Ma page</h1>
       </div>
     );
   };
   export default MaPage;
   ```
3. Ajoute le lien dans `Menu.tsx` avec `lien: "/tableau-de-bord/ma-page"`.

> La page est automatiquement entourée du menu et de la barre du haut, parce qu'elle se trouve dans `app/tableau-de-bord/` (voir [5.3](#53-layouttsx--le-cadre-autour-des-pages)).

### 10.4 Ajouter une couleur au thème

Dans `app/globals.css`, bloc `@theme` :

```css
--color-rosePale: #FDF2FB;
```

→ `bg-rosePale`, `text-rosePale`, etc. sont disponibles immédiatement.

### 10.5 Repartir de ce projet pour un nouveau tableau de bord

1. Copie le dossier (sans `node_modules/` ni `.next/`), puis `npm install`.
2. Garde tel quel : `app/layout.tsx`, `app/tableau-de-bord/layout.tsx`, `Tableau`, `RechercheTableau`, `Pagination`, `ModaleFormulaire`, `ChampSaisie`.
3. Modifie : les couleurs dans `globals.css`, les liens dans `Menu.tsx`, les données dans `lib/donnees.js`, le titre dans `metadata` (`app/layout.tsx`).
4. Supprime les pages et formulaires dont tu n'as pas besoin.

### 10.6 Renommer un dossier ou un fichier (attention sous Windows)

Si le serveur `npm run dev` tourne, il **verrouille** les dossiers du projet : un renommage peut échouer avec « Permission denied ». Arrête le serveur (`Ctrl + C` dans le terminal), renomme, puis relance `npm run dev`.

Après un renommage, pense à mettre à jour **tous** les `import` et **tous** les liens (`href`, `lien`). La commande `npx tsc --noEmit` liste les `import` cassés.

---

## 11. Erreurs classiques à éviter

Ces erreurs ont toutes été rencontrées, puis corrigées, pendant la construction de ce projet. On les garde ici parce qu'**on les refait tous**. Si quelque chose ne marche pas dans un futur projet, parcours cette liste en premier.

### Erreurs silencieuses (aucun message, mais ça ne marche pas)

| Symptôme | Cause | Bonne pratique |
| --- | --- | --- |
| Une couleur ne s'affiche pas | `bg-JauneDoux` au lieu de `bg-jauneDoux` : Tailwind tient compte des majuscules | Une seule convention de nommage (`camelCase`) |
| Un style ne s'applique pas | Faute de frappe : `ring-gary-300`, `tewt-sm`, `item-center`, `min-w-[130px` (crochet manquant) | Installer l'extension VS Code **Tailwind CSS IntelliSense** : elle souligne les classes inconnues |
| Un bouton conditionnel n'apparaît jamais | `role === "admin" \|\| role === "enseignant" && <X />` : le `&&` passe **avant** le `\|\|`, donc pour un admin l'expression vaut `true`, et React n'affiche rien pour `true` | Toujours mettre des parenthèses : `(a \|\| b) && <X />` |
| Un graphique ne s'affiche pas / a une mauvaise taille | Le graphique était placé **à côté** de la `div` qui a la hauteur, au lieu d'être **dedans** | Graphique responsive = parent avec hauteur fixe, graphique à l'intérieur |
| Un champ n'est pas pré-rempli en modification | La donnée et le champ n'ont pas le même nom | Mêmes noms partout : données, schéma, `nom` des champs |
| Le formulaire refuse toujours la date / la photo | Le schéma attendait une `Date` et un `File`, mais les inputs renvoient du texte et une liste de fichiers | Voir [9.1](#91-étape-1--décrire-les-règles-avec-zod) |
| L'agenda est vide alors que les données existent | Les champs s'appellent `titre`/`debut`/`fin`, mais la librairie cherche `title`/`start`/`end` | Indiquer les noms avec `titleAccessor`, `startAccessor`, `endAccessor` |

### Erreurs qui cassent la page ou le build

| Symptôme | Cause | Bonne pratique |
| --- | --- | --- |
| 404 en cliquant dans le menu | Le lien ne correspondait pas au chemin des dossiers dans `app/` | L'URL = le chemin des dossiers dans `app/`, en entier |
| 404 sur Profil, Paramètres, Messages… | Le lien existait dans le menu, mais la page n'avait jamais été créée | Ajouter un lien = créer le `page.tsx` en même temps |
| Des raccourcis qui ramènent toujours à l'accueil | `<Link href="/">` laissé comme valeur provisoire | Ne jamais laisser `href="/"` « pour plus tard » : mettre la vraie destination tout de suite |
| La page plante en ouvrant une modale | `formulaires["parent"]` n'existait pas → `undefined(...)` | Vérifier qu'une valeur existe avant de l'utiliser (`if (!formulaire) ...`) |
| Le formulaire perd la saisie / erreur ESLint « Cannot create components during render » | Un composant défini **à l'intérieur** de `ModaleFormulaire` | Une fonction qu'on appelle (`{afficherContenu()}`), ou un composant défini **en dehors** |
| `npm run build` échoue : « unstable value `new Date()` » | Un calendrier lit la date du jour pendant la préparation de la page | Entourer de `<Suspense>` (voir [5.6](#56-suspense--quand-un-composant-lit-la-date-du-jour)) |
| `npm run build` échoue : « next/dynamic options must be an object literal » | Options de `dynamic()` rangées dans une variable | Écrire `{ loading: ... }` directement dans chaque appel |
| « Permission denied » en renommant un dossier | Le serveur `npm run dev` verrouille les fichiers (Windows) | Arrêter le serveur avant de renommer (voir [10.6](#106-renommer-un-dossier-ou-un-fichier-attention-sous-windows)) |
| Erreur d'hydratation | Un `<html>` en trop dans une mise en page enfant | Voir [EXPLICATION-ERREUR-HYDRATATION.md](EXPLICATION-ERREUR-HYDRATATION.md) |

### Hygiène du projet

| Avant | Après | Pourquoi |
| --- | --- | --- |
| Deux dossiers `assignements/` et `assignments/` | Un seul dossier `devoirs/` | Un doublon crée une 2ᵉ URL et on finit par modifier le mauvais fichier |
| Le bouton ＋ des parents ouvrait le formulaire des enseignants | `table="parent"` | Après un copier-coller, relire **toutes** les valeurs propres à la ressource |
| `moment` utilisé mais absent de `package.json` | `npm install moment` | Toute librairie qu'on `import` doit être déclarée, sinon elle peut disparaître à la prochaine mise à jour |
| Outil de debug `<RechartsDevtools />` dans les graphiques | Retiré | Les outils de debug ne doivent pas partir en production |
| Onglet « Create Next App » | « Daroul Tanzil — Tableau de bord » | Penser à `metadata` dans `app/layout.tsx` au début de chaque projet |
| Pages `/`, `/tableau-de-bord`, `/connexion` vides ou par défaut | Redirections + vraie page de connexion | Un visiteur arrive toujours par `/` : cette page doit mener quelque part |
| Nom de l'utilisateur écrit en dur dans la barre du haut | `utilisateurConnecte` dans `lib/donnees.js` | Une information = un seul endroit, réutilisé partout |
| Un mélange de noms anglais et français | Tout en français, sauf les noms imposés | Une seule langue = on devine les noms sans chercher |
| ESLint bloquait sur les `any` (erreur) | Règle passée en avertissement dans `eslint.config.mjs` | `any` est toléré tant que les données sont fausses ; on mettra de vrais types avec le backend |

> ✅ **Réflexe avant chaque commit** : `npx tsc --noEmit` (erreurs de types) puis `npm run build` (vérifie que toutes les pages se construisent).

### Ce qui reste volontairement à faire (avec le backend)

Ces éléments ne marchent pas encore, et c'est normal : ils ont besoin d'un vrai serveur.

- **Recherche (`RechercheTableau`) et pagination (`Pagination`)** : affichées, mais sans effet. On les branchera sur l'API (`/api/enseignants/obtenir?recherche=...&page=2`).
- **Boutons filtre / tri** : affichés, sans effet.
- **Envoi des formulaires** : ils vérifient les champs puis font un `console.log`. Voir [12.2](#122-envoyer-un-formulaire).
- **Connexion** : `/connexion` vérifie le format de l'email et du mot de passe, puis entre directement dans le tableau de bord. Voir [12.4](#124-lutilisateur-connecté).
- **Suppression** : le bouton « Supprimer » de la modale ne supprime rien.

---

## 12. Étape suivante : brancher un vrai backend

Le backend suit les conventions habituelles (Node/Express, routes `/api/xxx`, fonctions `obtenirX` / `ajouterX` / `modifX` / `supprimerX`, JWT en **Bearer token**, réponses `{ success, message, ...donnees }`).

> ⚠️ **Les noms des champs doivent être les mêmes des deux côtés.** Si le frontend envoie `{ nom, telephone }`, le modèle Mongoose doit avoir `nom` et `telephone`, sinon les données se perdent en route.

### 12.1 Lire des données dans une page serveur

Une page serveur peut être `async` et appeler l'API directement — **pas besoin de `useEffect`** :

```tsx
// app/tableau-de-bord/liste/enseignants/page.tsx
const PageListeEnseignants = async () => {
  const reponse = await fetch(`${process.env.API_URL}/api/enseignants/obtenir`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const { success, enseignants } = await reponse.json();

  if (!success) return <p>Impossible de charger les enseignants.</p>;

  return <Tableau colonnes={colonnes} afficherLigne={afficherLigne} donnees={enseignants} />;
};
```

> ⚠️ Avec MongoDB, l'identifiant s'appelle `_id` (pas `id`). Pense à adapter `key={element._id}` et les liens `/enseignants/${element._id}`.

### 12.2 Envoyer un formulaire

Dans la fonction `envoyer` du formulaire, remplace le `console.log` :

```tsx
const envoyer = handleSubmit(async (valeurs) => {
  const reponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/enseignants/ajout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(valeurs),
  });
  const resultat = await reponse.json();
  if (resultat.success) {
    // fermer la modale, rafraîchir la liste...
  }
});
```

### 12.3 Variables d'environnement

Crée un fichier `.env.local` (jamais commité) :

```bash
API_URL=http://localhost:5000              # lisible uniquement côté serveur
NEXT_PUBLIC_API_URL=http://localhost:5000  # lisible aussi dans le navigateur
```

> Règle Next : seules les variables qui commencent par **`NEXT_PUBLIC_`** sont accessibles dans un composant client. Ces noms-là sont imposés par Next et restent en anglais.

### 12.4 L'utilisateur connecté

Pour remplacer `export let role = "admin"` et `utilisateurConnecte` :
- dans `app/connexion/page.tsx`, à la place du `routeur.push("/tableau-de-bord")` direct, on envoie email + mot de passe à `/api/auth/login` et on reçoit `{ token, user }` ;
- on stocke le token (cookie de préférence) ;
- on partage l'utilisateur (nom, rôle) dans toute l'application avec un **Context React** (`createContext` + `useState`) — pas besoin de Redux.

---

## 13. Lexique

| Mot | Définition simple |
| --- | --- |
| **Composant** | Une fonction qui renvoie du JSX (un morceau d'écran). Son nom commence par une majuscule. |
| **JSX** | Le « HTML dans du JavaScript » qu'on écrit dans les `return`. On y écrit `className` au lieu de `class`. |
| **Props** | Les paramètres d'un composant : `<CarteUtilisateur libelle="enseignants" />` → `libelle` est une prop. |
| **State (`useState`)** | Une valeur que le composant **retient** et qui, quand elle change, redessine l'écran. |
| **`children`** | La prop spéciale qui contient ce qu'on met **entre** les balises d'un composant. |
| **Hook** | Une fonction React qui commence par `use` (`useState`, `useForm`…). Uniquement dans les composants client. |
| **Route dynamique** | Un dossier `[id]` qui accepte n'importe quelle valeur dans l'URL. |
| **Redirection** | Envoyer automatiquement l'utilisateur vers une autre URL (`redirect()` ou `routeur.push()`). |
| **Hydratation** | Le moment où React « réveille » le HTML envoyé par le serveur pour le rendre interactif. |
| **Chargement différé (lazy loading)** | Charger un morceau de code seulement quand on en a besoin (`dynamic()`). |
| **Mobile-first** | On écrit d'abord le style pour mobile, puis on ajoute `md:`, `lg:`… pour les grands écrans. |
| **Accessor** | Une option qui dit à une librairie **dans quel champ** lire une information (`titleAccessor="titre"`). |
| **Optional chaining `?.`** | `donnees?.email` : lit `email` seulement si `donnees` existe, sinon renvoie `undefined` sans planter. |
| **Spread `{...obj}`** | « Déplie » toutes les propriétés d'un objet sur un élément ou dans un autre objet. |
| **camelCase / PascalCase** | `donneesEleves` (minuscule au début) / `GrandCalendrier` (majuscule au début). |
| **Données fictives (mock)** | Fausses données utilisées en attendant le vrai backend (`lib/donnees.js`). |
