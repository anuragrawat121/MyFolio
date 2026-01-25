import React, { useEffect, useRef } from "react";

const Globe = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = 250;
    const height = 250;
    canvas.width = width;
    canvas.height = height;

    // Globe parameters
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 100;
    let rotation = 0;

    // Create points on sphere
    const createSpherePoints = () => {
      const points = [];
      const numLat = 20;
      const numLon = 30;

      for (let lat = 0; lat < numLat; lat++) {
        for (let lon = 0; lon < numLon; lon++) {
          const phi = (lat / numLat) * Math.PI;
          const theta = (lon / numLon) * 2 * Math.PI;

          const x = radius * Math.sin(phi) * Math.cos(theta);
          const y = radius * Math.cos(phi);
          const z = radius * Math.sin(phi) * Math.sin(theta);

          points.push({ x, y, z, originalZ: z });
        }
      }
      return points;
    };

    const points = createSpherePoints();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Rotate points
      rotation += 0.005;

      // Draw gridlines and points
      ctx.strokeStyle = "rgba(59, 130, 246, 0.4)";
      ctx.fillStyle = "rgba(96, 165, 250, 0.8)";
      ctx.lineWidth = 1;

      // Rotate and project points
      const projectedPoints = points.map((p) => {
        // Rotate around Y axis
        const x = p.x * Math.cos(rotation) + p.z * Math.sin(rotation);
        const z = -p.x * Math.sin(rotation) + p.z * Math.cos(rotation);
        const y = p.y;

        // Simple perspective projection
        const scale = 200 / (200 + z);
        const x2d = centerX + x * scale;
        const y2d = centerY + y * scale;

        return { x: x2d, y: y2d, z, scale, originalPoint: p };
      });

      // Sort by Z for proper rendering
      projectedPoints.sort((a, b) => a.z - b.z);

      // Draw latitude lines
      for (let lat = 0; lat < 20; lat++) {
        ctx.beginPath();
        const latPoints = projectedPoints.filter(
          (_, i) => Math.floor(i / 30) === lat,
        );
        latPoints.forEach((p, i) => {
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.closePath();
        ctx.stroke();
      }

      // Draw longitude lines
      for (let lon = 0; lon < 30; lon++) {
        ctx.beginPath();
        const lonPoints = projectedPoints.filter((_, i) => i % 30 === lon);
        lonPoints.forEach((p, i) => {
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.stroke();
      }

      // Draw points
      projectedPoints.forEach((p) => {
        if (p.z > 0) {
          // Only draw front-facing points
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.5 * p.scale, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "250px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "250px",
          height: "250px",
          cursor: "grab",
        }}
      />
    </div>
  );
};

export default Globe;
