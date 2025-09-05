import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Statistics } from "@/components/statistics"
import { CTAPanels } from "@/components/cta-panels"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      <Hero />
      <Statistics />
      <CTAPanels />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
