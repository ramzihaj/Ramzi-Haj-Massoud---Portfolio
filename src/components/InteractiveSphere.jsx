import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Smooth rotation
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
    
    // Pulsating effect
    const scale = 1 + Math.sin(time * 2) * 0.1;
    meshRef.current.scale.setScalar(scale);
    
    // Follow mouse
    const x = (state.mouse.x * Math.PI) / 4;
    const y = (state.mouse.y * Math.PI) / 4;
    meshRef.current.rotation.x += (y - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.y += (x - meshRef.current.rotation.y) * 0.05;
  });

  return (
    <Sphere
      ref={meshRef}
      args={[2, 100, 100]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <MeshDistortMaterial
        color={hovered ? "#7c3aed" : "#38bdf8"}
        attach="material"
        distort={0.5}
        speed={3}
        roughness={0}
        metalness={0.8}
        emissive={hovered ? "#7c3aed" : "#38bdf8"}
        emissiveIntensity={0.3}
      />
    </Sphere>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#38bdf8" />
      <spotLight
        position={[5, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        color="#7c3aed"
      />
    </>
  );
}

const InteractiveSphere = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Lights />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default InteractiveSphere;
