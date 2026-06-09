"use client";
import { motion } from "framer-motion";

const rings = [
  { size: 340, tiltX: 70, tiltZ: 0,  color: "#1a7ec8", opacity: 0.45, duration: 9,  dotSize: 10 },
  { size: 280, tiltX: 50, tiltZ: 40, color: "#7dd3fc", opacity: 0.35, duration: 7,  dotSize: 8  },
  { size: 220, tiltX: 80, tiltZ: 20, color: "#1058a8", opacity: 0.50, duration: 11, dotSize: 7  },
  { size: 170, tiltX: 30, tiltZ: 60, color: "#1a7ec8", opacity: 0.30, duration: 6,  dotSize: 6  },
  { size: 420, tiltX: 60, tiltZ: 15, color: "#1058a8", opacity: 0.15, duration: 14, dotSize: 6  },
];

export function ThreeOrb() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ perspective: "700px" }}>
      {/* Central glowing sphere */}
      <div className="absolute w-28 h-28 rounded-full"
        style={{
          background: "radial-gradient(circle at 38% 35%, #7dd3fc 0%, #1a7ec8 40%, #0b1d4e 100%)",
          boxShadow: "0 0 60px 20px #1a7ec844, 0 0 120px 40px #1058a822",
          opacity: 0.85,
        }}
      />
      {/* Inner core highlight */}
      <div className="absolute w-10 h-10 rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 30%, #ffffff88, transparent 70%)",
          transform: "translate(-18px, -16px)",
        }}
      />

      {/* Orbiting rings */}
      {rings.map((ring, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: ring.size,
            height: ring.size,
            borderColor: `${ring.color}`,
            opacity: ring.opacity,
            rotateX: `${ring.tiltX}deg`,
            rotateZ: `${ring.tiltZ}deg`,
          }}
          animate={{ rotateZ: [`${ring.tiltZ}deg`, `${ring.tiltZ + 360}deg`] }}
          transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
        >
          {/* Orbiting dot */}
          <div
            className="absolute rounded-full"
            style={{
              width: ring.dotSize,
              height: ring.dotSize,
              backgroundColor: ring.color,
              top: -ring.dotSize / 2,
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: `0 0 ${ring.dotSize * 2}px ${ring.color}`,
            }}
          />
        </motion.div>
      ))}

      {/* Equator ring */}
      <motion.div
        className="absolute rounded-full border border-[#7dd3fc]"
        style={{ width: 150, height: 150, opacity: 0.5, rotateX: "90deg" }}
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      {/* Subtle outer glow haze */}
      <div className="absolute w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #1a7ec811 0%, transparent 70%)" }}
      />
    </div>
  );
}

export default ThreeOrb;
