import { TECH_STACK } from "./constant/tech-stack";

export default function TechStack() {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-3"
      style={{ 
        contentVisibility: "auto",
        containIntrinsicSize: "auto 48px"
      }}
    >
      {TECH_STACK.map((item) => (
        <a
          key={item.title}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            "flex h-10 min-w-[120px] items-center justify-center gap-2 rounded-md border border-solid bg-blue-50/10 p-2 " +
            "transition-all duration-200 hover:bg-blue-50/20"
          }
        >
          {item.icon && (
       <span className="flex size-5 items-center justify-center">
          {(() => {
            const IconComponent = item.icon as React.ElementType;
              return <IconComponent className="size-5" />;
           })()}
        </span>
)}
          <span className="truncate text-sm">{item.title}</span>
        </a>
      ))}
    </div>
  );
}