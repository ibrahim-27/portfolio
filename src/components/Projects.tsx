import Card from "./ui/Card";
import Heading from "./ui/Heading";
import ibexLogo from "../assets/exp-ibex-logo.png";
import meetBotImg from "../assets/proj-meet-bot.png";
import flashcardImg from "../assets/proj-make-me-flash.png";

const projectList = [
    {
        logo: ibexLogo,
        logoContain: true,
        subHeading: "AI Agent Builder Platform (AMP)",
        description: [
            <span>Developed full-stack web features for a configurable <strong>AI agent platform</strong> supporting native voice and chat interfaces, used by internal prompt engineers and operations teams.</span>,
            <span>Implemented custom conversational workflows integrating advanced <strong>LLM function calling</strong> and <strong>RAG knowledge pipelines</strong> for domain-aware agent responses.</span>,
            <span>Containerized services using <strong>Docker</strong> to ensure consistent, reproducible environments across development and production deployments.</span>,
        ],
        skills: ["Python", "FastAPI", "React.js", "OpenAI API", "Redis", "WebSockets", "Docker"],
        demoLink: "https://amp.ibex.co/"
    },
    {
        logo: meetBotImg,
        subHeading: "MeetBot — AI-Driven Meeting Assistant",
        description: [
            <span>Developed an end-to-end meeting assistant that transforms raw meeting transcripts into a structured, searchable knowledge base.</span>,
            <span>Built a responsive <strong>Next.js</strong> and <strong>TypeScript</strong> frontend coupled with a high-performance <strong>FastAPI</strong> backend for high-throughput transcript ingestion.</span>,
            <span>Implemented speaker-aware chunking strategies and vectorized retrieval (<strong>RAG</strong>) with LLM-driven summarization using the <strong>OpenRouter API</strong>.</span>,
            <span>Integrated asynchronous background processing and a <strong>Notion API</strong> connection to automatically export summaries and streamline post-meeting action items.</span>,
        ],
        skills: ["Next.js", "TypeScript", "FastAPI", "RAG", "OpenRouter", "Notion API"],
        githubLink: "https://github.com/ibrahim-27/MeetBot",
        demoLink: "https://meetbot-production-c795.up.railway.app/"
    },
    {
        logo: flashcardImg,
        subHeading: "Make Me Flash",
        description: [
            <span>AI-powered flashcard generator that converts any text into interactive study cards using <strong>Ollama LLM</strong>.</span>,
            <span>Full-stack <strong>React/Node.js</strong> application with <strong>PostgreSQL</strong> database for storing and managing flashcards.</span>,
            <span>Responsive design with <strong>TailwindCSS</strong> and real-time flashcard generation for seamless learning experience.</span>,
        ],
        skills: ["React", "JavaScript", "TailwindCSS", "NodeJS", "PostgreSQL", "Ollama AI", "Vite", "Express.js"],
        githubLink: "https://github.com/ibrahim-27/Make-me-Flash"
    }
]

const Projects = () => {
    return (
        <div>
            <Heading title="Projects" />
            {projectList.map((project, index) => <Card key={index} {...project} variant={"project"} />)}
        </div>
    )
}

export default Projects;
