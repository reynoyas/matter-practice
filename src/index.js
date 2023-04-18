import './index.css';
import Matter from 'matter-js';

import reportWebVitals from './reportWebVitals';

const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

const iEngine = Engine.create();
const iRunner = Runner.create();

const iRender = Render.create({
  element: document.body,
  engine: iEngine,
  options: {
    width: 800,
    height: 400,
    wireframes: false,
    background: "white"
  }
});

const boxA = Bodies.rectangle(400, 200, 80, 80);
const ballA = Bodies.circle(380, 100, 40, 10);
const ballB = Bodies.circle(460, 10, 40, 10);
const ground = Bodies.rectangle(400, 380, 810, 60, { isStatic: true });

Composite.add(iEngine.world, [boxA, ballA, ballB, ground]);
Render.run(iRender);
Runner.run(iRunner, iEngine);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
