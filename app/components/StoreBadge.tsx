type StoreBadgeProps = {
  platform: "play" | "ios";
  className?: string;
};

const BADGES = {
  play: {
    src: "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",
    alt: "Get it on Google Play",
    width: 194,
    height: 75,
  },
  ios: {
    src: "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83",
    alt: "Download on the App Store",
    width: 250,
    height: 83,
  },
};

export default function StoreBadge({ platform, className = "" }: StoreBadgeProps) {
  const badge = BADGES[platform];
  return <img className={`official-store-badge ${className}`.trim()} src={badge.src} alt={badge.alt} width={badge.width} height={badge.height} loading="lazy" />;
}
