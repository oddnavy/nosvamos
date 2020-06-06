import { SITE_NAME } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex flex-col items-center my-12 lg:my-16">
      <h1 className="text-center text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
        {SITE_NAME}.
      </h1>
      <h2 className="mt-5 lg:ml-3/12 lg:w-6/12 text-center text-gray-500 md:text-lg">
        A sporadic documentation of our journey through some of the most
        fascinating sights, sounds, and smells in the world. With love Darman x
      </h2>
    </section>
  );
}
