export class Greeter {
  constructor(name = 'es6') {
    this.name = name;
  }
  say(msg = 'hello') {
    return [this.name,' says:', msg].join(' ');
  }
}
