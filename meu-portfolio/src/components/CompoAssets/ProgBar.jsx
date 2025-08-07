import React, { useState, useEffect, useRef } from "react";
import "../../assets/css/ProgBar.css"; // Certifique-se que o caminho está correto

function ProgressBar({ initialPercentage = 0, targetPercentage = 60 }) {
  const [currentPercentage, setCurrentPercentage] = useState(initialPercentage);
  const [dimensions, setDimensions] = useState({ containerWidth: 0, ballWidth: 0 });

  const containerRef = useRef(null);
  const ballRef = useRef(null);

  // Efeito para pegar as dimensões do container e da bola após a montagem
  useEffect(() => {
    if (containerRef.current && ballRef.current) {
      setDimensions({
        containerWidth: containerRef.current.offsetWidth,
        ballWidth: ballRef.current.offsetWidth,
      });
    }
  }, []);

  // Efeito para animar a porcentagem
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPercentage((prev) => {
        if (prev < targetPercentage) {
          return Math.min(prev + 1, targetPercentage);
        }
        clearInterval(interval);
        return prev;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [targetPercentage]);

  // Calcula a distância que a bola deve se mover
  const { containerWidth, ballWidth } = dimensions;
  // O espaço total de movimento é a largura do container menos a largura da bola
  const travelDistance = containerWidth - ballWidth;
  const translation = (travelDistance * currentPercentage) / 100;

  return (
    <div className="progress-bar-container" ref={containerRef}>
      <h1 className="progbar-h1">React</h1>

      <div
        className="progress-bar-ball"
        ref={ballRef}
        style={{
          transform: `translateX(${translation}px)`,
        }}
      >
        <span>{`${Math.round(currentPercentage)}%`}</span>
      </div>
    </div>
  );
}

export default ProgressBar;