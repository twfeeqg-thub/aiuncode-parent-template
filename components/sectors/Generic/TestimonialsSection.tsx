"use client";
export default function TestimonialsSection({ data }: { data: any }) {
  if (!data) return null;
  return (
    <section className="py-16 bg-white border-b border-dashed">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{data.title || "آراء العملاء"}</h2>
        <div className="mt-10 p-12 border-2 border-dashed border-muted rounded-xl italic text-muted-foreground">
          هنا سيتم عرض شهادات العملاء (Social Proof)
        </div>
      </div>
    </section>
  );
}
