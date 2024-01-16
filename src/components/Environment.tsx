import { RigidBody } from "@react-three/rapier";
import { FC } from "react";
import { DoubleSide } from "three";

type EnvironmentProps = {
  size?: number;
};

const Environment: FC<EnvironmentProps> = ({ size = 200 }) => {
  const halfSize = size / 2;
  const wallPositions = [
    { x: 0, y: 0, z: halfSize },
    { x: 0, y: 0, z: -halfSize },
    { x: halfSize, y: 0, z: 0, rotation: { y: Math.PI / 2 } },
    { x: -halfSize, y: 0, z: 0, rotation: { y: Math.PI / 2 } },
  ];

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} color="white" />
      <directionalLight color="#F4D772" position={[-10, 10, -5]} />

      {/* Ground */}
      <RigidBody type="fixed">
        <mesh position={[0, -5, 0]}>
          <boxGeometry args={[size, 1, size]} />
          <meshStandardMaterial color="darkgray" side={DoubleSide} />
        </mesh>
      </RigidBody>

      {/* Walls */}
      <RigidBody type="fixed">
        {wallPositions.map(({ x, y, z, rotation }) => (
          <mesh
            key={`${x}-${y}-${z}`}
            position={[x, y, z]}
            rotation={rotation ? [0, rotation.y, 0] : undefined}
          >
            <boxGeometry args={[size, 25, 1]} />
            <meshStandardMaterial color="lightgreen" />
          </mesh>
        ))}
      </RigidBody>
    </>
  );
};

export default Environment;
