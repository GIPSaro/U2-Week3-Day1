class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  showFullUser() {
    return (
      this.firstName +
      ", " +
      this.lastName +
      ", " +
      this.age +
      ", " +
      this.location
    );
  }
  static userAgeComparison(user1, user2) {
    if (user1.age === user2.age) {
      return `${user1.firstName} e ${user2.firstName} sono coetanei.`;
    } else if (user1.age > user2.age) {
      return `${user1.firstName} è più grande di ${user2.firstName}.`;
    } else {
      return `${user1.firstName} è più giovane di ${user2.firstName}.`;
    }
  }
}

let newUser = new User("Giorgia", "Ipsaro Passione", 35, "Capo d'Orlando");

const users = [
  new User("Franco", "Bollo", 55, "Francoforte"),
  new User("Pino", "Pallino", 23, "Pollina"),
  new User("Marco", "Dirondiro", 23, "Domodossola"),
  new User("Gianni", "Pinotto", 19, "Palermo"),
];

console.log(User.userAgeComparison(newUser, users[2]));

// Esercizio 2

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

class Petlist {
  constructor() {
    this.pets = [];
  }
  addPet(pet) {
    this.pets.push(pet);
  }
}

const addForm = document.getElementById("aggiungiForm");
const listaAnimali = document.getElementById("listaAnimali");
const petList = new Petlist();
addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;
  const pet = new Pet(petName, ownerName, species, breed);
  petList.addPet(pet);
  aggiornaListaAnimali();
  addForm.reset();
  checkSameOwner();
});
console.log(petList);
function aggiornaListaAnimali() {
  listaAnimali.innerHTML = "";
  for (const pet of petList.pets) {
    const petDiv = document.createElement("div");
    petDiv.innerHTML = `
      <strong>Nome Animale:</strong> ${pet.petName}<br>
      <strong>Nome Proprietario:</strong> ${pet.ownerName}<br>
      <strong>Specie:</strong> ${pet.species}<br>
      <strong>Razza:</strong> ${pet.breed}`;
    listaAnimali.appendChild(petDiv);
  }
}

function checkSameOwner() {
  let sameOwner = false;
  const owners = {};
  for (const pet of petList.pets) {
    if (!owners[pet.ownerName]) {
      owners[pet.ownerName] = [pet.petName];
    } else {
      owners[pet.ownerName].push(pet.petName);
      sameOwner = true;
    }
  }
  const sameOwnerDiv = document.createElement("div");
  sameOwnerDiv.innerHTML = `<strong> Qualche animale con lo stesso padrone?</strong> ${
    sameOwner ? "Yes" : "NO"
  }`;

  if (sameOwner) {
    const ownerList = document.createElement("ul");
    for (const ownerName in owners) {
      if (owners[ownerName].length > 1) {
        const ownerItem = document.createElement("li");
        ownerItem.innerHTML = `${ownerName}: ${owners[ownerName].join(",")}`;
        ownerList.appendChild(ownerItem);
        localStorage.setItem("lista", ownerItem.innerText);
      }
    }
    sameOwnerDiv.appendChild(ownerList);
  }
  listaAnimali.appendChild(sameOwnerDiv);
}
