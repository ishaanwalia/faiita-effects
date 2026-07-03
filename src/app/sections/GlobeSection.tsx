"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { mockStats } from "@/lib/mock-data";

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    // Use a procedural Earth-like texture since we don't have India specific one
    // In production, replace with actual Earth texture
    const tex = loader.load(
      "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg",
      (t) => setTexture(t)
    );
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  // Nodes for Indian states - positioned roughly on the Indian subcontinent
  const stateNodes = Array.from({ length: mockStats.states }, (_, i) => {
    // India is roughly at lat 8-37°N, long 68-97°E
    // Map to sphere coordinates
    const lat = 8 + (i / mockStats.states) * 29; // 8 to 37 degrees
    const lon = 68 + Math.random() * 29; // 68 to 97 degrees

    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const radius = 1.02;
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.cos(theta);

    return { position: [x, y, z] as [number, number, number], id: i };
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        {texture ? (
          <meshPhongMaterial map={texture} />
        ) : (
          <meshPhongMaterial color="#1e3a5f" wireframe />
        )}
      </Sphere>

      {/* Glowing nodes for states */}
      {stateNodes.map((node) => (
        <mesh key={node.id} position={node.position}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshBasicMaterial color="#FF9933" />
          <pointLight color="#FF9933" intensity={0.5} distance={0.3} />
        </mesh>
      ))}

      {/* Ambient and directional lights for the globe */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 3, 5]} intensity={1} />
      <directionalLight position={[-5, -1, -5]} intensity={0.3} />
    </group>
  );
}

export function GlobeSection() {
  return (
    <section className="relative py-20 bg-[#0A2540] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A2540]/50 to-transparent pointer-events-none z-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/20 text-[#FF9933] text-sm font-medium mb-4">
            Pan-India Presence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Our Reach Across India
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Connecting {mockStats.states} states with {mockStats.dealers.toLocaleString("en-IN")}+ IT channel partners
          </p>
        </div>

        <div className="h-[400px] md:h-[500px] w-full">
          <Canvas
            camera={{ position: [0, 0.5, 3], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
          >
            <Globe />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              rotateSpeed={0.5}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
}