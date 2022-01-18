import { VisualModelsType } from './../visual/visual';
import * as PIXI from "pixi.js";

export default class Pier extends PIXI.Container {
  constructor(visualModel: VisualModelsType) {
    super();

    this.sprite = new PIXI.Sprite(visualModel.texture);
    this.addChild(this.sprite);
    this.sprite.pivot.copyFrom(visualModel.pivot || { x: 65, y: 59 });

    }

    sprite
}