"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import {
  TrendingUp,
  Clock,
  Users,
  Target,
  Award,
  CheckCircle,
  ArrowUp,
  ArrowDown,
  DollarSign,
  Heart,
  BarChart3,
} from "lucide-react"

const performanceMetrics = [
  { metric: "Average Resolution Time", before: "2.5 hours", after: "45 minutes", improvement: "70%", trend: "down" },
  { metric: "First Call Resolution", before: "65%", after: "89%", improvement: "24%", trend: "up" },
  { metric: "Customer Satisfaction", before: "3.2/5", after: "4.8/5", improvement: "50%", trend: "up" },
  {
    metric: "Technician Productivity",
    before: "12 tickets/day",
    after: "18 tickets/day",
    improvement: "50%",
    trend: "up",
  },
]

const costSavingsData = [
  { category: "Reduced Labor Costs", amount: 125000, percentage: 35 },
  { category: "Automation Savings", amount: 89000, percentage: 25 },
  { category: "Improved Efficiency", amount: 76000, percentage: 21 },
  { category: "Reduced Downtime", amount: 68000, percentage: 19 },
]

const monthlyTrends = [
  { month: "Jan", tickets: 450, satisfaction: 3.2, resolution: 150 },
  { month: "Feb", tickets: 520, satisfaction: 3.5, resolution: 135 },
  { month: "Mar", tickets: 580, satisfaction: 3.8, resolution: 120 },
  { month: "Apr", tickets: 620, satisfaction: 4.1, resolution: 95 },
  { month: "May", tickets: 680, satisfaction: 4.4, resolution: 75 },
  { month: "Jun", tickets: 720, satisfaction: 4.8, resolution: 45 },
]

const satisfactionData = [
  { rating: "Excellent", value: 48, color: "#10b981" },
  { rating: "Good", value: 32, color: "#164e63" },
  { rating: "Average", value: 15, color: "#f59e0b" },
  { rating: "Poor", value: 5, color: "#ef4444" },
]

export default function BenefitsPage() {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null)
  const [showROI, setShowROI] = useState(false)

  const calculateROI = () => {
    setShowROI(true)
    setTimeout(() => setShowROI(false), 5000)
  }

  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-balance">Proven Benefits & Results</h1>
        <p className="text-xl text-muted-foreground text-balance">
          Measurable improvements in efficiency, satisfaction, and cost savings
        </p>
      </div>

      {/* Key Benefits Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-2 border-accent/20 bg-accent/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Faster Resolution</CardTitle>
            <Clock className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">70% Faster</div>
            <p className="text-xs text-muted-foreground">Average ticket resolution time</p>
            <div className="flex items-center space-x-1 mt-2">
              <ArrowDown className="h-3 w-3 text-accent" />
              <span className="text-xs text-accent">2.5h → 45min</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-secondary/20 bg-secondary/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reduced Workload</CardTitle>
            <Users className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">50% More</div>
            <p className="text-xs text-muted-foreground">Tickets handled per technician</p>
            <div className="flex items-center space-x-1 mt-2">
              <ArrowUp className="h-3 w-3 text-secondary" />
              <span className="text-xs text-secondary">12 → 18 tickets/day</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Higher Satisfaction</CardTitle>
            <Heart className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">4.8/5</div>
            <p className="text-xs text-muted-foreground">Customer satisfaction score</p>
            <div className="flex items-center space-x-1 mt-2">
              <ArrowUp className="h-3 w-3 text-primary" />
              <span className="text-xs text-primary">+50% improvement</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-chart-4/20 bg-chart-4/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data-Driven Insights</CardTitle>
            <BarChart3 className="h-4 w-4 text-chart-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-4">Real-time</div>
            <p className="text-xs text-muted-foreground">Analytics and reporting</p>
            <div className="flex items-center space-x-1 mt-2">
              <TrendingUp className="h-3 w-3 text-chart-4" />
              <span className="text-xs text-chart-4">Live dashboards</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Improvements */}
      <Card className="mb-8 border-2">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-accent/10 rounded-full">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <div>
              <CardTitle className="text-2xl">Performance Improvements</CardTitle>
              <CardDescription>Before and after implementation comparison</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {performanceMetrics.map((metric, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedMetric === metric.metric ? "border-primary shadow-lg" : "hover:shadow-md"
                }`}
                onClick={() => setSelectedMetric(selectedMetric === metric.metric ? null : metric.metric)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">{metric.metric}</h4>
                    <div className="flex items-center space-x-1">
                      {metric.trend === "up" ? (
                        <ArrowUp className="h-4 w-4 text-accent" />
                      ) : (
                        <ArrowDown className="h-4 w-4 text-accent" />
                      )}
                      <Badge variant="secondary">{metric.improvement}</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Before</p>
                      <p className="font-medium">{metric.before}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">After</p>
                      <p className="font-medium text-accent">{metric.after}</p>
                    </div>
                  </div>

                  {selectedMetric === metric.metric && (
                    <div className="mt-4 p-3 bg-accent/10 rounded-lg animate-in fade-in duration-300">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium">Key Impact</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {metric.metric === "Average Resolution Time" &&
                          "Automated workflows and AI assistance dramatically reduce time to resolution."}
                        {metric.metric === "First Call Resolution" &&
                          "Better knowledge base and remote tools enable more issues to be resolved immediately."}
                        {metric.metric === "Customer Satisfaction" &&
                          "Faster response times and proactive communication improve user experience."}
                        {metric.metric === "Technician Productivity" &&
                          "Automation handles routine tasks, allowing focus on complex problems."}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Analytics Dashboard */}
      <Card className="mb-8 border-2">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-full">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">Performance Analytics</CardTitle>
              <CardDescription>Track improvements over time with detailed metrics</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="trends" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="trends">Monthly Trends</TabsTrigger>
              <TabsTrigger value="satisfaction">Satisfaction Breakdown</TabsTrigger>
              <TabsTrigger value="costs">Cost Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="trends" className="space-y-6">
              <div>
                <h4 className="font-medium mb-4">6-Month Performance Trends</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="tickets"
                      stroke="#10b981"
                      strokeWidth={2}
                      name="Tickets Resolved"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="satisfaction"
                      stroke="#164e63"
                      strokeWidth={2}
                      name="Satisfaction Score"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="resolution"
                      stroke="#f59e0b"
                      strokeWidth={2}
                      name="Avg Resolution (min)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="satisfaction" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-4">Customer Satisfaction Distribution</h4>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={satisfactionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {satisfactionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Satisfaction Breakdown</h4>
                  <div className="space-y-4">
                    {satisfactionData.map((item) => (
                      <div key={item.rating} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                            <span className="text-sm font-medium">{item.rating}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{item.value}%</span>
                        </div>
                        <Progress value={item.value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="costs" className="space-y-6">
              <div>
                <h4 className="font-medium mb-4">Annual Cost Savings Breakdown</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={costSavingsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Savings"]} />
                    <Bar dataKey="amount" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Total Annual Savings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-accent mb-2">$358,000</div>
                    <p className="text-sm text-muted-foreground">Across all improvement categories</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">ROI Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">6 months</div>
                    <p className="text-sm text-muted-foreground">Break-even point for implementation</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* ROI Calculator */}
      <Card className="border-2">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-chart-4/10 rounded-full">
              <DollarSign className="h-6 w-6 text-chart-4" />
            </div>
            <div>
              <CardTitle className="text-2xl">Return on Investment</CardTitle>
              <CardDescription>Calculate potential savings for your organization</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Implementation Cost</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-muted-foreground mb-2">$75,000</div>
                <p className="text-sm text-muted-foreground">One-time setup and training</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Annual Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent mb-2">$358,000</div>
                <p className="text-sm text-muted-foreground">Ongoing operational savings</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Net ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">377%</div>
                <p className="text-sm text-muted-foreground">First year return</p>
              </CardContent>
            </Card>
          </div>

          {showROI && (
            <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-l-primary animate-in fade-in duration-500">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <span className="text-lg font-medium">ROI Calculation Complete</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium mb-2">Investment Breakdown</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Platform licensing: $35,000</li>
                    <li>• Implementation services: $25,000</li>
                    <li>• Training and onboarding: $15,000</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Savings Projection</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Year 1: $358,000 (377% ROI)</li>
                    <li>• Year 2: $425,000 (467% ROI)</li>
                    <li>• Year 3: $485,000 (547% ROI)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          <Button onClick={calculateROI} disabled={showROI} className="w-full" size="lg">
            {showROI ? "Calculating ROI..." : "Calculate Your ROI"}
            <DollarSign className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
