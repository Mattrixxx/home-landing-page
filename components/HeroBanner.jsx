import { RiArrowRightLine } from "@remixicon/react";

const HeroBanner = () => {
  return (
    <main className="max-w-[1920px] mx-auto bg-gray-100 overflow-hidden">
      {/* <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-10"></div> */}
      <section className="hero h-[640px] xl:h-[840px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20">
        <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
          <div className="hero__text w-[567] flex flex-col items-center text-center xl:text-left lg:items-start">
            <h1 className="h1 mb-8 text-white">Experience Modern Living</h1>
            <p className="mb-8 text-white">
              Discover curated designs that combine luxury with functionality,
              tailored for the modern lifestyle.
            </p>
            <button className="btn btn-primary mx-auto xl:mx-0">
              Get free estimation
              <RiArrowRightLine size={20} className="text-accect" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroBanner;
