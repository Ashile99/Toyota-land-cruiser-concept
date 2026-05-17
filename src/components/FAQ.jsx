import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { question: "What is the expected range of the electric variant?", answer: "The Land Cruiser EV concept targets a range of up to 400 miles on a single charge, depending on terrain and driving conditions." },
  { question: "Can I customize the interior materials?", answer: "Yes, the Ultimate tier offers bespoke interior options, including ethically sourced leathers and sustainable wood trims." },
  { question: "When will the Land Cruiser Concept enter production?", answer: "We are currently gathering feedback on this concept. While no official production date is set, elements of this design will influence future models." },
  { question: "Does it feature autonomous driving?", answer: "It includes Level 3 advanced driver-assistance systems (ADAS) for highway cruising, but it's engineered for you to take control off-road." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ width: '100vw', padding: '120px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#050505' }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h2 className="brand-wordmark" style={{ fontSize: '2rem' }}>FAQ</h2>
        <p className="brand-subtitle">COMMON QUESTIONS</p>
      </motion.div>

      <div style={{ width: '100%', maxWidth: '800px', padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {faqs.map((faq, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              background: 'rgba(30, 30, 30, 0.4)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              overflow: 'hidden'
            }}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{
                width: '100%',
                padding: '24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'transparent',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span className="spec-text" style={{ fontSize: '16px', fontWeight: 'bold' }}>{faq.question}</span>
              <motion.svg 
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </motion.svg>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ padding: '0 24px 24px 24px' }}>
                    <p className="spec-text" style={{ fontSize: '14px', lineHeight: '1.6', color: '#aaa' }}>{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
