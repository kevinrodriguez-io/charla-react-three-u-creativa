import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, Sky, Stars } from "@react-three/drei";
import { Suspense } from "react";
import Grass from "./Grass/Grass";

export const App3DCanvas = () => {
  return (
    <Canvas dpr={[1, 1.5]} shadows camera={{ position: [0, 0, 15] }}>
      <Environment preset="night" />
      <Sky
        mieCoefficient={0.09}
        mieDirectionalG={0.99}
        inclination={0.5}
        azimuth={0.25}
      />
      <Stars count={25_000} depth={100} fade />
      <ambientLight />
      <directionalLight
        intensity={0.8}
        position={[0, 10, 0]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Suspense fallback={null}>
        <Grass width={100} instances={100_000} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};
