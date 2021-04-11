// اشطر
import * as THREE from "three";
import { stats, render, controls } from "./setup";
import {earthModel} from "./sceneItems"
var clock = new THREE.Clock();
let generalTime = 0;


let requestID;
// this function is heavy , OPTIMIZE it as could as possible
const startAnimationLoop = (e) => {
  //   console.log("EEEE:",e)
  //   material.uniforms.time.value = e/10000;
  // console.log(clock.elapsedTime)
  stats.begin();
  generalTime = clock.elapsedTime;

  render();
  if(earthModel){
    earthModel.rotateZ(-0.01)
  }

  controls.update();
  stats.end();
  requestID = window.requestAnimationFrame(startAnimationLoop);
};

export {
  startAnimationLoop,
  requestID,
  generalTime,
};
