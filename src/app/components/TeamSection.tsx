import Image from "next/image"; // if you still need Next's Image for other images (not the bg)

type TeamMember = {
    name: string
    role: string
    image: string
    description: string
}

type Props = {
    basePath: string
}

const teamMembers: TeamMember[] = [
    {
        name: "Jacques",
        role: "Project Manager and Expert AI & Maths",
        image: "jacques.png",
        description: `coordinates the team to deliver projects 
      on time, bridging communication between design and engineering.`,
    },
    {
        name: "Matthis",
        role: "Back-End Engineer and Data Expert",
        image: "matthis.png",
        description: `focuses on Node.js microservices and secure APIs, 
      ensuring everything runs smoothly behind the scenes.`,
    },
    {
        name: "Antoine",
        role: "Back-End Engineer and Blockchain Expert",
        image: "antoine2.png",
        description: `focuses on Node.js microservices and secure APIs, 
        ensuring everything runs smoothly behind the scenes.`,
    },
    {
        name: "Louis",
        role: "UI/UX Designer and Front-End Developer",
        image: "louis.jpg",
        description: `is a front-end expert who loves building 
        snappy UIs using React and Tailwind or python UI or Flutter`,
    },
]

export default function TeamSection({ basePath }: Props) {
    return (
        <section
            id="team"
            className="
        relative
        w-full
        py-16
        text-white
        min-h-[80vh]
        scroll-mt-16
      "
            style={{
                backgroundImage: `url("${basePath}/team-bg.webp")`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                    Meet the Team
                </h2>

                {teamMembers.map(member => (
                    <div
                        key={member.name}
                        className="
              mb-16
              flex
              flex-col
              md:flex-row
              gap-8
              items-center
            "
                    >
                        {/* Left Column: Image with gold border */}
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                            <div className="inline-block border-8 border-[#cfa165] p-1">
                                <Image
                                    src={`${basePath}/${member.image}`}
                                    alt={member.name}
                                    width={400}
                                    height={500}
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Column: Text & Info */}
                        <div className="w-full md:w-1/2 text-white space-y-4">
                            <h3 className="text-2xl font-bold">
                                I Am <span className="text-[#cfa165]">{member.role}</span>
                            </h3>
                            <p className="text-gray-100">
                                <strong>{member.name}</strong> {member.description}
                            </p>

                            <div className="flex gap-4 mt-4">
                                <button
                                    className="
                    bg-[#cfa165]
                    px-4
                    py-2
                    text-white
                    font-semibold
                    rounded-md
                    hover:bg-[#b88b57]
                    transition-colors
                  "
                                >
                                    Contact Me
                                </button>
                                <button
                                    className="
                    border-2
                    border-[#cfa165]
                    px-4
                    py-2
                    text-[#cfa165]
                    font-semibold
                    rounded-md
                    hover:bg-[#cfa165]
                    hover:text-white
                    transition-colors
                  "
                                >
                                    Download C.V
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
