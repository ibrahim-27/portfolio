import Tag from "./ui/Tag";
import Heading from "./ui/Heading";

const Skills = () => {
    const skillList = [
        "GPT-4", "RAG", "Prompt Engineering", "Agentic AI", "Function Calling",
        "FastAPI", "Node.js", "Redis", "WebSockets", "JWT", "Docker",
        "React.js", "Next.js", "TypeScript", "Python", "JavaScript",
        "PostgreSQL", "MySQL", "ETL Pipelines", "Git", "Tableau", "SSIS"
    ];

    return (
        <div className="w-full md:max-w-8/10">
            <Heading title="Skills" />
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {skillList.map(skill => <Tag key={skill} text={skill} variant="skill" />)}
            </div>
        </div>
    )
}

export default Skills;
