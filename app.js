prompt (" Pas de problèmes pour venir jusqu'ici? ")

/*const couleurs = document.querySelector("body");


document.addEventListener("keydown", (event) => {
    const espace = event.key;
    if (espace === "space"){
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        alert("La couleur de fond a changé")
        document.querySelector("body").style.backgroundColor = random_color
        return;
    }
})

function handleKeyUp(evt){
    var key = evt.keyCode
  if (key === 32) {
  alert('La couleur de fond a changé')
  document.querySelector('body').style.backgroundColor = couleurs.style.backgroundColor("[Math.floor(Math.random() * colors.length)]")
  }}*/
  window.addEventListener('keyup', handleKeyUp)

  var paragraphe = document.getElementById("paragraphe"); 

  var pseudo = prompt('Entrez votre nom/pseudo')

paragraphe.innerHTML += 'Salut <b>' + pseudo + "</b> moi c'est Théo Chabat, je suis étudiant à l'IIM en première annéeet je souhaiterai en A2 aller en game Art. Passioné par l'art depuis que je suis gamin j'ai décidé de poursuivre ce rêve après mon bac en allant dans des études de design numérique et plus tard en étant chara designer. Comme première axe l'année prochaine je demanderai Game Art et en second choix ça sera sûrement Création & Design qui reste toujours dans la création graphique bien que l'animation 3D pourrait m'être bénéfique pour le développement de mes capacités de modélisation et de chara design. Le point très positif de l'IIM est la première année qui permet de voir les 5 axes proposées, explorer tous les corps de métiers qui sont relié permet une vue d'ensemble ainsi qu'une acquisition de compétence dans divers domaine avec l'apport des bases des 5 axes.";

