import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const Camera = () => {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[-30, 300, 200]}
        near={0.1}
        far={600}
        fov={35}
      />
      <OrbitControls enableDamping />
    </>
  );
};

export default Camera;
