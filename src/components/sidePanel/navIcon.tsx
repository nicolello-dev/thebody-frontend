export function NavIcon({
  onClick,
  children,
  ...props
}: {
  onClick: () => void;
  children: React.ReactNode;
} & React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li
      {...props}
      className={`list-none flex items-center justify-center bg-transparent ${
        props.className ?? ""
      }`}
    >
      <button
        className="relative cursor-pointer flex items-center justify-center
                   hover:text-[#dfffff]
                   text-[#9fb8c7]
                   w-[40px]
                   h-[32px]
                   active:bg-[url('/hexbg.png')]
                   active:bg-center active:bg-cover active:bg-no-repeat"
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
}
