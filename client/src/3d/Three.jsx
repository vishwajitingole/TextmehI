import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense } from "react";
import Model from "../Messagemodel";

function Three() {
  return (
    <div>
      <div className="sm:block hidden overflow-visible w-[50vw] h-[100vh]">
        <Canvas>
          <ambientLight intensity={1.2} position={[10, 10, 10]} />
          <pointLight intensity={2} position={[0, 0, 3]} />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <Model position={[0, 0, -2]} />
          </Suspense>
          <Environment preset="sunset" />
          <ContactShadows
            opacity={1}
            scale={10}
            resolution={256}
            position={[0, -2, -3]}
          />
          <PerspectiveCamera makeDefault position={[-1, 0, 5.7]} />
        </Canvas>
      </div>
    </div>
  );
}

export default Three;
