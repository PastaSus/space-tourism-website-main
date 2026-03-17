import Link from "next/link";
import { notFound } from "next/navigation";
import data from "../../assets/data.json";
import Header from "@/app/components/Header";

export function generateStaticParams() {
  return data.destinations.map((d) => ({ name: d.slug }));
}

export default async function DestinationPage({ params }) {
  const { name } = await params;
  const destination = data.destinations.find((d) => d.slug === name);
  if (!destination) notFound();

  return (
    <div className="min-h-screen bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-cover bg-left bg-no-repeat md:bg-[url('/assets/destination/background-destination-tablet.jpg')] xl:bg-[url('/assets/destination/background-destination-desktop.jpg')]">
      <Header />
      <main className="destination">
        <h1 className="destination__step mt-6 text-center font-[Barlow_condensed,_sans-serif] text-base tracking-[3px] uppercase md:mx-auto md:mt-9 md:max-w-175 md:text-start md:text-xl xl:mt-11 xl:max-w-280 xl:text-3xl">
          <span
            className="destination__step-index font-bold text-gray-600"
            aria-hidden="true"
          >
            01
          </span>
          <span className="destination__step-label ml-3">
            Pick your destination
          </span>
        </h1>

        <div className="grid [grid-template-areas:'header'_'main'] xl:mx-auto xl:mt-40 xl:max-w-280 xl:grid-cols-2 xl:gap-8 xl:[grid-template-areas:'header_main']">
          <div className="destination__image-container mt-14 grid md:mt-16 xl:mt-0">
            <picture className="justify-self-center">
              <source srcSet={destination.images.webp} type="image/webp" />
              <img
                src={destination.images.png}
                alt={destination.name}
                className="destination__image max-w-38 md:max-w-75 xl:min-w-120"
              />
            </picture>
          </div>

          <div className="mt-14 md:mt-20 xl:mx-auto xl:mt-0 xl:max-w-111">
            <nav
              className="destination__nav flex justify-center xl:justify-start"
              aria-label="Destination navigation"
            >
              <ul className="destination_nav-list flex gap-8 font-[Barlow_condensed,_sans-serif] text-base font-light tracking-[2px] uppercase">
                {data.destinations.map((d) => (
                  <li key={d.slug} className="destination_nav-item">
                    <Link
                      href={`/destination/${d.slug}`}
                      className={`destination__tab relative pb-4 ${d.slug === name ? "active pointer-events-none" : ""}`}
                      aria-current={d.slug === name ? "page" : undefined}
                    >
                      {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <article className="destination__panel mt-10 text-center md:mt-12 xl:text-start">
              <h2 className="destination__title font-[Bellefair,_sans-serif] text-6xl uppercase md:text-[5rem] xl:text-8xl">
                {destination.name}
              </h2>
              <p className="destination__description mx-auto mt-5 h-36 max-w-81 text-base leading-[1.8] font-light md:h-auto md:max-w-127 xl:max-w-max xl:text-lg">
                {destination.description}
              </p>
              <div className="destination__stats mx-auto my-6 max-w-84 border-t border-t-gray-600 pt-6 md:grid md:max-w-128 md:grid-cols-2 md:items-center xl:mt-10 xl:max-w-none xl:pt-10">
                <div className="destination__stat">
                  <h3 className="destination__stat-label font-[Barlow_condensed,_sans-serif] text-sm font-light tracking-[2px] uppercase">
                    Avg. Distance
                  </h3>
                  <p className="destination__stat-value mt-2 font-[Bellefair,_sans-serif] text-3xl uppercase">
                    {destination.distance}
                  </p>
                </div>
                <div className="destination__stat mt-6 md:mt-0">
                  <h3 className="destination__stat-label font-[Barlow_condensed,_sans-serif] text-sm font-light tracking-[2px] uppercase">
                    Est. Travel Time
                  </h3>
                  <p className="destination__stat-value mt-2 font-[Bellefair,_sans-serif] text-3xl uppercase">
                    {destination.travel}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
