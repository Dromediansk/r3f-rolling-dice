import { PlaneGeometryProps } from "@react-three/fiber";
import { DoubleSide } from "three";

const GROUND_SIZES: PlaneGeometryProps["args"] = [100, 100];

const Environment = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} color="white" />
      <directionalLight color="#F4D772" position={[0, 10, -5]} />
      {/* Ground */}
      <mesh
        position={[0, -6, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 1, 1]}
      >
        <planeGeometry args={GROUND_SIZES} />
        <meshStandardMaterial color="darkgray" side={DoubleSide} />
      </mesh>
    </>
  );
};

export default Environment;
