export default function NextStepsSection() {
    return (
        <section className="max-w-4xl mx-auto p-6 sm:p-8 mb-8 bg-black/40 rounded-md pt-16 scroll-mt-16 min-h-[80vh]">
        <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
    <div className="flex flex-col sm:flex-row gap-4">
    <div className="flex-1 p-4 rounded-md bg-white dark:bg-neutral-700">
    <h3 className="font-bold mb-2">Join Us</h3>
    <p className="text-sm">[Signup Form Placeholder]</p>
        </div>
        <div className="flex-1 p-4 rounded-md bg-white dark:bg-neutral-700">
    <h3 className="font-bold mb-2">Support Us</h3>
    <p className="text-sm">[Donation Button Placeholder]</p>
        </div>
        <div className="flex-1 p-4 rounded-md bg-white dark:bg-neutral-700">
    <h3 className="font-bold mb-2">Subscribe</h3>
        <p className="text-sm">[Newsletter Signup Placeholder]</p>
        </div>
        </div>
        </section>
);
}
