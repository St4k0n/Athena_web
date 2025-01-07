export default function OverviewSection() {
    return (
        <section
            id="overview"
            className="max-w-4xl mx-auto p-6 sm:p-8 mb-8 bg-black/40 rounded-md pt-16 scroll-mt-16 min-h-[80vh]"
        >
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="mb-4">
            <strong>[Project Name]</strong> aims to solve{" "}
            <em>[briefly describe the problem or opportunity].</em>
            </p>
            <p className="mb-4">
                Our solution is <em>[describe the solution].</em>
            </p>
            <p className="mb-4">
                Expected impact: <em>[describe expected benefits].</em>
            </p>
            <h3 className="text-lg font-medium mb-2">Key Objectives</h3>
            <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Objective 1: [Description]</li>
                <li>Objective 2: [Description]</li>
                <li>Objective 3: [Description]</li>
            </ol>
        </section>
    );
}
