"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Bot, Wrench, Target, Zap, Play, CheckCircle, AlertCircle, User, Clock } from "lucide-react"

const demoTickets = [
  { id: "T-001", title: "Printer not working", priority: "Medium", assignee: "Auto-routing...", status: "analyzing" },
  { id: "T-002", title: "Password reset request", priority: "Low", assignee: "Lisa Chen", status: "resolved" },
  { id: "T-003", title: "CEO laptop issue", priority: "High", assignee: "John Smith", status: "in-progress" },
]

const automatedScripts = [
  { name: "Password Reset", description: "Automatically reset user passwords", executions: 1247, avgTime: "2 min" },
  { name: "Software Installation", description: "Deploy common applications", executions: 892, avgTime: "8 min" },
  { name: "Printer Configuration", description: "Configure network printers", executions: 456, avgTime: "5 min" },
  { name: "VPN Setup", description: "Configure VPN access", executions: 234, avgTime: "12 min" },
]

export default function ProductivityPage() {
  const [aiProgress, setAiProgress] = useState(0)
  const [showAiDemo, setShowAiDemo] = useState(false)
  const [selectedScript, setSelectedScript] = useState<string | null>(null)
  const [routingDemo, setRoutingDemo] = useState(false)

  const startAiDemo = () => {
    setShowAiDemo(true)
    setAiProgress(0)
    const interval = setInterval(() => {
      setAiProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  const runScript = (scriptName: string) => {
    setSelectedScript(scriptName)
    setTimeout(() => setSelectedScript(null), 2000)
  }

  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-balance">Technician Productivity Tools</h1>
        <p className="text-xl text-muted-foreground text-balance">
          AI-powered assistance, automated workflows, and intelligent routing to maximize efficiency
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* AI Co-Pilot Demo */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl">AI Co-Pilot Assistant</CardTitle>
                <CardDescription>Get intelligent troubleshooting suggestions in real-time</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Ticket: Printer not working in Marketing</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                User reports: "The printer shows offline but is plugged in and powered on."
              </p>

              {showAiDemo && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">AI Analysis Progress</span>
                  </div>
                  <Progress value={aiProgress} className="h-2" />

                  {aiProgress >= 30 && (
                    <div className="bg-card p-3 rounded border-l-4 border-l-primary">
                      <p className="text-sm font-medium mb-1">Suggested Steps:</p>
                      <ol className="text-sm text-muted-foreground space-y-1">
                        <li>1. Check network connectivity to printer</li>
                        <li>2. Restart print spooler service</li>
                        <li>3. Update printer drivers if needed</li>
                      </ol>
                    </div>
                  )}

                  {aiProgress >= 70 && (
                    <div className="bg-secondary/10 p-3 rounded border-l-4 border-l-secondary">
                      <p className="text-sm font-medium mb-1">Recommended Script:</p>
                      <p className="text-sm text-muted-foreground">Run "Printer Configuration" automation</p>
                    </div>
                  )}

                  {aiProgress === 100 && (
                    <div className="bg-accent/10 p-3 rounded border-l-4 border-l-accent">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <p className="text-sm font-medium">Estimated Resolution Time: 5 minutes</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <Button onClick={startAiDemo} disabled={showAiDemo} className="w-full">
              {showAiDemo ? "AI Analyzing..." : "Start AI Analysis"}
              <Bot className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Smart Ticket Routing */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-accent/10 rounded-full">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <div>
                <CardTitle className="text-xl">Smart Ticket Routing</CardTitle>
                <CardDescription>Automatically assign tickets to the best available technician</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {demoTickets.map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <Badge
                        variant={
                          ticket.priority === "High"
                            ? "destructive"
                            : ticket.priority === "Medium"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {ticket.priority}
                      </Badge>
                      <span className="text-sm font-medium">{ticket.id}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{ticket.title}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <User className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{ticket.assignee}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {ticket.status === "analyzing" && <AlertCircle className="h-4 w-4 text-primary animate-pulse" />}
                    {ticket.status === "resolved" && <CheckCircle className="h-4 w-4 text-accent" />}
                    {ticket.status === "in-progress" && <Clock className="h-4 w-4 text-secondary" />}
                  </div>
                </div>
              ))}
            </div>

            <Button onClick={() => setRoutingDemo(!routingDemo)} variant="outline" className="w-full mt-4">
              {routingDemo ? "Stop Demo" : "Demo Auto-Routing"}
              <Target className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Automated Scripts Library */}
      <Card className="mt-8 border-2">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-secondary/10 rounded-full">
              <Wrench className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <CardTitle className="text-2xl">Automated Scripts Library</CardTitle>
              <CardDescription>Ready-to-run automation scripts for common IT tasks</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {automatedScripts.map((script) => (
              <Card key={script.name} className="relative">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{script.name}</CardTitle>
                    <Badge variant="outline">{script.avgTime}</Badge>
                  </div>
                  <CardDescription>{script.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">
                      {script.executions.toLocaleString()} executions
                    </span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-xs text-muted-foreground">Active</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => runScript(script.name)}
                    disabled={selectedScript === script.name}
                    className="w-full"
                    size="sm"
                  >
                    {selectedScript === script.name ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Running...
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Run Script
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Remote Fix Tools */}
      <Card className="mt-8 border-2">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-chart-4/10 rounded-full">
              <Zap className="h-6 w-6 text-chart-4" />
            </div>
            <div>
              <CardTitle className="text-2xl">Remote Fix Tools</CardTitle>
              <CardDescription>Deploy fixes and updates without user interruption</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="silent-updates" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="silent-updates">Silent Updates</TabsTrigger>
              <TabsTrigger value="remote-access">Remote Access</TabsTrigger>
              <TabsTrigger value="diagnostics">Diagnostics</TabsTrigger>
            </TabsList>

            <TabsContent value="silent-updates" className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Recent Silent Deployments</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Security patch KB5028166</span>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Adobe Reader update</span>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Chrome browser update</span>
                    <Badge className="bg-secondary text-secondary-foreground">In Progress</Badge>
                  </div>
                </div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">
                    <Zap className="mr-2 h-4 w-4" />
                    Deploy Silent Update
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Silent Update Deployed</DialogTitle>
                    <DialogDescription>
                      Security update has been successfully deployed to 247 workstations without user interruption. All
                      systems will apply changes during next scheduled maintenance window.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2 p-4 bg-accent/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="font-medium">Deployment successful</span>
                  </div>
                </DialogContent>
              </Dialog>
            </TabsContent>

            <TabsContent value="remote-access" className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Active Remote Sessions</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>DESK-001 (Marketing)</span>
                    <Badge variant="destructive">Connected</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>LAPTOP-045 (Sales)</span>
                    <Badge variant="outline">Pending</Badge>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-transparent" variant="outline">
                <Target className="mr-2 h-4 w-4" />
                Initiate Remote Session
              </Button>
            </TabsContent>

            <TabsContent value="diagnostics" className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">System Health Check</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">CPU Usage</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={23} className="w-20 h-2" />
                      <span className="text-sm text-muted-foreground">23%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Memory Usage</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={67} className="w-20 h-2" />
                      <span className="text-sm text-muted-foreground">67%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Disk Space</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={45} className="w-20 h-2" />
                      <span className="text-sm text-muted-foreground">45%</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-transparent" variant="outline">
                <AlertCircle className="mr-2 h-4 w-4" />
                Run Full Diagnostic
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
