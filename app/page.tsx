"use client";

import Image from "./components/SiteImage";
import { useEffect, useState } from "react";

const games = [
  {
    slug: "/puzzle-area",
    index: "01",
    name: "Puzzle Area",
    label: "ALAN BULMA BULMACASI",
    headline: "Sayıları doğru alanlara al.",
    copy: "Her sayının tarif ettiği kare veya dikdörtgen alanı bul. 3×3’ten 12×10’a uzanan 1080 bölümde sınırları doğru çiz ve bütün tabloyu tamamla.",
    accent: "#7b24d5",
    soft: "#f2eafd",
    image: "/games/puzzle-area/layers/8x8.jpeg",
    second: "/games/puzzle-area/levels.jpeg",
    promo: null,
    icon: null,
    stats: ["1080 bölüm", "3×3 — 12×10", "Türkçe · English"],
  },
  {
    slug: "/puzzle-grid",
    index: "02",
    name: "Puzzle Grid",
    label: "PARÇA YERLEŞTİRME BULMACASI",
    headline: "Her parça doğru yerini bekliyor.",
    copy: "Renkli parçaları çerçeveden al, grid üzerinde doğru konuma sürükle ve tabloyu boşluksuz tamamla. Yumuşak renkler, akıcı kontrol ve giderek derinleşen strateji.",
    accent: "#191716",
    soft: "#f2ede5",
    image: "/games/puzzle-grid/layers/7x7.jpeg",
    second: "/games/puzzle-grid/levels.jpeg",
    promo: null,
    icon: null,
    stats: ["850 bölüm", "3×3 — 9×9", "Android · iOS yakında"],
  },
  {
    slug: "/dalga-bahcesi",
    index: "03",
    name: "Dalga Bahçesi",
    label: "SAKİN RENK EŞLEŞTİRME BULMACASI",
    headline: "Dalgaları döndür, bahçeyi renklendir.",
    copy: "Dört çiçeği tek dalgayla birlikte döndür, renkleri kendi bahçe alanlarıyla eşleştir. Yedi tahta düzeni ve üç zorluk modunda 1050 sakin bulmaca.",
    accent: "#145342",
    soft: "#edf3e9",
    image: "/games/v2/dalga-game.jpg",
    second: "/games/v2/dalga-home.jpg",
    promo: null,
    icon: null,
    stats: ["1050 bölüm", "7 tahta düzeni", "Kolay · Orta · Zor"],
  },
  {
    slug: "/ruzgar-korusu",
    index: "04",
    name: "Rüzgâr Korusu",
    label: "BOTANİK KAYDIRMA BULMACASI",
    headline: "Her esinti yeni bir yol açar.",
    copy: "Çiçeklerden oluşan satır ve sütunları kaydır, hedef bahçe desenini tamamla. 3×3’ten 6×8’e büyüyen 10 katmanda 500 sakin ve stratejik bulmaca.",
    accent: "#173f35",
    soft: "#f4e8ca",
    image: "/games/ruzgar-korusu/02-oynanis.jpg",
    second: "/games/ruzgar-korusu/01-ana-ekran.jpg",
    promo: null,
    icon: null,
    stats: ["500 bölüm", "10 bahçe katmanı", "3×3 — 6×8"],
  },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const game = games[active];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    document.querySelectorAll("[data-home-reveal]").forEach((node) => observer.observe(node));
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? window.scrollY / height : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % games.length), 5200);
    return () => window.clearInterval(timer);
  }, [paused]);

  const chooseGame = (index: number) => {
    setPaused(true);
    setActive(index);
  };

  return (
    <main className="studio-home" style={{ "--home-accent": game.accent, "--home-soft": game.soft } as React.CSSProperties}>
      <div className="home-progress" style={{ transform: `scaleX(${progress})` }}/>
      <nav className="studio-nav">
        <a className="studio-brand" href="#top" aria-label="Görsen Games ana sayfa">
          <span className="brand-logo"><Image src="/gorsen-games-logo.png" alt="" fill sizes="44px"/></span>
          <span><b>GÖRSEN</b><small>GAMES</small></span>
        </a>
        <div className="studio-links"><a href="#games">Oyunlar</a><a href="/hakkimizda">Hakkımızda</a><a href="#contact">İletişim</a></div>
        <a className="nav-cta" href="#games">Oyunları keşfet <span>↘</span></a>
      </nav>

      <header id="top" className="studio-hero">
        <div className="hero-copy" data-home-reveal>
          <div className="hero-brand-chip">
            <span><Image src="/gorsen-games-logo.png" alt="Görsen Games logosu" fill priority sizes="68px"/></span>
            <p><b>GÖRSEN GAMES</b><small>BAĞIMSIZ MOBİL OYUN STÜDYOSU · 2026</small></p>
          </div>
          <h1>Oyunlarımızı<br/><em>bir görsen…</em></h1>
          <p className="hero-lead"><strong>Düşünmenin en renkli hâlini keşfetsen.</strong> Görsen Games’in sade görünen, zekâyı nazikçe zorlayan mobil bulmaca dünyalarıyla tanış.</p>
          <div className="hero-actions">
            <a href="#games">Oyunları incele <span>↓</span></a>
            <span>Android için yakında</span>
          </div>
          <div className="hero-metrics">
            <span><b>4</b><small>özgün oyun</small></span>
            <span><b>3.480</b><small>tasarlanmış bölüm</small></span>
            <span><b>TR · EN</b><small>iki dil desteği</small></span>
          </div>
        </div>

        <div className="hero-showcase" data-home-reveal>
          <div className="showcase-halo"/>
          <Image className="showcase-logo-watermark" src="/gorsen-games-logo.png" alt="" width={240} height={240}/>
          <div className="phone-stack phone-stack-v2">
            {games.map((item, index) => (
              <button
                key={item.name}
                aria-label={`${item.name} oyununu göster`}
                onClick={() => chooseGame(index)}
                className={`home-phone phone-${index} ${active === index ? "active" : ""}`}
              >
                <Image src={item.image} alt={`${item.name} oynanış ekranı`} fill priority={index === 0} sizes="260px"/>
              </button>
            ))}
          </div>
          <div className="showcase-caption"><span>{game.index}</span><div><small>ŞİMDİ KEŞFET</small><b>{game.name}</b></div></div>
          <div className="game-dots">
            {games.map((item,index)=><button key={item.name} className={active===index?"active":""} onClick={()=>chooseGame(index)} aria-label={item.name}/>)}
          </div>
        </div>
      </header>

      <div className="studio-marquee" aria-hidden="true">
        <div><span>PUZZLE AREA</span><i/> <span>PUZZLE GRID</span><i/> <span>DALGA BAHÇESİ</span><i/> <span>RÜZGÂR KORUSU</span><i/> <span>GÖRSEN GAMES</span><i/> <span>PUZZLE AREA</span><i/> <span>PUZZLE GRID</span><i/> <span>DALGA BAHÇESİ</span><i/> <span>RÜZGÂR KORUSU</span><i/> <span>GÖRSEN GAMES</span><i/></div>
      </div>

      <section className="studio-statement" id="studio">
        <p data-home-reveal>GÖRSEN GAMES / TASARIM YAKLAŞIMI</p>
        <h2 data-home-reveal>Kolay öğrenilen mekanikler.<br/><span>Uzun süre akılda kalan dünyalar.</span></h2>
        <div data-home-reveal>
          <p>Gereksiz gürültüyü azaltıyor; dokunma hissine, okunabilirliğe ve iyi tasarlanmış bölümlere odaklanıyoruz. Her oyun kendi karakterini taşırken aynı kalite anlayışını paylaşır.</p>
          <span><b>01</b> Net mekanik</span><span><b>02</b> Özenli ilerleme</span><span><b>03</b> Sakin görsel dil</span>
        </div>
      </section>

      <section id="games" className="home-games">
        <div className="section-heading" data-home-reveal><p>OYUN KOLEKSİYONU</p><h2>Dört farklı düşünme biçimi.</h2><span>04 OYUN</span></div>
        <div className="game-tabs" role="tablist">
          {games.map((item,index)=><button role="tab" aria-selected={active===index} onClick={()=>chooseGame(index)} className={active===index?"active":""} key={item.name}><span>{item.index}</span>{item.name}</button>)}
        </div>

        <article className="featured-game" key={game.name}>
          <div className="featured-copy">
            <p>{game.label}</p>
            <h3>{game.name}</h3>
            <h4>{game.headline}</h4>
            <p className="featured-text">{game.copy}</p>
            <div className="featured-stats">{game.stats.map(stat=><span key={stat}>{stat}</span>)}</div>
            <a href={game.slug}>Oyunun dünyasını keşfet <span>↗</span></a>
          </div>
          <div className={`featured-visual ${game.promo ? "has-campaign" : ""}`}>
            <div className="visual-number">{game.index}</div>
            {game.promo
              ? <div className="home-campaign-card"><Image src={game.promo} alt={`${game.name} tanıtım tasarımı`} fill sizes="(max-width:620px) 82vw, 540px"/></div>
              : <div className="screen-card screen-main"><Image src={game.image} alt={`${game.name} oyun ekranı`} fill sizes="340px"/></div>}
            {game.icon && <span className="home-game-icon"><Image src={game.icon} alt={`${game.name} ikonu`} fill sizes="88px"/></span>}
            <div className="screen-card screen-secondary"><Image src={game.second} alt={`${game.name} ikinci oyun ekranı`} fill sizes="250px"/></div>
            <span className="play-note">TANITIM TASARIMI · GERÇEK OYUN EKRANI</span>
          </div>
        </article>

        <div className="game-index">
          {games.map((item,index)=>(
            <button onClick={()=>chooseGame(index)} className={active===index?"active":""} key={item.name}>
              <span>{item.index}</span><div><b>{item.name}</b><small>{item.label}</small></div><i>↗</i>
            </button>
          ))}
        </div>
      </section>

      <section className="studio-promise">
        <div data-home-reveal><p>OYUNLARIMIZDA</p><h2>Rekabetten önce<br/><span>iyi bir deneyim.</span></h2></div>
        <div className="promise-grid">
          <article data-home-reveal><b>01</b><h3>Kendi ritminde</h3><p>Kısa molalara uygun, baskı kurmayan ve her an yeniden dönebileceğin bölümler.</p></article>
          <article data-home-reveal><b>02</b><h3>Gerçek ilerleme</h3><p>Öğreten başlangıçlardan ustalık isteyen tablolara uzanan dengeli bir yolculuk.</p></article>
          <article data-home-reveal><b>03</b><h3>Herkes için</h3><p>Türkçe ve İngilizce destekli, mobil ve tablet ekranlarına uyumlu temiz arayüzler.</p></article>
        </div>
      </section>

      <section className="home-cta" id="contact" data-home-reveal>
        <p>YAKINDA GOOGLE PLAY’DE</p>
        <h2>Bir sonraki<br/>bulmacan hazır.</h2>
        <a href="#games">Oyunları keşfet <span>→</span></a>
      </section>

      <footer className="studio-footer">
        <a className="studio-brand" href="#top"><span className="brand-logo"><Image src="/gorsen-games-logo.png" alt="" fill sizes="44px"/></span><span><b>GÖRSEN</b><small>GAMES</small></span></a>
        <p>Sade, eğlenceli ve düşündürücü mobil oyunlar.</p>
        <div><a href="/hakkimizda">Hakkımızda</a><a href="/puzzle-area">Puzzle Area</a><a href="/puzzle-grid">Puzzle Grid</a><a href="/dalga-bahcesi">Dalga Bahçesi</a><a href="/ruzgar-korusu">Rüzgâr Korusu</a><a href="/privacy-policy">Gizlilik</a><a href="/terms">Koşullar</a></div>
        <small>© 2026 Görsen Games. Tüm hakları saklıdır.</small>
      </footer>
    </main>
  );
}
