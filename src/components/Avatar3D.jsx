import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Cylinder, Box } from '@react-three/drei';

// Personalized 3D Avatar - Ramzi
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
    <group ref={avatarRef} position={[0, 0, 0]} scale={1.1}>
      {/* Head - More realistic proportions with medium skin tone */}
      <Sphere args={[1, 32, 32]} position={[0, 1.8, 0]}>
        <meshStandardMaterial
          color="#c4956c"
          roughness={0.8}
          metalness={0.1}
        />
      </Sphere>
      
      {/* Short hair - Black/dark brown */}
      <Sphere args={[1.02, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} position={[0, 2.2, 0]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </Sphere>
      {/* Hair sides */}
      <Box args={[2.1, 0.4, 1.2]} position={[0, 2.05, 0]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </Box>
      
      {/* Eyes - Realistic with green/hazel iris */}
      <group position={[0, 1.95, 0.85]}>
        {/* Left eye white */}
        <Sphere args={[0.15, 16, 16]} position={[-0.3, 0, 0]}>
          <meshStandardMaterial color="#ffffff" />
        </Sphere>
        {/* Left iris - green/hazel */}
        <Sphere args={[0.09, 16, 16]} position={[-0.3, 0, 0.14]}>
          <meshStandardMaterial color="#6b8e23" />
        </Sphere>
        {/* Left pupil */}
        <Sphere args={[0.05, 16, 16]} position={[-0.3, 0, 0.19]}>
          <meshStandardMaterial color="#000000" />
        </Sphere>
        
        {/* Right eye white */}
        <Sphere args={[0.15, 16, 16]} position={[0.3, 0, 0]}>
          <meshStandardMaterial color="#ffffff" />
        </Sphere>
        {/* Right iris - green/hazel */}
        <Sphere args={[0.09, 16, 16]} position={[0.3, 0, 0.14]}>
          <meshStandardMaterial color="#6b8e23" />
        </Sphere>
        {/* Right pupil */}
        <Sphere args={[0.05, 16, 16]} position={[0.3, 0, 0.19]}>
          <meshStandardMaterial color="#000000" />
        </Sphere>
      </group>
      
      {/* Eyebrows - Dark */}
      <Box args={[0.35, 0.08, 0.05]} position={[-0.3, 2.15, 0.95]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>
      <Box args={[0.35, 0.08, 0.05]} position={[0.3, 2.15, 0.95]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>
      
      {/* Beard and goatee */}
      <group>
        {/* Chin beard */}
        <Sphere args={[0.35, 16, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI]} position={[0, 1.2, 0.8]}>
          <meshStandardMaterial color="#2c2c2c" roughness={0.9} />
        </Sphere>
        {/* Jaw line beard */}
        <Box args={[1.4, 0.5, 0.3]} position={[0, 1.45, 0.75]}>
          <meshStandardMaterial color="#2c2c2c" roughness={0.9} />
        </Box>
        {/* Mustache */}
        <Box args={[0.5, 0.15, 0.15]} position={[0, 1.65, 0.95]}>
          <meshStandardMaterial color="#2c2c2c" roughness={0.9} />
        </Box>
      </group>
      
      {/* Nose */}
      <Box args={[0.15, 0.25, 0.2]} position={[0, 1.75, 1.0]}>
        <meshStandardMaterial color="#b8876b" roughness={0.8} />
      </Box>
      
      {/* Neck */}
      <Cylinder args={[0.35, 0.4, 0.5]} position={[0, 1.05, 0]}>
        <meshStandardMaterial color="#c4956c" roughness={0.8} />
      </Cylinder>
      
      {/* Body - Black t-shirt with ROB TECH logo */}
      <Box args={[1.6, 2, 0.9]} position={[0, -0.2, 0]}>
        <meshStandardMaterial
          color="#0a0a0a"
          roughness={0.7}
        />
      </Box>
      
      {/* ROB TECH Logo on chest */}
      <group position={[0, 0.3, 0.5]}>
        {/* Logo text representation */}
        <Box args={[0.8, 0.15, 0.02]} position={[0, 0.1, 0]}>
          <meshStandardMaterial 
            color="#3b82f6" 
            emissive="#3b82f6"
            emissiveIntensity={0.3}
          />
        </Box>
        <Box args={[0.8, 0.15, 0.02]} position={[0, -0.1, 0]}>
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#ffffff"
            emissiveIntensity={0.2}
          />
        </Box>
      </group>
      
      {/* Arms - Medium skin tone */}
      <Cylinder args={[0.22, 0.22, 1.6]} position={[-1, -0.1, 0]} rotation={[0, 0, Math.PI / 5]}>
        <meshStandardMaterial color="#c4956c" roughness={0.8} />
      </Cylinder>
      <Sphere args={[0.25, 16, 16]} position={[-1.65, -0.75, 0]}>
        <meshStandardMaterial color="#c4956c" roughness={0.8} />
      </Sphere>
      
      <Cylinder args={[0.22, 0.22, 1.6]} position={[1, -0.1, 0]} rotation={[0, 0, -Math.PI / 5]}>
        <meshStandardMaterial color="#c4956c" roughness={0.8} />
      </Cylinder>
      <Sphere args={[0.25, 16, 16]} position={[1.65, -0.75, 0]}>
        <meshStandardMaterial color="#c4956c" roughness={0.8} />
      </Sphere>
      
      {/* Legs - Black pants */}
      <Cylinder args={[0.28, 0.28, 1.4]} position={[-0.45, -1.95, 0]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.6} />
      </Cylinder>
      <Box args={[0.4, 0.2, 0.55]} position={[-0.45, -2.75, 0.15]}>
        <meshStandardMaterial color="#2c2c2c" roughness={0.7} />
      </Box>
      
      <Cylinder args={[0.28, 0.28, 1.4]} position={[0.45, -1.95, 0]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.6} />
      </Cylinder>
      <Box args={[0.4, 0.2, 0.55]} position={[0.45, -2.75, 0.15]}>
        <meshStandardMaterial color="#2c2c2c" roughness={0.7} />
      </Box>
      
      {/* Laptop */}
      <group position={[0, -0.7, 0.6]} rotation={[-0.3, 0, 0]}>
        <Box args={[1.1, 0.06, 0.75]}>
          <meshStandardMaterial color="#34495e" metalness={0.7} roughness={0.3} />
        </Box>
        <Box args={[1.1, 0.85, 0.06]} position={[0, 0.42, -0.38]} rotation={[-0.2, 0, 0]}>
          <meshStandardMaterial color="#2c3e50" metalness={0.6} roughness={0.4} />
        </Box>
        {/* Screen with code - blue glow */}
        <Box args={[1.0, 0.75, 0.02]} position={[0, 0.42, -0.33]} rotation={[-0.2, 0, 0]}>
          <meshStandardMaterial 
            color="#0f172a" 
            emissive="#3b82f6"
            emissiveIntensity={0.4}
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
