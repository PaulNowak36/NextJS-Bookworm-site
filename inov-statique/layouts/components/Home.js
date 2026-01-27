import React from "react";

import { getSinglePage } from "@lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";

const HomePage = ({ accueil }) => {
  return (
    <div>CHORIZO</div>
    // <div>
    // <h3 className="mb-2">{accueil.frontmatter.title}</h3>

    // <div
    //     className="prose"
    //     dangerouslySetInnerHTML={{
    //         __html: markdownify(accueil.content),
    //     }}
    //     />
    // </div>

  )
}

export default HomePage;


// 👉 Chargement du Markdown côté build (statique)
export async function getStaticProps() {
  const pages = await getSinglePage("content");
  const accueil = pages.find((p) => p.slug === "accueil");

  return {
    props: {
      accueil,
    },
  };
}
