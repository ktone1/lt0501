import * as PIXI from 'pixi.js';
import * as animate from 'pixi-animate';
import { stage } from '../sample2';

window.onload = () => {
    // const scene = new animate.Scene(800, 500, {
    //     view: document.getElementById("stage"),
    //     backgroundColor: 0x0,
    //     antialias: true
    // });
    // scene.load(stage);
    let renderer = new PIXI.autoDetectRenderer(800, 500);
    document.body.appendChild(renderer.view);
    let container = new PIXI.Container();
    animate.load(stage, container);
    let val = 1;
    container.interactive = true;
    container.on('click', () => {
      if (val > 0) {
        val = -1;
      } else {
        val = 1;
      }
    })
    function update() {
      requestAnimationFrame(() => {
          update();
      });
      container.x += val;
      renderer.render(container);
    }
    update();
}
