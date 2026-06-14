/*
 * ==============================================================================
 * COMPONENTE: Nosotros.jsx
 * ARQUITECTURA: Red Neuronal Expandida con Distribución Vectorial Anticolisión.
 * DISEÑO: Premium Sci-Fi Dashboard / Vercel Core Hyper-Glow.
 * OPTIMIZACIÓN: Renderizado radial adaptativo sin superposición de capas.
 * CORRECCIÓN: Dependencias trigonométricas indexadas síncronas en el ciclo de React.
 * ==============================================================================
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import "../../styles/portal/bpilares.css";

// ESTRUCTURA DE DATOS ULTRA-ESCALABLE: Puedes añadir o remover infinitos pilares o tecnologías hijas aquí.
const PILLARS_DATA = [
  {
    id: 'pilar-frontend',
    title: 'FRONTEND ARCHITECTURE',
    icon: '💻',
    color: '#00d8ff',
    subNodes: [
      { id: 'fe-react', name: 'React (Vite)', detail: 'SPA & Microfrontends', color: '#00d8ff', icon: '⚛️' },
      { id: 'fe-next', name: 'Next.js', detail: 'SSR & Hydration Engine', color: '#ffffff', icon: '▲' },
      { id: 'fe-ts', name: 'TypeScript', detail: 'Static Strongly Typed', color: '#3178c6', icon: '🔷' },
      { id: 'fe-uxui', name: 'UI/UX Design', detail: 'Advanced Interactions', color: '#a855f7', icon: '🎨' }
    ]
  },
  {
    id: 'pilar-backend',
    title: 'BACKEND SYSTEMS',
    icon: '⚙️',
    color: '#39bf45',
    subNodes: [
      { id: 'bk-node', name: 'Node.js Core', detail: 'Event-Driven Runtime', color: '#39bf45', icon: '🟢' },
      { id: 'bk-apis', name: 'APIs (gRPC/REST)', detail: 'High-Throughput Gateways', color: '#eab308', icon: '🔗' },
      { id: 'bk-graphql', name: 'GraphQL Mesh', detail: 'Federated Data Query', color: '#e535ab', icon: '◇' }
    ]
  },
  {
    id: 'pilar-databases',
    title: 'DATA ARCHITECTURE',
    icon: '🛢️',
    color: '#06b6d4',
    subNodes: [
      { id: 'db-oracle', name: 'Oracle', detail: 'In-Memory Ultra Low Latency', color: '#ccd820', icon: '⚡' },
      { id: 'db-sql', name: 'PostgreSQL', detail: 'Relational ACID Core', color: '#336791', icon: '🐘' },
      { id: 'db-nosql', name: 'MongoDB', detail: 'NoSQL Document Store', color: '#47a248', icon: '🍃' },
      { id: 'db-redis', name: 'Redis Cache', detail: 'In-Memory Ultra Low Latency', color: '#d82c20', icon: '⚡' }
    ]
  },
  {
    id: 'pilar-security',
    title: 'SECURITY & DEVSECOPS',
    icon: '🛡️',
    color: '#ec4899',
    subNodes: [
      { id: 'sec-zerotrust', name: 'Zero Trust Network', detail: 'Identity Verification', color: '#ec4899', icon: '🔒' },
      { id: 'sec-cicd', name: 'CI/CD Guard', detail: 'Automated DevSecOps Pipelines', color: '#22c55e', icon: '♾️' },
      { id: 'sec-oauth', name: 'OAuth2 / IAM', detail: 'Decentralized Auth', color: '#f97316', icon: '🔑' }
    ]
  },
  {
    id: 'pilar-cloud',
    title: 'CLOUD & INFRASTRUCTURE',
    icon: '☁️',
    color: '#3b82f6',
    subNodes: [
      { id: 'cloud-aws', name: 'Cloud Architecture', detail: 'Elastic Scale Microservices', color: '#3b82f6', icon: '☁️' },
      { id: 'cloud-devops', name: 'DevOps Automations', detail: 'Continuous Delivery Sync', color: '#10b981', icon: '🚀' }
    ]
  }
];

export default function Nosotros() {
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [activeNodeData, setActiveNodeData] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 1400, height: 950 });
  const containerRef = useRef(null);

  // Parallax interactivo controlado de la matriz 3D
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setActiveNodeId(null);
    setActiveNodeData(null);
  };

  // Observador de redimensionamiento de pantalla de alta precisión para el lienzo SVG
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 1. Coordenadas del epicentro absoluto
  const cx = dimensions.width / 2;
  const cy = dimensions.height / 2;

  // 2. Factores de escala y radios amplificados para evitar colisiones e interrupciones visuales
  const pilarRadiusX = Math.min(dimensions.width, dimensions.height) * 0.28;
  const pilarRadiusY = Math.min(dimensions.width, dimensions.height) * 0.24;
  const subNodeRadius = 125; // Mayor separación radial (hacia fuera) para dar aire a los sub-nodos

  /* * 3. MOTOR TRAPECIAL TRIGONOMÉTRICO DE ALTA FIDELIDAD
   * Recalcula y mapea los vectores tridimensionales en un lienzo reactivo estable.
   * Se incluyen todas las variables en las dependencias para blindar fallos de ejecución.
   */
  const computedNetworkMesh = useMemo(() => {
    const numPillars = PILLARS_DATA.length;
    
    return PILLARS_DATA.map((pilar, pIndex) => {
      const pillarAngleDeg = pIndex * (360 / numPillars);
      const pillarAngleRad = pillarAngleDeg * (Math.PI / 180);
      
      const px = cx + pilarRadiusX * Math.cos(pillarAngleRad);
      const py = cy + pilarRadiusY * Math.sin(pillarAngleRad);
      const pilarZDepth = Math.sin(pillarAngleRad) * 30;

      const numSubNodes = pilar.subNodes.length;
      const subNodesWithPositions = pilar.subNodes.map((sub, sIndex) => {
        // Distribución angular optimizada para que los sub-nodos se abran simétricamente hacia el exterior
        const arcSpread = 100; 
        const startAngle = pillarAngleDeg - arcSpread / 2;
        const step = numSubNodes > 1 ? arcSpread / (numSubNodes - 1) : 0;
        const subAngleDeg = startAngle + (sIndex * step);
        const subAngleRad = subAngleDeg * (Math.PI / 180);

        const sx = px + subNodeRadius * Math.cos(subAngleRad);
        const sy = py + subNodeRadius * Math.sin(subAngleRad);
        const subZDepth = pilarZDepth + Math.sin(subAngleRad) * 15;

        return { ...sub, sx, sy, subZDepth };
      });

      return { ...pilar, px, py, pilarZDepth, subNodes: subNodesWithPositions };
    });
  }, [cx, cy, pilarRadiusX, pilarRadiusY, subNodeRadius]);

  return (
    <section className="nosotros-section container-fluid px-0" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      
      {/* CAPA FUTURISTA DEFENSIVA DE FONDO */}
      <div className="neural-background">
        <div className="grid-overlay" style={{ transform: `perspective(1200px) rotateX(60deg) translateZ(${mousePos.y * -40}px) translateX(${mousePos.x * -30}px)` }}></div>
        <div className="ambient-glow space-cyan" style={{ transform: `translate(${mousePos.x * -50}px, ${mousePos.y * -50}px)` }}></div>
        <div className="ambient-glow space-magenta" style={{ transform: `translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)` }}></div>
        <div className="constellation-layer"></div>
      </div>

      <div className="container-fluid py-5 positional-container">
        
        {/* HEADER DE LA SECCIÓN */}
        <div className="row justify-content-center mb-4 text-center">
          <div className="col-lg-8">
            <span className="badge-futuristic mb-3">
              <span className="badge-dot"></span> DISTRIBUTED TOPOLOGY ENGINE // EXPANDED CORE
            </span>
            <h2 className="display-4 fw-bold main-title">
              Nuestros Pilares <span className="text-gradient">Tecnológicos</span>
            </h2>
          </div>
        </div>

        {/* LIENZO PRINCIPAL DE LA RED INTERACTIVA */}
        <div className="row justify-content-center align-items-center canvas-row">
          <div className="col-12 text-center position-relative">
            <div 
              className="neural-network-container mx-auto" 
              ref={containerRef}
              style={{
                transform: `perspective(2000px) rotateY(${mousePos.x * 8}deg) rotateX(${mousePos.y * -8}deg)`
              }}
            >
              
              {/* CANVAS VECTORIAL SVG DE LÍNEAS SÍNCRONAS SIN OPACIDAD AGRESIVA */}
              <svg className="neural-connections-svg" width={dimensions.width} height={dimensions.height}>
                <defs>
                  <filter id="sci-fi-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {computedNetworkMesh.map((pilar) => {
                  const isPilarActive = activeNodeId === pilar.id;
                  
                  return (
                    <g key={`svg-pilar-${pilar.id}`}>
                      {/* Línea desde el Cerebro Central hacia el Pilar Maestro */}
                      <line
                        x1={cx}
                        y1={cy}
                        x2={pilar.px}
                        y2={pilar.py}
                        className={`synapse-line-main ${isPilarActive ? 'active' : ''}`}
                        stroke={pilar.color}
                        strokeWidth={isPilarActive ? "3.5" : "1.5"}
                        style={{ '--node-theme-color': pilar.color }}
                      />
                      
                      {/* Fotón de transmisión inter-núcleo */}
                      <circle r="4" fill="#ffffff" filter="url(#sci-fi-glow)">
                        <animateMotion dur="3s" repeatCount="indefinite" path={`M ${cx} ${cy} L ${pilar.px} ${pilar.py}`} />
                      </circle>

                      {/* Líneas en Abanico Curvo (Bezier) hacia los Sub-Nodos */}
                      {pilar.subNodes.map((sub, sIndex) => {
                        const isSubActive = activeNodeId === sub.id;
                        
                        // Punto de control bezier adaptado hacia afuera para evitar cruces internos
                        const ctrlX = pilar.px + (sub.sx - pilar.px) * 0.3;
                        const ctrlY = pilar.py + (sub.sy - pilar.py) * 0.3;

                        return (
                          <g key={`svg-sub-${sub.id}`}>
                            <path
                              d={`M ${pilar.px} ${pilar.py} Q ${ctrlX} ${ctrlY} ${sub.sx} ${sub.sy}`}
                              className={`synapse-line-sub ${isSubActive ? 'active' : ''}`}
                              stroke={sub.color}
                              strokeWidth={isSubActive ? "2.5" : "1.2"}
                              fill="none"
                              style={{ '--sub-theme-color': sub.color }}
                            />
                            {/* Fotones secundarios */}
                            <circle r="2.5" fill={sub.color}>
                              <animateMotion dur={`${2 + sIndex * 0.4}s`} repeatCount="indefinite" d={`M ${pilar.px} ${pilar.py} Q ${ctrlX} ${ctrlY} ${sub.sx} ${sub.sy}`} />
                            </circle>
                          </g>
                        );
                      })}
                    </g>
                  );
                })}
              </svg>

              {/* NÚCLEO CENTRAL HOLOGRÁFICO (CEREBRO DE OPERACIONES) */}
{/* NÚCLEO CENTRAL HOLOGRÁFICO CON ICONO DE CEREBRO - MEJORADO SIN CSS ADICIONAL */}
<div 
  className="central-brain-engine" 
  style={{ 
    position: 'absolute',
    width: '140px',
    height: '140px',
    zIndex: 20,
    transformStyle: 'preserve-3d',
    left: '0',
    top: '0',
    // Optimización por hardware para la GPU usando Translate3D
    transform: `translate3d(calc(${cx}px - 50%), calc(${cy}px - 50%), 40px)`,
    willChange: 'transform'
  }}
>
  <div className="engine-spheres-wrapper">
    <div className="orbiting-shell shell-outer"></div>
    <div className="orbiting-shell shell-inner"></div>
    <div className="engine-core-plasma"></div>
  </div>

  {/* INTERFAZ HUD HOLOGRÁFICA CON ICONO DE CEREBRO REEMPLAZADO */}
  <div 
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%) translateZ(15px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '90px',
      height: '90px'
    }}
  >
    {/* Anillo de escaneo sutil usando un SVG nativo auto-animado */}
    <svg 
      style={{ position: 'absolute', width: '100%', height: '100%' }} 
      viewBox="0 0 100 100"
    >
      <circle 
        cx="50" 
        cy="50" 
        r="40" 
        fill="none" 
        stroke="#00d8ff" 
        strokeWidth="1.5" 
        strokeDasharray="40 25 10 25"
        opacity="0.6"
      >
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          from="0 50 50" 
          to="360 50 50" 
          dur="5s" 
          repeatCount="indefinite" 
        />
      </circle>
    </svg>

    {/* Icono de cerebro hiper-brillante con pulso de opacidad nativo */}
    <span 
      style={{
        fontSize: '3.4rem',
        userSelect: 'none',
        zIndex: 2,
        filter: 'drop-shadow(0 0 12px #00d8ff) drop-shadow(0 0 25px rgba(168, 85, 247, 0.5))'
      }}
    >
      🧠
      <animate 
        attributeName="opacity" 
        values="0.8;1;0.8" 
        dur="2s" 
        repeatCount="indefinite" 
      />
    </span>

    {/* Etiqueta de telemetría micro-scifi en línea */}
    <div 
      style={{
        position: 'absolute',
        bottom: '-10px',
        background: 'rgba(3, 5, 9, 0.9)',
        border: '1px solid rgba(0, 216, 255, 0.3)',
        padding: '2px 8px',
        borderRadius: '3px',
        whiteSpace: 'nowrap',
        boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
      }}
    >

    </div>
  </div>
</div>

              {/* RENDERIZADO AXIAL DE NODOS COMPLETO */}
              {computedNetworkMesh.map((pilar) => {
                const isPilarFocused = activeNodeId === pilar.id;

                return (
                  <div key={pilar.id}>
                    
                    {/* PILAR MAESTRO */}
                    <div
                      className={`pillar-master-node ${isPilarFocused ? 'focused' : ''}`}
                      style={{
                        left: `${pilar.px}px`,
                        top: `${pilar.py}px`,
                        transform: `translate(-50%, -50%) translateZ(${pilar.pilarZDepth + 20}px)`,
                        '--pilar-glow-color': pilar.color
                      }}
                      onMouseEnter={() => {
                        setActiveNodeId(pilar.id);
                        setActiveNodeData({ title: pilar.title, subtitle: 'CORE CLUSTER LAYER' });
                      }}
                    >
                      <div className="pillar-chassis">
                        <div className="pillar-pulse-halo"></div>
                        <span className="pillar-icon">{pilar.icon}</span>
                      </div>
                      <div className="pillar-title-tag">{pilar.title}</div>
                    </div>

                    {/* SUB-NODOS TECNOLÓGICOS HIJOS */}
                    {pilar.subNodes.map((sub) => {
                      const isSubFocused = activeNodeId === sub.id;

                      return (
                        <div
                          key={sub.id}
                          className={`sub-neural-node ${isSubFocused ? 'focused' : ''}`}
                          style={{
                            left: `${sub.sx}px`,
                            top: `${sub.sy}px`,
                            transform: `translate(-50%, -50%) translateZ(${sub.subZDepth + 40}px)`,
                            '--sub-glow-color': sub.color
                          }}
                          onMouseEnter={() => {
                            setActiveNodeId(sub.id);
                            setActiveNodeData({ title: sub.name, subtitle: pilar.title });
                          }}
                        >
                          <div className="sub-node-chassis">
                            <span className="sub-node-icon">{sub.icon}</span>
                          </div>
                          
                          {/* VIEWPORT GLASSMORPHISM INTEGRADO (Holograma Inteligente) */}
                          <div className="sub-node-glass-viewport">
                            <div className="viewport-header-hud">
                              <span className="hud-indicator-dot" style={{ backgroundColor: sub.color }}></span>
                              <div className="header-titles">
                                <h6>{sub.name}</h6>
                                <span>{sub.detail}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                  </div>
                );
              })}

            </div>
          </div>
        </div>

        {/* MÓDULO INFERIOR DE MONITOREO DE TELEMETRÍA */}
        <div className="row mt-4 justify-content-center">
          <div className="col-lg-10">
            <div className="scifi-monitoring-deck-v2">
              <div className="row align-items-center g-3">
                <div className="col-md-4 text-center text-md-start border-panel-r">
                  <span className="deck-tag">NETWORK TOPOLOGY MAP</span>
                  <div className="deck-value text-white mt-1">
                    {PILLARS_DATA.length} PILARES ACTIVOS // CONFIGURACIÓN ADAPTATIVA
                  </div>
                </div>
                <div className="col-md-5 text-center">
                  <div className="live-ticker-log-v2">
                    {activeNodeData 
                      ? `[TELEMETRY_STREAM] ➔ LINK_ESTABLISHED WITH: ${activeNodeData.title.toUpperCase()}`
                      : "[SYS_STATUS]: RED COMPLETA DESPLEGADA. NINGÚN ELEMENTO OPACO. ACCESO LIBRE."}
                  </div>
                </div>
                <div className="col-md-3 text-center text-md-end border-panel-l">
                  <span className="deck-tag">INTEGRATED MESH BACKPLANE</span>
                  <div className="deck-value text-gradient-green mb-0">EQUALIZED_3D</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}