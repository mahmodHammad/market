import * as THREE from "three";
import { scene,camera } from "./setup";
import { loadModel } from "./ModelLoader";
const earth = require("./earth.glb").default;

let earthModel
function addLights() {
  const amplight = new THREE.AmbientLight("#ffffff", 0.8);
  let lightBack = new THREE.PointLight(0xffffff, 0.2);
  let lightFront = new THREE.PointLight(0xffffff, 0.2);
  lightBack.position.set(2, 2, 7);
  lightFront.position.set(-2, -2, 7);

  scene.add(amplight);
  scene.add(lightBack);
  scene.add(lightFront);

  // scene.add( new THREE.SpotLightHelper(lightBack,"#ff00cc") );
  // scene.add( new THREE.SpotLightHelper( lightFront ,"#ccff00"));
}
const addItem = () => {
  loadModel(earth , {x:0,y:0,z:0})
    .then((e) => {
      const fragmentShader = `uniform vec3 glowColor;
      varying float intensity;
      void main() 
      {
        vec3 glow = glowColor * intensity;
          gl_FragColor = vec4( glow, 1.0 );
      }`
      const vertexShader = `uniform vec3 viewVector;
      uniform float c;
      uniform float p;
      varying float intensity;
      void main() 
      {
          vec3 vNormal = normalize( normalMatrix * normal );
        vec3 vNormel = normalize( normalMatrix * viewVector );
        intensity = pow( c - dot(vNormal, vNormel), p );
        
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
      `

      earthModel=e.scene.getChildByName("earthblack")
      console.log("earthhhh", e.scene.getChildByName("earthblack"))
      console.log("earthhhh", e.scene.getObjectByName("Mundo_1"))
      console.log("earthhhh", e.scene)
      // e.scene.getChileByName("earthblack")
      const surface = e.scene.getObjectByName("Mundo_1")
      const mat = new THREE.ShaderMaterial( 
        {
          fragmentShader,
          vertexShader,
        uniforms :{ 
        "c":   { type: "f", value: 0.2 },
        "p":   { type: "f", value: 2.9 },
        glowColor: { type: "c", value: new THREE.Color(0xffffff) },
        viewVector: { type: "v3", value: camera.position },
        side: THREE.BackSide,
    		blending: THREE.AdditiveBlending,
        transparent:true,
        opacity:0.5
        
      }})
    const moonGlow = new THREE.Mesh( new THREE.SphereGeometry(3,100,100), mat);
    moonGlow.renderOrder=-10
    moonGlow.material.depthTest = false
    // e.scene.renderOrder=2
    // moonGlow.position = .position;
	// moonGlow.scale.multiplyScalar(1.2);
      moonGlow.position.set(0,0,0)
	scene.add( moonGlow );
      // surface.material.fragmentShader=fragmentShader
      // surface.material.vertexShader = vertexShader
      // surface.material.transparent =true
      // surface.material.uniforms=uniforms
     
      scene.add(e.scene);
    })
  addLights();
};

export { addItem,earthModel };
