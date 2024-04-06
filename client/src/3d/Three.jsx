import MessageModel from "../Messagemodel";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function Three() {
  return (
    <div>
      <div className=" sm:block hidden overflow-visible w-[50vw] h-[100vh]">
        <Canvas>
          <ambientLight intensity={1.2} position={[10, 10, 10]} />

          <pointLight intensity={1} position={[1, 1, 1]} />

          <OrbitControls enableZoom={false} />

          <Suspense fallback={null}>
            <MessageModel position={[0, 0, -2]} />
          </Suspense>

          <Environment preset="sunset" />

          <ContactShadows
            opacity={1}
            scale={10}
            resolution={256}
            position={[0, -2, -3]}
          />
        </Canvas>
      </div>
    </div>
  );
}

export default Three;
