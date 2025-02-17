import { getListNews, getPostBySlug } from "@/actions/news";
import { META_DATA, WEBSITE_HOST_URL } from "@/configs";
import NewDetailFeatures from "@/features/new-detail";
import { Post } from "@/stores/features/news";
import { Metadata } from "next";
import { ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
interface NewDetailPageProps {
  params: Promise<{
    locale: string;
    uid: string;
    slug: string;
  }>;
}
const NewDetailPage = async ({ params }: NewDetailPageProps) => {
  const { locale, uid, slug } = await params;

  return <NewDetailFeatures slug={slug} locale={locale} />;
};

export default NewDetailPage;

export async function generateMetadata(
  { params }: NewDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug, locale } = await params;

  const article = await getPostBySlug(slug);

  if (!article) {
    notFound();
  }
  const articleTitle = article?.title || META_DATA.title;
  const articleDescription = article?.excerpt || META_DATA.description;

  const featuredImage = article?.feature_image || "/thumbnail.png";

  return {
    title: articleTitle || META_DATA.title,
    description: articleDescription || META_DATA.description,
    openGraph: {
      images: [featuredImage],
      title: articleTitle,
      description: articleDescription,
      url: `${WEBSITE_HOST_URL}/${locale}/news/${slug}`,
      locale: locale,
      siteName: META_DATA.title,
      type: "article",
    },
    alternates: {
      canonical: `${WEBSITE_HOST_URL}/${locale}/news/${slug}`,
    },
    twitter: {
      title: articleTitle,
      description: articleDescription,
      images: [featuredImage],
      card: "summary_large_image",
    },
  };
}

export async function generateStaticParams() {
  try {
    const res = await getListNews();

    if (!Array.isArray(res)) {
      console.error("Invalid API response:", res);
      return [];
    }
    return res.map((article: Post) =>
      article?.slug
        ? {
            slug: article.slug,
          }
        : null
    );
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}
