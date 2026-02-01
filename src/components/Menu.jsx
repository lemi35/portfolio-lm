export const Menu = ({ links = [], onLinkClick, className = "" }) => {
  return (
    <div className={className}>
      {links.map((link, index) => {
        const isContact = link.label.toLowerCase() === "contact";
        if (isContact) {
          return (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                onLinkClick?.();
              }}
              className="px-4 py-2 text-sm text-muted-foreground cursor-pointer hover:bg-primary rounded-full transition-all duration-200"
            >
              {link.label}
            </button>
          );
        }
        return (
          <a
            href={link.href}
            key={index}
            className="px-4 py-2 text-sm text-muted-foreground cursor-pointer hover:bg-primary rounded-full transition-all duration-200"
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
};
