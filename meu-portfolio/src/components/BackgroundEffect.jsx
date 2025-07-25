import React, { useEffect, useRef, useCallback } from 'react';
import '../assets/css/BackgroundEffect.css'; // Importa o CSS

const BackgroundEffect = () => {
  const particlesContainerRef = useRef(null);
  const spheresRef = useRef([]);

  // Função para criar uma única partícula
  const createParticle = useCallback(() => {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 9 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    return particle;
  }, []);

  // Função para resetar a posição de uma partícula e retornar suas coordenadas
  const resetParticle = useCallback((particle) => {
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;

    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = '0';

    return { x: posX, y: posY };
  }, []);

  // Função para animar uma partícula
  const animateParticle = useCallback((particle) => {
    const pos = resetParticle(particle);

    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;

    // Usamos setTimeout para simular o timing do GSAP-like original,
    // mas em um ambiente React, é importante gerenciar o ciclo de vida.
    // Usaremos useRef para armazenar os timers e limpá-los.
    const timeout1 = setTimeout(() => {
      particle.style.transition = `all ${duration}s linear`;
      particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;

      const moveX = pos.x + (Math.random() * 20 - 10);
      const moveY = pos.y - Math.random() * 30;

      particle.style.left = `${moveX}%`;
      particle.style.top = `${moveY}%`;

      const timeout2 = setTimeout(() => {
        animateParticle(particle); // Recursively call to continue animation
      }, duration * 1000);
      particle.__timer2 = timeout2; // Store timer ID on the particle element
    }, delay * 1000);
    particle.__timer1 = timeout1; // Store timer ID on the particle element
  }, [resetParticle]); // Dependência: resetParticle

  // Efeito para a criação e animação das partículas de fundo
  useEffect(() => {
    const particlesContainer = particlesContainerRef.current;
    if (!particlesContainer) return;

    const particleCount = 80;
    const particles = []; // Para armazenar as partículas criadas e gerenciar seus timers

    for (let i = 0; i < particleCount; i++) {
      const particle = createParticle();
      particlesContainer.appendChild(particle);
      particles.push(particle);
      animateParticle(particle);
    }

    // Função de limpeza para remover partículas e limpar timers quando o componente desmontar
    return () => {
      particles.forEach(particle => {
        if (particle.__timer1) clearTimeout(particle.__timer1);
        if (particle.__timer2) clearTimeout(particle.__timer2);
        particle.remove();
      });
    };
  }, [createParticle, animateParticle]); // Dependências: createParticle, animateParticle

  // Efeito para a interação do mouse
  useEffect(() => {
    const particlesContainer = particlesContainerRef.current;
    if (!particlesContainer) return;

    const handleMouseMove = (e) => {
      // Partículas no rastro do mouse
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;

      const particle = document.createElement('div');
      particle.className = 'particle';

      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;
      particle.style.opacity = '0.6';

      particlesContainer.appendChild(particle);

      // Animar e remover a partícula do rastro
      const mouseParticleTimeout1 = setTimeout(() => {
        particle.style.transition = 'all 2s ease-out';
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = '0';

        const mouseParticleTimeout2 = setTimeout(() => {
          particle.remove();
        }, 2000);
        particle.__mouseTimer2 = mouseParticleTimeout2; // Store timer ID
      }, 10);
      particle.__mouseTimer1 = mouseParticleTimeout1; // Store timer ID

      // Movimento sutil das esferas gradientes
      spheresRef.current.forEach(sphere => {
        if (sphere) { // Garante que a referência existe
          const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
          const moveY = (e.clientY / window.innerHeight - 0.5) * 5;
          sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Função de limpeza para remover o event listener e timers das partículas do mouse
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Sem dependências para este efeito, roda uma vez

  return (
    <div className="gradient-background-container">
      <div className="particles-container" id="particles-container" ref={particlesContainerRef}></div>
      <div className="gradient-sphere sphere-1" ref={el => spheresRef.current[0] = el}></div>
      <div className="gradient-sphere sphere-2" ref={el => spheresRef.current[1] = el}></div>
      <div className="gradient-sphere sphere-3" ref={el => spheresRef.current[2] = el}></div>
      <div className="gradient-sphere sphere-4" ref={el => spheresRef.current[2] = el}></div>
      <div className="gradient-sphere sphere-5" ref={el => spheresRef.current[2] = el}></div>
      <div className="glow"></div>
      <div className="grid-overlay"></div>
      <div className="noise-overlay"></div>
      <div className="particles-container" id="particles-container" ref={particlesContainerRef}></div>
    </div>
  );
};

export default BackgroundEffect;