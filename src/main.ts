import { Chip8 } from "./Chip8";

const chip8 = new Chip8();

(async () => {
  while (true) {
    const hasKeydown = chip8.keyboard.hasKeydown();
    const isKeydown = chip8.keyboard.isKeyDown(1);
    await chip8.sleep();
  }
})();
