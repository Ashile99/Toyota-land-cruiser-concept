import React from 'react';
import { motion } from 'framer-motion';
// Reusing some interior images as article thumbnails
import thumb1 from '../../intern/ChatGPT Image May 8, 2026, 01_15_11 AM-forp-high fidelity v2-2x.png';
import thumb2 from '../../intern/ChatGPT Image May 8, 2026, 01_06_42 AM-forp-high fidelity v2-2x.png';
import thumb3 from '../../intern/ChatGPT Image May 8, 2026, 01_27_05 AM-forp-high fidelity v2-2x.png';

const articles = [
  { img: thumb1, date: "MAY 15, 2026", title: "Engineering the Future of Off-Road Dynamics" },
  { img: thumb2, date: "MAY 02, 2026", title: "Sustainable Luxury: Inside the New Concept" },
  { img: thumb3, date: "APR 28, 2026", title: "Testing the Extremes in the Mojave Desert" }
];

export default function BlogPreview() {
  return (
    <div style={{ width: '100vw', padding: '120px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#050505' }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h2 className="brand-wordmark" style={{ fontSize: '2rem' }}>LATEST DISCOVERIES</h2>
        <p className="brand-subtitle">NEWS & INSIGHTS</p>
      </motion.div>

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1200px', padding: '0 20px' }}>
        {articles.map((article, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              flex: '1 1 300px',
              maxWidth: '350px',
              background: 'rgba(20,20,20,0.6)',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.05)',
              cursor: 'pointer'
            }}
          >
            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={article.img} 
                alt={article.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ padding: '24px' }}>
              <p className="brand-subtitle" style={{ fontSize: '9px', color: '#888', marginBottom: '12px' }}>{article.date}</p>
              <h3 className="spec-text" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.4' }}>{article.title}</h3>
              <p className="brand-wordmark" style={{ fontSize: '10px', letterSpacing: '0.1em', color: '#fff' }}>READ MORE &rarr;</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
