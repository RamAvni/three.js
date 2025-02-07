import * as THREE from "three";

const w = window.innerWidth;
const h = window.innerHeight;

function threeCanvasSetup() {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(w, h);

    document.body.appendChild(renderer.domElement);
    return renderer;
}

function threeCameraSetup() {
    const fov = 75;
    const aspect = w / h;
    const near = 0.1;
    const far = 10;

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    return camera;
}

function threeSetup() {
    const renderer = threeCanvasSetup();
    const camera = threeCameraSetup();
    const scene = new THREE.Scene(); // Scene Setup

    return { renderer, camera, scene };
}

function main() {
    const world = threeSetup();
    world.renderer.render(world.scene, world.camera);
}

main();
