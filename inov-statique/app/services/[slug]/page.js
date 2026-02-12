import { getSinglePage } from "@lib/contentParser";
import { MDXRemote } from "next-mdx-remote/rsc";

// Composants React utilisables dans les fichiers .mdx
import BackButton from "@layouts/shortcodes/BackButton";
import SousMenuButton from "@layouts/shortcodes/sousMenuButton";
import MenuButton2 from "@layouts/shortcodes/menuButton2";

const components = {
  BackButton,
  SousMenuButton,
  MenuButton2,
};



export default async function ServiceDetail({ params }) {
  const { slug } = params;

  const pages = await getSinglePage("content/services");
  const page = pages.find((p) => p.slug === slug);

  if (!page) {
    return <div className="container py-10">Page introuvable</div>;
  }

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">{page.frontmatter.title}</h1>

      <div className="prose max-w-none">
        <MDXRemote source={page.content} components={components} />
      </div>
    </div>
  );
}