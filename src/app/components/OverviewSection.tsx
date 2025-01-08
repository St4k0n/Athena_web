export default function OverviewSection() {
    return (
        <section
            id="overview"
            className="relative max-w-6xl mx-auto p-8 mb-8 bg-black/40 rounded-md pt-16 scroll-mt-16 min-h-[70vh]"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-800 opacity-75 rounded-md -z-10"></div>

            <h2 className="text-3xl font-bold text-center mb-8 text-[#cfa165]">
                Athena Project Overview
            </h2>

            <p className="text-lg text-white mb-6 leading-relaxed">
                <strong>Athena</strong> leverages cutting-edge artificial intelligence to revolutionize dynamic investment
                strategies for financial markets. By combining advanced machine learning models with real-time data
                and external insights, Athena offers innovative solutions to navigate the complexity and volatility of
                modern markets.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-md">
                    <h3 className="text-xl font-semibold text-[#cfa165] mb-2">Key Features</h3>
                    <ul className="list-disc list-inside text-white">
                        <li>Integration of advanced AI models, including Mamba and Transformers.</li>
                        <li>Real-time data processing with OHLCV and external information.</li>
                        <li>Multi-agent optimization for enhanced performance and adaptability.</li>
                        <li>User-friendly interface for seamless interaction and strategy management.</li>
                    </ul>
                </div>

                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-md">
                    <h3 className="text-xl font-semibold text-[#cfa165] mb-2">Expected Impact</h3>
                    <ul className="list-disc list-inside text-white">
                        <li>Improved market prediction accuracy and strategic investment decisions.</li>
                        <li>Reduction in resource overhead through streamlined processes.</li>
                        <li>Empowerment of users with scalable, adaptive, and transparent tools.</li>
                        <li>Breakthrough potential in both individual and enterprise-level financial solutions.</li>
                    </ul>
                </div>
            </div>

            <div className="mt-8 text-white">
                <h3 className="text-xl font-semibold text-[#cfa165] mb-4">Key Objectives</h3>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                    <li>Develop scalable AI-driven models for financial predictions.</li>
                    <li>Ensure secure and robust data handling processes.</li>
                    <li>Provide intuitive tools that democratize access to AI-powered trading.</li>
                </ol>
            </div>
        </section>
    );
}
