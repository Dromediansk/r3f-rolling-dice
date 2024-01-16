import { FC, Suspense, useEffect, useMemo, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { RapierRigidBody, RigidBody, quat, vec3 } from "@react-three/rapier";
import { Mesh } from "three";

type DiceProps = {
  size: number;
};

const Dice: FC<DiceProps> = ({ size }) => {
  const texture = useLoader(TextureLoader, [
    "/textures/dice_1.jpg",
    "/textures/dice_2.jpg",
    "/textures/dice_3.jpg",
    "/textures/dice_4.jpg",
    "/textures/dice_5.jpg",
    "/textures/dice_6.jpg",
  ]);

  const roundedBoxGeometry = useMemo(() => {
    return new RoundedBoxGeometry(size, size, size, 3, 2);
  }, [size]);

  const rigidBodyRef = useRef<RapierRigidBody>(null);
  const meshRef = useRef<Mesh>(null);

  useEffect(() => {
    if (rigidBodyRef.current && meshRef.current) {
      const position = vec3(rigidBodyRef.current.translation());
      const quaternion = quat(rigidBodyRef.current.rotation());

      // While Rapier's return types need conversion, setting values can be done directly with Three.js types
      rigidBodyRef.current.setTranslation(position, true);
      rigidBodyRef.current.setRotation(quaternion, true);
      rigidBodyRef.current.setAngvel({ x: -10, y: -8, z: -5 }, true);
    }
  }, []);

  return (
    <Suspense>
      <RigidBody colliders="cuboid" ref={rigidBodyRef}>
        <mesh
          geometry={roundedBoxGeometry}
          position={[-80, 50, 80]}
          ref={meshRef}
        >
          {texture.map((textureMap, index) => (
            <meshStandardMaterial
              key={textureMap.uuid}
              attach={`material-${index}`}
              map={textureMap}
            />
          ))}
        </mesh>
      </RigidBody>
    </Suspense>
  );
};

export default Dice;
