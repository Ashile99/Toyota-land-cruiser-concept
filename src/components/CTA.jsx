import React from 'react';
import { motion } from 'framer-motion';
// Using one of the exterior images as a moody background for the CTA
import bgImg from '../../Dynamic chase.png'; 

export default function CTA() {
  return (
    <div style={{ position: 'relative', width: '100vw', padding: '160px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background Image with Overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src={bgImg} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #050505 0%, rgba(5,5,5,0.7) 50%, #050505 100%)' }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 20px', maxWidth: '800px' }}
      >
        <h2 className="brand-wordmark" style={{ fontSize: '3rem', marginBottom: '16px' }}>OWN THE UNKNOWN</h2>
        <p className="spec-text" style={{ fontSize: '18px', color: '#ccc', marginBottom: '40px', lineHeight: '1.6' }}>
          Reserve your Toyota Land Cruiser Concept today and be among the first to redefine the boundaries of exploration.
        </p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            padding: '16px 40px',
            background: 'white',
            color: 'black',
            border: 'none',
            borderRadius: '30px',
            fontWeight: 'bold',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontSize: '12px',
            cursor: 'pointer',
            boxShadow: '0 10px 20px rgba(255,255,255,0.2)'
          }}>
            Reserve Now
          </button>
          <button style={{
            padding: '16px 40px',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '30px',
            fontWeight: 'bold',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontSize: '12px',
            cursor: 'pointer'
          }}>
            Contact Dealer
          </button>
        </div>
      </motion.div>
    </div>
  );
}
