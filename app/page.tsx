import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Users, Clock, Settings, Award, Bot, Wrench, Target, BarChart3 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            IT Service Excellence Platform
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-card-foreground">
            Ways to Improve IT Service Delivery
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            Practical ideas to make IT service delivery faster, smoother, and more effective. Experience interactive
            demos of productivity tools, automation, and analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/productivity">
                Explore Features <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
              <Link href="/benefits">View Benefits</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Overview Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Transform Your IT Operations</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Discover how modern tools and automation can revolutionize your IT service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Technician Productivity</CardTitle>
                <CardDescription>AI-powered tools and automation to boost efficiency</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/productivity">
                    Explore Tools <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-fit group-hover:bg-secondary/20 transition-colors">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Time Tracking</CardTitle>
                <CardDescription>Smart workload management and automated logging</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/time-tracking">
                    View Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit group-hover:bg-accent/20 transition-colors">
                  <Settings className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Request Handling</CardTitle>
                <CardDescription>Streamlined workflows and intelligent routing</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/requests">
                    See Automation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-chart-4/10 rounded-full w-fit group-hover:bg-chart-4/20 transition-colors">
                  <Award className="h-8 w-8 text-chart-4" />
                </div>
                <CardTitle className="text-xl">Proven Benefits</CardTitle>
                <CardDescription>Measurable improvements in efficiency and satisfaction</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/benefits">
                    View Results <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Highlight */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-balance">Experience Interactive Demos</h3>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Every feature on this platform includes working demonstrations with real data. Click through AI
                assistants, automation workflows, and analytics dashboards to see exactly how these tools can transform
                your IT operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">AI-powered troubleshooting assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-secondary/10 rounded-full">
                    <Wrench className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="font-medium">Automated script libraries and tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent/10 rounded-full">
                    <Target className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-medium">Smart ticket routing and prioritization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-chart-4/10 rounded-full">
                    <BarChart3 className="h-5 w-5 text-chart-4" />
                  </div>
                  <span className="font-medium">Real-time analytics and insights</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card border rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-card-foreground">Live Demo Preview</h4>
                  <Badge variant="secondary">Interactive</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-md">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    <span className="text-sm">AI analyzing ticket: "Printer not working"</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-md">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Auto-routing to Network Specialist</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-md">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Estimated resolution: 15 minutes</span>
                  </div>
                </div>
                <Button className="w-full mt-4" asChild>
                  <Link href="/productivity">Try Interactive Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
