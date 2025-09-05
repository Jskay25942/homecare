import { Button } from "@/components/ui/button"
import { Heart, Stethoscope, Home, Users } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Heart,
      title: "Elderly Care",
      description: "Compassionate support for daily activities, medication management, and companionship for seniors.",
      features: ["Personal care assistance", "Meal preparation", "Companionship", "Safety monitoring"],
    },
    {
      icon: Stethoscope,
      title: "Medical Assistance",
      description: "Professional medical support including medication management and health monitoring.",
      features: ["Medication reminders", "Vital signs monitoring", "Post-surgery care", "Chronic condition management"],
    },
    {
      icon: Home,
      title: "Housekeeping",
      description: "Light housekeeping services to maintain a clean and comfortable living environment.",
      features: ["Light cleaning", "Laundry assistance", "Grocery shopping", "Home organization"],
    },
    {
      icon: Users,
      title: "Special Needs Care",
      description: "Specialized care for individuals with disabilities or unique medical requirements.",
      features: ["Disability support", "Behavioral assistance", "Mobility help", "Specialized therapies"],
    },
  ]

  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Care Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive homecare solutions tailored to meet your family's unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-pretty">{service.description}</p>
                  </div>

                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button size="sm" className="mt-4">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
