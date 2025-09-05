import { Shield, Clock, MapPin, Star } from "lucide-react"

export function Statistics() {
  const stats = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock care when you need it most",
    },
    {
      icon: Star,
      title: "98% Client Satisfaction",
      description: "Consistently rated excellent by our families",
    },
    {
      icon: MapPin,
      title: "Coverage in 3+ Districts",
      description: "Serving communities across the region",
    },
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description: "Complete peace of mind for your family",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Families Trust Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our commitment to excellence shows in every aspect of our care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-lg p-6 text-center border hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{stat.title}</h3>
              <p className="text-sm text-muted-foreground text-pretty">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
