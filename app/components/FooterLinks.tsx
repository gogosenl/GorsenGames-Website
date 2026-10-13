export default function FooterLinks() {
  return (
    <div className="footer-links">
      <div className="footer-column" role="navigation" aria-label="Oyun bağlantıları">
        <b>Oyunlar</b>
        <a href="/puzzle-area">Puzzle Area</a>
        <a href="/block-puzzle-grid">Block Puzzle Grid</a>
        <a href="/bloomshift">Bloomshift</a>
        <a href="/petal-shift">Petal Shift</a>
        <a href="/fudu-hex">Fudu Hex</a>
        <a href="/liva-lights">Liva Lights</a>
      </div>
      <div className="footer-column" role="navigation" aria-label="Görsen Games bağlantıları">
        <b>Görsen Games</b>
        <a href="/about">Hakkımızda</a>
        <a href="/contact">İletişim</a>
        <a href="/privacy-policy">Gizlilik Politikası</a>
        <a href="/terms">Kullanım Şartları</a>
      </div>
    </div>
  );
}
