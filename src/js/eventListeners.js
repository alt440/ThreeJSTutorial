export function loadEventListeners(mesh, wireMesh, radians, camera){

    document.addEventListener('mousemove', (event) => {
        // Normalize mouse position to the range -1 to 1
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1; // Horizontal
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1; // Vertical

        // Map mouseX to the range of -maxRotation to maxRotation
        mesh.rotation.y = mouseX * radians;
        mesh.rotation.x = -mouseY * radians;

        wireMesh.rotation.y = mouseX * radians;
        wireMesh.rotation.x = -mouseY * radians;
    });


    // Scroll event listener
    window.addEventListener('wheel', (e) => {
        // Adjust camera position based on scroll amount
        const scrollY = e.deltaY;
        camera.position.z = camera.position.z + scrollY*0.01; // Adjust the multiplier for sensitivity
    });
}