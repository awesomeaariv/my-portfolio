"use client"
import { useState, useEffect } from "react";

/* ─── Icons ─── */
const DownloadIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
const GitHubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);
const LinkedInIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const MailIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

/* ─── Wave Divider ─── */
const WaveDivider = () => (
  <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 16px", textAlign: "center" }}>
    <svg width="200" height="12" viewBox="0 0 200 12" fill="none" style={{ opacity: 0.3 }}>
      <path d="M0 6 C25 0, 25 12, 50 6 S75 0, 100 6 S125 12, 150 6 S175 0, 200 6" stroke="#D6B588" strokeWidth="1.5" fill="none" />
    </svg>
  </div>
);

/* ─── Data ─── */
const TECH_ICONS: Record<string, string> = {
  "Go": "go", "Redis": "redis", "Docker": "docker",
  "Python": "python", "PyTorch": "pytorch", "FastAPI": "fastapi", "AWS": "amazonwebservices-original",
  "Rust": "rust", "TypeScript": "typescript", "SQLite": "sqlite",
  "React": "react", "Next.js": "nextjs", "Firebase": "firebase",
  "gRPC": "grpc", "WebRTC": "webrtc", "Rich": "python",
};

const PROJECTS = [
  { title: "Distributed Task Queue", desc: "Fault-tolerant task queue with priority scheduling and horizontal scaling across worker nodes.", tech: ["Go", "Redis", "gRPC", "Docker"], demo: null, github: "#" },
  { title: "Neural Style Transfer API", desc: "REST API that applies artistic style transfer to images in real-time on consumer GPUs.", tech: ["Python", "PyTorch", "FastAPI", "AWS"], demo: null, github: "#" },
  { title: "Peer-to-Peer File Sync", desc: "Decentralized file sync over WebRTC with conflict resolution via vector clocks and delta compression.", tech: ["Rust", "WebRTC", "TypeScript", "SQLite"], demo: null, github: "#" },
  { title: "Budget Tracker CLI", desc: "Terminal-based personal finance tool with a TUI dashboard, CSV import, and monthly trend visualization.", tech: ["Python", "Rich", "SQLite"], demo: null, github: "#" },
];

const EXPERIENCE = [
  { role: "Researcher & Developer", company: "SwiftStudy", period: "Summer 2025", desc: "Developed SwiftStudy, an AI-powered study tool platform, under the mentorship of Professor Brandon Middleton at Stanford University.", points: [] },
  { role: "Founder", company: "SpellSmart", period: "Aug 2023 – Present", desc: "Founded SpellSmart, an AI-powered spelling practice app designed to help students in immigrant families prepare for spelling bees independently.", points: ["Won the Congressional App Challenge and presented the application to Congressional leaders in Washington, D.C. Downloaded by 25k+ students across Texas."] },
  { role: "Founder", company: "Awesome Aariv", period: "Jan 2020 – May 2025", desc: "Founded an independent Alexa skill development business, creating educational and entertainment voice experiences for young children and families.", points: ["Reached 50,000+ unique users with 1M+ total sessions across all skills. Generated ~$20,000 in profit through one-time purchases, subscriptions, and Alexa Developer Rewards."] },
];

/* ═══════════════════════════════ MAIN ═══════════════════════════════ */
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      for (const id of ["home", "projects", "resume"]) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 180) setActiveSection(id);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes slideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #faf5ee; color: #3d3529; }
        ::selection { background: #D6B588; color: #fff; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #faf5ee; }
        ::-webkit-scrollbar-thumb { background: #D6B588; border-radius: 3px; }
        @keyframes oceanSlide1 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes oceanSlide2 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes oceanSlide3 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes oceanSlide4 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes oceanSlide5 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes foam { 0%,100% { opacity: 0.4; } 50% { opacity: 0.7; } }
        @keyframes shimmer { 0%,100% { opacity: 0.03; } 50% { opacity: 0.08; } }
      `}</style>

      <div style={{
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        background: "#faf5ee", color: "#3d3529", minHeight: "100vh", lineHeight: 1.6,
      }}>

        {/* ─── Nav ─── */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, height: 72,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(250,245,238,0.9)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 1px 12px rgba(180,155,120,0.08)",
        }}>
          <div style={{ display: "flex", padding: 5, background: "rgba(214,181,136,0.12)", borderRadius: 14 }}>
            {["home", "projects", "resume"].map((s) => (
              <button key={s} onClick={() => scrollTo(s)} style={{
                padding: "8px 22px", borderRadius: 10, border: "none", cursor: "pointer",
                fontSize: 14, fontWeight: 600, transition: "all 0.2s",
                background: activeSection === s ? "#fff" : "transparent",
                color: activeSection === s ? "#3d3529" : "#b5a28a",
                boxShadow: activeSection === s ? "0 2px 8px rgba(180,155,120,0.12)" : "none",
              }}
                onMouseEnter={(e) => { if (activeSection !== s) (e.target as HTMLElement).style.color = "#7a6650"; }}
                onMouseLeave={(e) => { if (activeSection !== s) (e.target as HTMLElement).style.color = "#b5a28a"; }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Left shells */}
          {[0, 1, 2].map((i) => (
            <img key={`l${i}`} src="/shell.png" alt="" style={{
              position: "absolute", top: "50%",
              left: `${5 + i * 12}%`,
              transform: "translateY(-50%)",
              height: 60, pointerEvents: "none",
            }} />
          ))}

          {/* Right shells */}
          {[0, 1, 2].map((i) => (
            <img key={`r${i}`} src="/shell.png" alt="" style={{
              position: "absolute", top: "50%",
              right: `${5 + i * 12}%`,
              transform: "translateY(-50%)",
              height: 60, pointerEvents: "none",
            }} />
          ))}
        </nav>

        {/* ─── Home wrapper (full width for ocean) ─── */}
        <div style={{ position: "relative", overflow: "hidden" }}>

        {/* ─── Sun (top-left corner, partially off-screen) ─── */}
        <div style={{ position: "absolute", top: -30, left: -100, zIndex: 0, pointerEvents: "none" }}>
          <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
            {[0, 30, 60, 90, 120, 150].map((angle) => (
              <ellipse
                key={angle}
                cx="110" cy="110" rx="7" ry="75"
                fill="#FFDF00"
                transform={`rotate(${angle} 110 110)`}
              />
            ))}
            <circle cx="110" cy="110" r="40" fill="#faf5ee" />
            <circle cx="110" cy="110" r="36" fill="#FFDF00" />
          </svg>
        </div>

        {/* ─── Ocean Background ─── */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100vw", marginLeft: "calc(-50vw + 50%)", height: "50%", zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>

          {/* Light shimmer overlay */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 5,
            background: "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.08) 45%, transparent 55%)",
            animation: "shimmer 4s ease-in-out infinite",
          }} />

          {/* Deep ocean body */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "calc(100% - 50px)",
            background: "linear-gradient(180deg, #72c5d4 0%, #5db4c3 20%, #4a9faf 45%, #3d8e9d 70%, #35808e 100%)",
          }} />

          {/* Wave layer 1 — tallest, slowest, deepest color */}
          <svg viewBox="0 0 5760 80" preserveAspectRatio="none" style={{
            position: "absolute", top: 0, left: 0, width: "400%", height: 80,
            animation: "oceanSlide1 18s linear infinite",
          }}>
            <path d="M0,40 C90,55 180,25 270,40 C360,55 450,25 540,40 C630,55 720,25 810,40 C900,55 990,25 1080,40 C1170,55 1260,25 1350,40 C1440,55 1530,25 1620,40 C1710,55 1800,25 1890,40 C1980,55 2070,25 2160,40 C2250,55 2340,25 2430,40 C2520,55 2610,25 2700,40 C2790,55 2880,25 2970,40 C3060,55 3150,25 3240,40 C3330,55 3420,25 3510,40 C3600,55 3690,25 3780,40 C3870,55 3960,25 4050,40 C4140,55 4230,25 4320,40 C4410,55 4500,25 4590,40 C4680,55 4770,25 4860,40 C4950,55 5040,25 5130,40 C5220,55 5310,25 5400,40 C5490,55 5580,25 5670,40 C5760,55 5760,40 5760,40 L5760,80 L0,80 Z" fill="#72c5d4" />
          </svg>

          {/* Wave layer 2 — foam-tipped, lighter */}
          <svg viewBox="0 0 5760 70" preserveAspectRatio="none" style={{
            position: "absolute", top: 10, left: 0, width: "400%", height: 70,
            animation: "oceanSlide2 14s linear infinite",
          }}>
            <path d="M0,30 C120,50 240,10 360,30 C480,50 600,10 720,30 C840,50 960,10 1080,30 C1200,50 1320,10 1440,30 C1560,50 1680,10 1800,30 C1920,50 2040,10 2160,30 C2280,50 2400,10 2520,30 C2640,50 2760,10 2880,30 C3000,50 3120,10 3240,30 C3360,50 3480,10 3600,30 C3720,50 3840,10 3960,30 C4080,50 4200,10 4320,30 C4440,50 4560,10 4680,30 C4800,50 4920,10 5040,30 C5160,50 5280,10 5400,30 C5520,50 5640,10 5760,30 L5760,70 L0,70 Z" fill="#64b9c8" />
          </svg>

          {/* Wave layer 3 — mid depth */}
          <svg viewBox="0 0 5760 60" preserveAspectRatio="none" style={{
            position: "absolute", top: 22, left: 0, width: "400%", height: 60,
            animation: "oceanSlide3 10s linear infinite",
          }}>
            <path d="M0,25 C150,42 300,8 450,25 C600,42 750,8 900,25 C1050,42 1200,8 1350,25 C1500,42 1650,8 1800,25 C1950,42 2100,8 2250,25 C2400,42 2550,8 2700,25 C2850,42 3000,8 3150,25 C3300,42 3450,8 3600,25 C3750,42 3900,8 4050,25 C4200,42 4350,8 4500,25 C4650,42 4800,8 4950,25 C5100,42 5250,8 5400,25 C5550,42 5700,8 5760,25 L5760,60 L0,60 Z" fill="#58aebb" />
          </svg>

          {/* Wave layer 4 — shallow, faster */}
          <svg viewBox="0 0 5760 50" preserveAspectRatio="none" style={{
            position: "absolute", top: 32, left: 0, width: "400%", height: 50,
            animation: "oceanSlide4 8s linear infinite",
          }}>
            <path d="M0,20 C100,35 200,5 300,20 C400,35 500,5 600,20 C700,35 800,5 900,20 C1000,35 1100,5 1200,20 C1300,35 1400,5 1500,20 C1600,35 1700,5 1800,20 C1900,35 2000,5 2100,20 C2200,35 2300,5 2400,20 C2500,35 2600,5 2700,20 C2800,35 2900,5 3000,20 C3100,35 3200,5 3300,20 C3400,35 3500,5 3600,20 C3700,35 3800,5 3900,20 C4000,35 4100,5 4200,20 C4300,35 4400,5 4500,20 C4600,35 4700,5 4800,20 C4900,35 5000,5 5100,20 C5200,35 5300,5 5400,20 C5500,35 5600,5 5700,20 C5760,35 5760,20 5760,20 L5760,50 L0,50 Z" fill="#4da3b0" />
          </svg>

          {/* Wave layer 5 — surface foam, fastest, most transparent */}
          <svg viewBox="0 0 5760 40" preserveAspectRatio="none" style={{
            position: "absolute", top: 8, left: 0, width: "400%", height: 45,
            animation: "oceanSlide5 6s linear infinite",
            opacity: 0.35,
          }}>
            <path d="M0,20 C60,30 120,10 180,20 C240,30 300,10 360,20 C420,30 480,10 540,20 C600,30 660,10 720,20 C780,30 840,10 900,20 C960,30 1020,10 1080,20 C1140,30 1200,10 1260,20 C1320,30 1380,10 1440,20 C1500,30 1560,10 1620,20 C1680,30 1740,10 1800,20 C1860,30 1920,10 1980,20 C2040,30 2100,10 2160,20 C2220,30 2280,10 2340,20 C2400,30 2460,10 2520,20 C2580,30 2640,10 2700,20 C2760,30 2820,10 2880,20 C2940,30 3000,10 3060,20 C3120,30 3180,10 3240,20 C3300,30 3360,10 3420,20 C3480,30 3540,10 3600,20 C3660,30 3720,10 3780,20 C3840,30 3900,10 3960,20 C4020,30 4080,10 4140,20 C4200,30 4260,10 4320,20 C4380,30 4440,10 4500,20 C4560,30 4620,10 4680,20 C4740,30 4800,10 4860,20 C4920,30 4980,10 5040,20 C5100,30 5160,10 5220,20 C5280,30 5340,10 5400,20 C5460,30 5520,10 5580,20 C5640,30 5700,10 5760,20 L5760,40 L0,40 Z" fill="#fff" />
          </svg>
        </div>

        <div id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "84px 16px 16px", maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ width: "100%", position: "relative" }}>
          <div style={{
            display: "flex", width: "100%",
            borderRadius: 28, background: "#fff",
            boxShadow: "0 4px 32px rgba(180,155,120,0.1)",
            overflow: "hidden", position: "relative", zIndex: 1,
          }}>

            {/* Left — intro */}
            <div style={{ flex: "0 0 420px", padding: "32px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              {/* Photo */}
              <div style={{
                width: 172, height: 172, borderRadius: "50%", flexShrink: 0,
                boxShadow: "0 4px 16px rgba(180,155,120,0.15)",
                marginBottom: 20, overflow: "hidden",
              }}>
                <img src="/pfp.jpg" alt="Aariv" style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </div>

              <h1 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 36, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#3d3529" }}>
                hey, i'm aariv<span style={{ color: "#D6B588" }}>.</span>
              </h1>

              <p style={{ marginTop: 12, fontSize: 13, color: "#7a6e60", lineHeight: 1.7 }}>
                I'm an incoming freshman at UT Austin studying Computer Science,
                interested in infrastructure, machine learning, and user psychology.
              </p>

              {/* Quick stats */}
              <div style={{ display: "flex", gap: 20, marginTop: 18 }}>
                {[
                  { value: "X", label: "Books read this month" },
                  { value: "X", label: "Chess games played this month" },
                  { value: "X", label: "Miles ran" },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 18, fontWeight: 700, color: "#3d3529" }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: "#b5a28a", fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 18, display: "flex", gap: 8 }}>
                {[
                  { icon: <GitHubIcon size={14} />, label: "GitHub", href: "#" },
                  { icon: <LinkedInIcon size={14} />, label: "LinkedIn", href: "#" },
                  { icon: <MailIcon size={14} />, label: "Email", href: "#" },
                ].map((l) => (
                  <a key={l.label} href={l.href} style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "6px 14px", borderRadius: 20,
                    background: "rgba(214,181,136,0.12)",
                    color: "#7a6e60", fontSize: 12, fontWeight: 500,
                    textDecoration: "none", transition: "all 0.2s",
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(214,181,136,0.25)"; e.currentTarget.style.color = "#3d3529"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(214,181,136,0.12)"; e.currentTarget.style.color = "#7a6e60"; }}
                  >
                    {l.icon} {l.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right — experience timeline */}
            <div style={{ flex: 1, padding: "32px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ position: "relative", paddingLeft: 24 }}>
                <div style={{ position: "absolute", left: 5, top: 6, bottom: 6, width: 1, background: "rgba(214,181,136,0.3)" }} />

                {EXPERIENCE.map((exp, i) => (
                  <div key={i} style={{ position: "relative", paddingBottom: i < EXPERIENCE.length - 1 ? 24 : 0 }}>
                    <div style={{
                      position: "absolute", left: -24, top: 6,
                      width: 11, height: 11, borderRadius: "50%",
                      background: "#D6B588", border: "2px solid #fff",
                    }} />
                    {exp.period && <div style={{ fontSize: 12, color: "#b5a28a", fontWeight: 500, marginBottom: 4 }}>{exp.period}</div>}
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#3d3529", marginBottom: 6 }}>
                      {exp.role} <span style={{ color: "#D6B588" }}>@ {exp.company}</span>
                    </div>
                    <div style={{ fontSize: 13, color: "#7a6e60", lineHeight: 1.7, marginBottom: 8 }}>{exp.desc}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      {exp.points.map((p: string, j: number) => (
                        <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#8a7e70", lineHeight: 1.7 }}>
                          <div style={{ width: 4, height: 4, borderRadius: 2, background: "#D6B588", marginTop: 9, flexShrink: 0 }} />
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          </div>
        </div>
        </div>{/* close home wrapper */}

        {/* ─── Projects: 2-column grid ─── */}
        <section id="projects" style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 16px 0", scrollMarginTop: 70 }}>
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em", color: "#3d3529" }}>Projects</h2>
            <p style={{ fontSize: 14, color: "#b5a28a", marginTop: 4 }}>Things I've built</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {PROJECTS.map((p, i) => (
              <div key={i}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  borderRadius: 24, background: "#fff",
                  boxShadow: hoveredProject === i
                    ? "0 8px 32px rgba(180,155,120,0.15)"
                    : "0 2px 16px rgba(180,155,120,0.06)",
                  transition: "all 0.25s", cursor: "default",
                  display: "flex", flexDirection: "column",
                  transform: hoveredProject === i ? "translateY(-2px)" : "none",
                  overflow: "hidden",
                }}
              >
                {/* Demo embed */}
                <div style={{
                  height: 220, background: "#f0ebe3",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderBottom: "1px solid rgba(214,181,136,0.15)",
                }}>
                  {p.demo ? (
                    <iframe src={p.demo} style={{ width: "100%", height: "100%", border: "none" }} title={p.title} />
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c4b49e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                      <span style={{ fontSize: 12, color: "#c4b49e", fontWeight: 500 }}>Demo coming soon</span>
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                  {/* Title + GitHub */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 17, fontWeight: 600, color: "#3d3529" }}>{p.title}</div>
                    <a href={p.github} style={{ color: "#c4b49e", transition: "color 0.15s", display: "flex" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#3d3529")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#c4b49e")}
                    ><GitHubIcon size={16} /></a>
                  </div>

                  {/* Description */}
                  <div style={{ fontSize: 13, color: "#7a6e60", lineHeight: 1.7 }}>{p.desc}</div>

                  {/* Tech tags with logos */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto" }}>
                    {p.tech.map((t) => (
                      <span key={t} style={{
                        display: "inline-flex", alignItems: "center", gap: 5,
                        fontSize: 11, fontWeight: 500,
                        padding: "4px 10px", borderRadius: 12,
                        background: "rgba(214,181,136,0.12)", color: "#7a6e60",
                      }}>
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${TECH_ICONS[t] || t.toLowerCase()}/${TECH_ICONS[t] || t.toLowerCase()}-original.svg`}
                          alt={t}
                          width={14}
                          height={14}
                          style={{ flexShrink: 0 }}
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <WaveDivider />

        {/* ─── Resume: Embed + Download ─── */}
        <section id="resume" style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 16px 0", scrollMarginTop: 50 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
            <div>
              <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em", color: "#3d3529" }}>Resume</h2>
              <p style={{ fontSize: 14, color: "#b5a28a", marginTop: 4 }}>View or download my resume</p>
            </div>
            <a href="/resume.pdf" download style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 24px", borderRadius: 20,
              background: "#D6B588", color: "#fff",
              fontSize: 13, fontWeight: 600,
              textDecoration: "none", transition: "all 0.2s",
              boxShadow: "0 2px 12px rgba(214,181,136,0.3)",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#c9a578"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(214,181,136,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#D6B588"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(214,181,136,0.3)"; }}
            >
              <DownloadIcon size={14} /> Download PDF
            </a>
          </div>

          <div style={{
            borderRadius: 24, background: "#fff",
            boxShadow: "0 4px 24px rgba(180,155,120,0.08)",
            overflow: "hidden", height: 800,
          }}>
            <iframe
              src="/resume.pdf"
              style={{ width: "100%", height: "100%", border: "none" }}
              title="Resume"
            />
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 16px 50px", textAlign: "center" }}>
          <div style={{
            padding: "40px", borderRadius: 28, background: "#fff",
            boxShadow: "0 4px 24px rgba(180,155,120,0.08)",
          }}>
            <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 22, fontWeight: 700, color: "#3d3529", marginBottom: 8 }}>Get in touch</h3>
            <p style={{ fontSize: 14, color: "#7a6e60", maxWidth: 440, margin: "0 auto", lineHeight: 1.7, marginBottom: 24 }}>
              Looking for Summer 2026 internships. Whether you have an opportunity
              or just want to chat, my inbox is open.
            </p>
            <a href="mailto:alex@example.com" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 24px", borderRadius: 20,
              background: "rgba(214,181,136,0.12)",
              color: "#7a6e60", fontSize: 13, fontWeight: 500,
              textDecoration: "none", transition: "all 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(214,181,136,0.25)"; e.currentTarget.style.color = "#3d3529"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(214,181,136,0.12)"; e.currentTarget.style.color = "#7a6e60"; }}
            >
              <MailIcon size={14} /> Say hello
            </a>
          </div>
          <div style={{ marginTop: 32, fontSize: 11, color: "#c4b49e", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <span>~</span> built by aariv modi <span>~</span>
          </div>
        </footer>
      </div>
    </>
  );
}
