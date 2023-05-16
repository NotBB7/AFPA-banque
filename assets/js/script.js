class Client {
      constructor(nom, prenom, dateNaissance, solde, numeroCompte) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.solde = solde;
        this.numeroCompte = numeroCompte;
      }

      modifierSolde(montant) {
        this.solde += montant;
      }

      afficherInformations() {
        const container = document.getElementById("clientsContainer");

        const clientInfo = document.createElement("div");
        clientInfo.innerHTML = `
          <p>Prénom: ${this.prenom} <br> Numéro de compte: ${this.numeroCompte}</p>
          <hr>
        `;

        container.appendChild(clientInfo);
      }
    }

    const clients = [];

    for (let i = 1; i <= 10; i++) {
      const client = new Client(
        "Nom" + i,
        "Prénom" + i,
        "1990-01-01",
        1000 * i,
        "Compte" + i
      );
      clients.push(client);
    }

    clients.forEach((client) => {
      client.modifierSolde(500); // Ajoute 500 au solde de chaque client
      client.afficherInformations(); // Affiche les informations de chaque client
    });