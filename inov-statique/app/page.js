// import BlogPagination, { generateStaticParams } from "./page/[slug]/page";
// export { generateStaticParams };
// export default BlogPagination;

import AccueilPage from "./accueil/page";

export default function Home() {
  return <AccueilPage />;
}