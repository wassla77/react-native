function additionner(...nombres) {
    // Utilisez la méthode reduce pour additionner les nombres
    return nombres.reduce((total, nombre) => total + nombre, 0);
  }
  
  // Test de la fonction
  console.log(additionner(1, 2, 3, 4, 5)); // Attendu : 15
  console.log(additionner(10, 20, 30)); // Attendu : 60
  console.log(additionner(2, 4)); // Attendu : 6
  console.log(additionner(1)); // Attendu : 1
  console.log(additionner()); // Attendu : 0 (aucun argument)
  