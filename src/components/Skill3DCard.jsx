import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCard() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Floating animation
    meshRef.current.position.y = Math.sin(time) * 0.3;
    
    // Gentle rotation when hovered
    if (hovered) {
      meshRef.current.rotation.y += 0.02;
    } else {
      meshRef.current.rotation.y += 0.01;
    }
    meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[2, 2.5, 0.3]}
      radius={0.1}
      smoothness={4}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial
        color={hovered ? "#7c3aed" : "#27272a"}
        roughness={0.3}
        metalness={0.8}
        emissive={hovered ? "#7c3aed" : "#000000"}
        emissiveIntensity={hovered ? 0.3 : 0}
      />
    </RoundedBox>
  );
}

const Skill3DCard = ({ className = '' }) => {
  return (
    <div className={`w-full h-48 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#38bdf8" />
        <FloatingCard />
      </Canvas>
    </div>
  );
};

export default Skill3DCard;
