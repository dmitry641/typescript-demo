class Typescript {
  version: string;
  constructor(version: string) {
    this.version = version;
  }
  info(name: string) {
    return `[${name}]: TS version is ${this.version}`;
  }
}

// class Car {
//   readonly model: string;
//   readonly numberOfWheels: number = 4;
//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }

class Car {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}

// ===================

class Animal {
  protected voice: string = "";
  public color: string = "black";

  constructor() {
    this.go();
  }

  private go() {
    console.log("go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
    // this.go(); // Property 'go' is private and only accessible within class 'Animal'.
  }
}

const cat = new Cat();
// cat.voice = 'qwe' // Property 'voice' is protected and only accessible within class 'Animal' and its subclasses.
cat.setVoice("asd");
console.log(cat.color);

// ===================

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("render");
  }
  info(): string {
    return "info";
  }
}
