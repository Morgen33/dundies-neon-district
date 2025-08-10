import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Text3D, Center, Float } from '@react-three/drei';
import * as THREE from 'three';

interface DundieCharacter3DProps {
  modelPath?: string;
  width?: number;
  height?: number;
  autoRotate?: boolean;
  scale?: number;
  characterName?: string;
}

// Individual 3D Character Component
function Character3D({ modelPath, scale = 1, characterName = "Dundie" }: { modelPath?: string; scale?: number; characterName?: string }) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Load the 3D model if provided
  const { scene } = modelPath ? useGLTF(modelPath) : { scene: null };
  
  // Animation frame
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  if (scene) {
    // Use the provided 3D model
    return (
      <group ref={groupRef}>
        <primitive
          object={scene.clone()}
          scale={[scale, scale, scale]}
          position={[0, 0, 0]}
        />
      </group>
    );
  }

  // Fallback: Create a stylized 3D character
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef} scale={[scale, scale, scale]}>
        {/* Head */}
        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#FF3AAE" emissive="#FF3AAE" emissiveIntensity={0.2} />
        </mesh>
        
        {/* Body */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.3, 0.4, 1, 8]} />
          <meshStandardMaterial color="#9A5BFF" emissive="#9A5BFF" emissiveIntensity={0.2} />
        </mesh>
        
        {/* Hat */}
        <mesh position={[0, 2, 0]} rotation={[0, 0, 0.1]}>
          <coneGeometry args={[0.3, 0.6, 8]} />
          <meshStandardMaterial color="#00D1FF" emissive="#00D1FF" emissiveIntensity={0.3} />
        </mesh>
        
        {/* Eyes */}
        <mesh position={[-0.15, 1.6, 0.4]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.15, 1.6, 0.4]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        
        {/* Arms */}
        <mesh position={[-0.5, 0.7, 0]} rotation={[0, 0, -0.5]}>
          <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
          <meshStandardMaterial color="#B6FF3B" emissive="#B6FF3B" emissiveIntensity={0.2} />
        </mesh>
        <mesh position={[0.5, 0.7, 0]} rotation={[0, 0, 0.5]}>
          <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
          <meshStandardMaterial color="#B6FF3B" emissive="#B6FF3B" emissiveIntensity={0.2} />
        </mesh>
        
        {/* Legs */}
        <mesh position={[-0.15, -0.3, 0]}>
          <cylinderGeometry args={[0.08, 0.1, 0.6, 8]} />
          <meshStandardMaterial color="#FF3AAE" emissive="#FF3AAE" emissiveIntensity={0.1} />
        </mesh>
        <mesh position={[0.15, -0.3, 0]}>
          <cylinderGeometry args={[0.08, 0.1, 0.6, 8]} />
          <meshStandardMaterial color="#FF3AAE" emissive="#FF3AAE" emissiveIntensity={0.1} />
        </mesh>
      </group>
    </Float>
  );
}

// Loading component
function Loader() {
  return (
    <Center>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.2}
        height={0.02}
        curveSegments={12}
      >
        Loading...
        <meshStandardMaterial color="#FF3AAE" emissive="#FF3AAE" emissiveIntensity={0.3} />
      </Text3D>
    </Center>
  );
}

// Main 3D Viewer Component
const DundieCharacter3D = ({ 
  modelPath, 
  width = 300, 
  height = 300, 
  autoRotate = true, 
  scale = 1,
  characterName = "Dundie"
}: DundieCharacter3DProps) => {
  return (
    <div style={{ width, height }} className="rounded-2xl overflow-hidden border border-hot-pink/30">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ 
          alpha: true, 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2 
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} color="#FF3AAE" />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.5} 
          color="#00D1FF"
          castShadow
        />
        <pointLight position={[-5, 5, 5]} intensity={0.8} color="#9A5BFF" />
        <spotLight 
          position={[0, 8, 0]} 
          intensity={1} 
          color="#B6FF3B"
          angle={Math.PI / 6}
          penumbra={0.5}
        />
        
        {/* Background */}
        <mesh position={[0, 0, -3]}>
          <planeGeometry args={[20, 20]} />
          <meshBasicMaterial color="#000000" transparent opacity={0.8} />
        </mesh>
        
        {/* 3D Character */}
        <Suspense fallback={<Loader />}>
          <Character3D 
            modelPath={modelPath} 
            scale={scale}
            characterName={characterName}
          />
        </Suspense>
        
        {/* Controls */}
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          autoRotate={autoRotate}
          autoRotateSpeed={2}
          minDistance={2}
          maxDistance={8}
        />
      </Canvas>
    </div>
  );
};

export default DundieCharacter3D;