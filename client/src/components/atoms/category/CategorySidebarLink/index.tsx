import clsx from "clsx";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type CategorySidebarLinkProps = {
  isActive: boolean;
  to: string;
  children: ReactNode;
};
export default function CategorySidebarLink({ isActive, to, children }: CategorySidebarLinkProps) {
  return (
    <Link
      className={clsx(
        "decoration-0 px-6 py-2 text-sm font-semibold text-gray-800 hover:bg-slate-200 block duration-75 transition-all",
        {
          "!text-[#7047eb]": isActive,
        },
      )}
      to={to}
    >
      {children}
    </Link>
  );
}
