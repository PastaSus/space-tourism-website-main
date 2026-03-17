import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/assets/home/background-home-mobile.jpg')] bg-cover bg-center bg-no-repeat md:bg-[url('/assets/home/background-home-tablet.jpg')] xl:bg-[url('/assets/home/background-home-desktop.jpg')]">
      <Header />
      <main className="main text-center">
        <section className="hero mt-5 xl:mx-auto xl:grid xl:h-158 xl:max-w-278 xl:grid-cols-2 xl:content-end xl:text-start">
          <div className="hero__content md:mt-32 xl:mt-0">
            <p className="hero__subtitle font-[Barlow_condensed,_sans-serif] text-base font-extralight tracking-[3px] uppercase md:text-3xl">
              So, you want to travel to
            </p>
            <h1 className="hero__title mt-5 font-[bellefair,_sans-serif] text-[5.25rem] uppercase md:text-[9rem] xl:mt-8">
              Space
            </h1>
            <p className="hero__description mx-auto mt-8 max-w-85 text-base leading-[1.8] font-extralight md:max-w-126 xl:mx-0 xl:max-w-135 xl:text-lg">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="hero__cta-wrapper mt-36 flex justify-center md:mt-17 xl:mt-0 xl:items-center xl:justify-end">
            <Link
              href="/destination/moon"
              className="hero__cta relative flex aspect-square w-36 items-center justify-center rounded-full bg-white font-[Bellefair,_sans-serif] text-xl text-black uppercase hover:text-gray-500 md:w-68 md:text-4xl md:before:h-113 md:before:w-113"
            >
              Explore
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
