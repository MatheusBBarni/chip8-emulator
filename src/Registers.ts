import { LOAD_PROGRAM_ADDRESS } from "./constants/memoryConstants";
import {
  NUMBER_OF_REGISTERS,
  STACK_DEEP,
} from "./constants/registersConstants";

export class Registers {
  I: number;
  PC: number;
  SP: number;
  V: Uint8Array;
  delayTimer: number;
  soundTimer: number;
  stack: Uint16Array;

  constructor() {
    this.I = 0;
    this.SP = -1;
    this.delayTimer = 0;
    this.soundTimer = 0;
    this.PC = LOAD_PROGRAM_ADDRESS;
    this.stack = new Uint16Array(STACK_DEEP);
    this.V = new Uint8Array(NUMBER_OF_REGISTERS);

    this.reset();
  }

  private reset() {
    this.V.fill(0);
    this.I = 0;
    this.SP = -1;
    this.PC = LOAD_PROGRAM_ADDRESS;
    this.delayTimer = 0;
    this.soundTimer = 0;
    this.stack.fill(0);
  }

  stackPush(value: number) {
    this.SP++;
    this.assertStackOverflow();
    this.stack[this.SP] = value;
  }

  stackPop(): number {
    const value = this.stack[this.SP];
    this.SP--;
    this.assertStackUnderflow();
    return value;
  }

  private assertStackOverflow() {
    console.assert(this.SP < STACK_DEEP, "Stack overflow");
  }

  private assertStackUnderflow() {
    console.assert(this.SP >= -1, "Stack Underflow");
  }
}
