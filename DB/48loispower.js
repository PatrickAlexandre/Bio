// Fichier : powers_48_lois.js

// Définition des lois
const powers48Lois = [
    "Loi 1: Ne jamais dépasser le maître",
    "Loi 2: Ne jamais mettre en péril la réputation de son maître",
    "Loi 3: Concevoir une apparence irréprochable",
    // Ajoutez les autres lois ici...
];

// Fonction pour afficher les lois
function afficherPowers48Lois() {
    console.log("Les 48 lois du pouvoir :");
    powers48Lois.forEach((loi, index) => {
        console.log(`${index + 1}. ${loi}`);
    });
}

// Appel de la fonction pour afficher les lois
afficherPowers48Lois();
