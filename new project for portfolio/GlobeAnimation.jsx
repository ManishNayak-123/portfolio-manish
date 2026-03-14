import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { useRef } from "react";

function Planet() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.003;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2, 64, 64]}  />
      <meshStandardMaterial
        color="#00ffff"
        emissive="#00ffff"
        emissiveIntensity={1}
        wireframe
      />
    </mesh>
  );
}

function OrbitDot() {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.x = Math.sin(t) * 1.5;
    ref.current.position.z = Math.cos(t) * 1.5;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  );
}

export default function HeroSphere() {
  return (
    <div className="w-[220px] h-[220px] 
    
                sm:w-[120px] sm:h-[120px] 
                md:w-[300px] md:h-[300px] 
                lg:w-[500px] lg:h-[500px]
                bg-transparent md:bg-transparent rounded-full">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} color="#00ffff" />

        <Planet />
        <OrbitDot />

        <Sparkles
          count={80}
          scale={[4, 4, 4]}
          size={1}
          speed={0.4}
          color="#00ffff"
        />
      </Canvas>
    </div>
  );
}