import Link from "next/link";
import { notFound } from "next/navigation";
import data from "../../assets/data.json";
import Header from "@/app/components/Header";

export function generateStaticParams() {
  return data.crew.map((c) => ({ name: c.slug }));
}

export default async function CrewPage({ params }) {
  const { name } = await params;
  const member = data.crew.find((c) => c.slug === name);
  if (!member) notFound();

  return (
    <div className="min-h-screen bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-cover bg-left bg-no-repeat md:bg-[url('/assets/crew/background-crew-tablet.jpg')] xl:bg-[url('/assets/crew/background-crew-desktop.jpg')]">
      <Header />
      <main className="crew">
        <section
          className="crew__panel text-center"
          aria-labelledby="crew-heading"
        >
          <h1
            className="crew__step mt-6 text-center font-[Barlow_condensed,_sans-serif] text-base tracking-[3px] uppercase md:mx-auto md:mt-9 md:max-w-175 md:text-start md:text-xl xl:mt-11 xl:max-w-280 xl:text-3xl"
            id="crew-heading"
          >
            <span
              className="crew__step-index font-bold text-gray-600"
              aria-hidden="true"
            >
              02
            </span>
            <span className="crew__step-label ml-3">Meet your crew</span>
          </h1>

          <article className="crew__member crew__member--active mt-14 grid [grid-template-areas:'content'_'image'] xl:mx-auto xl:max-w-280 xl:grid-cols-2 xl:gap-10 xl:text-start xl:[grid-template-areas:'content_image']">
            <div className="xl:mt-42">
              <header>
                <p className="crew__role font-[Bellefair,_sans-serif] text-gray-500 uppercase md:text-2xl xl:text-[2rem]">
                  {member.role}
                </p>
                <h2 className="crew__title mt-1 font-[Bellefair,_sans-serif] text-2xl uppercase md:mt-3 md:text-[2.5rem] xl:text-[3.5rem]">
                  {member.name}
                </h2>
              </header>
              <p className="crew__description mx-auto mt-5 min-h-36 max-w-86 text-base leading-[1.8] font-light md:max-w-125 xl:mx-0 xl:max-w-133 xl:text-lg">
                {member.bio}
              </p>

              <nav
                className={`crew__nav mt-10 md:mt-0 ${
                  member.slug === "specialist" ? "xl:mt-11.5" : "xl:mt-30"
                }`}
                aria-label="Crew member navigation"
              >
                <ul className="crew__nav-list flex justify-center gap-4 xl:justify-start xl:gap-10">
                  {data.crew.map((c) => (
                    <li key={c.slug} className="crew__nav-item">
                      <Link
                        href={`/crew/${c.slug}`}
                        className={`crew__dot inline-block h-2.5 w-2.5 rounded-full bg-white xl:h-[0.94rem] xl:w-[0.94rem] ${c.slug === name ? "active pointer-events-none" : ""}`}
                        aria-label={c.name}
                        aria-current={c.slug === name ? "page" : undefined}
                      />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="crew__image-container mt-8 grid overflow-y-hidden md:mt-0">
              <picture className="crew__picture fade-overlay relative justify-self-center md:translate-y-12 xl:translate-y-0">
                <source srcSet={member.images.webp} type="image/webp" />
                <img
                  src={member.images.png}
                  alt={member.name}
                  className="crew__image max-w-64 md:max-w-95.5 xl:max-w-125"
                />
              </picture>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
