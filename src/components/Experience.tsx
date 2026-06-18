import Card from "./ui/Card";
import Heading from "./ui/Heading";
import ibexLogo from "../assets/exp-ibex-logo.png";
import systemsLogo from "../assets/exp-systems-logo.jpg";

const experienceList = [
    {
        heading: "IBEX",
        logo: ibexLogo,
        subHeading: "Software Engineer",
        timeline: "Nov 2024 - Present",
        description: [
            <span>Built and maintained full-stack features for a production-ready <strong>AI Agent Builder Platform</strong> using <strong>React.js</strong> and <strong>FastAPI</strong>, enabling internal teams to configure, test, and deploy intelligent voice and chat agents.</span>,
            <span>Designed and implemented <strong>Redis-based session management</strong>, conversation history tracking, and <strong>function-calling integrations</strong> for context-aware, low-latency LLM interactions.</span>,
            <span>Developed and maintained internal <strong>Node.js</strong> web applications used by IBEX call center agents, supporting day-to-day operational workflows.</span>,
            <span>Onboarded legacy internal tools, including service desk bots, onto the AMP platform — standardizing <strong>AI deployment workflows</strong> across enterprise teams.</span>,
            <span>Collaborated with AI teams on <strong>RAG-based architectures</strong> to connect domain-specific enterprise knowledge bases to agent pipelines.</span>,
        ]
    },
    {
        heading: "Systems Limited",
        logo: systemsLogo,
        subHeading: "Data Engineer Intern",
        timeline: "Jul 2023 - Sep 2023",
        description: [
            <span>Completed comprehensive training in SQL, Data Warehousing, and SSIS (ETL tool).</span>,
            <span>Designed and implemented ETL pipelines for a real-world flights data project.</span>,
            <span>Applied best practices in data integration, transformation, and quality assurance throughout the <em>internship</em>.</span>,
        ]
    },
]

const Experience = () => {
    return (
        <div>
            <Heading title="Experience" />
            {experienceList.map((experience, index) => <Card key={index} {...experience} />)}
        </div>
    )
}

export default Experience;
