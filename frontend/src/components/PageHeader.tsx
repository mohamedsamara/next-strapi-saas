interface PageHeaderProps {
  heading: string;
  text?: string;
}

export default function PageHeader({ heading, text }: PageHeaderProps) {
  return (
    <div className="w-full my-16 text-center">
      {text && <span className="font-bold text-violet-400">{text}</span>}
      <h2 className="my-4 text-4xl font-bold lg:text-5xl font-heading">
        {heading}
      </h2>
    </div>
  );
}
