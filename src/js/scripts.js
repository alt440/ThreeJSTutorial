import * as THREE from 'three';
import { loadEventListeners } from './eventListeners';
import { getCubeMesh, getOutlineMesh } from './objectCreation';

//the renderer contains the objects and the scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const degrees = 45;
const radians = degrees * (Math.PI / 180);

const mesh = getCubeMesh(radians);
const outline = getOutlineMesh(radians);
scene.add(mesh);
scene.add(outline);

//applies some lighting for the material and objects (cube and outline) to be visible
const hemLight = new THREE.HemisphereLight(0xffffff, 0x000000);
scene.add(hemLight);

//determines the direction of the view in the 3D scene
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0,0,5);

//generates the scene
renderer.render(scene, camera);

loadEventListeners(mesh, outline, radians, camera);

// Animation Loop.
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();