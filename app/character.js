export class Character {
  constructor(name) {
    this.name = name;
  }
  speak(msg = 'default arg') {
    console.log(this.name, ' says ', msg);
  }
}
