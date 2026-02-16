import { getSinglePage } from "@lib/contentParser";
import { marked } from "marked";
import AboutLayout from "@layouts/About";
import DefaultLayout from "@layouts/Default";

export default async function ServicesPage() {
  const pages = await getSinglePage("content");
  const service = pages.find((p) => p.slug === "services");

  const { frontmatter, content } = service;
  const { layout, image, title } = frontmatter;

  // Sélection dynamique du layout
  const Layout = layout === "about" ? AboutLayout : DefaultLayout;

  return (
     <Layout data={service}>
      {/* Hero avec image */}
      {image && (
        <div
          className="w-full h-64 bg-cover bg-center mb-10"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="h-full w-full bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">{title}</h1>
          </div>
        </div>
      )}

      {/* Contenu Markdown */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: marked(content),
        }}
      />
    </Layout>
  );
}