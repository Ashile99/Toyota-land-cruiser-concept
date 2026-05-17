import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, name: "Sarah Jenkins", role: "Off-Road Enthusiast", text: "The most capable vehicle I've ever driven. It blends uncompromising luxury with raw power perfectly.", stars: 5 },
  { id: 2, name: "David Chen", role: "Automotive Journalist", text: "Toyota has outdone themselves. The interior feels like a premium lounge, yet it can tackle any terrain.", stars: 5 },
  { id: 3, name: "Marcus Reed", role: "Adventure Photographer", text: "I take this everywhere. The panoramic views and the comfort make long expeditions an absolute joy.", stars: 4 }
];

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#FBBF24' }}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function Testimonials() {
  return (
    <div style={{ width: '100vw', padding: '120px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#050505' }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h2 className="brand-wordmark" style={{ fontSize: '2rem' }}>REVIEWS</h2>
        <p className="brand-subtitle">WHAT THE EXPERTS SAY</p>
      </motion.div>

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1200px', padding: '0 20px' }}>
        {testimonials.map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            style={{
              flex: '1 1 300px',
              maxWidth: '350px',
              background: 'rgba(30, 30, 30, 0.4)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', gap: '4px' }}>
              {[...Array(5)].map((_, idx) => (
                <span key={idx} style={{ opacity: idx < item.stars ? 1 : 0.3 }}>
                  <StarIcon />
                </span>
              ))}
            </div>
            <p className="spec-text" style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc', flexGrow: 1 }}>
              "{item.text}"
            </p>
            <div style={{ marginTop: '16px' }}>
              <p className="brand-wordmark" style={{ fontSize: '12px', letterSpacing: '0.1em' }}>{item.name}</p>
              <p className="brand-subtitle" style={{ fontSize: '9px', color: '#888' }}>{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
