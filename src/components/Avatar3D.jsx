import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Cylinder, Box } from '@react-three/drei';

// Cartoon-style Avatar (South Park inspired)
function Avatar() {
  const avatarRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Gentle floating animation
    avatarRef.current.position.y = Math.sin(time * 0.8) * 0.3;
    // Subtle rotation following mouse
    const x = (state.mouse.x * Math.PI) / 10;
    const y = (state.mouse.y * Math.PI) / 10;
    avatarRef.current.rotation.y += (x - avatarRef.current.rotation.y) * 0.05;
    avatarRef.current.rotation.x += (y - avatarRef.current.rotation.x) * 0.05;
  });

  return (
    <group ref={avatarRef} position={[0, 0, 0]} scale={1.2}>
      {/* Head - Big round cartoon head */}
      <Sphere args={[1.2, 32, 32]} position={[0, 1.8, 0]}>
        <meshToonMaterial
          color="#ffd4a3"
        />
      </Sphere>
      
      {/* Hair/Cap */}
      <Sphere args={[1.25, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} position={[0, 2.5, 0]}>
        <meshToonMaterial color="#8B4513" />
      </Sphere>
      
      {/* Eyes - Big cartoon eyes with white background */}
      <group position={[0, 2, 0.9]}>
        {/* Left eye white */}
        <Sphere args={[0.25, 16, 16]} position={[-0.35, 0, 0]}>
          <meshToonMaterial color="#ffffff" />
        </Sphere>
        {/* Left pupil */}
        <Sphere args={[0.12, 16, 16]} position={[-0.35, 0, 0.23]}>
          <meshToonMaterial color="#000000" />
        </Sphere>
        
        {/* Right eye white */}
        <Sphere args={[0.25, 16, 16]} position={[0.35, 0, 0]}>
          <meshToonMaterial color="#ffffff" />
        </Sphere>
        {/* Right pupil */}
        <Sphere args={[0.12, 16, 16]} position={[0.35, 0, 0.23]}>
          <meshToonMaterial color="#000000" />
        </Sphere>
      </group>
      
      {/* Big cartoon smile */}
      <Box args={[0.6, 0.08, 0.08]} position={[0, 1.3, 1.1]} rotation={[0, 0, 0.1]}>
        <meshToonMaterial color="#000000" />
      </Box>
      
      {/* Body - Simple rectangular body */}
      <Box args={[1.8, 2.2, 1]} position={[0, -0.3, 0]}>
        <meshToonMaterial
          color="#e74c3c"
        />
      </Box>
      
      {/* Arms - Simple cylinders */}
      <Cylinder args={[0.25, 0.25, 1.8]} position={[-1.1, -0.2, 0]} rotation={[0, 0, Math.PI / 4]}>
        <meshToonMaterial color="#e74c3c" />
      </Cylinder>
      <Box args={[0.35, 0.35, 0.35]} position={[-1.8, -0.8, 0]}>
        <meshToonMaterial color="#ffd4a3" />
      </Box>
      
      <Cylinder args={[0.25, 0.25, 1.8]} position={[1.1, -0.2, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <meshToonMaterial color="#e74c3c" />
      </Cylinder>
      <Box args={[0.35, 0.35, 0.35]} position={[1.8, -0.8, 0]}>
        <meshToonMaterial color="#ffd4a3" />
      </Box>
      
      {/* Legs - Short cartoon legs */}
      <Cylinder args={[0.3, 0.3, 1.2]} position={[-0.5, -2, 0]}>
        <meshToonMaterial color="#3498db" />
      </Cylinder>
      <Box args={[0.45, 0.25, 0.6]} position={[-0.5, -2.7, 0.2]}>
        <meshToonMaterial color="#2c3e50" />
      </Box>
      
      <Cylinder args={[0.3, 0.3, 1.2]} position={[0.5, -2, 0]}>
        <meshToonMaterial color="#3498db" />
      </Cylinder>
      <Box args={[0.45, 0.25, 0.6]} position={[0.5, -2.7, 0.2]}>
        <meshToonMaterial color="#2c3e50" />
      </Box>
      
      {/* Laptop on lap */}
      <group position={[0, -0.8, 0.7]} rotation={[-0.2, 0, 0]}>
        <Box args={[1.2, 0.08, 0.8]}>
          <meshToonMaterial color="#34495e" />
        </Box>
        <Box args={[1.2, 0.9, 0.08]} position={[0, 0.45, -0.4]} rotation={[-0.15, 0, 0]}>
          <meshToonMaterial color="#2c3e50" />
        </Box>
        {/* Screen with code */}
        <Box args={[1.1, 0.8, 0.02]} position={[0, 0.45, -0.35]} rotation={[-0.15, 0, 0]}>
          <meshToonMaterial 
            color="#1a1a1a" 
            emissive="#38bdf8"
            emissiveIntensity={0.3}
          />
        </Box>
      </group>
    </group>
  );
}

// Floating code symbols around avatar
function CodeSymbols() {
  const symbolsRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    symbolsRef.current.rotation.y = time * 0.1;
  });

  return (
    <group ref={symbolsRef}>
      {['<', '>', '{', '}', '/', '*'].map((symbol, index) => {
        const angle = (index / 6) * Math.PI * 2;
        const radius = 4;
        return (
          <mesh
            key={index}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 2) * 0.5,
              Math.sin(angle) * radius
            ]}
          >
            <boxGeometry args={[0.3, 0.3, 0.1]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#38bdf8"
              emissiveIntensity={0.3}
              transparent
              opacity={0.7}
            />
          </mesh>
        );
      })}
    </group>
  );
}

const Avatar3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 1, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#38bdf8" />
        <spotLight
          position={[0, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
        />
        
        <Avatar />
        <CodeSymbols />
      </Canvas>
    </div>
  );
};

export default Avatar3D;
