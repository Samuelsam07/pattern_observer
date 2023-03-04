// Importation du module events de Node.js qui implémente le pattern Observer
const { EventEmitter } = require('events');

// Classe de chat étendant l'objet EventEmitter
class Chat extends EventEmitter {
  constructor() {
    // Appel du constructeur parent
    super();
  }

  // Méthode pour envoyer un message à tous les observateurs du chat
  sendMessage(message) {
    console.log(`Message envoyer: ${message}`);
    // Émission d'un événement "message" avec le message comme argument
    this.emit('message', message);
  }
}

// Classe d'observateur représentant un utilisateur du chat
class ChatUser {
  constructor(nom) {
    this.nom = nom;
  }

  // Méthode pour recevoir et afficher les messages envoyés par le chat
  update(message) {
    console.log(`${this.nom} message recu: ${message}`);
  }
}

// Création d'un objet de chat
const chat = new Chat();

// Création de trois utilisateurs de chat
const user1 = new ChatUser("Betch");
const user2 = new ChatUser("Abi");
const user3 = new ChatUser("Elora");
const user4 = new ChatUser("Ema");

// Ajout de tous les utilisateurs en tant qu'observateurs du chat en écoutant l'événement "message"
chat.on('message', message => {
  user1.update(message);
  user2.update(message);
  user3.update(message);
  user4.update(message);
});

// Envoi d'un message à tous les utilisateurs
chat.sendMessage(" bonjour!");

// Suppression d'un utilisateur en tant qu'observateur du chat en retirant son écouteur d'événement
chat.removeListener('message', user2.update);

// Envoi d'un autre message aux deux utilisateurs restants
chat.sendMessage("comment vous allez , Abi and Elora?");
