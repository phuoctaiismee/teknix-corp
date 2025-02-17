import { getListNews, getPostBySlug } from "@/actions/news";
import { API_URL, META_DATA, WEBSITE_HOST_URL } from "@/configs";
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

export async function generateMetadata(
  { params }: NewDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug, locale } = await params;

  const parentMetadata = await parent;
  const article = await getPostBySlug(slug);

  if (!article) {
    notFound();
    return {};
  }

  const articleTitle = article.title || parentMetadata.title;
  const articleDescription = article.excerpt || parentMetadata.description;
  const featuredImage = article.feature_image || "/thumbnail.png";

  return {
    title: articleTitle || META_DATA.title || undefined,
    description: articleDescription || META_DATA.description || undefined,
    openGraph: {
      images: [featuredImage],
      title: articleTitle || META_DATA.title || undefined,
      description: articleDescription || META_DATA.description || undefined,
      url: `${WEBSITE_HOST_URL}/${locale}/news/${slug}`,
      locale,
      siteName: META_DATA.title,
      type: "article",
    },
    alternates: {
      canonical: `${WEBSITE_HOST_URL}/${locale}/news/${slug}`,
    },
    twitter: {
      title: articleTitle || META_DATA.title || undefined,
      description: articleDescription || META_DATA.description || undefined,
      images: [featuredImage],
      card: "summary_large_image",
    },
  };
}

export async function generateStaticParams() {
    const locales = ["en", "vi"]; // Danh sách locale
    const uids = ["news"]; // Danh sách uid (trong trường hợp này chỉ có "news")
  
    try {
      const res = await getListNews();
  
      if (!Array.isArray(res)) {
        console.error("API response is not an array:", res);
        return [];
      }
  
      return res.flatMap((article: Post) =>
        locales.flatMap((locale) =>
          uids.map((uid) => ({
            locale,
            uid,
            slug: article.slug,
          }))
        )
      );
    } catch (error) {
      console.error("Error fetching articles:", error);
      return [];
    }
  }
  

const NewDetailPage = async ({ params }: NewDetailPageProps) => {
  const { locale, slug } = await params;

  return <NewDetailFeatures slug={slug} locale={locale} />;
};

export default NewDetailPage;
