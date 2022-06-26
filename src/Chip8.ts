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
  }

  async sleep(ms: number = 500) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
