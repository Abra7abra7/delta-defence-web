import { Timeline } from "@/components/about/Timeline";
import { Certifications } from "@/components/about/Certifications";
import { getTranslations } from "next-intl/server";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations();

  const portfolioItems = [
    t("about.portfolioItems.ammunition"),
    t("about.portfolioItems.vehicles"),
    t("about.portfolioItems.artillery"),
    t("about.portfolioItems.explosives"),
    t("about.portfolioItems.grad"),
    t("about.portfolioItems.automated"),
    t("about.portfolioItems.modernization"),
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-mono tactical-glow">
              {t("about.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.history")}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline locale={locale} />

      {/* Acquisitions & Portfolio */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="glassmorphic p-8 rounded-lg border">
              <h3 className="text-2xl font-bold font-mono mb-4 text-tactical-green">
                Strategic Acquisitions
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.acquisitions")}
              </p>
            </div>

            <div className="glassmorphic p-8 rounded-lg border">
              <h3 className="text-2xl font-bold font-mono mb-4 text-tactical-green">
                {t("about.portfolio")}
              </h3>
              <div className="space-y-4">
                {portfolioItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-tactical-green flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <Certifications />
    </div>
  );
}


