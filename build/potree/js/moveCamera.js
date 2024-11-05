function moveCameraTo(cameraPosition, cameraTarget) {
  let cameraPositionVector = cameraPosition;
  let cameraTargetVector = cameraTarget;

  if (cameraPosition instanceof Array) {
    cameraPositionVector = new THREE.Vector3().fromArray(cameraPosition);
  }

  if (cameraTarget instanceof Array) {
    cameraTargetVector = new THREE.Vector3().fromArray(cameraTarget);
  }

  Potree.Utils.moveTo(
    viewer.scene,
    cameraPositionVector,
    cameraTargetVector
  );
}
