import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const ParticleSystem = () => {
    const count = 200;
    const mesh = useRef();

    const dummy = useMemo(() => new THREE.Object3D(), []);
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
            t = particle.t += speed / 2;
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);

            particle.mx += (state.mouse.x * 1000 - particle.mx) * 0.01;
            particle.my += (state.mouse.y * 1000 - 1 - particle.my) * 0.01;

            dummy.position.set(
                (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            );
            dummy.scale.set(s, s, s);
            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();

            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <dodecahedronGeometry args={[0.2, 0]} />
            <meshPhongMaterial color="#00aaff" emissive="#00aaff" emissiveIntensity={0.5} />
        </instancedMesh>
    );
};

const FloatingShape = ({ position, color }) => {
    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh position={position}>
                <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                <meshStandardMaterial color={color} roughness={0.1} metalness={0.8} />
            </mesh>
        </Float>
    );
};

const AboutScene = () => {
    return (
        <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: 0 }}>
            <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} color="orange" intensity={0.5} />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <ParticleSystem />

                <FloatingShape position={[-4, 2, -5]} color="#ff0055" />
                <FloatingShape position={[4, -2, -2]} color="#00ffaa" />

                <Sparkles count={100} scale={12} size={4} speed={0.4} opacity={0.5} color="#ffffff" />
            </Canvas>
        </div>
    );
};

export default AboutScene;
