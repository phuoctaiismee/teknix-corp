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
  const resolvedParams = await params;
  const { locale, slug } = resolvedParams;

  return <NewDetailFeatures slug={slug} locale={locale} />;
};

export default NewDetailPage;

export async function generateMetadata(
  { params }: NewDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params; // ✅ Giải quyết Promise
  const { slug, locale } = resolvedParams; // ✅ Lấy locale từ route

  const parentMetadata = await parent;
  const article = await getPostBySlug(slug); // ✅ Fetch không cache

  if (!article) {
    return notFound();
  }

  const articleTitle = article.title || parentMetadata.title;
  const articleDescription = article.excerpt || parentMetadata.description;
  const featuredImage = article.feature_image || "/thumbnail.png";

  return {
    title: articleTitle || META_DATA.title || undefined, // ✅ Không để null
    description: articleDescription || META_DATA.description || undefined,
    openGraph: {
      images: [featuredImage],
      title: articleTitle || META_DATA.title || undefined, // ✅ Fix lỗi type
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
      title: articleTitle || META_DATA.title || undefined, // ✅ Fix lỗi
      description: articleDescription || META_DATA.description || undefined,
      images: [featuredImage],
      card: "summary_large_image",
    },
  };
}

export async function generateStaticParams({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params; // ✅ Giải quyết Promise
  const { locale } = resolvedParams; // ✅ Lấy locale từ route

  try {
    const res = await getListNews(); // ✅ Tránh lỗi dữ liệu cũ

    if (!Array.isArray(res)) {
      console.error("Invalid API response:", res);
      return [];
    }

    return res
      .filter((article: Post) => article?.slug) // ✅ Lọc bài hợp lệ
      .map((article: Post) => ({
        slug: article.slug,
        locale, // ✅ Lấy locale từ route, không từ API
      }));
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}
