import { Display } from "./Display";
import { Memory } from "./Memory";

export class Chip8 {
  private memory: Memory;
  private display: Display;

  constructor() {
    this.memory = new Memory();
    this.display = new Display();
  }
}
