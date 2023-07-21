import { WebPlugin } from "@capacitor/core";
import { FlipperPlugin, InitializeOptions } from "./definitions";
export declare class FlipperWeb extends WebPlugin implements FlipperPlugin {
  constructor();
  emulateCrash(): Promise<void>;
  initialize(options: InitializeOptions): Promise<void>;
}
declare const Flipper: FlipperWeb;
export { Flipper };
