import { Counter } from "@/components/animation/Counter";

interface StatsProps {
    title: string;
    Icon?: any;
    number: number;
}

function StatsItem({ title, number }: StatsProps) {
    return (
        <>
            <div className="p-6 card drop-shadow shadow-md dark:shadow-lightAccent">
                <div className="flex items-start justify-between">
                    <h2 className="mb-2 font-mono text-2xl font-light leading-none text-primaryDark  dark:text-primaryLight truncate">
                        <Counter from={0} to={number} />
                    </h2>
                    <span className="flex items-center space-x-1 text-sm font-medium leading-none text-green-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="flex-none w-4 h-4"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>
                            <Counter from={0} to={number} /> +
                        </span>
                    </span>
                </div>
                <p className="text-sm leading-none text-primaryDark antialiased dark:text-primaryLight ">
                    {title}
                </p>
            </div>
        </>
    );
}

export default StatsItem;
