import * as THREE from "three";
import { scene,camera } from "./setup";
import { loadModel } from "./ModelLoader";
const earth = require("./earth.glb").default;

let earthModel
function addLights() {
  const amplight = new THREE.AmbientLight("#ffffff", 0.8);
  let lightBack = new THREE.RectAreaLight(0xffffff, 0.2,10,10);
  let lightFront = new THREE.RectAreaLight(0xffffff, 0.2,10,10);
  lightBack.position.set(2, 2, 7);
  lightFront.position.set(-2, -2, 7);

  scene.add(amplight);
  scene.add(lightBack);
  scene.add(lightFront);
}
const addItem = () => {
  loadModel(earth , {x:0,y:0,z:0})
    .then((e) => {
      earthModel=e.scene.getChildByName("earthblack")
      scene.add(e.scene);
      renderAtmo()
    })
    addLights();
};


function renderAtmo() {
  const vertexShader = `
  varying vec3 vNormal;
  void main() 
  {
      vNormal = normalize( normalMatrix * normal );
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }`
  const fragmentShader = `
  varying vec3 vNormal;
void main() 
{
	float intensity = pow( 0.7 - dot( vNormal, vec3( 0.0, 0.0, 0.5 ) ), 4.0 ); 
    gl_FragColor = vec4( 1.0, 1.0, 1.0, 1.0 ) * intensity;
}`

var customMaterial = new THREE.ShaderMaterial( 
	{
	    uniforms: {  },
		vertexShader,
		fragmentShader,
		side: THREE.BackSide,
		blending: THREE.AdditiveBlending,
		transparent: true
	}   );

	var sphereGeo = new THREE.SphereGeometry(2.9, 120, 32);
  const atmMesh = new THREE.Mesh(sphereGeo,customMaterial)
  atmMesh.renderOrder=-10
  // atmMesh.material.depthTest = false
  scene.add(atmMesh)

}
export { addItem,earthModel };
