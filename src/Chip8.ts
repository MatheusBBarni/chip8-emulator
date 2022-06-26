import { CHAR_SET_ADDRESS } from "./constants/memoryConstants";
import { CHAR_SET } from "./constants/charsetConstants";

import { Keyboard } from "./Keyboard";
import { Display } from "./Display";
import { Memory } from "./Memory";
import { Registers } from "./Registers";

export class Chip8 {
  private memory: Memory;
  private display: Display;
  private registers: Registers;
  keyboard: Keyboard;

  constructor() {
    this.memory = new Memory();
    this.display = new Display();
    this.registers = new Registers();
    this.keyboard = new Keyboard();

    this.loadCharset();
  }

  loadCharset() {
    const { memory } = this.memory;
    memory.set(CHAR_SET, CHAR_SET_ADDRESS);
  }

  async sleep(ms: number = 500) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
