FROM node:22

# Crée un dossier de travail
WORKDIR /app

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL


COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Lancer le serveur de développement Next
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]