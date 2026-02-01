import { Download } from "lucide-react";

export const AnimatedBorderButton = ({ href, children, ...props }) => {
  // default target/rel: open external http(s) links in new tab unless download is set
  const isExternal = href && /^https?:\/\//.test(href);
  const target =
    props.target ?? (isExternal && !props.download ? "_blank" : undefined);
  const rel =
    props.rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      {...props}
      className={`
            relative group animated-border
            bg-transparent
            border border-transparent
            text-foreground
            px-6 py-3
            text-lg leading-none
            font-medium
            rounded-full
            flex items-center gap-2
            ${props.className || ""}`}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 48"
        preserveAspectRatio="none"
      >
        <path
          d="
                M 24,1
                A 23,23 0 0 0 1,24
                A 23,23 0 0 0 24,47
                L 176,47
                A 23,23 0 0 0 199,24
                A 23,23 0 0 0 176,1
                Z
            "
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          className="animated-border-path"
        />
      </svg>
      {children}
    </a>
  );
};
