// envoie mail
function sendEmail() {
    var form = document.getElementById("formulaire");
    var name = form.elements["name"].value;
    var email = form.elements["email"].value;
    var message = form.elements["message"].value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name && email && message && emailPattern.test(email)) {
        var mailtoLink = "mailto:laurent.chen.pro@gmail.com" +
            "?subject=" + encodeURIComponent("Site portfolio : Nouveau message de " + name) +
            "&body=" + encodeURIComponent("Nom: " + name + "\n" +
                "Email: " + email + "\n\n" +
                "Message:\n" + message);

        window.location.href = mailtoLink;
    }
    else {
        if (!emailPattern.test(email)) {
            alert("Veuillez saisir une adresse e-mail valide.");
        } else {
            alert("Veuillez remplir tous les champs du formulaire.");
        }
        event.preventDefault();
    }
}
// autoriser les tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Fonction pour afficher l'image dans la modale
function agrandirImage(img) {
    console.log("Image cliquée : ", img.src); // Ajout d'un log pour vérifier
    const modale = document.getElementById("imageModale");
    const imageZoom = document.getElementById("imageZoom");
    imageZoom.src = img.src; // Copier l'URL de l'image cliquée
    modale.style.display = "flex"; // Afficher la modale
}

// Fonction pour fermer la modale
function fermerImage() {
    const modale = document.getElementById("imageModale");
    modale.style.display = "none"; // Cacher la modale
}

// Attacher l'événement de clic à toutes les divs avec la classe "image-container"
document.querySelectorAll('.image-container').forEach(div => {
    div.addEventListener('click', function () {
        const img = div.querySelector('img');  // Sélectionner l'image à l'intérieur de la div
        agrandirImage(img);  // Appeler la fonction avec l'image cliquée
    });
});

// Ajouter un Event Listener pour fermer la modale
const imageModale = document.getElementById("imageModale");
imageModale.addEventListener('click', fermerImage);