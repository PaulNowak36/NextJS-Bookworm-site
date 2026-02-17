import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";
import withBasePath from "@lib/utils/basePath";

const Logo = ({ src }) => {
  const { logo, logo_width, logo_height, logo_text, title } = config.site;

  // 1) Choix de la source : prop src > config.logo
  const rawSrc = src || logo;

  // 2) Appliquer le basePath si besoin (dev: "", prod: "/NextJS-Bookworm-site")
  const finalSrc = rawSrc ? withBasePath(rawSrc) : null;

  const w = Number(String(logo_width).replace("px", "")) * 2;
  const h = Number(String(logo_height).replace("px", "")) * 2;

  return (
    <Link href="/" className="navbar-brand block">
      {finalSrc ? (
        <Image
          src={finalSrc}
          width={w}
          height={h}
          alt={title}
          priority
          unoptimized
          style={{
            height: `${String(logo_height).replace("px", "")}px`,
            width: `${String(logo_width).replace("px", "")}px`,
          }}
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;