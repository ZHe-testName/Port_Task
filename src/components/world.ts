import * as PIXI from "pixi.js";
import Pier from "../entities/pier";
import app from './app';
import visual from "../visual/visual";

export default class World extends PIXI.Container {
  constructor() {
    super();

    app.stage.on("loaded", () => {
      this.populate();
      app.stage.addChild(this);
    });
  }

  populate() {
    for (let i = 1; i <= 4; i++) {
        // const element = new Pier(visual);
        // this.addChild(element);
      }
    }
};

const world = new World();