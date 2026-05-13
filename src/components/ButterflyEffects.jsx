import { useEffect, useRef, useState } from "react";

/* ══════════════════════════════════════
   1. CURSOR TRAIL — tiny sparkles follow mouse
   ══════════════════════════════════════ */
function CursorTrail() {
  const [sparks, setSparks] = useState([]);
  const idRef = useRef(0);

  useEffect(() => {
    const onMove = (e) => {
      const id = idRef.current++;
      const colors = ["#f368e0","#b983ff","#fdcb6e","#55efc4","#fd79a8","#a29bfe"];
      const color  = colors[Math.floor(Math.random() * colors.length)];
      const size   = 4 + Math.random() * 6;
      setSparks(prev => [
        ...prev.slice(-18), // keep max 18 sparks
        { id, x: e.clientX, y: e.clientY, color, size }
      ]);
      setTimeout(() => {
        setSparks(prev => prev.filter(s => s.id !== id));
      }, 600);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <style>{`
        @keyframes sparkFade {
          0%   { transform: translate(-50%,-50%) scale(1); opacity: 0.9; }
          100% { transform: translate(-50%,-50%) scale(0) translateY(-20px); opacity: 0; }
        }
      `}</style>
      {sparks.map(s => (
        <div key={s.id} style={{
          position:   "fixed",
          left:       s.x,
          top:        s.y,
          width:      s.size,
          height:     s.size,
          borderRadius: "50%",
          background: s.color,
          pointerEvents: "none",
          zIndex:     9998,
          boxShadow:  `0 0 ${s.size * 2}px ${s.color}`,
          animation:  "sparkFade 0.6s ease-out forwards",
        }} />
      ))}
    </>
  );
}

/* ══════════════════════════════════════
   4. CLICK PARTICLES — butterfly dust on click
   ══════════════════════════════════════ */
function ClickParticles() {
  const [bursts, setBursts] = useState([]);
  const idRef = useRef(0);

  useEffect(() => {
    const onClick = (e) => {
      const burstId = idRef.current++;
      const count = 10 + Math.floor(Math.random() * 6);
      const particles = Array.from({ length: count }, (_, i) => ({
        id:    i,
        angle: (360 / count) * i + Math.random() * 20,
        dist:  40 + Math.random() * 60,
        color: ["#f368e0","#b983ff","#fdcb6e","#55efc4","#fd79a8","#a29bfe","#ff9ff3"][Math.floor(Math.random() * 7)],
        size:  3 + Math.random() * 5,
      }));
      setBursts(prev => [...prev, { id: burstId, x: e.clientX, y: e.clientY, particles }]);
      setTimeout(() => {
        setBursts(prev => prev.filter(b => b.id !== burstId));
      }, 700);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <style>{`
        @keyframes particleFly {
          0%   { transform: translate(-50%,-50%) translate(0,0) scale(1); opacity: 1; }
          100% { transform: translate(-50%,-50%) translate(var(--tx),var(--ty)) scale(0); opacity: 0; }
        }
      `}</style>
      {bursts.map(burst => (
        <div key={burst.id}>
          {burst.particles.map(p => {
            const rad = (p.angle * Math.PI) / 180;
            const tx  = Math.cos(rad) * p.dist;
            const ty  = Math.sin(rad) * p.dist;
            return (
              <div key={p.id} style={{
                position:      "fixed",
                left:          burst.x,
                top:           burst.y,
                width:         p.size,
                height:        p.size,
                borderRadius:  "50%",
                background:    p.color,
                pointerEvents: "none",
                zIndex:        9997,
                boxShadow:     `0 0 ${p.size * 2}px ${p.color}`,
                "--tx":        `${tx}px`,
                "--ty":        `${ty}px`,
                animation:     "particleFly 0.7s ease-out forwards",
              }} />
            );
          })}
        </div>
      ))}
    </>
  );
}

/* ══════════════════════════════════════
   5. LOADING SCREEN — butterfly wings spread on load
   ══════════════════════════════════════ */
function LoadingScreen({ onDone }) {
  const [phase, setPhase] = useState("show"); // show | fadeout

  useEffect(() => {
    // After 1.8s start fade out
    const t1 = setTimeout(() => setPhase("fadeout"), 1800);
    // After fade completes, call onDone
    const t2 = setTimeout(() => onDone(), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div style={{
      position:   "fixed",
      inset:      0,
      background: "radial-gradient(circle at center, #1b1f3b, #0b0d1a)",
      display:    "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex:     99999,
      opacity:    phase === "fadeout" ? 0 : 1,
      transition: "opacity 0.7s ease",
      pointerEvents: phase === "fadeout" ? "none" : "all",
    }}>
      <style>{`
        @keyframes wingSpread {
          0%   { transform: scaleX(0.05); }
          60%  { transform: scaleX(1.1); }
          100% { transform: scaleX(1); }
        }
        @keyframes bodyDrop {
          0%   { transform: translateY(-20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes loaderPulse {
          0%,100% { opacity: 0.4; transform: scaleX(1); }
          50%     { opacity: 1;   transform: scaleX(1.05); }
        }
        @keyframes dotBounce {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-8px); }
        }
      `}</style>

      {/* Butterfly SVG */}
      <svg viewBox="0 0 120 100" width="120" height="100" style={{ overflow:"visible", marginBottom: 24 }}>
        <defs>
          <radialGradient id="lg1" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ff9ff3"/><stop offset="40%" stopColor="#f368e0"/><stop offset="100%" stopColor="#6c2bd9"/>
          </radialGradient>
          <radialGradient id="lg2" cx="60%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffeaa7"/><stop offset="40%" stopColor="#fdcb6e"/><stop offset="100%" stopColor="#e17055"/>
          </radialGradient>
          <radialGradient id="lg3" cx="40%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#fd79a8"/><stop offset="50%" stopColor="#a29bfe"/><stop offset="100%" stopColor="#6c5ce7"/>
          </radialGradient>
          <radialGradient id="lg4" cx="60%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#55efc4"/><stop offset="50%" stopColor="#00b894"/><stop offset="100%" stopColor="#00cec9"/>
          </radialGradient>
        </defs>
        {/* Left wings */}
        <g style={{ transformOrigin:"60px 48px", animation:"wingSpread 1.2s cubic-bezier(.34,1.56,.64,1) 0.2s both" }}>
          <path d="M58,48 C55,30 35,8 12,14 C2,17 0,28 5,36 C12,47 30,52 45,52 C50,52 55,50 58,48Z" fill="url(#lg1)" opacity="0.95"/>
          <circle cx="22" cy="28" r="5" fill="#fff" opacity="0.25"/>
          <circle cx="35" cy="22" r="3" fill="#ffeaa7" opacity="0.5"/>
          <path d="M58,50 C55,60 45,78 28,82 C14,85 6,76 8,66 C11,54 28,50 45,50Z" fill="url(#lg3)" opacity="0.9"/>
          <circle cx="28" cy="68" r="4" fill="#fff" opacity="0.2"/>
        </g>
        {/* Right wings */}
        <g style={{ transformOrigin:"60px 48px", animation:"wingSpread 1.2s cubic-bezier(.34,1.56,.64,1) 0.2s both" }}>
          <path d="M62,48 C65,30 85,8 108,14 C118,17 120,28 115,36 C108,47 90,52 75,52 C70,52 65,50 62,48Z" fill="url(#lg2)" opacity="0.95"/>
          <circle cx="98" cy="28" r="5" fill="#fff" opacity="0.25"/>
          <circle cx="85" cy="22" r="3" fill="#fff" opacity="0.45"/>
          <path d="M62,50 C65,60 75,78 92,82 C106,85 114,76 112,66 C109,54 92,50 75,50Z" fill="url(#lg4)" opacity="0.9"/>
          <circle cx="90" cy="68" r="4" fill="#fff" opacity="0.2"/>
        </g>
        {/* Body */}
        <g style={{ animation:"bodyDrop 0.6s ease 0.8s both" }}>
          <ellipse cx="60" cy="62" rx="4" ry="22" fill="#2d1b4e"/>
          <ellipse cx="60" cy="62" rx="2.5" ry="20" fill="#6c2bd9" opacity="0.6"/>
          <ellipse cx="60" cy="44" rx="5" ry="8" fill="#2d1b4e"/>
          <circle cx="60" cy="35" r="5" fill="#2d1b4e"/>
          <circle cx="57.5" cy="33.5" r="1.5" fill="#fff"/>
          <circle cx="62.5" cy="33.5" r="1.5" fill="#fff"/>
          <path d="M58,31 Q49,19 43,11" stroke="#2d1b4e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <circle cx="43" cy="11" r="3" fill="#f368e0"/>
          <path d="M62,31 Q71,19 77,11" stroke="#2d1b4e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <circle cx="77" cy="11" r="3" fill="#fdcb6e"/>
        </g>
      </svg>

      {/* Name */}
      <div style={{
        fontSize: 22, fontWeight: 700, color: "#fff",
        letterSpacing: 6, opacity: 0.9,
        animation: "bodyDrop 0.6s ease 1s both",
        fontFamily: "'Poppins', sans-serif",
      }}>
        KARISHMA PRIYA
      </div>

      {/* Loading dots */}
      <div style={{ display:"flex", gap:8, marginTop:20 }}>
        {[0,1,2].map(i => (
          <div key={i} style={{
            width:12, height:12, borderRadius:"50%",
            background: i===0?"#f368e0":i===1?"#b983ff":"#fdcb6e",
            animation: `dotBounce 0.8s ease-in-out ${i*0.15}s infinite`,
          }}/>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   MAIN EXPORT — combine all 3
   ══════════════════════════════════════ */
export default function ButterflyEffects() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      {loaded && (
        <>
          <CursorTrail />
          <ClickParticles />
        </>
      )}
    </>
  );
}