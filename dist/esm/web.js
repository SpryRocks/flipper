import { WebPlugin } from "@capacitor/core";
export class FlipperWeb extends WebPlugin {
  constructor() {
    super({
      name: "Flipper",
      platforms: ["web"],
    });
  }
  emulateCrash() {
    throw new Error("Method not implemented.");
  }
  initialize(options) {
    console.log(options);
    throw new Error("Method not implemented.");
  }
}
const Flipper = new FlipperWeb();
export { Flipper };
import { registerWebPlugin } from "@capacitor/core";
registerWebPlugin(Flipper);
//# sourceMappingURL=web.js.map
