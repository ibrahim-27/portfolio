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
            <span>Embedded with an enterprise client, enhancing their AI customer service agent on <strong>Sierra's</strong> platform using both code (<strong>Agent SDK</strong>) and no-code (<strong>Agent Studio</strong>) tooling.</span>,
            <span>Improved the agent's <strong>Identity & Verification (ID&amp;V)</strong> flow by implementing a multi-step fallback system that verified users through plan number and email when phone verification failed, significantly increasing overall verification success rates.</span>,
            <span>Engineered full-stack features across <strong>React.js</strong> and <strong>FastAPI</strong> as 1 of 5 engineers on IBEX's internally built <strong>AI Agent Builder Platform (AMP)</strong>, enabling teams to configure, test, and deploy production-grade voice and chat agents.</span>,
            <span>Designed and implemented <strong>Redis-based session management</strong> and conversation history tracking, powering context-aware LLM interactions for agents handling <strong>2,000+ calls per month</strong> with an <strong>84% containment rate</strong>.</span>,
            <span>Developed and maintained internal <strong>Node.js</strong> web applications used by IBEX call center agents, supporting day-to-day operational workflows.</span>,
            <span>Collaborated with <strong>AI and data teams</strong> to integrate <strong>RAG-based knowledge pipelines</strong> into AMP's agent infrastructure, enabling domain-aware responses across enterprise deployments.</span>,
            <span>Onboarded legacy internal tools, including service desk bots, onto the AMP platform, standardizing <strong>AI deployment workflows</strong> across enterprise teams.</span>,
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
