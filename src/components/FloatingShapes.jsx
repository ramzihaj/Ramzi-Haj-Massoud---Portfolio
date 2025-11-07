import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Animated Sphere
function AnimatedSphere({ position, color }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.5;
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.1}
        metalness={0.8}
      />
    </Sphere>
  );
}

// Animated Box
function AnimatedBox({ position, color }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.cos(time * 0.6) * 0.4;
    meshRef.current.rotation.x = time * 0.3;
    meshRef.current.rotation.z = time * 0.2;
  });

  return (
    <Box ref={meshRef} args={[1.5, 1.5, 1.5]} position={position}>
      <meshStandardMaterial
        color={color}
        roughness={0.2}
        metalness={0.9}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </Box>
  );
}

// Animated Torus
function AnimatedTorus({ position, color }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(time * 0.7) * 0.6;
    meshRef.current.rotation.x = time * 0.4;
    meshRef.current.rotation.y = time * 0.2;
  });

  return (
    <Torus ref={meshRef} args={[1, 0.4, 16, 32]} position={position}>
      <meshStandardMaterial
        color={color}
        roughness={0.1}
        metalness={0.9}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </Torus>
  );
}

// Particle System
function ParticleField() {
  const pointsRef = useRef();
  const particleCount = 1000;
  
  const particles = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    particles[i] = (Math.random() - 0.5) * 30;
  }

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = time * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#38bdf8"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main 3D Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#38bdf8" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#7c3aed" />
      
      <ParticleField />
      
      <AnimatedSphere position={[-3, 0, -2]} color="#38bdf8" />
      <AnimatedBox position={[3, 0, -3]} color="#7c3aed" />
      <AnimatedTorus position={[0, -2, -5]} color="#f43f5e" />
      <AnimatedSphere position={[4, 2, -4]} color="#22d3ee" />
      <AnimatedBox position={[-4, -1, -6]} color="#a78bfa" />
    </>
  );
}

// Main Component Export
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default FloatingShapes;
