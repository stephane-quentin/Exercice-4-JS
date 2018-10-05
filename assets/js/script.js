function ex4(){
  var lstname = "Nom : " + document.getElementById("lastname").value; //variable lstname qui met le texte nom : et récupére l'info' de l'id lastname tapé auparavant
  var frstname = "Prénom : " + document.getElementById("firstname").value; //idem
  var cty = "Ville : " + document.getElementById("city").value; //idem
  alert(lstname +'\n' + frstname +'\n' + cty); // affiche une boite de dialogue avec toutes les variables à la ligne
}
