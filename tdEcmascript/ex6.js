// TODO : Déstructurez un objet qui contient des informations sur un produit en extrayant les propriétés telles que le nom, le prix, etc.
const produit = {
nom: "Téléphone",
prix: 500,
stock: 10,
description: "Un smartphone haut de gamme."
};
// TODO : Utilisez la déstructuration pour extraire les propriétés du produit
const { nom, prix, description } = produit;
// TODO (Défi) : Utilisez la déstructuration pour extraire le stock du produit, mais en renommant la variable stock en stockDisponible
// TODO (Défi) : Calculez le prix total en multipliant le prix par la quantité en stock (stockDisponible)
// Test de la déstructuration
console.log(`Nom du produit : ${nom}`);
console.log(`Prix du produit : ${prix} €`);
console.log(`Description du produit : ${description}`);
// TODO (Défi) : Affichez la quantité en stock (stockDisponible) et le prix total