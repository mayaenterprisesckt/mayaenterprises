import FeatureCard from "@/components/card/FeatureCard";
import { FaMoneyBillAlt, FaRegLightbulb, FaBloggerB } from "react-icons/fa";

function Featurs() {
    return (
        <div>
            <section className="text-primaryDark  dark:text-primaryLight body-font bg-gray-50  dark:bg-primaryDark">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900 dark:text-white">
                            Services
                        </h1>
                        <h1 className="mb-9 text-2xl font-semibold text-gray-600 dark:text-gray-300">
                            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                            taxidermy. Gastropub indxgo juice poutine, ramp
                        </h1>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
                        <FeatureCard
                            name={"Gyanasutra"}
                            desc={
                                "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard."
                            }
                            Icon={FaRegLightbulb}
                            link={"https://gyanasutra.mayaenterprises.co.in"}
                        />
                        <FeatureCard
                            name={"Minvest"}
                            desc={
                                "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard."
                            }
                            Icon={FaMoneyBillAlt}
                            link={"https://minvest.mayaenterprises.co.in"}
                        />

                        <FeatureCard
                            name={"Blog"}
                            desc={
                                "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard."
                            }
                            Icon={FaBloggerB}
                            link={"https://blog.mayaenterprises.co.in"}
                        />
                        {/* <FeatureCard />
                        <FeatureCard />
                        <FeatureCard />  */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Featurs;
