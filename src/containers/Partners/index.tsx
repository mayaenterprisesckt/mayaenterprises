import Todo from "public/assets/images/todoist.svg";
import Postcss from "public/assets/images/algolia.svg";
import Slack from "public/assets/images/yahoo.svg";
import Typeorm from "public/assets/images/algolia.svg";
import Yahoo from "public/assets/images/yahoo.svg";
import Algolia from "public/assets/images/algolia.svg";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

function Partners() {
    // const [currentSlide, setCurrentSlide] = useState(0);
    // const [loaded, setLoaded] = useState(false);
    const animation = { duration: 9900, easing: (t: number) => t };
    const [ref] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 3, spacing: 10 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 4, spacing: 10 },
            },
        },
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
            s.moveToIdx(5, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        // slides: { perView: 1 },
        // slideChanged(slider) {
        //     setCurrentSlide(slider.track.details.rel);
        // },
        // created() {
        //     setLoaded(true);
        // },
        // vertical: true,
    });
    return (
        <>
            <div className="container px-5 py-10  mx-auto pt-10">
                <div className="text-center mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-primaryDark  dark:text-primaryLight mb-4">
                        MInvest is trusted by
                    </h1>

                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
                    </div>
                </div>
                <section className="px-4 py-7  mx-auto max-w-7xl">
                    <div className="flex flex-col flex-grow space-y-5">
                        <div className="navigation-wrapper">
                            <div ref={ref} className="keen-slider">
                                <div className="keen-slider__slide items-center grid grid-cols-1 gap-5 ">
                                    <Image
                                        src={Todo}
                                        alt="Todoist Logo"
                                        className="block content-fit h-16 "
                                    />
                                </div>
                                <div className="keen-slider__slide  items-center grid grid-cols-1 gap-5 ">
                                    <Image
                                        src={Yahoo}
                                        alt="Todoist Logo"
                                        className="block content-fit h-16 "
                                    />
                                </div>
                                <div className="keen-slider__slide  items-center grid grid-cols-1 gap-5 ">
                                    <Image
                                        src={Typeorm}
                                        alt="Todoist Logo"
                                        className="block content-fit h-16 "
                                    />
                                </div>
                                <div className="keen-slider__slide  items-center grid grid-cols-1 gap-5 ">
                                    <Image
                                        src={Postcss}
                                        alt="Todoist Logo"
                                        className="block content-fit h-16 "
                                    />
                                </div>
                                <div className="keen-slider__slide  items-center grid grid-cols-1 gap-5 ">
                                    <Image
                                        src={Algolia}
                                        alt="Todoist Logo"
                                        className="block content-fit h-16 "
                                    />
                                </div>
                                <div className="keen-slider__slide items-center grid grid-cols-1 gap-5  ">
                                    <Image
                                        src={Slack}
                                        alt="Todoist Logo"
                                        className="block content-fit h-16 "
                                    />
                                </div>
                            </div>
                            {/* <>
                                {loaded && instanceRef.current && (
                                    <>
                                        <Arrow
                                            top
                                            onClick={(e: any) =>
                                                e.stopPropagation() || instanceRef.current?.prev()
                                            }
                                            disabled={currentSlide === 0}
                                        />
                                        <Arrow
                                            onClick={(e: any) =>
                                                e.stopPropagation() || instanceRef.current?.next()
                                            }
                                            disabled={
                                                currentSlide ===
                                                instanceRef.current.track.details.slides.length - 1
                                            }
                                        />
                                    </>
                                )}
                            </> */}
                        </div>
                    </div>
                    {/* </div> */}
                </section>
            </div>
        </>
    );
}

export default Partners;
