import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

import frontImg from '../png/Direct Front.png';
import rearImg from '../png/Direrct rear.png';
import sideImg from '../png/Side profile.png';
import front34Img from '../png/Front 34.png';

import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import BlogPreview from './components/BlogPreview';

const IMAGES = [
  { id: 'front', src: frontImg, label: 'Front' },
  { id: 'front34', src: front34Img, label: '3/4 Angle' },
  { id: 'side', src: sideImg, label: 'Side Profile' },
  { id: 'rear', src: rearImg, label: 'Rear' }
];

// Interior images
import int1 from '../intern/ChatGPT Image May 8, 2026, 01_06_42 AM-forp-high fidelity v2-2x.png';
import int2 from '../intern/ChatGPT Image May 8, 2026, 01_06_53 AM-forp-high fidelity v2-2x.png';
import int3 from '../intern/ChatGPT Image May 8, 2026, 01_07_09 AM-forp-high fidelity v2-2x.png';
import int4 from '../intern/ChatGPT Image May 8, 2026, 01_15_11 AM-forp-high fidelity v2-2x.png';
import int5 from '../intern/ChatGPT Image May 8, 2026, 01_15_59 AM-forp-high fidelity v2-2x.png';
import int6 from '../intern/ChatGPT Image May 8, 2026, 01_17_45 AM-forp-high fidelity v2-2x.png';
import int7 from '../intern/ChatGPT Image May 8, 2026, 01_27_05 AM-forp-high fidelity v2-2x.png';

const INTERIOR_IMAGES = [
  { src: int1, title: 'CRAFTED PRECISION', desc: 'Hand-stitched leather and premium materials throughout.' },
  { src: int2, title: 'DIGITAL COMMAND', desc: 'Next-generation telemetry and heads-up display.' },
  { src: int3, title: 'PANORAMIC VISION', desc: 'Unobstructed views for ultimate situational awareness.' },
  { src: int4, title: 'AMBIENT AURA', desc: 'Customizable lighting to suit any driving mood.' },
  { src: int5, title: 'ERGONOMIC FOCUS', desc: 'Seats engineered for both extreme off-roading and comfort.' },
  { src: int6, title: 'IMMERSIVE SOUND', desc: 'Studio-quality acoustic engineering in the cabin.' },
  { src: int7, title: 'SPACIOUS UTILITY', desc: 'Uncompromised storage for any expedition.' }
];

function InteriorShowcase({ scrollContainerRef }) {
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div style={{ position: 'relative', width: '100vw', padding: '100px 0 200px', display: 'flex', flexDirection: 'column', gap: '120px', alignItems: 'center', backgroundColor: '#050505', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px', zIndex: 20 }}>
        <h2 className="brand-wordmark" style={{ fontSize: '2rem' }}>INTERIOR</h2>
        <p className="brand-subtitle">UNCOMPROMISING LUXURY</p>
      </div>

      {INTERIOR_IMAGES.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: i % 2 === 0 ? '75%' : '60%',
            alignSelf: i % 2 === 0 ? 'flex-start' : 'flex-end',
            marginLeft: i % 2 === 0 ? '5%' : '0',
            marginRight: i % 2 !== 0 ? '5%' : '0',
            y: i % 3 === 0 ? y1 : i % 3 === 1 ? y2 : y3,
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
            alignItems: 'center',
            gap: '40px'
          }}
        >
          <div style={{ flex: '0 0 70%' }}>
            <img src={item.src} alt="Interior" style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 30px 60px rgba(0,0,0,0.8)' }} />
          </div>

          <div style={{ flex: '1', textAlign: i % 2 === 0 ? 'left' : 'right' }}>
            <h3 className="brand-wordmark" style={{ fontSize: '1.2rem', marginBottom: '12px', letterSpacing: '0.3em' }}>{item.title}</h3>
            <p className="brand-subtitle" style={{ fontSize: '0.75rem', color: '#888', letterSpacing: '0.2em', lineHeight: '1.6' }}>{item.desc}</p>
          </div>
        </motion.div>
      ))}

      {/* Background ambient lighting for interior section */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)', zIndex: 1, pointerEvents: 'none' }} />
    </div>
  );
}

export default function App() {
  const scrollContainerRef = useRef(null);
  const [showIntro, setShowIntro] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bodyColor, setBodyColor] = useState('Lunar Silver');
  const [caliperColor, setCaliperColor] = useState('Brembo Red');
  const [activeTab, setActiveTab] = useState('Exterior');

  const { scrollY } = useScroll({ container: scrollContainerRef });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > window.innerHeight * 0.5) {
      setActiveTab('Interior');
    } else {
      setActiveTab('Exterior');
    }
  });

  // Mouse tracking for the light reflection blob
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 40, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const setCamera = (index) => {
    setCurrentIndex(index);
  };

  // Simplistic color tint approach translated to CSS filters roughly
  const getFilter = () => {
    if (bodyColor === 'Graphite Black') return 'brightness(0.4) contrast(1.2)';
    if (bodyColor === 'Arctic White') return 'brightness(1.5) contrast(0.9)';
    return 'brightness(1) contrast(1)'; // Lunar Silver default
  };

  return (
    <div ref={scrollContainerRef} style={{ height: '100vh', width: '100vw', overflowY: 'auto', overflowX: 'hidden', backgroundColor: '#050505', scrollBehavior: 'smooth' }}>

      {/* Global Spreading Blurred Gradient Blob (Follows cursor everywhere) */}
      <motion.div
        style={{
          position: 'fixed',
          top: -250,
          left: -250,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none',
          x: cursorX,
          y: cursorY,
          zIndex: 999,
          mixBlendMode: 'screen',
          filter: 'blur(40px)' // Extreme blur to make it spread smoothly
        }}
      />

      {/* iOS Glassmorphism Navigation Tabs */}
      <AnimatePresence>
        {!showIntro && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '4px',
              padding: '6px',
              background: 'rgba(30, 30, 30, 0.45)',
              backdropFilter: 'blur(30px) saturate(180%)',
              WebkitBackdropFilter: 'blur(30px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '40px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              zIndex: 100
            }}
          >
            {['Exterior', 'Interior'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  if (tab === 'Exterior') scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                  else scrollContainerRef.current.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                }}
                style={{
                  padding: '10px 28px',
                  borderRadius: '30px',
                  border: 'none',
                  background: activeTab === tab ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                  color: activeTab === tab ? '#fff' : 'rgba(255, 255, 255, 0.6)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease',
                  boxShadow: activeTab === tab ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                }}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="app-container"
        style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#050505' }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.15, // Reduced opacity
            filter: 'blur(12px)', // Diffusion blur
            pointerEvents: 'none'
          }}
        >
          <source src={`${import.meta.env.BASE_URL}bg.mp4`} type="video/mp4" />
        </video>

        {/* 2D Image Display */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={IMAGES[currentIndex].src}
              alt={IMAGES[currentIndex].label}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // smooth ease out
              style={{
                maxWidth: '80%',
                maxHeight: '80%',
                objectFit: 'contain',
                filter: getFilter(),
                transition: 'filter 0.5s ease',
                position: 'absolute'
              }}
            />
          </AnimatePresence>
        </div>

        {/* UI Overlay */}
        <AnimatePresence>
          {!showIntro && (
            <motion.div
              initial={{ opacity: 0, filter: 'blur(15px)', y: 20 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, filter: 'blur(10px)', y: -10 }}
              transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
            >
              {/* Header */}
              <div style={{ position: 'absolute', top: '40px', left: '40px', pointerEvents: 'auto' }}>
                <h1 className="brand-wordmark">TOYOTA</h1>
                <p className="brand-subtitle">Land Cruiser Concept</p>
              </div>

              {/* Camera Presets (Bottom Center) */}
              <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px', background: 'rgba(0,0,0,0.6)', padding: '12px 24px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', pointerEvents: 'auto' }}>
                {IMAGES.map((img, idx) => (
                  <button
                    key={idx}
                    className="camera-preset-btn"
                    style={{ opacity: currentIndex === idx ? 1 : 0.5 }}
                    onClick={() => setCamera(idx)}
                  >
                    {img.label}
                  </button>
                ))}
              </div>

              {/* Configurator Panel (Right Side) */}
              <div className="ui-panel" style={{ position: 'absolute', top: '50%', right: '40px', transform: 'translateY(-50%)', width: '220px', pointerEvents: 'auto' }}>
                <h3 className="config-heading">Color Configurator</h3>

                <div style={{ marginBottom: '24px' }}>
                  <p className="spec-text" style={{ fontSize: '10px', marginBottom: '8px', opacity: 0.5 }}>BODY COLOR</p>
                  {['Lunar Silver', 'Graphite Black', 'Arctic White'].map(color => (
                    <div
                      key={color}
                      className={`config-option ${bodyColor === color ? 'active' : ''}`}
                      onClick={() => setBodyColor(color)}
                    >
                      <div style={{
                        width: '16px', height: '16px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)',
                        background: color === 'Lunar Silver' ? '#c0c0c0' : color === 'Graphite Black' ? '#222' : '#fff'
                      }} />
                      {color}
                    </div>
                  ))}
                </div>

                <div>
                  <p className="spec-text" style={{ fontSize: '10px', marginBottom: '8px', opacity: 0.5 }}>BRAKE CALIPERS</p>
                  {['Brembo Red', 'Stealth Black'].map(color => (
                    <div
                      key={color}
                      className={`config-option ${caliperColor === color ? 'active' : ''}`}
                      onClick={() => setCaliperColor(color)}
                    >
                      <div style={{
                        width: '16px', height: '16px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)',
                        background: color === 'Brembo Red' ? '#cc0000' : '#111'
                      }} />
                      {color}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Intro Video Overlay */}
        <AnimatePresence>
          {showIntro && (
            <motion.div
              exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.05 }}
              transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 50,
                backgroundColor: '#000',
                pointerEvents: 'none'
              }}
            >
              <video
                autoPlay
                muted
                playsInline
                onEnded={() => setShowIntro(false)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              >
                <source src={`${import.meta.env.BASE_URL}intro.mp4`} type="video/mp4" />
              </video>
            </motion.div>
          )}
        </AnimatePresence>
      </div> {/* End of app-container */}

      {/* Marketing Landing Page Sections */}
      {!showIntro && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <InteriorShowcase scrollContainerRef={scrollContainerRef} />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTA />
          <BlogPreview />
        </div>
      )}
    </div>
  );
}
