import Link from 'next/link'
import Container from './container'

export default function Pagination({ prevPage, nextPage }) {
  return (
    <div className="py-4 border-t border-gray-200">
      <Container>
        <ul className="flex justify-between text-xl">
          <li>
            {prevPage ? (
              <Link href={prevPage === 1 ? '/' : `/page/${prevPage}`}>
                <a className="block py-4 group transition-all duration-100 hover:text-orange-600">
                  <span className="inline-block ml-1 transition-transform duration-100 transform group-hover:-translate-x-1">
                    ←
                  </span>
                  Previous
                </a>
              </Link>
            ) : (
              <span className="block py-4 text-gray-500">
                <span className="mr-1">←</span> Previous
              </span>
            )}
          </li>
          <li>
            {nextPage ? (
              <Link href={`/page/${nextPage}`}>
                <a className="block py-4 group transition-all duration-100 hover:text-orange-600">
                  Next
                  <span className="inline-block ml-1 transition-transform duration-100 transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </Link>
            ) : (
              <span className="block py-4 text-gray-500">
                Next
                <span className="ml-1">→</span>
              </span>
            )}
          </li>
        </ul>
      </Container>
    </div>
  )
}
