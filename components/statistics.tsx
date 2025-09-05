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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-gray-900">Why Families Trust Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Our commitment to excellence shows in every aspect of our care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">{stat.title}</h3>
              <p className="text-sm text-gray-600 text-pretty">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}