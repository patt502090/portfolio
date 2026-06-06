type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        {label ? <p className="section-label">{label}</p> : null}
        <h2>{title}</h2>
      </div>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
