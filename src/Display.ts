import {
  DISPLAY_WIDHT,
  DISPLAY_HEIGHT,
  DISPLAY_MULTIPLIER,
  BG_COLOR,
  COLOR,
} from "./constants/displayConstants";

export class Display {
  private screen: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null = null;
  private frameBuffer: Array<Array<number>> = [];

  constructor() {
    this.screen = document.querySelector("#app canvas")!;

    this.turnOn();
  }

  private turnOn() {
    this.screen.width = DISPLAY_WIDHT * DISPLAY_MULTIPLIER;
    this.screen.height = DISPLAY_HEIGHT * DISPLAY_MULTIPLIER;
    this.context = this.screen.getContext("2d")!;
    this.context.fillStyle = BG_COLOR;

    this.frameBuffer = [];

    this.reset();
  }

  private reset() {
    for (let i = 0; i < DISPLAY_HEIGHT; i++) {
      this.frameBuffer.push([]);

      for (let y = 0; y < DISPLAY_WIDHT; y++) {
        this.frameBuffer[i].push(1);
      }
    }

    this.context!.fillRect(0, 0, this.screen.width, this.screen.height);
    this.drawBuffer();
  }

  private drawBuffer() {
    for (let x = 0; x < DISPLAY_HEIGHT; x++) {
      this.frameBuffer.push([]);

      for (let y = 0; y < DISPLAY_WIDHT; y++) {
        this.drawPixel(x, y, this.frameBuffer[x][y]);
      }
    }
  }

  private drawPixel(x: number, y: number, value?: any) {
    if (value) {
      this.context!.fillStyle = COLOR;
    } else {
      this.context!.fillStyle = BG_COLOR;
    }
    this.context!.fillRect(
      x * DISPLAY_MULTIPLIER,
      y * DISPLAY_MULTIPLIER,
      DISPLAY_MULTIPLIER,
      DISPLAY_MULTIPLIER
    );
  }
}
