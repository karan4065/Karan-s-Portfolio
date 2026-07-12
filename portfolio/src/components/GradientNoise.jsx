export default function GradientNoise() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#120f2e] to-black animate-gradient" />

      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-gradient {
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
          }
        `}
      </style>
    </div>
  );
}
