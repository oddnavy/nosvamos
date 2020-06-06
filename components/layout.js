import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen antialiased">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
