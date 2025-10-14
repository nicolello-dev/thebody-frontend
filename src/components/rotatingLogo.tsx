export function RotatingLogo() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: "-9999",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: 1200,
        }}
      >
        <div
          style={{
            width: 560, // aumentato in Home
            height: 560,
            position: "relative",
            transformStyle: "preserve-3d",
            animation: "tars-rotate 8s linear infinite",
            filter: "brightness(1.15) contrast(1.1)",
          }}
        >
          <img
            src="/tarsdark.png"
            alt="TARS"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              opacity: 1,
              filter: "none",
              transform: "translateZ(10px)",
            }}
          />
        </div>
      </div>

      {/* keyframes locali per rotazione 3D */}
      <style>
        {`
          @keyframes tars-rotate {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(360deg); }
          }
        `}
      </style>
    </>
  );
}
