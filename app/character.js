export class Character {
  constructor(name) {
    this.name = name;
  }
  speak(msg = 'hello') {
    return [this.name,' says', msg].join(' ');
  }
}
