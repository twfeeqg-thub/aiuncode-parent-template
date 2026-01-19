"use client";
export default function FeaturesSection({ data }: { data: any }) {
  if (!data) return null;
  return (
    <section className="py-16 bg-white border-b border-dashed">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{data.title || "الميزات التنافسية"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-10 border-2 border-dashed border-muted rounded-xl text-muted-foreground italic">
              حاوية ميزة ذكية {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
