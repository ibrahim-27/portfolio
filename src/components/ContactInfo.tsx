import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SlGlobe } from "react-icons/sl";

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-center gap-4 md:items-baseline w-full">
      <div className="flex flex-wrap justify-center gap-3 md:flex-col w-full">
        <div className="flex gap-3 items-center group">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] group-hover:border-[var(--color-accent)] transition-colors duration-300">
            <FaLocationDot className="text-sm text-[var(--color-accent)]" />
          </div>
          <p className="text-xs lg:text-sm text-[var(--text-secondary)]">
            Lahore, Pakistan
          </p>
        </div>
        <a href="tel:+923094242532" className="flex gap-3 items-center group cursor-pointer">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] group-hover:border-[var(--color-accent)] transition-colors duration-300">
            <FaPhoneAlt className="text-sm text-[var(--color-accent)]" />
          </div>
          <p className="text-xs lg:text-sm text-[var(--text-secondary)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
            (+92) 309-424-2532
          </p>
        </a>
        <a href="mailto:ibrahimanwarulhaq1994@gmail.com" className="flex gap-3 items-center group w-full overflow-hidden cursor-pointer">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] group-hover:border-[var(--color-accent)] shrink-0 transition-colors duration-300">
            <GrMail className="text-sm text-[var(--color-accent)]" />
          </div>
          <p className="text-xs lg:text-sm text-[var(--text-secondary)] break-all truncate group-hover:text-[var(--color-accent)] transition-colors duration-200">
            ibrahimanwarulhaq1994@gmail.com
          </p>
        </a>
      </div>
      <div className="flex gap-4 items-center text-xl text-[var(--color-accent)] mt-4">
        <a
          href="https://www.linkedin.com/in/muhammad-ibrahim-127b93224/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-hover)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ibrahim-27"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-hover)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="/"
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-hover)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out"
          title="Website"
        >
          <SlGlobe />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
