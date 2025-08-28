import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Adobe Photoshop", value: 90 },
  { name: "HTML5 & CSS3", value: 95 },
  { name: "WordPress", value: 80 },
  { name: "Adobe Illustrator", value: 85 },
];

const ProfessionalityCard = () => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // contador animado
  useEffect(() => {
    if (visible) {
      skills.forEach((skill, i) => {
        let start = 0;
        const interval = setInterval(() => {
          start += 1;
          if (start >= skill.value) {
            start = skill.value;
            clearInterval(interval);
          }
          setProgress((prev) => {
            const copy = [...prev];
            copy[i] = start;
            return copy;
          });
        }, 20);
      });
    }
  }, [visible]);

  return (
    <div ref={cardRef} style={styles.card}>
      {skills.map((skill, i) => (
        <div key={i} style={styles.skill}>
          <div style={styles.skillName}>{skill.name}</div>
          <div style={styles.progress}>
            <div
              style={{
                ...styles.progressBar,
                width: `${progress[i]}%`,
              }}
            >
              <span style={styles.percent}>{progress[i]}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// CSS inline (pode trocar pra Tailwind/SCSS se quiser)
const styles = {
  card: {
    background: "#fff",
    width: "100%",
  },
  title: {
    fontSize: "20px",
    fontWeight: "700",
    margin: "0 0 20px",
    position: "relative",
    paddingBottom: "8px",
    borderBottom: "2px solid #4169ff",
    display: "inline-block",
  },
  skill: {
    marginBottom: "25px",
  },
  skillName: {
    marginBottom: "8px",
    fontSize: "15px",
    fontWeight: "500",
  },
  progress: {
    position: "relative",
    background: "#white",
    borderRadius: "50px",
    height: "45px",
    overflow: "hidden",
  },
  progressBar: {
    background: "#eee",
    padding: "10px",
    height: "100%",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "10px",
    color: "#fff",
    fontWeight: "bold",
    transition: "width 1.2s ease-in-out",
  },
  percent: {
    background: "#4169ff",
    padding: "8px 15px",
    borderRadius: "50px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    height: "35px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  },
};

export default ProfessionalityCard;
