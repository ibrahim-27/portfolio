import React from "react";
import Tag from "./Tag";
import { FaExternalLinkAlt } from "react-icons/fa";

interface CardProps {
  heading?: string;
  subHeading: string;
  logo: string;
  description: React.ReactNode[];
  timeline?: string;
  skills?: string[];
  variant?: "project" | "experience" | "education" | string;
  githubLink?: string;
  demoLink?: string;
  logoContain?: boolean;
}

const Card = ({
  heading,
  subHeading,
  logo,
  description,
  timeline,
  skills = [],
  variant,
  githubLink,
  demoLink,
  logoContain = false,
}: CardProps) => {
  const logoClasses =
    variant === "project"
      ? `rounded-lg ${logoContain ? "object-contain" : "object-cover"}`
      : "rounded-full object-contain";
      
  return (
    <div className="group relative w-full pl-6 border-l border-[var(--color-border)] mb-8 mx-auto md:mx-0 md:w-11/12 transition-all duration-300">
      {/* Timeline Dot - enlarges and glows on card hover */}
      <span className="absolute left-0 top-0 translate-x-[-50%] w-3 h-3 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-bg)] shadow-[0_0_0_0_rgba(var(--color-accent),0.4)] group-hover:scale-130 group-hover:bg-[var(--color-accent-hover)] group-hover:shadow-[0_0_8px_2px_var(--color-accent)] transition-all duration-300"></span>

      <div className="bg-[var(--color-card)] p-5 rounded-xl shadow-sm border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex gap-4 items-center">
            <div className="bg-[var(--color-bg)] p-1.5 rounded-lg border border-[var(--color-border)] shrink-0">
              <img
                src={logo}
                alt={`${subHeading} Logo`}
                className={`w-12 h-12 md:w-14 md:h-14 ${logoClasses}`}
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-[var(--text-primary)] md:text-lg group-hover:text-[var(--color-accent)] transition-colors duration-300">
                {subHeading}
              </h3>
              {heading && (
                <p className="text-xs font-semibold text-[var(--color-accent)] mt-0.5 md:text-sm">
                  {heading}
                </p>
              )}
              
              <div className="flex flex-wrap gap-3 mt-1.5">
                {githubLink && (
                  <a
                    href={githubLink}
                    className="text-xs inline-flex items-center text-[var(--text-muted)] hover:text-[var(--color-accent)] hover:underline md:text-sm transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <FaExternalLinkAlt className="ml-1 text-[10px]" />
                  </a>
                )}
                {demoLink && (
                  <a
                    href={demoLink}
                    className="text-xs inline-flex items-center text-[var(--text-muted)] hover:text-[var(--color-accent)] hover:underline md:text-sm transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <FaExternalLinkAlt className="ml-1 text-[10px]" />
                  </a>
                )}
              </div>
            </div>
          </div>
          
          {variant !== "project" && timeline && (
            <Tag text={timeline} variant="timeline" />
          )}
        </div>

        <ul className="text-sm mt-4 list-disc list-outside pl-5 text-[var(--text-secondary)] space-y-2 marker:text-[var(--color-accent)] md:text-base">
          {description.map((item: React.ReactNode, index: number) => (
            <li key={index} className="leading-relaxed pl-1">
              {item}
            </li>
          ))}
        </ul>

        {variant === "project" && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5 pt-3 border-t border-[var(--color-border)]/50">
            {skills.map((skill: string, index: number) => (
              <Tag key={index} text={skill} variant="project" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
