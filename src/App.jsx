import { Suspense } from "react";
import "./App.css";
import Three from "./Three";
import { Canvas } from "@react-three/fiber";
function App() {
  return (
    <>
      <Canvas className="main-canvas" shadows>
        <Suspense fallback={null}>
          <Three />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
