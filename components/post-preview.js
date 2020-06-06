import DateFormatter from "../components/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  coverImage,
  date,
  excerpt,
  location,
  slug,
  title,
}) {
  return (
    <article className="mb-32">
      <div className="mb-8">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="mb-4 text-4xl lg:text-6xl leading-tight font-semibold">
        <Link href="/posts/[slug]" as={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="mb-4 flex flex-wrap md:text-lg leading-tight text-gray-500">
        <DateFormatter dateString={date} />
        {location?.title && (
          <>
            <div className="mx-3">—</div>
            <div>{location.title}</div>
          </>
        )}
      </div>
      {excerpt && <p className="text-lg leading-relaxed mb-4">{excerpt}</p>}
      <p className="mt-8 md:text-lg">
        <Link href="/posts/[slug]" as={`/posts/${slug}`}>
          <a className="group transition-all duration-100 hover:text-orange-600">
            Read post
            <span className="inline-block ml-1 transition-transform duration-100 transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </Link>
      </p>
    </article>
  );
}
