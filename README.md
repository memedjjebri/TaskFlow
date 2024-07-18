TaskFlow: 

Contexte du projet

* TaskFlow est une application web conçue pour faciliter la gestion des tâches quotidiennes. Elle permet aux utilisateurs de créer, modifier, compléter et supprimer des tâches, offrant ainsi une solution simple et efficace pour rester organisé.

Fonctionnalités

 * Inscription et connexion des utilisateurs
 * Création, modification, et suppression des tâches
 * Marquer les tâches comme complétées
 * Affichage des tâches en temps réel
 * Déconnexion de l'utilisateur


Technologies employées

 * Frontend
 - React
 - Next.js
 - Tailwind CSS
 - Backend
 - Node.js
 - Express
 - MongoDB
 - Mongoose


Modélisation de la base de données

Task Schema

Champ	Type	Description
_id	ObjectId	Identifiant unique de la tâche
task	String	Description de la tâche
completed	Boolean	Statut de la tâche (complétée ou non)
createdAt	Date	Date de création de la tâche
updatedAt	Date	Date de dernière mise à jour de la tâche

Structure du projet


frontend/
├── components/
│   ├── AddTask.tsx
│   ├── Header.tsx
│   ├── Loading.tsx
│   ├── Login.tsx
│   ├── NoTask.tsx
│   ├── Signup.tsx
│   └── Task.tsx
├── pages/
│   ├── _app.tsx
│   ├── index.tsx
│   └── api/
│       └── task/
│           ├── all.ts
│           ├── new.ts
│           ├── delete/
│           │   └── [id].ts
│           └── complete/
│               └── [id].ts
└── styles/
    └── globals.css


backend/
├── models/
│   └── tasks.ts
├── utils/
│   └── database.ts
├── routes/
│   ├── task.ts
│   └── user.ts
└── app.ts

Auteurs
JEBRI Mohamed

