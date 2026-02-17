import Social from "@components/Social";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import MDXContent from "./partials/MDXContent";


function withBasePath(path) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (!path || /^(https?:|data:|blob:)/.test(path)) return path;

  if (path.startsWith("/") && basePath) {
    if (path.startsWith(basePath + "/") || path === basePath) return path;
    return `${basePath}${path}`;
  }

  return path;
}


const About = ({ data }) => {
  const { frontmatter, content } = data;
  const { title, image, social } = frontmatter;

  const imageSrc = image ? withBasePath(image) : null;

  return (
    <section className="section">
      <div className="container text-center">
        {imageSrc && (
          <div className="img-cover mb-8">
            <Image
              src={imageSrc}
              width={920}
              height={515}
              alt={title}
              className="rounded-lg"
            />
          </div>
        )}
        {markdownify(title, "h1", "h2")}
        <Social source={social} className="social-icons-simple my-8" />

        <div className="content">
          <MDXContent content={content} />
        </div>
      </div>
    </section>
  );
};

export default About;
