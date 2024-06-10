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
