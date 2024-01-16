import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import "./App.css";
import Environment from "./components/Environment";
import Dice from "./components/Dice";

const App = () => {
  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        position={[-20, 30, 100]}
        near={0.1}
        far={600}
        fov={35}
      />
      <OrbitControls enableDamping />

      <Environment />

      <Dice size={10} />
    </Canvas>
  );
};

export default App;
