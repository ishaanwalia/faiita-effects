"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

const stateData = [
  { code: "DL", name: "Delhi", lat: 28.6, lon: 77.2 },
  { code: "MH", name: "Maharashtra", lat: 19.0, lon: 72.8 },
  { code: "KA", name: "Karnataka", lat: 12.9, lon: 77.6 },
  { code: "TN", name: "Tamil Nadu", lat: 13.0, lon: 80.2 },
  { code: "TG", name: "Telangana", lat: 17.4, lon: 78.5 },
  { code: "GJ", name: "Gujarat", lat: 22.2, lon: 71.6 },
  { code: "WB", name: "West Bengal", lat: 22.5, lon: 88.3 },
  { code: "KL", name: "Kerala", lat: 10.5, lon: 76.2 },
  { code: "PB", name: "Punjab", lat: 31.1, lon: 75.3 },
  { code: "RJ", name: "Rajasthan", lat: 26.9, lon: 73.8 },
];

function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function Globe() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const stateMeshes = useMemo(() => {
    return stateData.map((state) => {
      const pos = latLonToVector3(state.lat, state.lon, 1.04);
      return { position: pos, code: state.code };
    });
  }, []);

  return (
    <group ref={groupRef}>
      {/* Main sphere */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#0A0A0F"
          emissive="#1A1A2E"
          emissiveIntensity={0.3}
          roughness={0.7}
          metalness={0.4}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh>
        <sphereGeometry args={[1.01, 32, 32]} />
        <meshBasicMaterial
          color="#00D4AA"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Atmosphere glow */}
      <mesh>
        <sphereGeometry args={[1.08, 64, 64]} />
        <meshBasicMaterial
          color="#00D4AA"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>

      {/* State nodes */}
      {stateMeshes.map((node) => (
        <group key={node.code} position={node.position}>
          <mesh>
            <sphereGeometry args={[0.025, 16, 16]} />
            <meshBasicMaterial color="#00D4AA" />
          </mesh>
          <pointLight color="#00D4AA" intensity={0.8} distance={0.15} />
        </group>
      ))}

      {/* Lighting - multiple sources for visibility */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-5, 3, -5]} intensity={0.5} color="#00D4AA" />
      <pointLight position={[5, -3, 5]} intensity={0.3} color="#FFD700" />
    </group>
  );
}

export function GlobeSection() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full bg-[#0A0A0F]">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 2.8], fov: 50 }}>
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          <Globe />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>

      {/* Overlay text */}
      <div className="absolute bottom-8 left-0 right-0 text-center z-10 pointer-events-none">
        <p className="text-[#00D4AA] text-xs uppercase tracking-[0.3em] mb-2">
          Interactive 3D Network
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
          25 States, One Federation
        </h2>
        <p className="text-[#6B6B7B] text-sm max-w-md mx-auto">
          Drag to explore our nationwide network of IT dealer associations
        </p>
      </div>
    </section>
  );
}