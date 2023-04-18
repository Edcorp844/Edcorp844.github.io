import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'



const scene = new THREE.Scene();
scene.background = new THREE.Color(0x808080); 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);
scene.add(camera);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

const loader = new GLTFLoader();
let model;

loader.load('assets/scene.gltf', (gltf) => {
  model = gltf.scene;
  model.rotation.y = Math.PI / 2;
  scene.add(model);
}, undefined, (error) => {
  console.error(error);
});

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
function animate() {
  requestAnimationFrame(animate);
  if (model) {
    model.rotation.y += 0.01;
  }
  window.addEventListener("resize", function(){
    renderer.setSize(window.innerWidth, window.innerHeight);
  })
 
  renderer.render(scene, camera);
}
animate();


