"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { Clock, BarChart3, Focus, Brain, Timer, TrendingUp, Users, CheckCircle, AlertTriangle } from "lucide-react"

const workloadData = [
  { category: "Password Resets", hours: 32, percentage: 40, color: "#10b981" },
  { category: "Software Installs", hours: 24, percentage: 30, color: "#164e63" },
  { category: "Hardware Issues", hours: 16, percentage: 20, color: "#f59e0b" },
  { category: "Network Problems", hours: 8, percentage: 10, color: "#ef4444" },
]

const weeklyData = [
  { day: "Mon", hours: 7.5, tickets: 12 },
  { day: "Tue", hours: 8.2, tickets: 15 },
  { day: "Wed", hours: 6.8, tickets: 9 },
  { day: "Thu", hours: 8.5, tickets: 18 },
  { day: "Fri", hours: 7.1, tickets: 11 },
]

const recentTickets = [
  { id: "T-156", task: "Install Office 365", timeLogged: "45 min", status: "completed", auto: true },
  { id: "T-157", task: "Fix printer driver", timeLogged: "23 min", status: "completed", auto: true },
  { id: "T-158", task: "Password reset", timeLogged: "5 min", status: "completed", auto: true },
  { id: "T-159", task: "Network troubleshooting", timeLogged: "1h 15min", status: "in-progress", auto: false },
]

export default function TimeTrackingPage() {
  const [focusMode, setFocusMode] = useState(false)
  const [autoLogging, setAutoLogging] = useState(true)
  const [estimationDemo, setEstimationDemo] = useState(false)

  const toggleFocusMode = () => {
    setFocusMode(!focusMode)
  }

  const showEstimation = () => {
    setEstimationDemo(true)
    setTimeout(() => setEstimationDemo(false), 3000)
  }

  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-balance">Time Tracking & Management</h1>
        <p className="text-xl text-muted-foreground text-balance">
          Automated logging, workload analytics, and intelligent time estimation
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.2h</div>
            <p className="text-xs text-muted-foreground">+0.5h from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tickets Resolved</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14</div>
            <p className="text-xs text-muted-foreground">+2 from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Resolution</CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">31min</div>
            <p className="text-xs text-muted-foreground">-5min improvement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Efficiency Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">+3% this week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Auto Time Logging */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Auto Time Logging</CardTitle>
                  <CardDescription>Automatically track time spent on tickets</CardDescription>
                </div>
              </div>
              <Switch checked={autoLogging} onCheckedChange={setAutoLogging} />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Recent Auto-Logged Activities</h4>
              <div className="space-y-3">
                {recentTickets.map((ticket) => (
                  <div key={ticket.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {ticket.id}
                        </Badge>
                        {ticket.auto && (
                          <Badge variant="secondary" className="text-xs">
                            Auto
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{ticket.task}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{ticket.timeLogged}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        {ticket.status === "completed" ? (
                          <CheckCircle className="h-3 w-3 text-accent" />
                        ) : (
                          <AlertTriangle className="h-3 w-3 text-secondary" />
                        )}
                        <span className="text-xs text-muted-foreground capitalize">{ticket.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Currently tracking: Network troubleshooting</span>
              </div>
              <Badge variant="secondary">1h 15min</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Focus Mode */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-secondary/10 rounded-full">
                  <Focus className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Focus Mode</CardTitle>
                  <CardDescription>Minimize distractions during critical tasks</CardDescription>
                </div>
              </div>
              <Switch checked={focusMode} onCheckedChange={toggleFocusMode} />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {focusMode ? (
              <div className="bg-secondary/10 p-4 rounded-lg border-l-4 border-l-secondary">
                <div className="flex items-center space-x-2 mb-2">
                  <Focus className="h-5 w-5 text-secondary" />
                  <span className="font-medium text-secondary">Focus Mode Active</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Email notifications paused</li>
                  <li>• Chat status set to "Do Not Disturb"</li>
                  <li>• Non-critical alerts suppressed</li>
                  <li>• Phone calls redirected to voicemail</li>
                </ul>
                <div className="mt-3 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm">Active for 23 minutes</span>
                </div>
              </div>
            ) : (
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Focus Mode Benefits</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 35% faster task completion</li>
                  <li>• 60% fewer interruptions</li>
                  <li>• Improved work quality</li>
                  <li>• Reduced context switching</li>
                </ul>
              </div>
            )}

            <Button onClick={toggleFocusMode} className="w-full" variant={focusMode ? "destructive" : "default"}>
              {focusMode ? "Disable Focus Mode" : "Enable Focus Mode"}
              <Focus className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Workload Dashboard */}
      <Card className="mt-8 border-2">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-accent/10 rounded-full">
              <BarChart3 className="h-6 w-6 text-accent" />
            </div>
            <div>
              <CardTitle className="text-2xl">Workload Analytics</CardTitle>
              <CardDescription>Understand time distribution across different task types</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="distribution" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="distribution">Task Distribution</TabsTrigger>
              <TabsTrigger value="trends">Weekly Trends</TabsTrigger>
              <TabsTrigger value="efficiency">Efficiency Metrics</TabsTrigger>
            </TabsList>

            <TabsContent value="distribution" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-4">Time Distribution by Category</h4>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={workloadData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="hours"
                      >
                        {workloadData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} hours`, "Time Spent"]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Category Breakdown</h4>
                  <div className="space-y-3">
                    {workloadData.map((item) => (
                      <div key={item.category} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                            <span className="text-sm font-medium">{item.category}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {item.hours}h ({item.percentage}%)
                          </span>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="trends" className="space-y-6">
              <div>
                <h4 className="font-medium mb-4">Weekly Performance Trends</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="hours" stroke="#10b981" strokeWidth={2} name="Hours Worked" />
                    <Line type="monotone" dataKey="tickets" stroke="#164e63" strokeWidth={2} name="Tickets Resolved" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="efficiency" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Resolution Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-accent mb-2">94%</div>
                    <Progress value={94} className="h-2 mb-2" />
                    <p className="text-sm text-muted-foreground">+5% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Avg Response Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">12min</div>
                    <Progress value={78} className="h-2 mb-2" />
                    <p className="text-sm text-muted-foreground">-3min improvement</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Customer Satisfaction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-secondary mb-2">4.8/5</div>
                    <Progress value={96} className="h-2 mb-2" />
                    <p className="text-sm text-muted-foreground">+0.2 from last month</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Effort Estimation AI */}
      <Card className="mt-8 border-2">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-chart-4/10 rounded-full">
              <Brain className="h-6 w-6 text-chart-4" />
            </div>
            <div>
              <CardTitle className="text-2xl">AI Effort Estimation</CardTitle>
              <CardDescription>Get intelligent time estimates for new tasks</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">New Ticket: "Email server migration for Sales team"</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Migrate 25 user mailboxes from old Exchange server to Office 365, including data transfer and user
              training.
            </p>

            {estimationDemo && (
              <div className="space-y-3 animate-in fade-in duration-500">
                <div className="bg-card p-3 rounded border-l-4 border-l-chart-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Brain className="h-4 w-4 text-chart-4" />
                    <span className="text-sm font-medium">AI Analysis Complete</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium">Estimated Time:</p>
                      <p className="text-muted-foreground">6-8 hours</p>
                    </div>
                    <div>
                      <p className="font-medium">Complexity:</p>
                      <p className="text-muted-foreground">Medium-High</p>
                    </div>
                    <div>
                      <p className="font-medium">Similar Tasks:</p>
                      <p className="text-muted-foreground">3 completed</p>
                    </div>
                    <div>
                      <p className="font-medium">Success Rate:</p>
                      <p className="text-muted-foreground">95%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/10 p-3 rounded border-l-4 border-l-secondary">
                  <p className="text-sm font-medium mb-1">Recommended Approach:</p>
                  <ol className="text-sm text-muted-foreground space-y-1">
                    <li>1. Pre-migration assessment (1h)</li>
                    <li>2. Data migration setup (2h)</li>
                    <li>3. User mailbox migration (3h)</li>
                    <li>4. Testing and validation (1h)</li>
                    <li>5. User training session (1h)</li>
                  </ol>
                </div>
              </div>
            )}
          </div>

          <Button onClick={showEstimation} disabled={estimationDemo} className="w-full">
            {estimationDemo ? "AI Analyzing..." : "Get AI Estimation"}
            <Brain className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
