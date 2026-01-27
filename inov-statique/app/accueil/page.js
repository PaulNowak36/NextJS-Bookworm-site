import { getSinglePage } from "@lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";
import { marked } from "marked";
import AboutLayout from "@layouts/About";
import DefaultLayout from "@layouts/Default";

export default async function AccueilPage() {
  const pages = await getSinglePage("content");
  const accueil = pages.find((p) => p.slug === "accueil");

  const { frontmatter, content } = accueil;
  const { layout, image, title } = frontmatter;

  // Sélection dynamique du layout
  const Layout = layout === "about" ? AboutLayout : DefaultLayout;
  
  return (

    <Layout data={accueil}>
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

    
    // <div className="container py-10">
    //   <h1 className="text-4xl font-bold mb-6">
    //     {accueil.frontmatter.title}
    //   </h1>

    //   <div
    //     className="prose"
    //     dangerouslySetInnerHTML={{
    //       __html: marked(accueil.content),
    //     }}
    //   />
    // </div>
  );
}