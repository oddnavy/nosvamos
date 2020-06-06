import "../styles/index.css";

import { CloudinaryContext } from "cloudinary-react";

export default function MyApp({ Component, pageProps }) {
  return (
    <CloudinaryContext
      cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
    >
      <Component {...pageProps} />
    </CloudinaryContext>
  );
}
