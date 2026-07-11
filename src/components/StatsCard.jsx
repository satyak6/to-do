export default function StatsCard({
    title,
    value,
    color,
    icon
}) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 hover:shadow-xl transition duration-300">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-sm sm:text-base text-gray-500">
                        {title}
                    </h2>
                    <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 ${color}`}>
                        {value}
                    </h1>
                </div>
                <div className="text-3xl sm:text-4xl">
                    {icon}
                </div>
            </div>
        </div>
    );
}