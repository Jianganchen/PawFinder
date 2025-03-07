export function GridDisplay({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grow grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-center gap-6 p-4">
      {children}
    </div>
  );
}
