const nom = "Alice";
const email = "alice@email.com";
const age = 30;

// Créez un objet "utilisateur" en utilisant les littéraux d'objet améliorés
const utilisateur = {
  nom,  // Utilisation de la variable "nom" comme nom de propriété
  email,  // Utilisation de la variable "email" comme nom de propriété
  age    // Utilisation de la variable "age" comme nom de propriété
};

// Test de l'objet utilisateur
console.log(utilisateur); // Attendu : { nom: 'Alice', email: 'alice@email.com', age: 30 }