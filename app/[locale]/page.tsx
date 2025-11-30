import { Hero } from "@/components/home/Hero";
import { StatsCounter } from "@/components/home/StatsCounter";
import { ServiceCarousel } from "@/components/home/ServiceCarousel";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen">
      <Hero locale={locale} />
      <StatsCounter />
      <ServiceCarousel />
    </div>
  );
}

