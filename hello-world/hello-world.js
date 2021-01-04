import * as THREE from "../js/build/three.module.js";

function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});


    // Camera
    const fov = 75;
    const aspect = 2;
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    const scene = new THREE.Scene();

    // Light
    {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1,2,4);
    scene.add(light);
    }

    // Cube
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    const loader = new THREE.TextureLoader();
    const material = new THREE.MeshBasicMaterial( { map: loader.load('resources/images/crate.png') } );

    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    function render(time) {
        time *= 0.001;
        cube.rotation.x = time;
        cube.rotation.y = time;
        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render)

}

main();