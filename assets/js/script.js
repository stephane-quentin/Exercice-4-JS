function ex4(){
  var lstName = document.getElementById("lastname").value; //variable lstname qui met le texte nom : et récupére l'info' de l'id lastname tapé auparavant
  var frstName = document.getElementById("firstname").value; //idem
  var cty = document.getElementById("city").value; //idem
  var result = "Nom : " + lstName + '\n' + "Prénom : " + frstName + '\n' + "Ville : " + cty;

  if(isNaN(lstName) && isNaN(frstName) && isNaN(cty)){ //condition isNan pour vérifer que ce n'est pas un nombre
  alert(result); // affiche une boite de dialogue avec toutes les variables à la ligne
  } else {
      alert('Erreur!');
        }
}
