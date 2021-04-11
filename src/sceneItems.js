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
     
      scene.add(e.scene);
    })
  addLights();
  // oldAtmo()
  renderAtmo()
};

function oldAtmo(){
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

  // earthModel=e.scene.getChildByName("earthblack")
  // console.log("earthhhh", e.scene.getChildByName("earthblack"))
  // console.log("earthhhh", e.scene.getObjectByName("Mundo_1"))
  // console.log("earthhhh", e.scene)
  // // e.scene.getChileByName("earthblack")
  // const surface = e.scene.getObjectByName("Mundo_1")
  const mat = new THREE.ShaderMaterial( 
    {
      fragmentShader,
      vertexShader,
    uniforms :{ 
    "c":   { type: "f", value: 0.5 },
    "p":   { type: "f", value: 1.0 },
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
  moonGlow.position.set(0,0,0)
scene.add( moonGlow );
 
}

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
	float intensity = pow( 0.7 - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), 4.0 ); 
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
  // heeyyyyyyyyyyyyyu
  var renderTargetParameters = 
		{ minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, 
		  format: THREE.RGBFormat, stencilBuffer: false };
	// var renderTarget = new THREE.WebGLRenderTarget( SCREEN_WIDTH, SCREEN_HEIGHT, renderTargetParameters );
	// composer2 = new THREE.EffectComposer( renderer, renderTarget );
	
	// // prepare the secondary render's passes
	// var render2Pass = new THREE.RenderPass( atmosphereScene, camera2 );
	// composer2.addPass( render2Pass );
	
	// prepare final composer
	// finalComposer = new THREE.EffectComposer( renderer, renderTarget );

	// // prepare the final render's passes
	// var renderModel = new THREE.RenderPass( scene, camera );
	// finalComposer.addPass( renderModel );

	// var effectBlend = new THREE.ShaderPass( THREE.AdditiveBlendShader, "tDiffuse1" );
	// effectBlend.uniforms[ 'tDiffuse2' ].value = composer2.renderTarget2;
	// effectBlend.renderToScreen = true;
	// finalComposer.addPass( effectBlend );
}
export { addItem,earthModel };
