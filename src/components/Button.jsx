export const Button = ({
  className,
  children,
  size,
  as = "button",
  href,
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2";
  const sizeClasses = {
    sm: "sm:px-4 sm:py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size || "default"]} ${className || ""}`;

  const inner = (
    <span
      className="
            relative flex 
            items-center 
            justify-center 
            bg-primary 
            text-primary-foreground 
            px-4 
            py-2
            rounded-full
            gap-2"
    >
      {children}
    </span>
  );

  if (as === "a") {
    return (
      <a className={classes} href={href} {...props}>
        {inner}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {inner}
    </button>
  );
};
