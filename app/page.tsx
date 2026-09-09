"use client";

import Image from "./components/SiteImage";
import StoreBadge from "./components/StoreBadge";
import FooterLinks from "./components/FooterLinks";
import { useEffect, useRef, useState } from "react";

const games = [
  {
    slug: "/puzzle-area",
    index: "01",
    name: "Puzzle Area",
    label: "ALAN BULMA BULMACASI",
    headline: "Sayıları takip et, doğru alanları bul.",
    copy: "Doğru büyüklükte kare ve dikdörtgen alanları seç, tahtayı renklendir ve katman katman ilerle. Öğretici başlangıçtan 11×12’ye uzanan yüzlerce bölümde yıldızlarını kazan.",
    accent: "#7b24d5",
    soft: "#f2eafd",
    image: "/games/puzzle-area/layers/8x8.jpeg",
    second: "/games/puzzle-area/levels.jpeg",
    promo: null,
    icon: null,
    playStore: "https://play.google.com/store/apps/details?id=com.gorsengames.puzzlearea",
    appStore: "https://apps.apple.com/us/app/puzzle-area/id6800594940",
    stats: ["1080 bölüm", "Android’de yayında", "iOS’ta yayında"],
  },
  {
    slug: "/block-puzzle-grid",
    index: "02",
    name: "Block Puzzle Grid",
    label: "PARÇA YERLEŞTİRME BULMACASI",
    headline: "Parçaları yerleştir, yeni katmanları aç.",
    copy: "Renkli parçaları çerçeveden al, doğru konumlara sürükle ve tabloyu boşluksuz tamamla. Büyüyen gridler, sabit parçalar, ipuçları ve bölüm ödülleriyle giderek stratejikleşen bir bulmaca deneyimi.",
    accent: "#191716",
    soft: "#f2ede5",
    image: "/games/puzzle-grid/layers/7x7.jpeg",
    second: "/games/puzzle-grid/levels.jpeg",
    promo: null,
    icon: null,
    playStore: "https://play.google.com/store/apps/details?id=com.gorsengames.puzzlegrid",
    appStore: "https://apps.apple.com/us/app/block-puzzle-grid/id6800597451",
    stats: ["850 bölüm", "Android’de yayında", "iOS’ta yayında"],
  },
  {
    slug: "/bloomshift",
    index: "03",
    name: "Bloomshift",
    label: "SAKİN RENK EŞLEŞTİRME BULMACASI",
    headline: "Dalgaları döndür, bahçeyi renklendir.",
    copy: "Bir 2×2 alandaki dört çiçeği sağa veya sola döndür, renkleri kendi bahçe hücreleriyle eşleştir. Isınma turundan 21 ana katmana uzanan 1.060 sakin bulmaca.",
    accent: "#145342",
    soft: "#edf3e9",
    image: "/games/v2/dalga-game.jpg",
    second: "/games/v2/bloomshift-levels.png",
    promo: null,
    icon: null,
    playStore: "https://play.google.com/store/apps/details?id=com.gorsengames.dalgabahcesi",
    appStore: "https://apps.apple.com/tr/app/bloomshift/id6800653408?l=tr",
    stats: ["1060 bölüm", "Android’de yayında", "iOS’ta yayında"],
  },
  {
    slug: "/petal-shift",
    index: "04",
    name: "Petal Shift",
    label: "BOTANİK KAYDIRMA BULMACASI",
    headline: "Slide. Match. Bloom.",
    copy: "Renkli çiçek taşlarını satır ve sütunlar halinde kaydır, doğru dizilimi bul ve bahçeyi çiçeklendir. Kolay öğrenilen, ilerledikçe daha stratejik hâle gelen sakin bir 2D bulmaca deneyimi.",
    accent: "#173f35",
    soft: "#f4e8ca",
    image: "/games/ruzgar-korusu/02-oynanis.jpg",
    second: "/games/ruzgar-korusu/01-ana-ekran.jpg",
    promo: null,
    icon: null,
    playStore: "https://play.google.com/store/apps/details?id=com.gorsengames.ruzgarkorusu&hl=tr",
    appStore: "https://apps.apple.com/us/app/petal-shift-bloom-puzzle/id6801522855",
    stats: ["610 bölüm", "Android’de yayında", "iOS’ta yayında"],
  },
  {
    slug: "/fudu-hex",
    index: "05",
    name: "Fudu Hex",
    label: "ALTIGEN SAYI BİRLEŞTİRME BULMACASI",
    headline: "Sayıları birleştir, hedefe ulaş.",
    copy: "Aynı değerdeki komşu altıgenleri bağla, daha güçlü sayılar oluştur ve giderek yükselen bölüm hedeflerine ulaş. Kolay öğrenilen sürükleme sistemi, her hamlede yeni bir stratejiye dönüşür.",
    accent: "#9d173b",
    soft: "#f8e8e2",
    image: "/games/fudu-hex/02-gameplay.png",
    second: "/games/fudu-hex/01-home.png",
    promo: null,
    icon: null,
    playStore: null,
    appStore: null,
    stats: ["Altı yönlü bağlantı", "Android yakında", "iOS yakında"],
  },
];

function CollectionStore({ platform, href }: { platform: "play" | "ios"; href: string | null }) {
  const name = platform === "play" ? "Google Play" : "App Store";
  return href ? (
    <a className={`collection-store ${platform}`} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} mağazasında aç`}>
      <StoreBadge platform={platform}/>
    </a>
  ) : (
    <span className={`collection-store ${platform} is-soon`} aria-label={`${name} için yakında`}>
      <StoreBadge platform={platform}/><b>Yakında</b>
    </span>
  );
}

export default function Home() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const activeRef = useRef(0);
  const game = games[active];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    document.querySelectorAll("[data-home-reveal]").forEach((node) => observer.observe(node));

    const sceneIndex = (selector: string) => {
      const scene = document.querySelector<HTMLElement>(selector);
      if (!scene) return null;
      const rect = scene.getBoundingClientRect();
      const travel = Math.max(1, scene.offsetHeight - window.innerHeight);
      const distance = -rect.top;
      if (distance < 0 || distance > travel) return null;
      return Math.min(games.length - 1, Math.floor((distance / travel) * games.length));
    };

    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? window.scrollY / height : 0);

      const next = sceneIndex(".studio-hero") ?? sceneIndex(".collection-scroll-scene");
      if (next !== null && next !== activeRef.current) {
        activeRef.current = next;
        setActive(next);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const chooseGame = (index: number) => {
    activeRef.current = index;
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
        <div className="studio-links"><a href="#games">Oyunlar</a><a href="/about">Hakkımızda</a><a href="/contact">İletişim</a></div>
        <a className="nav-cta" href="#games">Oyunları keşfet <span>↘</span></a>
      </nav>

      <header id="top" className="studio-hero">
        <div className="studio-hero-sticky">
        <div className="hero-copy" data-home-reveal>
          <div className="hero-brand-chip">
            <span><Image src="/gorsen-games-logo.png" alt="Görsen Games logosu" fill priority sizes="68px"/></span>
            <p><b>GÖRSEN GAMES</b><small>BAĞIMSIZ MOBİL OYUN STÜDYOSU · 2026</small></p>
          </div>
          <h1>Oyunlarımızı<br/><em>bir görsen…</em></h1>
          <p className="hero-lead"><strong>Düşünmenin en renkli hâlini keşfetsen.</strong> Görkem Şenol tarafından geliştirilen Görsen Games’in sade görünen, zekâyı nazikçe zorlayan mobil bulmaca dünyalarıyla tanış.</p>
          <div className="hero-actions">
            <a href="#games">Oyunları incele <span>↓</span></a>
            <span>Android ve iOS’ta</span>
          </div>
          <div className="hero-metrics">
            <span><b>5</b><small>özgün oyun</small></span>
            <span><b>3.600+</b><small>tasarlanmış bölüm</small></span>
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
                data-offset={index - active}
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
        </div>
      </header>

      <div className="studio-marquee" aria-hidden="true">
        <div><span>PUZZLE AREA</span><i/> <span>BLOCK PUZZLE GRID</span><i/> <span>BLOOMSHIFT</span><i/> <span>PETAL SHIFT</span><i/> <span>FUDU HEX</span><i/> <span>GÖRSEN GAMES</span><i/> <span>PUZZLE AREA</span><i/> <span>BLOCK PUZZLE GRID</span><i/> <span>BLOOMSHIFT</span><i/> <span>PETAL SHIFT</span><i/> <span>FUDU HEX</span><i/></div>
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
        <div className="section-heading" data-home-reveal><p>OYUN KOLEKSİYONU</p><h2>Beş farklı düşünme biçimi.</h2><span>05 OYUN</span></div>
        <div className="game-tabs" role="tablist">
          {games.map((item,index)=><button role="tab" aria-selected={active===index} onClick={()=>chooseGame(index)} className={active===index?"active":""} key={item.name}><span>{item.index}</span>{item.name}</button>)}
        </div>

        <div className="collection-scroll-scene">
        <article className="featured-game" key={game.name}>
          <div className="featured-copy">
            <p>{game.label}</p>
            <h3>{game.name}</h3>
            <h4>{game.headline}</h4>
            <p className="featured-text">{game.copy}</p>
            <div className="featured-stats">{game.stats.map(stat=><span key={stat}>{stat}</span>)}</div>
            <div className="collection-stores" aria-label={`${game.name} mağaza bağlantıları`}>
              <CollectionStore platform="play" href={game.playStore}/>
              <CollectionStore platform="ios" href={game.appStore}/>
            </div>
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
        </div>

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
        <p>ANDROID VE iOS OYUNLARI</p>
        <h2>Bir sonraki<br/>bulmacan hazır.</h2>
        <div className="home-contact-actions">
          <a href="mailto:info@gorsengames.com"><small>E-POSTA</small><b>info@gorsengames.com</b><span>↗</span></a>
          <a href="https://play.google.com/store/apps/developer?id=G%C3%B6rsen+Games" target="_blank" rel="noopener noreferrer"><StoreBadge platform="play"/><span>↗</span></a>
          <a href="https://apps.apple.com/tr/developer/gorkem-enol/id6800594942?l=tr" target="_blank" rel="noopener noreferrer"><StoreBadge platform="ios"/><span>↗</span></a>
        </div>
      </section>

      <footer className="studio-footer">
        <a className="studio-brand" href="#top"><span className="brand-logo"><Image src="/gorsen-games-logo.png" alt="" fill sizes="44px"/></span><span><b>GÖRSEN</b><small>GAMES</small></span></a>
        <p>Sade, renkli ve düşündürücü mobil oyunlar geliştiren bağımsız oyun stüdyosu.</p>
        <FooterLinks />
        <small>© 2026 Görsen Games. Tüm hakları saklıdır.</small>
      </footer>
    </main>
  );
}
