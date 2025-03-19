export default function TailCard({ title, subtitle, imgurl, kws }) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-110">
            {/* 이미지 영역 */}
            <img className="w-full h-48 object-cover" src={imgurl} alt={title} />

            {/* 내용 영역 */}
            <div className="p-5 space-y-2">
                <h5 className="text-left text-2xl font-bold tracking-tight text-gray-900">
                    {title}
                </h5>
                <p className="text-left text-gray-700">{subtitle}</p>

                {/* 키워드 태그 */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {kws.map((kw) => (
                        <span
                            key={kw}
                            className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
                        >
                            {kw}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
