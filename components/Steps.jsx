import { RiArrowRightLine, RiCompasses2Line, RiLightbulbLine, RiMagicLine, RiRulerLine, RiToolsLine } from "@remixicon/react"

const Steps = () => {
  return (
    <section className="steps mt-[80px] xl:mt-[200px] relative z-20">
        <div className="container mx-auto">
            {/* Grid Item */}
            <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
                {/* Step 1 */}
                <div className="steps__step text-center">
                    <div className="flex justify-center mb-4">
                        <RiLightbulbLine 
                        size={34} className="text-5xl text-accect" />
                    </div>
                    <h3 className="h3 mb-5">
                        Find your perfect style
                    </h3>
                    <p className="mb-5 max-w-dm mx-auto">Explore modern design inspirations that reflect your unique taste and lifestyle.</p>
                    <a className="font-medium flex justify-center items-center gap-2" href="#">
                        Read More
                        <RiArrowRightLine className="text-accect" size={18}/>
                    </a>
                </div>
                {/* Step 2 */}
                <div className="steps__step text-center">
                    <div className="flex justify-center mb-4">
                        <RiRulerLine 
                        size={34} className="text-5xl text-accect" />
                    </div>
                    <h3 className="h3 mb-5">
                        Craft a space tailored for you
                    </h3>
                    <p className="mb-5 max-w-dm mx-auto">Work with our experts to create a personalized design plan that blends style with functionality.</p>
                    <a className="font-medium flex justify-center items-center gap-2" href="#">
                        Read More
                        <RiArrowRightLine className="text-accect" size={18}/>
                    </a>
                </div>
                {/* Step 3 */}
                <div className="steps__step text-center">
                    <div className="flex justify-center mb-4">
                        <RiToolsLine 
                        size={34} className="text-5xl text-accect" />
                    </div>
                    <h3 className="h3 mb-5">
                        Bring your vision to life
                    </h3>
                    <p className="mb-5 max-w-dm mx-auto">Watch as your dream space transforms into reality with precise execution and attention to detail.</p>
                    <a className="font-medium flex justify-center items-center gap-2" href="#">
                        Read More
                        <RiArrowRightLine className="text-accect" size={18}/>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Steps