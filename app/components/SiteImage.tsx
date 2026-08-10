import Image, { type ImageProps } from "next/image";

/** Serve bundled artwork directly so every route works in local and edge builds. */
export default function SiteImage(props: ImageProps) {
  return <Image {...props} unoptimized />;
}
