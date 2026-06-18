import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";

const ContentSection = () => {
    return (
        <div className="flex flex-col gap-8 p-4 lg:p-8 lg:ml-8">
            <Skills />
            <Experience />
            <Education />
            <Projects />
        </div>
    )
};

export default ContentSection;