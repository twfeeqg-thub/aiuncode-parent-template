"use client";
import { Button } from "@/components/ui/button";
export default function CTASection({ data }: { data: any }) {
  if (!data) return null;
  return (
    <section className="py-12 bg-primary text-primary-foreground text-center">
      <h2 className="text-2xl font-bold mb-6">{data.title || "اتخذ قرارك الآن"}</h2>
      <Button variant="secondary" size="lg" className="font-bold">ابدأ التجربة الآن</Button>
    </section>
  );
}
