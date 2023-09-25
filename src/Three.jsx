import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { BackSide } from "three";
import { degToRad } from "three/src/math/MathUtils";
const Three = () => {
  // this hook runs whenever a new frame is getting rendered
  // const orbitControlRef = useRef();
  // useFrame((state) => {
  //   const { x, y } = state.mouse;
  //   orbitControlRef.current.setAzimuthalAngle(-x * degToRad(30));
  //   orbitControlRef.current.setPolarAngle((y + 0.75) * degToRad(60));
  // });

  //Animations
  const ballRef = useRef(null);

  useEffect(() => {
    if (!!ballRef.current) {
      console.log(ballRef.current);

      const timeline = gsap.timeline();

      // x-axis animation
      timeline.to(ballRef.current.position, {
        x: 2,
        duration: 2,
        ease: "power2.out",
      });

      //y-axis motion
      timeline.to(
        ballRef.current.position,
        {
          y: 0.5,
          duration: 0.75,
          ease: "bounce.out",
        },
        "<"
      );
    }
  }, [ballRef.current]);

  return (
    <>
      {/* camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 6]} />
      <OrbitControls
      // ref={orbitControlRef}
      // minPolarAngle={degToRad(60)}
      // maxPolarAngle={degToRad(80)}
      />
      {/* Ball */}
      <mesh position={[0, 2.5, 0]} castShadow ref={ballRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
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
