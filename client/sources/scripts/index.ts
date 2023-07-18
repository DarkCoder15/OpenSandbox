import * as THREE from "three";

import "../styles/default.scss";

const CAMERA_FOV: number = 75;

let cameraAspectRatio: number = window.innerWidth / window.innerHeight;

const CAMERA_NEAR: number = 0.1;
const CAMERA_FAR: number = 1000;

const SCENE: THREE.Scene = new THREE.Scene();

const CAMERA: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
	CAMERA_FOV,
	cameraAspectRatio,
	CAMERA_NEAR,
	CAMERA_FAR
);

CAMERA.position.z = 2;

let rendererWidth: number = window.innerWidth;
let rendererHeight: number = window.innerHeight;

const RENDERER = new THREE.WebGLRenderer();
RENDERER.setSize(rendererWidth, rendererHeight);

document.body.appendChild(RENDERER.domElement);

const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial({
	color: 0x00ff00,
	wireframe: true,
});

const sampleCube = new THREE.Mesh(cubeGeometry, cubeMaterial);
SCENE.add(sampleCube);

window.addEventListener("resize", onWindowResize);

function onWindowResize(): void {
	cameraAspectRatio = window.innerWidth / window.innerHeight;

	CAMERA.aspect = cameraAspectRatio;
	CAMERA.updateProjectionMatrix();

	rendererWidth = window.innerWidth;
	rendererHeight = window.innerHeight;

	RENDERER.setSize(rendererWidth, rendererHeight);

	render();
}

function update(): void {
	window.requestAnimationFrame(update);

	sampleCube.rotation.x = sampleCube.rotation.x + 0.01;
	sampleCube.rotation.y = sampleCube.rotation.y + 0.01;
	sampleCube.rotation.z = sampleCube.rotation.z + 0.01;

	render();
}

function render(): void {
	RENDERER.render(SCENE, CAMERA);
}

update();
