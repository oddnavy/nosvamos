export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="prose lg:prose-xl prose-a:text-[#333] prose-a:hover:text-orange-600 text-[#333]"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
