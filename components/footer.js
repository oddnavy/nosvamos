import Container from './container'

export default function Footer() {
  return (
    <footer className="py-20 bg-gray-50 border-t border-gray-200 text-gray-600 text-center">
      <Container>
        Built by{' '}
        <a className="text-black font-medium" href="https://www.dpike.co.uk">
          Dave
        </a>
      </Container>
    </footer>
  )
}
