export function GridDisplay({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
      {children}
    </div>
  );
}
