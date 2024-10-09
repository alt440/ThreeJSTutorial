import * as THREE from 'three';

//surrounding object that creates the white outline. Radians give the turn degree
export function getOutlineMesh(radians){
    const geo = new THREE.BoxGeometry(2,2,2);
    const wireMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    });
    const wireMesh = new THREE.Mesh(geo, wireMat);
    wireMesh.scale.setScalar(1.001);
    wireMesh.rotation.x = radians;
    wireMesh.rotation.y = radians;
    wireMesh.rotation.z = 0;
    return wireMesh;
}

//cube object. Radians give the turn degree
export function getCubeMesh(radians){
    const geo = new THREE.BoxGeometry(2,2,2);
    const mat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        flatShading: true
    });
    const mesh = new THREE.Mesh(geo, mat);

    mesh.rotation.x = radians;
    mesh.rotation.y = radians;
    mesh.rotation.z = 0;
    return mesh;
}