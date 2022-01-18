import * as PIXI from 'pixi.js';

export class App extends PIXI.Application {
    constructor(){
        super();

        this.renderer = new PIXI.Renderer({
            width: 900,
            height: 580,
            backgroundColor: 0xAAAFFF,
            resolution: 1,
        });

        this.view.style.margin = '0px auto';
        this.view.style.display = "block";
        this.view.style.marginTop = '50px';
        this.view.style.border = '4px solid black';
        this.view.style.borderRight = 'none';

        document.body.appendChild(this.renderer.view);

        this.ticker = new PIXI.Ticker();
        //   this.stage = new PIXI.Stage();
      
        this.ticker.add(this.render.bind(this), PIXI.UPDATE_PRIORITY.LOW);
        this.ticker.start();
    }

    get myScreen() {
        return this.renderer.screen;
    }
    
    render() {
        this.renderer.render(this.stage);
    }
};

const app = new App();

export default app;