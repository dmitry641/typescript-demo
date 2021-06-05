interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    heigth: number;
  };
}

const rect1: Rect = {
  id: "321",
  size: {
    width: 15,
    heigth: 15,
  },
};
rect1.color = "red";
// rect1.id = '5555' // Cannot assign to 'id' because it is a read-only property

const rect2 = {} as Rect;
const rect3 = <Rect>{};

// ====================

interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect4: RectWithArea = {
  id: "222",
  size: {
    width: 13,
    heigth: 13,
  },
  getArea(): number {
    return this.size.width * this.size.heigth;
  },
};

// ====================

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

// ====================

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid black",
  marginTop: "2px",
  borderRadius: "5px",
};
