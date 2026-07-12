import { useEffect } from "react";

export default function NeonParticles() {
  useEffect(() => {
    const container = document.getElementById("particles");
    for (let i = 0; i < 40; i++) {
      const dot = document.createElement("div");
      dot.className = "particle";
      dot.style.left = Math.random() * 100 + "%";
      dot.style.top = Math.random() * 100 + "%";
      dot.style.animationDelay = Math.random() * 5 + "s";
      container.appendChild(dot);
    }
  }, []);

  return (
    <>
      <style>
        {`
          .particle {
            position: absolute;
            width: 6px;
            height: 6px;
            background: #8f89ff;
            border-radius: 50%;
            opacity: 0.6;
            animation: float 6s infinite ease-in-out;
          }

          @keyframes float {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>

      <div
        id="particles"
        className="fixed inset-0 z-0 pointer-events-none"
      ></div>
    </>
  );
}
