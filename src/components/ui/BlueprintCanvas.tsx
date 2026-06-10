"use client";

import { useEffect, useRef } from "react";

export default function BlueprintCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const gridSize = window.innerWidth < 768 ? 40 : 60; 
    const lineAlpha = 0.05;
    const nodeAlpha = 0.15;
    const lineColor = `rgba(56, 189, 248, ${lineAlpha})`; // Electric blue tint
    const nodeColor = `rgba(56, 189, 248, ${nodeAlpha})`;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX - width / 2) * 0.08;
      targetY = (e.clientY - height / 2) * 0.08;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();

    let animationId: number;

    const render = () => {
      // Smooth interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Dark Navy Background
      ctx.fillStyle = "#050a14";
      ctx.fillRect(0, 0, width, height);

      const offsetX = mouseX % gridSize;
      const offsetY = mouseY % gridSize;

      ctx.lineWidth = 1;
      
      // Vertical Lines
      for (let x = offsetX - gridSize; x < width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.strokeStyle = lineColor;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal Lines
      for (let y = offsetY - gridSize; y < height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.strokeStyle = lineColor;
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Nodes
      ctx.fillStyle = nodeColor;
      for (let x = offsetX - gridSize; x < width + gridSize; x += gridSize) {
        for (let y = offsetY - gridSize; y < height + gridSize; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }


      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-2]"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
