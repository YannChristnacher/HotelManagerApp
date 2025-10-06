## Hotel Manager App
### Prerequis
- Docker

## Variables d'environnements
Deux environnements sont disponibles :
- .env.demo
- .env.dev

### Commandes 
```php
// Build les images dockers
make build 

// Lance les containers
make start

// Réinitialise la base de données, lance les migrations et les seeders
make resetDb

// Stop les containers
make down

// Initialise l'environnement en dev
make initDevEnv

// Initialise l'environnement en demo
make initDemoEnv
```
### Lancer le projet 
```php
// Initialise l'environnement en dev
make initDevEnv

// Build les images dockers
make build 

// Lance les containers
make start

// Réinitialise la base de données, lance les migrations et les seeders
// /!\ Si la commmande est lancée directement après "make start" il est possible qu'elle n'arrive pas à se connecter à la bdd le temps que le service "db" se lance.
// Il faut réessayer quelques secondes après
make resetDb

```
### Url d'accès
- http://localhost:3000 Front
- http://localhost:8000 Back
- http://localhost:9001/ Minio (stockage des documents) Accésible avec Minio / Minio123

### Architectures 
Je suis partie sur une architecture classique mono repo avec un service sur Laravel pour l'api et un service NuxtJs pour le front.
Concernant le back j'ai essayé de respecter les principes suivants :
- Garant de la sécurité, c'est lui qui gère la validation et le stockage;
- Aucune logique dans les controllers. Chaque action a une classe dédiée. 
- Préviligié les dtos au tableau associatif
- Projet scallable
- Stockage séparé dans un S3

J'évite aussi d'écrire trop de commentaire, je ne trouve pas forcément ça pertinent et ça m'oblige à mieux nommer mes éléments.

TS est pour moi indispensable maintenant quand je fais du front. je trouve que ça aide beaucoup au dev et évite pas mal d'erreur
J'ai également choisi de ne pas travailler avec un store. La taille de l'application ne justifiait pas selon moi son utilisation par rapport au danger que ça peut apporter (flou dans l'information, difficulté à retrouver le cheminement des datas, etc)

J'ai fais le choix de ne pas faire de tests car :
- Côté front je pense que TS évite déjà pas mal d'erreur pou une application de cette taille
- Côté back je prefère attendre / retour utilisateur pour identifier les points sensibles et concentrer les tests là dessus



### Temps passé
J'y ai consacré à peu près 3 jours complet de travail

### Amélioration
Côté back :
- Swagger pour documenter l'api
- Un système d'authentification (même basique comme un X-Token)
- Redis pour un système de cache
- Des logs afin de tracer des éventuelles soucis ainsi que pour avoir des metrics sur l'utilisation du produit
- Faire un peu plus de nettoyage de l'installation standard de Laravel :)
- Tests sur les points sensibles
- Terminer mon package et l'utiliser pour permettre de transformer les classes php (Models, Dto) en interface TS. Ca permetterai de tenir à jour plus facilement les interfaces correspondantes


Côté front : 
- Améliorer l'expérience utilisateur comme des transition entre les pages, des animations sur le dom lors d'évènement (comme quand on supprime une photo ou qu'on change l'ordre des photos)
- Améliorer la partie photo, je ne suis pas entièrement convaincu par ma réalisation, un peu trop brouillon
- Standardiser un peu plus le style (créer plus de composant des éléments réutilisables, utiliser le système de token de Chakra pour utiliser les mêmes espacements, etc)
- Rendre responsive
- Utiliser le côté serveur de Next comme proxy avec l'api

Côté infra :
- Je pense qu'il y a pas mal de choses à revoir dans ma configuration, n'étant pas un spécialiste du DevOps il est difficile pour moi d'analyser plus loin que ça

### Feedback
Tout d'abord merci pour cet exercice, c'était très plaisant à réaliser !
Je pense avoir réussi l'objectif détaillé dans votre cahier des charges et je suis vraiment curieux d'avoir votre retour.
Je ne sais pas si cela va se voir ou non mais c'est la première fois que j'utilise Next / React étant plus habitué à VueJS.
Je m'intérroge aussi sur l'architecture demandé, a première vue une application comme ça (Application de gestion) j'aurais utilisé Inertia directement sur Laravel.


