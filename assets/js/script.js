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
    const table = document.getElementById("clientsTable");

    const row = table.insertRow();
    const nomCell = row.insertCell();
    const numeroCompteCell = row.insertCell();
    const actionCell = row.insertCell();

    nomCell.textContent = this.nom;
    numeroCompteCell.textContent = this.numeroCompte;

    const button = document.createElement("button");
    button.textContent = "Modifier";
    button.className = "button";
    button.addEventListener("click", () => this.modifierSolde(100));
    actionCell.appendChild(button);
  }
}

const clients = [
  new Client("Dupont", "Alice", "1990-05-15", 2500, "1234567890"),
  new Client("Martin", "Jean", "1985-02-10", 1500, "0987654321"),
  new Client("Lefebvre", "Sophie", "1992-08-20", 3500, "5678901234"),
  new Client("Thomas", "Paul", "1978-11-28", 5000, "4321098765"),
  new Client("Robert", "Emma", "1982-03-07", 1800, "7890123456"),
  new Client("Gagnon", "Louis", "1995-06-02", 4200, "2109876543"),
  new Client("Tremblay", "Julie", "1989-09-12", 3000, "6543210987"),
  new Client("Lavoie", "Alexandre", "1991-12-25", 2800, "3456789012"),
  new Client("Girard", "Marie", "1980-04-18", 2000, "8765432109"),
  new Client("Beaulieu", "Luc", "1975-07-30", 4000, "9012345678")
];

clients.forEach(client => {
  client.afficherInformations(); // Affiche les informations
});