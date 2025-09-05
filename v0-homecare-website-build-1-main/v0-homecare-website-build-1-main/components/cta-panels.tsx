import { Button } from "@/components/ui/button"
import { ArrowRight, UserPlus } from "lucide-react"

export function CTAPanels() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* For Families Panel */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3">For Families</h3>
                <p className="text-muted-foreground text-pretty">
                  Find the perfect caregiver for your loved one. Our compassionate professionals provide personalized
                  care in the comfort of home.
                </p>
              </div>

              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Personalized care plans
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Background-checked caregivers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Flexible scheduling
                </li>
              </ul>

              <Button className="w-full sm:w-auto">
                Book Care Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* For Caregivers Panel */}
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-8 border">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3">For Caregivers</h3>
                <p className="text-muted-foreground text-pretty">
                  Join our team of dedicated professionals. Make a meaningful difference in people's lives while
                  building a rewarding career.
                </p>
              </div>

              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  Competitive compensation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  Ongoing training & support
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  Flexible work arrangements
                </li>
              </ul>

              <Button
                variant="outline"
                className="w-full sm:w-auto border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                Join Our Team
                <UserPlus className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
