import Pagination from "@components/Pagination";
import HomePage from "@components/Home";
import config from "@config/config.json";
import SeoMeta from "@layouts/partials/SeoMeta";
import { getSinglePage } from "@lib/contentParser";
import Posts from "@partials/Posts";
import Link from "next/link";
const { blog_folder } = config.settings;

// blog pagination
const BlogPagination = async ({ params }) => {
  const currentPage = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const posts = await getSinglePage(`content/${blog_folder}`);
  const authors = await getSinglePage("content/authors");
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Récupération du fichier accueil.md
  const allPages = await getSinglePage("content");
  const accueilPage = allPages.find((p) => p.slug === "accueil");

  return (
    <>
      <SeoMeta title="Blog Pagination" />
      <section className="section">
        <div className="container">
          <HomePage accueil={accueilPage} /> 
          {/* <Posts className="mb-16" posts={currentPosts} authors={authors} /> */}
          {/* <Pagination totalPages={totalPages} currentPage={currentPage} /> */}
          <div>
            <h1>
              Je suis là
            </h1>

            {/* { <h3 className="mb-2">
              <Link href={`/accueil`} className="block hover:text-primary">
                {accueilPage.frontmatter.title}
              </Link>
            </h3> } */}
          </div> 
        </div>
      </section>
    </>
  );
};

export default BlogPagination;

// get blog pagination slug
export async function generateStaticParams() {
  const posts = await getSinglePage(`content/${blog_folder}`);
  const { pagination } = config.settings;

  const totalPages = Math.ceil(posts.length / pagination);

  return Array.from({ length: totalPages }, (_, index) => ({
    slug: (index + 1).toString(),
  }));
}
