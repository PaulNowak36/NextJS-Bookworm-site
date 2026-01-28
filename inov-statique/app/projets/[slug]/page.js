import { getSinglePage } from "@lib/contentParser";
import { marked } from "marked";

export default async function ProjetsDetail({ params }) {
  const { slug } = params;

  const pages = await getSinglePage("content/projets");
  const page = pages.find((p) => p.slug === slug);

  if (!page) {
    return <div className="container py-10">Page introuvable</div>;
  }

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">{page.frontmatter.title}</h1>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: marked(page.content),
        }}
      />
    </div>
  );
}