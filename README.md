# [Visual Barbell](https://www.visualbarbell.com/) 🏋 🏋️‍♀️ [![Netlify Status](https://api.netlify.com/api/v1/badges/abaa91d3-0289-4252-988c-9433a93a236d/deploy-status)](https://app.netlify.com/sites/sharp-leakey-173f74/deploys) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jbberinger/visual-barbell-calculator/blob/master/public/LICENSE.txt)

#### Built with: [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) + [SCSS](https://sass-lang.com/)
Visual Barbell is a modern web application for visualizing and calculating barbell weights.

* **Equipment:** Customize plate counts and equipment weights.
* **Units:** Choose between lb and kg, and convert between them.
* **Dimensions:** Dimensions and colors are based on real equipment.
* **Persistent Settings:** Equipment settings instantly save and persist between sessions.

## Installation 📦

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnthonyMickaelAlexis/visual-barbell-calculator.git
   cd visual-barbell-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```
   The application will open in your browser at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```
   This creates an optimized production build in the `build` folder.

5. **Deploy to GitHub Pages** (optional)
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys the app to GitHub Pages

## Tips 💪
**Plates are calculated in pairs**

* Plate counts are calculated in pairs and match the barbell drawn on the screen.
  * 225lb = (2 x 45lb) per side + 45lb barbell
  * 327.5kg = (6 x 25kg + 1 x 1.25kg + 2.5kg collar) per side + 20kg barbell

**Equipment**

* The default plate counts and equipment weights are based on those commonly available in commercial gyms.
* Can be customized to meet the needs of powerlifters, weightlifters, and those with limited equipment.

**Rounding**
* Plate counts are conservative and will always round down.

## Screenshots 🤳
<img src="https://i.imgur.com/UhwyZSt.png" height="350"> <img src="https://i.imgur.com/JFOxGiv.png" width="500">

## Contributors
- **Original Author**: Justin Beringer (2019)
- **Enhanced by**: Anthony Mickael Alexis (2025) - French translation, plate weight calculation fix, weight proximity suggestions, UI improvements, and default configuration updates

___________________________________________________________________________________________________

# [Visual Barbell](https://www.visualbarbell.com/) 🏋 🏋️‍♀️

#### Construit avec : [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) + [SCSS](https://sass-lang.com/)
Visual Barbell est une application web moderne pour visualiser et calculer les poids d'haltères.

* **Équipement :** Personnalisez le nombre de disques et les poids de l'équipement.
* **Unités :** Choisissez entre lb et kg, et convertissez entre eux.
* **Dimensions :** Les dimensions et les couleurs sont basées sur du véritable équipement.
* **Paramètres persistants :** Les paramètres de l'équipement se sauvegardent instantanément et persistent entre les sessions.

## Installation 📦

### Prérequis
- [Node.js](https://nodejs.org/) (v14 ou supérieur)
- npm (inclus avec Node.js) ou [yarn](https://yarnpkg.com/)

### Instructions d'installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/AnthonyMickaelAlexis/visual-barbell-calculator.git
   cd visual-barbell-calculator
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm start
   # ou
   yarn start
   ```
   L'application s'ouvrira dans votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000)

4. **Compiler pour la production**
   ```bash
   npm run build
   # ou
   yarn build
   ```
   Cela crée une version de production optimisée dans le dossier `build`.

5. **Déployer sur GitHub Pages** (optionnel)
   ```bash
   npm run deploy
   # ou
   yarn deploy
   ```

### Scripts disponibles

- `npm start` - Lance l'application en mode développement
- `npm test` - Lance les tests
- `npm run build` - Compile l'application pour la production
- `npm run deploy` - Déploie l'application sur GitHub Pages

## Conseils 💪
**Les disques sont calculés par paires**

* Le nombre de disques est calculé par paires et correspond à la barre dessinée à l'écran.
  * 225lb = (2 x 45lb) par côté + barre de 45lb
  * 327,5kg = (6 x 25kg + 1 x 1,25kg + collier de 2,5kg) par côté + barre de 20kg

**Équipement**

* Le nombre de disques et les poids d'équipement par défaut sont basés sur ceux couramment disponibles dans les salles de sport commerciales.
* Peut être personnalisé pour répondre aux besoins des powerlifters, haltérophiles et ceux avec un équipement limité.

**Arrondi**
* Le nombre de disques est conservateur et arrondira toujours vers le bas.

## Captures d'écran 🤳
<img src="https://i.imgur.com/UhwyZSt.png" height="350"> <img src="https://i.imgur.com/JFOxGiv.png" width="500">
