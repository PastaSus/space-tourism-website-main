import Link from "next/link";
import { notFound } from "next/navigation";
import data from "../../assets/data.json";
import Header from "@/app/components/Header";
export function generateStaticParams() {
  return data.technology.map((t) => ({ name: t.slug }));
}

export default async function TechnologyPage({ params }) {
  const { name } = await params;
  const tech = data.technology.find((t) => t.slug === name);
  if (!tech) notFound();

  const techIndex = data.technology.findIndex((t) => t.slug === name);

  return (
    <div className="min-h-screen bg-[url('/assets/technology/background-technology-mobile.jpg')] bg-cover bg-top-right bg-no-repeat md:bg-[url('/assets/technology/background-technology-tablet.jpg')] xl:bg-[url('/assets/technology/background-technology-desktop.jpg')]">
      <Header />
      <main className="technology">
        <section
          className="technology__panel text-center"
          aria-labelledby="technology-heading"
        >
          <h1
            className="technology__step mt-6 text-center font-[Barlow_condensed,_sans-serif] text-base tracking-[3px] uppercase md:mx-auto md:mt-9 md:max-w-175 md:text-start md:text-xl xl:mt-11 xl:max-w-280 xl:text-3xl"
            id="technology-heading"
          >
            <span
              className="technology__step-index font-bold text-gray-600"
              aria-hidden="true"
            >
              03
            </span>
            <span className="technology__step-label ml-3">
              Space launch 101
            </span>
          </h1>

          <article className="technology__member crew__member--active mt-14 grid [grid-template-areas:'image'_'content'] xl:ml-40 xl:max-w-320 xl:grid-cols-[1fr_auto] xl:gap-8 xl:text-start xl:[grid-template-areas:'content_image']">
            <div className="technology__image-container grid md:mt-5 xl:mt-0 xl:[grid-area:image]">
              <picture className="h-66 justify-self-center overflow-hidden md:h-full md:w-full md:overflow-visible">
                <source
                  srcSet={tech.images.portrait}
                  media="(min-width: 1440px)"
                  type="image/jpeg"
                />
                <source
                  srcSet={tech.images.landscape}
                  media="(min-width: 768px)"
                  type="image/jpeg"
                />
                <img
                  src={tech.images.portrait}
                  alt={tech.name}
                  className="technology__image -translate-y-28 md:mx-auto md:h-89 md:translate-y-0 xl:h-auto xl:min-w-152"
                />
              </picture>
            </div>

            <div className="mt-10 xl:mt-0 xl:flex xl:items-center xl:gap-16">
              <nav
                className="technology__nav"
                aria-label="technology pages navigation"
              >
                <ul className="technology__nav-list flex justify-center gap-4 font-[Bellefair,_sans-serif] xl:flex-col xl:gap-8">
                  {data.technology.map((t, i) => (
                    <li key={t.slug} className="technology__nav-item">
                      <Link
                        href={`/technology/${t.slug}`}
                        className={`technology__dot flex h-10 w-10 items-center justify-center rounded-full md:h-14 md:w-14 xl:h-20 xl:w-20 xl:text-4xl ${t.slug === name ? "active" : "text-white"}`}
                        aria-label={`Technology ${t.name}`}
                        aria-current={t.slug === name ? "page" : undefined}
                      >
                        {i + 1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <p className="mt-8 font-[Bellefair,_sans-serif] text-gray-500 uppercase md:text-2xl xl:mt-0 xl:text-[2rem]">
                  The terminology...
                </p>
                <h2 className="technology__title mt-4 font-[Bellefair,_sans-serif] text-2xl uppercase md:text-[2.5rem] xl:mt-2 xl:text-[3.5rem]">
                  {tech.name}
                </h2>
                <p className="technology__description mx-auto mt-5 h-36 max-w-86.5 text-base leading-[1.8] font-light md:mt-3 md:max-w-135 md:text-lg xl:h-40 xl:max-w-123">
                  {tech.description}
                </p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
