import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { BackSide } from "three";
import { degToRad } from "three/src/math/MathUtils";
import * as THREE from "three";
const Three = () => {
  // this hook runs whenever a new frame is getting rendered
  // const orbitControlRef = useRef();
  // useFrame((state) => {
  //   const { x, y } = state.mouse;
  //   orbitControlRef.current.setAzimuthalAngle(-x * degToRad(30));
  //   orbitControlRef.current.setPolarAngle((y + 0.75) * degToRad(60));
  // });

  return (
    <>
      {/* camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 8]} />
      <OrbitControls
      // ref={orbitControlRef}
      // minPolarAngle={degToRad(60)}
      // maxPolarAngle={degToRad(80)}
      />
      {/* Ball */}
      <mesh position={[0, 1, 0]} castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* floor */}
      <mesh rotation={[degToRad(270), 0, 0]} receiveShadow>
        <planeGeometry args={[8, 8]} />
        {/* <meshStandardMaterial color={"#09a6ca"} /> */}
        <meshStandardMaterial color={"#1ea3d8"} />
      </mesh>

      {/* ************************ lights *********************************** */}

      {/* Ambient Light */}
      <ambientLight args={["white", 0.5]} />

      {/* spot Light */}
      <spotLight
        args={["#ffffff", 10, 7, degToRad(45), 0.4]}
        position={[-3, 1, 0]}
        castShadow
      />

      {/* Environment */}

      <Environment background>
        <mesh>
          <sphereGeometry args={[500, 64, 64]} />
          <meshBasicMaterial color={"#2266cc"} side={BackSide} />
        </mesh>
      </Environment>
    </>
  );
};

export default Three;
