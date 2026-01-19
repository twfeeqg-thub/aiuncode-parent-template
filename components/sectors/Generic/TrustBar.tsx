"use client";
export default function TrustBar({ data }: { data: any }) {
  if (!data) return null;
  return (
    <section className="py-8 bg-white border-b border-dashed opacity-50 grayscale">
      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-12 items-center text-muted-foreground font-bold">
        <span>LOGO 1</span> <span>LOGO 2</span> <span>LOGO 3</span> <span>LOGO 4</span>
      </div>
    </section>
  );
}
