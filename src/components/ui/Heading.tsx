interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
    return <h1 className="my-6 text-xl lg:text-2xl font-bold text-[var(--text-primary)] text-center md:text-left border-b border-[var(--color-border)] pb-2">{title}</h1>;
}

export default Heading;