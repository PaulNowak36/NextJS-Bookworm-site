import { getSinglePage } from "@lib/contentParser";
import { MDXRemote } from "next-mdx-remote/rsc";

// Composants React utilisables dans les fichiers .mdx
import BackButton from "@layouts/shortcodes/BackButton";
import SousMenuButton from "@layouts/shortcodes/sousMenuButton";
import MenuButton2 from "@layouts/shortcodes/menuButton2";
import TeamMember from "@layouts/shortcodes/TeamMember";

const components = {
  BackButton,
  SousMenuButton,
  MenuButton2,
  TeamMember,
};

export default async function EquipeDetail({ params }) {
  const { slug } = params;

  // Charge les fichiers .md et .mdx dans content/equipe
  const pages = await getSinglePage("content/equipe");
  const page = pages.find((p) => p.slug === slug);

  if (!page) {
    return <div className="container py-10">Page introuvable</div>;
  }

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">
        {page.frontmatter.title}
      </h1>

      <div className="prose max-w-none">
        <MDXRemote source={page.content} components={components} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const pages = await getSinglePage("content/equipe");

  return pages.map((page) => ({
    slug: page.slug,
  }));
}