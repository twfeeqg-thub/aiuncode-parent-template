"use client";
export default function PricingSection({ data }: { data: any }) {
  if (!data) return null;
  return (
    <section className="py-16 bg-gray-50 border-b border-dashed">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{data.title || "خطط الأسعار"}</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <div className="w-72 h-96 border-2 border-dashed border-primary/20 rounded-2xl flex items-center justify-center text-muted-foreground italic">
            بطاقة سعر (Pricing Card) جاهزة
          </div>
        </div>
      </div>
    </section>
  );
}
