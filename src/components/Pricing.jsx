import React from 'react';
import { motion } from 'framer-motion';

const tiers = [
  { name: "BASE", price: "$65,000", features: ["AWD System", "Standard Interior", "18\" Alloys", "10-Speaker Audio"] },
  { name: "ADVENTURE", price: "$78,000", highlighted: true, features: ["Advanced Terrain Mode", "Premium Leather", "20\" Alloys", "Panoramic Roof", "Winch Included"] },
  { name: "ULTIMATE", price: "$92,000", features: ["Adaptive Air Suspension", "Bespoke Interior", "22\" Forged Alloys", "Immersive Audio System", "Night Vision"] }
];

export default function Pricing() {
  return (
    <div style={{ width: '100vw', padding: '120px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#050505' }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h2 className="brand-wordmark" style={{ fontSize: '2rem' }}>BUILD YOURS</h2>
        <p className="brand-subtitle">SELECT YOUR EXPEDITION TIER</p>
      </motion.div>

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', maxWidth: '1200px', padding: '0 20px' }}>
        {tiers.map((tier, i) => (
          <motion.div 
            key={tier.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            style={{
              flex: '1 1 300px',
              maxWidth: '340px',
              background: tier.highlighted ? 'rgba(255,255,255,0.08)' : 'rgba(20,20,20,0.5)',
              backdropFilter: 'blur(20px)',
              border: tier.highlighted ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '40px 30px',
              transform: tier.highlighted ? 'scale(1.05)' : 'scale(1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: tier.highlighted ? '0 20px 40px rgba(0,0,0,0.6)' : 'none'
            }}
          >
            <h3 className="brand-wordmark" style={{ fontSize: '18px', letterSpacing: '0.2em' }}>{tier.name}</h3>
            <p className="spec-text" style={{ fontSize: '32px', margin: '20px 0', fontWeight: 'bold' }}>{tier.price}</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', marginTop: '20px', flexGrow: 1 }}>
              {tier.features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: '#fff', opacity: 0.8 }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="spec-text" style={{ fontSize: '13px', color: '#ccc' }}>{feat}</span>
                </div>
              ))}
            </div>

            <button 
              style={{
                marginTop: '40px',
                width: '100%',
                padding: '16px 0',
                background: tier.highlighted ? 'white' : 'transparent',
                color: tier.highlighted ? 'black' : 'white',
                border: tier.highlighted ? 'none' : '1px solid rgba(255,255,255,0.3)',
                borderRadius: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontWeight: 'bold',
                fontSize: '11px',
                cursor: 'pointer'
              }}
            >
              Configure
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
