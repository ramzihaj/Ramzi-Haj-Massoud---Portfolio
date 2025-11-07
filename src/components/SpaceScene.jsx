import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Starfield Component
function Starfield({ count = 5000 }) {
  const pointsRef = useRef();
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Random positions in a sphere
      const radius = 50 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Star colors (white, blue, yellow)
      const colorChoice = Math.random();
      if (colorChoice < 0.7) {
        // White stars
        colors[i3] = 1;
        colors[i3 + 1] = 1;
        colors[i3 + 2] = 1;
      } else if (colorChoice < 0.85) {
        // Blue stars
        colors[i3] = 0.5;
        colors[i3 + 1] = 0.7;
        colors[i3 + 2] = 1;
      } else {
        // Yellow stars
        colors[i3] = 1;
        colors[i3 + 1] = 1;
        colors[i3 + 2] = 0.5;
      }
    }
    
    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.02;
    pointsRef.current.rotation.x = time * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Moon/Planet Component
function Moon() {
  const moonRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    moonRef.current.rotation.y = time * 0.1;
    // Gentle floating motion
    moonRef.current.position.y = Math.sin(time * 0.5) * 0.3;
  });

  return (
    <group ref={moonRef} position={[8, 2, -15]}>
      <Sphere args={[3, 64, 64]}>
        <meshStandardMaterial
          color="#e0e0e0"
          roughness={0.9}
          metalness={0.1}
          emissive="#404040"
          emissiveIntensity={0.2}
        />
      </Sphere>
      {/* Moon craters (smaller spheres) */}
      <Sphere args={[0.5, 32, 32]} position={[1.5, 0.5, 2]}>
        <meshStandardMaterial
          color="#c0c0c0"
          roughness={1}
          metalness={0}
        />
      </Sphere>
      <Sphere args={[0.3, 32, 32]} position={[-1.2, -0.8, 2.2]}>
        <meshStandardMaterial
          color="#b0b0b0"
          roughness={1}
          metalness={0}
        />
      </Sphere>
      <Sphere args={[0.4, 32, 32]} position={[0.5, -1.5, 2.5]}>
        <meshStandardMaterial
          color="#c5c5c5"
          roughness={1}
          metalness={0}
        />
      </Sphere>
    </group>
  );
}

// Smaller decorative planets
function SmallPlanet({ position, color, size = 1 }) {
  const planetRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    planetRef.current.rotation.y = time * 0.15;
    planetRef.current.rotation.x = time * 0.05;
  });

  return (
    <Sphere ref={planetRef} args={[size, 32, 32]} position={position}>
      <meshStandardMaterial
        color={color}
        roughness={0.7}
        metalness={0.3}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
}

// Shooting stars
function ShootingStar({ delay = 0 }) {
  const starRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  
  useFrame((state) => {
    const time = (state.clock.getElapsedTime() + delay) % 10;
    
    if (time < 0.5) {
      setIsVisible(true);
      const progress = time * 2;
      starRef.current.position.x = -20 + progress * 40;
      starRef.current.position.y = 10 - progress * 20;
      starRef.current.position.z = -30 + progress * 10;
    } else {
      setIsVisible(false);
    }
  });

  if (!isVisible) return null;

  return (
    <mesh ref={starRef}>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  );
}

// Main Scene
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4a90e2" />
      <pointLight position={[15, 5, 10]} intensity={0.4} color="#9b59b6" />
      
      {/* Stars */}
      <Starfield count={5000} />
      
      {/* Main Moon */}
      <Moon />
      
      {/* Small decorative planets */}
      <SmallPlanet position={[-12, -3, -20]} color="#e74c3c" size={1.2} />
      <SmallPlanet position={[10, 5, -25]} color="#3498db" size={0.8} />
      <SmallPlanet position={[-8, 8, -18]} color="#9b59b6" size={0.6} />
      
      {/* Shooting stars */}
      <ShootingStar delay={0} />
      <ShootingStar delay={3} />
      <ShootingStar delay={7} />
    </>
  );
}

const SpaceScene = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default SpaceScene;
