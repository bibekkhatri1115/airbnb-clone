import Head from "next/head";
import Banner from "../components/Banner";
import DiscoverCard from "../components/DiscoverCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import Panel from "../components/Panel";
import SmallCard from "../components/SmallCard";

export default function Home({
  exploreData,
  cardsData,
  discoverData,
  panelData,
}) {
  return (
    <div className="">
      <Head>
        <title>
          Airbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes &
          Experiences
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-[100rem] mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-2xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some data from a server - API endpoints */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-3 xl:grid-cols-4"
          >
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide py-5 lg:space-x-5">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="/img/hosting.jpg"
          title="Try hosting"
          description="Earn extra income and unlock new opportunities by sharing your space."
          buttonText="Learn More"
          theme="dark"
        />

        <section>
          <h2 className="text-2xl font-semibold py-8">Discover things to do</h2>
          <div className="flex space-x-6 lg:space-x-6 overflow-scroll scrollbar-hide py-5">
            {discoverData?.map(({ img, title, description }) => (
              <DiscoverCard
                key={img}
                img={img}
                title={title}
                description={description}
              />
            ))}
          </div>
        </section>

        <LargeCard
          img="/img/card.webp"
          title="The Greatest Outdoors"
          description="Wishlists created by Airbnb."
          buttonText="Get Inspired"
        />

        <section>
          <h2 className="text-2xl font-semibold py-8">
            Inspiration for future getaways
            <Panel panelData={panelData} />
          </h2>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/BTVT").then((res) =>
    res.json()
  );

  const cardsData = await fetch("https://jsonkeeper.com/b/C4AB").then((res) =>
    res.json()
  );

  const discoverData = await fetch("https://jsonkeeper.com/b/JR7C").then(
    (res) => res.json()
  );

  const panelData = await fetch("https://jsonkeeper.com/b/Z0XY").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
      discoverData,
      panelData,
    },
  };
}
