export default function MapBlock() {
  return (
    <div className="map-wrap">
      <iframe
        title="Trinity Wraps location in Vijayawada"
        src="https://www.google.com/maps?q=Trinity%20Wraps%20Vijayawada%20BRTS%20Road&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="map-badge">TRINITY WRAPS · VIJAYAWADA</div>
    </div>
  );
}
