import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/messagemodel.gltf");

  const [time, setTime] = useState(0);

  // Use useFrame to rotate the group
  // Use useFrame to rotate the group and oscillate up and down
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Increment time
      setTime(time + delta);

      // Set y position using a sinusoidal function for smooth up and down motion
      groupRef.current.position.y = Math.sin(time) * 0.3; // Adjust amplitude as needed
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere.geometry}
        material={materials["Material.001"]}
        scale={[1.91, 1.306, 1.91]}
      />
      <mesh
        geometry={nodes.Cone.geometry}
        material={materials["Material.002"]}
        position={[-1.791, -0.64, 0.153]}
        rotation={[0.103, 0.164, 2.046]}
        scale={0.387}
      />
      <mesh
        geometry={nodes.Sphere001.geometry}
        material={materials["Material.001"]}
        position={[1.56, 0.998, -1.032]}
        rotation={[-Math.PI, 0.23, -Math.PI]}
        scale={[1.394, 0.954, 1.383]}
      />
      <mesh
        geometry={nodes.Cone001.geometry}
        material={materials["Material.002"]}
        position={[2.859, 0.531, -0.843]}
        rotation={[3.04, 0.064, -1.072]}
        scale={0.283}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.003"]}
        position={[0.19, 0.677, 1.605]}
        rotation={[0.045, 0.223, -1.577]}
        scale={[-0.087, 1.048, 0.111]}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.003"]}
        position={[0.169, 0.246, 1.856]}
        rotation={[0.045, 0.223, -1.577]}
        scale={[-0.079, 0.958, 0.101]}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.003"]}
        position={[0.195, -0.176, 1.923]}
        rotation={[0.045, 0.223, -1.577]}
        scale={[-0.082, 0.993, 0.105]}
      />
      <mesh
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.003"]}
        position={[1.643, 1.298, 0.341]}
        rotation={[0.045, 0.223, -1.577]}
        scale={[-0.05, 0.6, 0.064]}
      />
      <mesh
        geometry={nodes.Cylinder004.geometry}
        material={materials["Material.003"]}
        position={[1.643, 1.039, 0.341]}
        rotation={[0.045, 0.223, -1.577]}
        scale={[-0.047, 0.571, 0.06]}
      />
    </group>
  );
}

useGLTF.preload("/messagemodel.gltf");
