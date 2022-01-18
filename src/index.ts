// import './components/app';
// import './resources/resources';
// import './visual/visual';
// import './components/world';
import * as PIXI from "pixi.js";

//Created app
const app = new PIXI.Application({
    width: 900,
    height: 580,
    backgroundColor: 0xAAAFFF,
});
document.body.appendChild(app.view);

const spead = 2;

app.view.style.margin = '0px auto';
app.view.style.display = "block";
app.view.style.marginTop = '50px';
app.view.style.border = '4px solid black';
app.view.style.borderRight = 'none';

//Gate lines setings
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
line2.pivot.set(0, -180)

line2.moveTo(0, 0);
line2.lineTo(0, 220);

app.stage.addChild(line1);
app.stage.addChild(line2);

//Created pier container with 4 piers and position it on the sea
const container = new PIXI.Container();

app.stage.addChild(container);

const texture = PIXI.Texture.from('./img/Pier.png');

for (let i = 1; i <= 4; i++){
    const pier = new PIXI.Sprite(texture);
        pier.anchor.set(0.5);
        pier.x = 50;
        pier.y = i * 130;

        container.addChild(pier);
};

container.x = 0;
container.y = 160;


container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

//Ceating boats
const intervalId = setInterval(() => {
    const texture = PIXI.Texture.from('./img/EmptyGreenBoat.png');
    const boat = new PIXI.Sprite(texture);

    boat.anchor.set(0.5);
    boat.x = app.renderer.width;
    boat.y = app.renderer.height / 2 - 70;

    app.ticker.add(() => {
        if(boat.x === 450){
            boat.x -= 0;

            return;
        }

        boat.x -= spead;
    });

    app.stage.addChild(boat);
    console.log(app.stage.children);
}, 8000);

setTimeout(() => clearInterval(intervalId), 48000);

console.log(Math.floor(Math.random() * 2));