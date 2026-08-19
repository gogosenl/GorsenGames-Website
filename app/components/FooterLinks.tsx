export default function FooterLinks() {
  return (
    <div className="footer-links">
      <nav aria-label="Oyun bağlantıları">
        <b>Oyunlar</b>
        <a href="/puzzle-area">Puzzle Area</a>
        <a href="/block-puzzle-grid">Block Puzzle Grid</a>
        <a href="/bloomshift">BloomShift</a>
        <a href="/petal-shift">Petal Shift</a>
      </nav>
      <nav aria-label="Görsen Games bağlantıları">
        <b>Görsen Games</b>
        <a href="/about">Hakkımızda</a>
        <a href="/contact">İletişim</a>
        <a href="/privacy-policy">Gizlilik Politikası</a>
        <a href="/terms">Kullanım Şartları</a>
      </nav>
    </div>
  );
}
