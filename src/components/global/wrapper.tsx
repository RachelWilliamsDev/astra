import { cn } from "@/lib/utils";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}
const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={cn(
        "h-full w-full mx-auto max-w-screen-xl px-4 md:px-0",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Wrapper;
