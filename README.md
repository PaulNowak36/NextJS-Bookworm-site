# NextJS-Bookworm-Site

Ce dépôt contient un site web statique construit avec **Next.js** et **React**, à partir d'une base Bookworm adaptée au contexte du projet **INOV**.

## Contexte du projet

Le projet a été réalisé pour proposer un site vitrine moderne, rapide et facilement maintenable, avec :

- une navigation claire entre les activités, services et projets,
- un contenu éditorial modifiable dans des fichiers Markdown/MDX,
- une génération statique adaptée à un hébergement simple (ex: GitHub Pages).

## Organisation du projet

Le code principal se trouve dans le dossier `inov-statique/`.

Structure importante :

- `inov-statique/app/` : routes et pages Next.js (App Router)
- `inov-statique/content/` : contenus éditoriaux (`.md` / `.mdx`)
- `inov-statique/layouts/` : composants de layout et sections réutilisables
- `inov-statique/public/` : images, favicon et assets statiques
- `inov-statique/config/` : configuration du site (menu, thème, réseaux, etc.)
- `inov-statique/styles/` : styles globaux et composants
- `inov-statique/lib/` : utilitaires (parsing contenu, génération JSON, helpers)

## Pages principales

Le site inclut notamment :

- **Accueil** (`/` et `/accueil`)
- **Services** (`/services`)
- **Projets** (`/projets`)
- **Équipe** (`/equipe`)
- **Contact** (`/contact`)
- **Recherche** (`/search`)
- pages de catégories, tags, auteurs, et pages de contenu dynamique

## Technologies utilisées

- **Next.js 14** (App Router)
- **React 18**
- **MDX** (`@next/mdx`) pour le contenu enrichi
- **Sass** + **Tailwind CSS** pour le style
- **GitHub Actions** pour l'automatisation du déploiement statique

## Installation et lancement en local

### 1) Cloner le dépôt

```bash
git clone <URL_DU_REPO>
cd NextJS-Bookworm-site
```

### 2) Installer les dépendances

```bash
cd inov-statique
npm ci
```

### 3) Lancer le projet

```bash
npm run dev
```

Ensuite ouvre ton navigateur sur :

- `http://localhost:3000`

Tu arriveras sur la page d'accueil du site.

## Scripts utiles

Dans `inov-statique/` :

```bash
npm run dev
npm run build
npm run build:pages
npm run preview:static
```

- `dev` : développement local
- `build` : build Next.js de production
- `build:pages` : build statique configuré pour GitHub Pages
- `preview:static` : aperçu local du rendu statique exporté


## Déploiement GitHub Pages (repo public)

Le déploiement automatique est configuré via **GitHub Actions**.

> ⚠️ Important : pour ce projet, l’hébergement GitHub Pages fonctionne lorsque le dépôt est **public**.

### Activer l’hébergement

1. Ouvre le dépôt sur GitHub
2. Va dans **Settings > Pages**
3. Dans **Source**, sélectionne **GitHub Actions**
4. Push un commit sur la branche `main`

Le workflow `.github/workflows/deploy.yml` se lance automatiquement et publie le dossier statique généré.

### Voir le site en ligne

- Onglet **Actions** : tu peux suivre l’état du workflow de déploiement
- URL de production (format) : `https://<user>.github.io/<repo>/`
- Exemple : `https://paulnowak36.github.io/NextJS-Bookworm-site/`

Si le workflow est vert mais que le site n’est pas encore visible, attends 1 à 2 minutes puis recharge la page.
