import DateFormatter from './date-formatter'

export default function PostMeta({ date, location }) {
  return (
    <div className="text-center md:text-left md:flex md-flex-wrap md:text-lg leading-tight text-gray-500">
      <DateFormatter dateString={date} />
      {location && (
        <>
          <div className="mx-3">—</div>
          <div>{location}</div>
        </>
      )}
    </div>
  )
}
