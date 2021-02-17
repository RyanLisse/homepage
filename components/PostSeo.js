import { ArticleJsonLd, NextSeo } from 'next-seo'
import { urlFor } from 'lib/sanity'

const PostSeo = ({ data }) => {
  const { mainImage, summary, title, publishedAt, category, slug, tags } = data
  const url = `https://ryanlisse.com/${category}/${slug.current}`
  const date = new Date(publishedAt).toISOString()
  const seoImages = mainImage?.asset
    ? [
        {
          url: urlFor(mainImage).width(1200).height(628).url(),
          width: 1200,
          height: 628,
          alt: mainImage.alt,
        },
      ]
    : [
      ]
  return (
    <>
      <NextSeo
        title={`${title} - by Ryan Lisse`}
        description={summary}
        canonical={url}
        openGraph={{
          title: `${title} - by Ryan Lisse`,
          type: "article",
          description: summary,
          url,
          article: {
            publishedTime: date,
            modifiedTime: date,
            tags: tags,
          },
          images: seoImages,
        }}
      />
      <ArticleJsonLd
        authorName="Ryan Lisse"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[seoImages[0]?.url]}
        publisherLogo=""
        publisherName="Ryan Lisse"
        title={`${title} - by Ryan Lisse`}
        url={url}
      />
    </>
  );
}

export default PostSeo
