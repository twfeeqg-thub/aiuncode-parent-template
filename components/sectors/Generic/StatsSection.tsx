"use client";
export default function StatsSection({ data }: { data: any }) {
  if (!data) return null;
  return (
    <section className="py-12 bg-muted/50 border-b border-dashed">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col">
            <span className="text-4xl font-bold text-primary">00+</span>
            <span className="text-sm text-muted-foreground italic">إحصائية ذكية</span>
          </div>
        ))}
      </div>
    </section>
  );
}
