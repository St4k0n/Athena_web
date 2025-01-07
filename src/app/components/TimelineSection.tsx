// export default function TimelineSection() {
//     return (
//         <section
//             id="timeline"
//             className="max-w-4xl mx-auto p-6 sm:p-8 m-8 mb-8 bg-black/40 rounded-md pt-16 scroll-mt-16 min-h-[80vh]"
//         >
//             {/*<h2 className="text-2xl font-semibold mb-4">Project Timeline</h2>*/}
//             <h2 className="text-2xl font-semibold mb-4">Project Timeline</h2>
//
//             <ol className="list-decimal list-inside space-y-2 ml-4">
//                 <li>
//                     <strong>Idea &amp; Design</strong>
//                     <span>(✅ Completed)</span>
//                 </li>
//                 <li>
//                     <strong>Planning &amp; Resources</strong> <span>(✅ Completed)</span>
//                 </li>
//                 <li>
//                     <strong>Initial Development</strong>
//                     <span>(🔄 In Progress)</span>
//                 </li>
//                 <li>
//                     <strong>Testing &amp; Validation</strong>
//                     <span>(⏳ Upcoming)</span>
//                 </li>
//                 <li>
//                     <strong>Official Launch</strong> <span>(⏳ Upcoming)</span>
//                 </li>
//             </ol>
//         </section>
//     );
// }
//



"use client";

import { timelineTasks } from "./tasks";

export default function TimelineSection() {
    return (
        <section
            id="timeline"
            className="
        relative
        w-full
        py-16
        bg-black/40
        min-h-[80vh]
        scroll-mt-16
        rounded-md
        max-w-6xl
        mx-auto
        px-4
        sm:px-8
        mb-8
        m-8"
        >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Project Timeline
            </h2>

            <div className="relative border-l border-gray-400/50 ml-4 sm:ml-8">
                {timelineTasks.map((task) => {
                    // Let's define some color logic for status
                    let statusColor = "bg-gray-500";
                    if (task.status === "Done") statusColor = "bg-purple-600";
                    else if (task.status === "Update") statusColor = "bg-blue-500";
                    else if (task.status === "Late In Progress") statusColor = "bg-orange-500";
                    else if (task.status === "In Progress") statusColor = "bg-green-600";
                    else if (task.status === "Critical") statusColor = "bg-red-600";

                    return (
                        <div key={task.id} className="mb-10 ml-8 relative">
                            {/* Dot */}
                            <span
                                className={`
                  absolute -left-[14px] mt-1 w-4 h-4 
                  rounded-full border-2 border-white
                  ${statusColor}
                `}
                            />

                            <div className="pl-4 pb-2">
                                <h3 className="text-xl font-semibold text-white">
                                    {task.title}
                                </h3>
                                <div className="text-sm text-gray-200">
                                    Cycle: <span
                                    className="font-medium">{task.cycle}</span>{" "}
                                    | Deadline: <span
                                    className="font-medium">{task.deadline}</span>
                                    {"  "}
                                    | Status:{" "}
                                    <span
                                        className={`
                      font-semibold text-white px-2 py-1 rounded
                      ${statusColor}
                    `}
                                    >
                    {task.status}
                  </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
