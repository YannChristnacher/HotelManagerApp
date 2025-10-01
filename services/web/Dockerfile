FROM node:22

# Crée un dossier de travail
WORKDIR /app

# Copier uniquement les fichiers de dépendances pour optimiser le cache
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du projet
COPY . .

# Exposer le port Next (3000 par défaut)
EXPOSE 3000

# Lancer le serveur de développement Next
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]