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
const boatsContainer = new PIXI.Container();

boatsContainer.x = 0;
boatsContainer.y = 0;

boatsContainer.width = app.renderer.width;
boatsContainer.height = app.renderer.height;

app.stage.addChild(boatsContainer);

const intervalId = setInterval(() => {
    const texture = PIXI.Texture.from('./img/EmptyGreenBoat.png');
    const boat = new PIXI.Sprite(texture);

    boat.anchor.set(0.5);
    boat.x = app.renderer.width;
    boat.y = app.renderer.height / 2 - 70;

    boatsContainer.addChild(boat);
    console.log(boatsContainer.children[boatsContainer.children.length - 2]);
    app.ticker.add(() => {
        if(boatsContainer.children.length === 1){
            if(boat.x === 450){
                boat.x -= 0;

                return;
            }
        }
        
        if(boatsContainer.children.length >= 2){
            //@ts-ignore
            if(boat.x === 450 || boatsIntersect(boatsContainer.children[boatsContainer.children.length - 2], boat)){
                boat.x -= 0;
    
                return;
            }
        };

  
        console.log('move');
        boat.x -= spead;
    });

}, 8000);

setTimeout(() => clearInterval(intervalId), 48000);

function boatsIntersect (a: PIXI.Sprite, b: PIXI.Sprite){
    let aBox = a.getBounds();
    let bBox = b.getBounds();

    return aBox.x + aBox.width + 10 > bBox.x &&
        aBox.x < bBox.x + bBox.width &&
        aBox.y + aBox.height > bBox.y &&
        aBox.y < bBox.y + bBox.height;
};

console.log(Math.floor(Math.random() * 2));