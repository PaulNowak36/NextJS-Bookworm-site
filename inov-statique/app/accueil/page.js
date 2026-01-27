import { getSinglePage } from "@lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";
import { marked } from "marked";


export default async function AccueilPage() {
  const pages = await getSinglePage("content");
  const accueil = pages.find((p) => p.slug === "accueil");
  console.log("ACCUEIL =", accueil); // ← ICI


  return (
    
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">
        {accueil.frontmatter.title}
      </h1>

      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html: marked(accueil.content),
        }}
      />
    </div>
  );
}