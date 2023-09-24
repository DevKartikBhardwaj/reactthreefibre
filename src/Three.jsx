import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { degToRad } from "three/src/math/MathUtils";

const Three = () => {
  // this hook runs whenever a new frame is getting rendered
  const orbitControlRef = useRef();
  useFrame((state) => {
    const { x, y } = state.mouse;
    orbitControlRef.current.setAzimuthalAngle(-x * degToRad(30));
    orbitControlRef.current.setPolarAngle((y + 0.75) * degToRad(60));
  });

  return (
    <>
      {/* camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 8]} />
      <OrbitControls
        ref={orbitControlRef}
        minPolarAngle={degToRad(60)}
        maxPolarAngle={degToRad(80)}
      />
      {/* Ball */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      {/* floor */}
      <mesh rotation={[degToRad(270), 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color={"black"} />
      </mesh>
      {/* lights */}
      <ambientLight args={["#ffffff", 1]} />
    </>
  );
};

export default Three;
