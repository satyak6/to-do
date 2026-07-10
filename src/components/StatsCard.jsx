export default function StatsCard({
    title,
    value,
    color,
    icon
}) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-gray-500">
                        {title}
                    </h2>
                    <h1 className={`text-4xl font-bold mt-2 ${color}`}>
                        {value}
                    </h1>
                </div>
                <div className="text-4xl">
                    {icon}
                </div>
            </div>
        </div>
    );
}