import { KEY_MAP, NUMBER_OF_KEYS } from "./constants/keyboardConstants";

export class Keyboard {
  private keys: Array<boolean>;

  constructor() {
    this.keys = new Array(NUMBER_OF_KEYS).fill(false);
    document.addEventListener("keydown", this.keydown.bind(this));
    document.addEventListener("keyup", this.keyup.bind(this));
  }

  private keydown({ key }: KeyboardEvent) {
    const keyIndex = KEY_MAP.findIndex(
      (mapKey) => mapKey === key.toLocaleLowerCase()
    );
    if (keyIndex > -1) {
      this.keys[keyIndex] = true;
    }
  }

  private keyup({ key }: KeyboardEvent) {
    const keyIndex = KEY_MAP.findIndex(
      (mapKey) => mapKey === key.toLocaleLowerCase()
    );
    if (keyIndex > -1) {
      this.keys[keyIndex] = false;
    }
  }

  isKeyDown(keyIndex: number): boolean {
    return this.keys[keyIndex];
  }

  hasKeydown() {
    return this.keys.findIndex((key) => key) !== -1;
  }
}
