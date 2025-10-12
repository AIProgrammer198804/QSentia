import React, { useState, useEffect } from 'react';
import { ChevronDown, TrendingUp, Shield, Brain, Activity } from 'lucide-react';
import logo from './logo.png';

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const metrics = [
    { label: "Target Sharpe Ratio", value: "> 2.0", icon: TrendingUp },
    { label: "Risk Management", value: "Dynamic", icon: Shield },
    { label: "Alpha Generation", value: "AI-Driven", icon: Brain },
    { label: "Market Adaptation", value: "Real-time", icon: Activity }
  ];

  const performanceData = [
    { metric: "Sharpe Ratio", value: "2.01", period: "Risk-Adjusted Return" },
    { metric: "Calmar Ratio", value: "2.71", period: "Return vs Max DD" },
    { metric: "Sortino Ratio", value: "3.77", period: "Downside Deviation" },
    { metric: "Maximum Drawdown", value: "7.77%", period: "Peak to Trough" }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      color: '#1a1a1a',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    hero: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 24px',
      textAlign: 'center',
      backgroundColor: '#ffffff'
    },
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      overflow: 'hidden'
    },
    logoContainer: {
      marginBottom: '48px',
      zIndex: 10
    },
    logo: {
      height: '180px',
      width: 'auto',
      display: 'block',
      margin: '0 auto',
      filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))',
      transition: 'all 0.3s ease',
      position: 'relative',
      zIndex: 15
    },
    mainHeading: {
      fontSize: '4.5rem',
      fontWeight: '300',
      marginBottom: '24px',
      lineHeight: '1.1',
      zIndex: 10,
      color: '#000000',
      letterSpacing: '-2px'
    },
    subHeading: {
      fontSize: '1.25rem',
      color: '#666666',
      marginBottom: '48px',
      fontWeight: '400',
      zIndex: 10,
      maxWidth: '600px',
      margin: '0 auto 48px auto'
    },
    button: {
      backgroundColor: '#4338ca',
      color: '#ffffff',
      padding: '16px 48px',
      fontSize: '16px',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      zIndex: 10,
      letterSpacing: '0.5px'
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '32px',
      left: '50%',
      transform: 'translateX(-50%)',
      animation: 'bounce 2s infinite',
      zIndex: 10
    },
    section: {
      padding: '80px 24px',
      backgroundColor: '#f9fafb'
    },
    metricsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '32px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    metricCard: {
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'transform 0.3s ease'
    },
    metricIcon: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '64px',
      height: '64px',
      backgroundColor: '#ffffff',
      borderRadius: '50%',
      marginBottom: '16px',
      transition: 'all 0.5s ease',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    metricValue: {
      fontSize: '2rem',
      fontWeight: '300',
      marginBottom: '8px',
      transition: 'transform 0.3s ease'
    },
    metricLabel: {
      color: '#6b7280',
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    aboutSection: {
      padding: '80px 24px',
      backgroundColor: '#ffffff'
    },
    aboutContainer: {
      maxWidth: '1000px',
      margin: '0 auto',
      textAlign: 'center'
    },
    aboutTitle: {
      fontSize: '2.5rem',
      fontWeight: '300',
      marginBottom: '48px',
      transition: 'transform 0.5s ease'
    },
    aboutGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '48px',
      textAlign: 'left',
      marginBottom: '64px'
    },
    aboutCard: {
      transition: 'all 0.3s ease'
    },
    aboutCardHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px'
    },
    aboutCardIcon: {
      padding: '8px',
      backgroundColor: '#f9fafb',
      borderRadius: '50%',
      marginRight: '12px',
      transition: 'all 0.3s ease',
      border: '2px solid #4338ca'
    },
    aboutCardTitle: {
      fontSize: '1.25rem',
      fontWeight: '500'
    },
    aboutCardText: {
      color: '#6b7280',
      lineHeight: '1.6',
      transition: 'color 0.3s ease'
    },
    highlightBox: {
      marginTop: '64px',
      padding: '32px',
      backgroundColor: '#f9fafb',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease'
    },
    highlightTitle: {
      fontSize: '1.5rem',
      fontWeight: '300',
      marginBottom: '16px'
    },
    highlightText: {
      color: '#6b7280',
      lineHeight: '1.6',
      maxWidth: '750px',
      margin: '0 auto',
      transition: 'color 0.3s ease'
    },
    ctaSection: {
      padding: '80px 24px',
      backgroundColor: '#000000',
      color: '#ffffff',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    ctaTitle: {
      fontSize: '2.5rem',
      fontWeight: '300',
      marginBottom: '24px',
      transition: 'transform 0.5s ease'
    },
    ctaSubtitle: {
      fontSize: '1.25rem',
      color: '#9ca3af',
      marginBottom: '32px',
      fontWeight: '300'
    },
    ctaButtons: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    ctaButtonPrimary: {
      backgroundColor: '#ffffff',
      color: '#000000',
      padding: '16px 32px',
      fontSize: '18px',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    ctaButtonSecondary: {
      backgroundColor: 'transparent',
      color: '#ffffff',
      padding: '16px 32px',
      fontSize: '18px',
      fontWeight: '500',
      border: '1px solid #ffffff',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    footer: {
      padding: '32px 24px',
      backgroundColor: '#111827',
      color: '#9ca3af'
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px'
    },
    footerLogo: {
      fontSize: '1.5rem',
      fontWeight: '900',
      color: '#ffffff',
      transition: 'transform 0.3s ease'
    },
    footerTagline: {
      fontSize: '14px',
      marginTop: '4px'
    },
    copyright: {
      fontSize: '14px'
    }
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.background}>
          {/* Bold animated black and white background - avoiding logo area */}
          
          {/* Moving dots - positioned away from center logo area */}
          {[...Array(15)].map((_, i) => {
            const isInLogoArea = (i >= 6 && i <= 9); // Skip middle dots that would overlap logo
            if (isInLogoArea) return null;
            
            return (
              <div
                key={`dot-${i}`}
                style={{
                  position: 'absolute',
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#000000',
                  borderRadius: '50%',
                  opacity: 0.6,
                  left: `${5 + i * 6}%`,
                  top: i < 6 ? `${10 + (i % 2) * 15}%` : `${70 + (i % 2) * 15}%`, // Top or bottom, not middle
                  animation: `boldPulse ${1.5 + i * 0.2}s ease-in-out infinite`
                }}
              />
            );
          })}
          
          {/* Moving lines - positioned in top and bottom areas */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`line-${i}`}
              style={{
                position: 'absolute',
                width: '200px',
                height: '2px',
                backgroundColor: '#000000',
                opacity: 0.4,
                left: `${i * 16}%`,
                top: i < 3 ? `${5 + i * 10}%` : `${75 + (i-3) * 10}%`, // Top or bottom areas only
                animation: `slideHorizontal ${3 + i}s linear infinite`
              }}
            />
          ))}
          
          {/* Floating squares - positioned in corners and edges */}
          {[...Array(8)].map((_, i) => {
            const positions = [
              {left: '5%', top: '15%'}, {left: '85%', top: '10%'}, 
              {left: '10%', top: '25%'}, {left: '90%', top: '20%'},
              {left: '8%', top: '75%'}, {left: '88%', top: '80%'},
              {left: '15%', top: '85%'}, {left: '80%', top: '85%'}
            ];
            
            return (
              <div
                key={`square-${i}`}
                style={{
                  position: 'absolute',
                  width: '25px',
                  height: '25px',
                  border: '2px solid #000000',
                  opacity: 0.3,
                  left: positions[i].left,
                  top: positions[i].top,
                  animation: `floatRotate ${4 + i}s ease-in-out infinite`,
                  transform: `rotate(${i * 45}deg)`
                }}
              />
            );
          })}
          
          {/* Grid overlay - full coverage but low opacity */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.08,
            backgroundImage: 'linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)',
            backgroundSize: '40px 40px',
            animation: 'gridMove 12s linear infinite'
          }} />
          
          {/* Diagonal stripes - positioned to frame the logo area */}
          {[...Array(4)].map((_, i) => (
            <div
              key={`stripe-${i}`}
              style={{
                position: 'absolute',
                width: '300px',
                height: '3px',
                backgroundColor: '#000000',
                opacity: 0.15,
                left: i < 2 ? `${-30 + i * 30}%` : `${50 + (i-2) * 30}%`, // Left and right sides
                top: `${15 + i * 20}%`,
                transform: 'rotate(45deg)',
                animation: `slideDiagonal ${6 + i * 2}s linear infinite`
              }}
            />
          ))}
        </div>
        
        <div style={styles.logoContainer}>
          {/* Subtle glow elements around logo */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '320px',
            height: '120px',
            border: '1px solid #4338ca',
            opacity: 0.2,
            borderRadius: '4px',
            animation: 'logoGlow 8s ease-in-out infinite',
            zIndex: 12
          }}></div>
          
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '380px',
            height: '140px',
            border: '1px solid #4338ca',
            opacity: 0.1,
            borderRadius: '6px',
            animation: 'logoGlow 12s ease-in-out infinite reverse',
            zIndex: 11
          }}></div>
          
          {/* QSENTIA text logo matching your design */}
          <div style={{
            fontSize: '4rem',
            fontWeight: '900',
            color: '#000000',
            letterSpacing: '0.05em',
            fontFamily: 'Arial, sans-serif',
            position: 'relative',
            zIndex: 15,
            textAlign: 'center'
          }}>
            <span style={{
              border: '4px solid #4338ca',
              padding: '4px 12px',
              marginRight: '8px',
              display: 'inline-block'
            }}>Q</span>
            <span style={{
              padding: '4px 8px',
              marginRight: '4px',
              display: 'inline-block',
              fontWeight: '700'
            }}>S</span>
            <span style={{
              padding: '4px 8px',
              marginRight: '4px',
              display: 'inline-block',
              fontWeight: '700'
            }}>E</span>
            <span style={{
              padding: '4px 8px',
              marginRight: '4px',
              display: 'inline-block',
              fontWeight: '700'
            }}>N</span>
            <span style={{
              padding: '4px 8px',
              marginRight: '4px',
              display: 'inline-block',
              fontWeight: '700'
            }}>T</span>
            <span style={{
              padding: '4px 8px',
              marginRight: '4px',
              display: 'inline-block',
              fontWeight: '700'
            }}>I</span>
            <span style={{
              padding: '4px 8px',
              display: 'inline-block',
              fontWeight: '700'
            }}>A</span>
          </div>
        </div>

        <h1 style={styles.mainHeading}>
          More Alpha<br />
          <span style={{ fontWeight: '100' }}>Less Risk</span>
        </h1>
        
        <p style={styles.subHeading}>
          Where intelligent reinforcement learning meets market perception
        </p>
        
        <button 
          style={styles.button}
          onClick={() => window.location.href = 'mailto:recruiter@qsentia.com?subject=Investment Inquiry - QSENTIA&body=Hello Lucas,%0D%0A%0D%0AI am interested in learning more about QSENTIA\'s quantitative investment strategies.%0D%0A%0D%0APlease contact me to discuss potential investment opportunities.%0D%0A%0D%0AThank you.'}
        >
          Request Information
        </button>

        <div style={styles.scrollIndicator}>
          <ChevronDown size={24} color="#999999" />
        </div>
      </div>

      {/* Performance Statistics */}
      <div style={{...styles.section, backgroundColor: '#f8f9fa', borderTop: '1px solid #e5e5e5', position: 'relative', overflow: 'hidden'}}>
        {/* Animated background for performance section */}
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1}}>
          {[...Array(8)].map((_, i) => (
            <div
              key={`perf-dot-${i}`}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                backgroundColor: '#000000',
                borderRadius: '50%',
                opacity: 0.3,
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 2) * 60}%`,
                animation: `boldPulse ${2 + i * 0.3}s ease-in-out infinite`
              }}
            />
          ))}
          
          {[...Array(3)].map((_, i) => (
            <div
              key={`perf-line-${i}`}
              style={{
                position: 'absolute',
                width: '120px',
                height: '1px',
                backgroundColor: '#000000',
                opacity: 0.2,
                left: `${i * 35}%`,
                top: `${40 + i * 20}%`,
                animation: `slideHorizontal ${5 + i}s linear infinite`
              }}
            />
          ))}
        </div>
        
        <div style={{maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10}}>
          <h2 style={{fontSize: '2rem', fontWeight: '300', textAlign: 'center', marginBottom: '48px', color: '#1a1a1a'}}>
            Backtesting Performance Metrics
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px'}}>
            {performanceData.map((item, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '32px 24px',
                backgroundColor: '#ffffff',
                border: '1px solid #e5e5e5',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                position: 'relative',
                zIndex: 10
              }} className="performance-card">
                <div style={{fontSize: '2.5rem', fontWeight: '300', color: '#4338ca', marginBottom: '8px'}}>
                  {item.value}
                </div>
                <div style={{fontSize: '1rem', fontWeight: '500', color: '#1a1a1a', marginBottom: '4px'}}>
                  {item.metric}
                </div>
                <div style={{fontSize: '0.875rem', color: '#666666'}}>
                  {item.period}
                </div>
              </div>
            ))}
          </div>
          
          <div style={{
            textAlign: 'center',
            marginTop: '48px',
            padding: '32px',
            backgroundColor: '#ffffff',
            border: '1px solid #e5e5e5',
            borderRadius: '2px',
            position: 'relative',
            zIndex: 10
          }}>
            <h3 style={{fontSize: '1.5rem', fontWeight: '400', marginBottom: '16px', color: '#1a1a1a'}}>
              Strategy Performance Summary
            </h3>
            <p style={{fontSize: '1rem', color: '#666666', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto'}}>
              Our AI-driven quantitative strategy has consistently outperformed traditional benchmarks across multiple market cycles. 
              The combination of reinforcement learning and natural language processing enables superior risk-adjusted returns 
              while maintaining disciplined drawdown control and consistent alpha generation.
            </p>
          </div>
        </div>
      </div>

      {/* Investment Philosophy */}
      <div style={{...styles.aboutSection, padding: '100px 24px', position: 'relative', overflow: 'hidden'}}>
        {/* Animated background for about section */}
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1}}>
          {[...Array(10)].map((_, i) => (
            <div
              key={`about-dot-${i}`}
              style={{
                position: 'absolute',
                width: '5px',
                height: '5px',
                backgroundColor: '#000000',
                borderRadius: '50%',
                opacity: 0.4,
                left: `${5 + i * 9}%`,
                top: `${15 + (i % 3) * 30}%`,
                animation: `boldPulse ${1.8 + i * 0.25}s ease-in-out infinite`
              }}
            />
          ))}
          
          {[...Array(4)].map((_, i) => (
            <div
              key={`about-square-${i}`}
              style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                border: '1px solid #000000',
                opacity: 0.15,
                left: `${15 + i * 25}%`,
                top: `${25 + (i % 2) * 50}%`,
                animation: `floatRotate ${6 + i * 2}s ease-in-out infinite`,
                transform: `rotate(${i * 30}deg)`
              }}
            />
          ))}
          
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.06,
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 18s linear infinite'
          }} />
        </div>
        
        <div style={{...styles.aboutContainer, position: 'relative', zIndex: 10}}>
          <h2 style={{...styles.aboutTitle, marginBottom: '64px'}}>Intelligent Portfolio Management</h2>
          
          <div style={styles.aboutGrid}>
            <div style={styles.aboutCard}>
              <div style={styles.aboutCardHeader}>
                <div style={styles.aboutCardIcon}>
                  <Brain size={24} />
                </div>
                <h3 style={styles.aboutCardTitle}>Advanced AI Models</h3>
              </div>
              <p style={styles.aboutCardText}>
                Our proprietary framework combines deep reinforcement learning with large language models to identify hidden alpha signals and optimize portfolio allocation in real-time.
              </p>
            </div>
            
            <div style={styles.aboutCard}>
              <div style={styles.aboutCardHeader}>
                <div style={styles.aboutCardIcon}>
                  <Shield size={24} />
                </div>
                <h3 style={styles.aboutCardTitle}>Dynamic Risk Management</h3>
              </div>
              <p style={styles.aboutCardText}>
                Multi-modal data interpretation enables rapid adaptation to market volatility while maintaining rigorous risk parameters and delivering superior risk-adjusted returns.
              </p>
            </div>
            
            <div style={styles.aboutCard}>
              <div style={styles.aboutCardHeader}>
                <div style={styles.aboutCardIcon}>
                  <TrendingUp size={24} />
                </div>
                <h3 style={styles.aboutCardTitle}>Systematic Alpha Generation</h3>
              </div>
              <p style={styles.aboutCardText}>
                Continuous market signal processing through natural language understanding and quantitative factor analysis to identify persistent, uncorrelated return streams across multiple asset classes.
              </p>
            </div>
            
            <div style={styles.aboutCard}>
              <div style={styles.aboutCardHeader}>
                <div style={styles.aboutCardIcon}>
                  <Activity size={24} />
                </div>
                <h3 style={styles.aboutCardTitle}>Real-Time Portfolio Optimization</h3>
              </div>
              <p style={styles.aboutCardText}>
                Adaptive position sizing and rebalancing algorithms that respond to changing market conditions while maintaining target risk profiles and liquidity requirements.
              </p>
            </div>
          </div>
          
          <div style={styles.highlightBox}>
            <h3 style={styles.highlightTitle}>Optimal Asset Allocation</h3>
            <p style={styles.highlightText}>
              Traditional quantitative models often fail during volatile periods. Our integrated approach leverages 
              reinforcement learning for dynamic weight adjustment combined with LLM-powered alpha generation, 
              creating a robust framework that adapts to changing market conditions while maintaining explainable, 
              credible performance metrics.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{...styles.ctaSection, position: 'relative', overflow: 'hidden'}}>
        {/* Animated background for CTA section */}
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1}}>
          {[...Array(12)].map((_, i) => (
            <div
              key={`cta-dot-${i}`}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                opacity: 0.3,
                left: `${8 + i * 8}%`,
                top: `${20 + (i % 3) * 25}%`,
                animation: `boldPulse ${2.2 + i * 0.2}s ease-in-out infinite`
              }}
            />
          ))}
          
          {[...Array(3)].map((_, i) => (
            <div
              key={`cta-line-${i}`}
              style={{
                position: 'absolute',
                width: '150px',
                height: '1px',
                backgroundColor: '#ffffff',
                opacity: 0.2,
                left: `${i * 30}%`,
                top: `${30 + i * 25}%`,
                animation: `slideHorizontal ${4 + i * 2}s linear infinite`
              }}
            />
          ))}
          
          {[...Array(4)].map((_, i) => (
            <div
              key={`cta-square-${i}`}
              style={{
                position: 'absolute',
                width: '18px',
                height: '18px',
                border: '1px solid #ffffff',
                opacity: 0.15,
                left: `${20 + i * 20}%`,
                top: `${35 + (i % 2) * 30}%`,
                animation: `floatRotate ${5 + i * 1.5}s ease-in-out infinite`,
                transform: `rotate(${i * 45}deg)`
              }}
            />
          ))}
        </div>
        
        <div style={{position: 'relative', zIndex: 10}}>      
          <h2 style={styles.ctaTitle}>Ready to Optimize Your Portfolio?</h2>
          <p style={styles.ctaSubtitle}>
            Join the future of quantitative investing
          </p>
          
          <div style={styles.ctaButtons}>
            <button 
              style={styles.ctaButtonPrimary}
              onClick={() => window.location.href = 'mailto:recruiter@qsentia.com?subject=Investment Inquiry - QSENTIA&body=Hello,%0D%0A%0D%0AI am interested in learning more about QSENTIA\'s quantitative investment strategies.%0D%0A%0D%0APlease contact me to discuss potential investment opportunities.%0D%0A%0D%0AThank you.'}
            >
              Get Started
            </button>
            <button 
              style={styles.ctaButtonSecondary}
              onClick={() => window.location.href = 'mailto:recruiter@qsentia.com?subject=Information Request - QSENTIA&body=Hello,%0D%0A%0D%0AI would like to learn more about QSENTIA and your investment approach.%0D%0A%0D%0APlease send me additional information.%0D%0A%0D%0AThank you.'}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <div style={styles.footerContent}>
          <div>
            <div style={styles.footerLogo}>QSENTIA</div>
            <div style={styles.footerTagline}>Intelligent Portfolio Management</div>
          </div>
          <div style={styles.copyright}>
            © 2025 QSENTIA. All rights reserved.
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0,-30px,0);
          }
          70% {
            transform: translate3d(0,-15px,0);
          }
          90% {
            transform: translate3d(0,-4px,0);
          }
        }
        
        @keyframes boldPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.8); }
        }
        
        @keyframes slideHorizontal {
          0% { transform: translateX(-200px); opacity: 0; }
          20% { opacity: 0.4; }
          80% { opacity: 0.4; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        
        @keyframes floatRotate {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-40px) rotate(180deg); opacity: 0.7; }
        }
        
        @keyframes gridMove {
          0% { transform: translateX(0px) translateY(0px); }
          100% { transform: translateX(40px) translateY(40px); }
        }
        
        @keyframes slideDiagonal {
          0% { transform: translateX(-300px) translateY(-100px) rotate(45deg); opacity: 0; }
          30% { opacity: 0.2; }
          70% { opacity: 0.2; }
          100% { transform: translateX(100vw) translateY(100vh) rotate(45deg); opacity: 0; }
        }
        
        @keyframes logoGlow {
          0%, 100% { opacity: 0.1; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.2; transform: translate(-50%, -50%) scale(1.1); }
        }
        
        button:hover {
          background-color: #3730a3;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(67, 56, 202, 0.3);
        }
        
        img:hover {
          transform: scale(1.02);
        }
        
        .performance-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 3rem !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .cta-buttons {
            flex-direction: column !important;
            align-items: center !important;
          }
        }
      `}</style>
    </div>
  );
};

export default App;