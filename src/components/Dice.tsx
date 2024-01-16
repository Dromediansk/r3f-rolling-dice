import { FC, Suspense, useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

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

  return (
    <Suspense fallback={null}>
      <mesh geometry={roundedBoxGeometry}>
        {texture.map((textureMap, index) => (
          <meshStandardMaterial
            key={textureMap.uuid}
            attach={`material-${index}`}
            map={textureMap}
          />
        ))}
      </mesh>
    </Suspense>
  );
};

export default Dice;
