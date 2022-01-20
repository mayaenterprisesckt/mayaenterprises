import StatsItem from "./StatsItem";

function Stats() {
    return (
        <>
            <div className="container px-5 lg:mt-32 mx-auto w-screen h-full bg-primaryLight dark:bg-primaryDark">
                <section className="px-4 py-12 mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between mb-4 space-y-1">
                        <h2 className="text-xl font-semibold text-primaryDark  dark:text-primaryLight justify-center">
                            Analytics Overview
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                        <StatsItem title="Sign-ups/downloads" number={308580} />
                        <StatsItem title="Cities with customer presence" number={38580} />
                        <StatsItem title="File formats u can import" number={5800} />
                        <StatsItem title="File formats u can import" number={5800} />
                    </div>
                </section>
            </div>
        </>
    );
}

export default Stats;
