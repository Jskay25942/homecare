import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "How do I book a caregiver?",
      answer:
        "Booking is simple! You can call us directly, fill out our online form, or schedule a consultation. We'll assess your needs and match you with the perfect caregiver within 24-48 hours.",
    },
    {
      question: "Are all caregivers certified and background-checked?",
      answer:
        "Yes, absolutely. All our caregivers undergo thorough background checks, reference verification, and hold relevant certifications. We also provide ongoing training to ensure the highest quality of care.",
    },
    {
      question: "Do you provide emergency services?",
      answer:
        "Yes, we offer 24/7 emergency care services. Our on-call team is available around the clock to provide immediate assistance when you need it most.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We currently serve 3+ districts in the region. Contact us to confirm if we provide services in your specific area - we're always expanding our coverage.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our pricing varies based on the type and duration of care needed. We offer competitive rates and flexible payment options. Contact us for a personalized quote based on your specific requirements.",
    },
    {
      question: "Can I request the same caregiver each time?",
      answer:
        "Yes! We understand the importance of consistency in care. We do our best to assign the same caregiver for ongoing services to build trust and familiarity with your loved one.",
    },
  ]

  return (
    <section id="faq" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Find answers to common questions about our homecare services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-pretty">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground text-pretty">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
