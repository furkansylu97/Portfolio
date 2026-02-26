import type { ReactNode } from "react";

interface Container {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: Container) => {
  return (
    <div
      className={`container mx-auto my-auto flex w-full px-10 md:px-16 lg:px-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
