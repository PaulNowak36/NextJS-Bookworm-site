import React from "react";

import { markdownify } from "@lib/utils/textConverter";

const HomePage = ({ accueil }) => {
  return (
    // <div>CHORIZO</div>
    <div>
        {/* <h3 className="mb-2">{accueil.frontmatter.title}</h3> */}

        <div
            className="prose"
            dangerouslySetInnerHTML={{
                __html: markdownify(accueil.content),
            }}
            />
    </div>

  )
}

export default HomePage;

