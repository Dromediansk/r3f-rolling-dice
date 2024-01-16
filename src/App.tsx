import { Canvas } from "@react-three/fiber";
import "./App.css";
import Environment from "./components/Environment";
import Dice from "./components/Dice";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import Camera from "./components/Camera";

const App = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <Suspense>
          <Physics debug gravity={[0, -9.82 * 20, 0]}>
            <Camera />
            <Environment />
            <Dice size={10} />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
