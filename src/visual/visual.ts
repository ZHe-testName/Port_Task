import { Texture } from 'pixi.js';
import app from '../components/app';

export class VisualModels {
  constructor() {
    app.stage.on("loaded", () => {
      this.createModels();
    });
  }

  createModels() {
    const resources = app.loader.resources;

    Object.assign(this, {
      pier: [
        {
          texture: resources["pier"].texture,
          pivot: { x: 65, y: 59 }
        },
      ],
      cargo: [
        {
          texture: resources["cargo"].texture
        }
      ]
    });
  }

};

export type VisualModelsType = {
    texture: Texture,
    pivot: {x: number, y: number},
};

// export type VisualType = {
//     pier: Texture[],
//     cargo: Texture[],
//     createModels: () => void,
// };

const visual = new VisualModels();

export default visual;