import React, { useState, useEffect } from "react";
import "../../assets/css/ProgBar.css"; // Ensure you have the correct path to your CSS

function ProgressBar({ initialPercentage = 0, targetPercentage = 100 }) {
  const [currentPercentage, setCurrentPercentage] = useState(initialPercentage);

  useEffect(() => {
    // Simulate progress over time or update based on external data
    const interval = setInterval(() => {
      setCurrentPercentage((prev) => {
        if (prev < targetPercentage) {
          return Math.min(prev + 1, targetPercentage); // Increment by 1 until target
        }
        clearInterval(interval);
        return prev;
      });
    }, 50); // Adjust interval for animation speed

    return () => clearInterval(interval); // Cleanup on unmount
  }, [targetPercentage]); // Re-run if targetPercentage changes

  // ... rest of the component
  // ... inside ProgressBar component's return statement
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-filler"
        style={{ width: `${currentPercentage}%` }}
      ></div>
      <span className="progress-bar-percentage">{`${Math.round(
        currentPercentage
      )}%`}</span>
    </div>
  );
}

export default ProgressBar;
