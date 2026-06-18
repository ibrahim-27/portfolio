import { FaDownload } from "react-icons/fa6";
import userImg from "../assets/user.jpg";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      {/* Profile Image with Accent border and hover effect */}
      <div className="relative group">
        <div className="absolute inset-0 rounded-full bg-[var(--color-accent)]/20 blur-md group-hover:blur-lg transition-all duration-300"></div>
        <img
          className="relative h-24 w-24 lg:h-28 lg:w-28 rounded-full border-3 border-[var(--color-accent)] object-cover shadow-xl group-hover:scale-105 group-hover:rotate-2 transition-all duration-300 ease-out"
          src={userImg}
          alt="Muhammad Ibrahim Profile Avatar"
        />
      </div>

      <div className="space-y-1">
        <h1 className="text-xl lg:text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">
          Muhammad Ibrahim
        </h1>
        <h3 className="text-sm lg:text-base font-semibold text-[var(--color-accent)] tracking-wide">
          Software Engineer
        </h3>
      </div>

      <p className="text-xs lg:text-sm leading-relaxed text-[var(--text-secondary)] max-w-sm">
        Software engineer specializing in AI agent systems, full-stack development,
        and RAG architectures. Experienced in building production-ready platforms
        with React, FastAPI, and LLM integrations.
      </p>

      {/* Premium Download Button with contrast text and scale animation */}
      <a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        download="muhammad-ibrahim-resume.pdf"
        className="flex items-center gap-2 px-5 py-2.5 text-xs lg:text-sm font-semibold text-white bg-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--color-accent)]/20 active:scale-95 transition-all duration-300 select-none cursor-pointer"
      >
        <FaDownload className="text-sm" />
        Download Resume
      </a>
    </div>
  );
};

export default ProfileHeader;
