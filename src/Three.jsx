import { PerspectiveCamera } from "@react-three/drei";
import React from "react";
import { degToRad } from "three/src/math/MathUtils";

const Three = () => {
  return (
    <>
      {/* camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 8]} />
      {/* Ball */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      {/* floor */}
      <mesh rotation={[degToRad(270), 0, 0]}>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color={"black"} />
      </mesh>
      {/* lights */}
      <ambientLight args={["#ffffff", 1]} />
    </>
  );
};

export default Three;
