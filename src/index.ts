import Interface from "./components/component1";
import * as PIXI from 'pixi.js';

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container.
const app = new PIXI.Application({
    width: 900,
    height: 580,
    backgroundColor: 0xAAAFFF,
});

app.view.style.margin = '0px auto';
app.view.style.display = "block";
app.view.style.marginTop = '50px';
app.view.style.border = '4px solid black';
app.view.style.borderRight = 'none';

const line1 = new PIXI.Graphics();

line1.lineStyle(10, 0xd5402b, 1);

line1.position.x = app.renderer.width / 2.5;
line1.position.y = app.renderer.height / 3;
line1.pivot.set(0, 220)

line1.moveTo(0, 0);
line1.lineTo(0, 220);

const line2 = new PIXI.Graphics();

line2.lineStyle(10, 0xd5402b, 1);

line2.position.x = app.renderer.width / 2.5;
line2.position.y = app.renderer.height / 3;
line2.pivot.set(0, -170)

line2.moveTo(0, 0);
line2.lineTo(0, 220);

app.stage.addChild(line1);
app.stage.addChild(line2);

document.body.appendChild(app.view);
 
// The application will create a canvas element for you that you
// can then insert into the DOM.
 
// load the texture we need
// app.loader.add('bunny', './img/player.png').load((loader: any, resources: any) => {
 
//     // This creates a texture from a 'bunny.png' image.
//     const bunny = new PIXI.Sprite(resources.bunny.texture);
 
//     // Setup the position of the bunny
//     bunny.x = app.renderer.width / 2;
//     bunny.y = app.renderer.height / 2;
 
//     // Rotate around the center
//     bunny.anchor.x = 0;
//     bunny.anchor.y = 0.5;
 
//     // Add the bunny to the scene we are building.
//     app.stage.addChild(bunny);
 
//     // Listen for frame updates
//     app.ticker.add(() => {
//          // each frame we spin the bunny around a bit
//         bunny.rotation += 0.06;
//     });
// });

console.log(Interface.madTwo(2, 5));