import { getPosts } from "../get-posts";
import renderToStaticMarkup from "../render-to-static-markup";
import MobileNav from "../MobileNav";
import Link from "next/link";
import Article from "./Article";

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: { slug: string[] } }) {
  const [category, slug] = params.slug;

  const page = (await getPosts()).find((post) => post.meta.category.slug === category && post.meta.slug === slug);
  if (!page) return void console.warn("No page found for slug", params.slug);

  return {
    title: `${page.meta.title} · Reindeer`,
    description: page.meta.description,
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map(({ meta }) => {
    return {
      slug: [meta.category.slug, meta.slug],
    };
  });
}

export default async function DocsPage({ params }: { params: { slug: string[] } }) {
  const [category, slug] = params.slug;

  const pages = await getPosts();
  const page = pages.find((post) => post.meta.category.slug === category && post.meta.slug === slug);
  if (!page) throw new Error("Post not found");

  const pagesTree = [...new Set(pages.map((p) => p.meta.category.slug))].map((slug) => ({
    category: pages.find((p) => p.meta.category.slug === slug)!.meta.category,
    pages: pages.filter((p) => p.meta.category.slug === slug),
  }));

  const staticMarkup = await renderToStaticMarkup(<>{page.html}</>);

  const isActive = (meta: typeof page.meta) =>
    meta.slug === page.meta.slug && meta.category.slug === page.meta.category.slug;

  return (
    <>
      <MobileNav page={page} pagesTree={pagesTree} />
      <div className="mx-4 mt-8 flex justify-center">
        <div className="flex w-full max-w-7xl justify-center lg:justify-normal">
          <nav className="sticky top-20 hidden max-h-screen w-72 overflow-x-hidden overflow-y-scroll px-2 py-5 lg:block">
            {pagesTree.map(({ category, pages }) => (
              <div key={category.name} className="mb-8">
                <h1 className="mb-3 cursor-text font-semibold text-slate-300">{category.name}</h1>
                <ul className="-ml-px space-y-2 border-l border-slate-700">
                  {pages.map(({ meta }) => (
                    <li
                      key={meta.slug}
                      className={`-ml-px border-l pl-4 text-sm ${
                        isActive(meta)
                          ? "border-red-700 font-medium text-red-600 hover:border-red-500"
                          : "border-slate-700 hover:border-slate-500 hover:text-slate-300"
                      }`}
                    >
                      <Link href={`/docs/${category.slug}/${meta.slug}`}>{meta.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <main className="mt-5 w-full max-w-prose lg:ml-12">
            <h2 className="font-medium text-red-500">{page.meta.category.name}</h2>
            <h1 className="mb-1 text-3xl font-bold text-slate-300">{page.meta.title}</h1>
            <h3 className="mb-3 text-lg">{page.meta.description}</h3>
            <div className="prose prose-invert prose-hr:mt-4">
              <hr />
            </div>
            <Article staticMarkup={staticMarkup} />
          </main>
        </div>
      </div>
    </>
  );
}
