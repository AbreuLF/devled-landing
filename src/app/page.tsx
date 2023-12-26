import { CompanyBanner } from "@/components/company-banner";
import { CTABanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PartnerBanner } from "@/components/partner-banner";

export default function Web() {
  return (
    <main>
      <section className="bg-hero bg-cover bg-no-repeat">
        <div className="mx-6 md:mx-24">
          <section>
            <Header />
            <Hero />
          </section>
        </div>
      </section>
      <section>
        <CompanyBanner />
        <PartnerBanner />
        <CTABanner />
      </section>
      <Footer />
    </main>
  );
}
