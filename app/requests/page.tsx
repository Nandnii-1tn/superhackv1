"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Globe,
  MessageSquare,
  ArrowUpDown,
  Workflow,
  Send,
  CheckCircle,
  Clock,
  User,
  Laptop,
  Shield,
  Headphones,
} from "lucide-react"

const priorityRequests = [
  {
    id: "REQ-001",
    title: "CEO laptop replacement",
    requester: "Sarah Johnson (CEO)",
    priority: "Critical",
    status: "In Progress",
    sla: "2 hours",
    timeRemaining: "45 min",
    assignee: "John Smith",
  },
  {
    id: "REQ-002",
    title: "New employee setup",
    requester: "HR Department",
    priority: "High",
    status: "Approved",
    sla: "4 hours",
    timeRemaining: "2h 15min",
    assignee: "Lisa Chen",
  },
  {
    id: "REQ-003",
    title: "Software license renewal",
    requester: "Finance Team",
    priority: "Medium",
    status: "Pending Approval",
    sla: "24 hours",
    timeRemaining: "18h 30min",
    assignee: "Auto-assigned",
  },
  {
    id: "REQ-004",
    title: "Password reset",
    requester: "Marketing Team",
    priority: "Low",
    status: "Completed",
    sla: "1 hour",
    timeRemaining: "Completed",
    assignee: "Automated",
  },
]

const automationSteps = [
  { step: 1, title: "Request Submitted", status: "completed", description: "User submits laptop request" },
  { step: 2, title: "Auto-Approval", status: "completed", description: "Manager approval via workflow" },
  { step: 3, title: "Procurement", status: "completed", description: "Laptop ordered from vendor" },
  { step: 4, title: "Configuration", status: "in-progress", description: "Installing software and security" },
  { step: 5, title: "Delivery", status: "pending", description: "Schedule delivery to user" },
  { step: 6, title: "Ticket Closure", status: "pending", description: "Confirm receipt and close ticket" },
]

export default function RequestsPage() {
  const [chatMessages, setChatMessages] = useState([
    { type: "bot", message: "Hi! I'm here to help with your IT requests. What can I assist you with today?" },
  ])
  const [chatInput, setChatInput] = useState("")
  const [selfServiceDemo, setSelfServiceDemo] = useState(false)
  const [automationProgress, setAutomationProgress] = useState(60)

  const sendChatMessage = () => {
    if (!chatInput.trim()) return

    setChatMessages((prev) => [...prev, { type: "user", message: chatInput }])

    // Simulate bot response
    setTimeout(() => {
      let botResponse = ""
      if (chatInput.toLowerCase().includes("password")) {
        botResponse = "I can help you reset your password. Please verify your identity by providing your employee ID."
      } else if (chatInput.toLowerCase().includes("software")) {
        botResponse = "For software requests, I can help you with installations. What software do you need?"
      } else {
        botResponse = "I understand you need help. Let me connect you with the right specialist for your request."
      }

      setChatMessages((prev) => [...prev, { type: "bot", message: botResponse }])
    }, 1000)

    setChatInput("")
  }

  const startSelfServiceDemo = () => {
    setSelfServiceDemo(true)
    setTimeout(() => setSelfServiceDemo(false), 4000)
  }

  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-balance">Service Request Management</h1>
        <p className="text-xl text-muted-foreground text-balance">
          Streamlined workflows, intelligent routing, and automated fulfillment
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Self-Service Portal */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl">Self-Service Portal</CardTitle>
                <CardDescription>Empower users to resolve common issues independently</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-sm">Reset Password</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <Laptop className="h-6 w-6 text-secondary" />
                <span className="text-sm">Request Software</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <User className="h-6 w-6 text-accent" />
                <span className="text-sm">New User Setup</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <Headphones className="h-6 w-6 text-chart-4" />
                <span className="text-sm">Report Issue</span>
              </Button>
            </div>

            {selfServiceDemo && (
              <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-l-accent animate-in fade-in duration-500">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="font-medium">Password Reset Successful</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your password has been reset and sent to your registered email address. You can now log in with your
                  new credentials.
                </p>
              </div>
            )}

            <Button onClick={startSelfServiceDemo} disabled={selfServiceDemo} className="w-full">
              {selfServiceDemo ? "Processing..." : "Try Password Reset Demo"}
              <Shield className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Chatbot Assistant */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-secondary/10 rounded-full">
                <MessageSquare className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <CardTitle className="text-xl">AI Chatbot Assistant</CardTitle>
                <CardDescription>Get instant help and guidance 24/7</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg h-64 overflow-y-auto space-y-3">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      msg.type === "user" ? "bg-primary text-primary-foreground" : "bg-card border text-card-foreground"
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-2">
              <Input
                placeholder="Type your question..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendChatMessage()}
              />
              <Button onClick={sendChatMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setChatInput("How do I reset my password?")}
                className="text-xs"
              >
                Password help
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setChatInput("I need software installed")}
                className="text-xs"
              >
                Software request
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setChatInput("My computer is running slow")}
                className="text-xs"
              >
                Performance issue
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SLA-Based Prioritization */}
      <Card className="mt-8 border-2">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-accent/10 rounded-full">
              <ArrowUpDown className="h-6 w-6 text-accent" />
            </div>
            <div>
              <CardTitle className="text-2xl">SLA-Based Request Prioritization</CardTitle>
              <CardDescription>Intelligent routing based on urgency and service level agreements</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {priorityRequests.map((request) => (
              <Card key={request.id} className="border-l-4 border-l-primary/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Badge
                        variant={
                          request.priority === "Critical"
                            ? "destructive"
                            : request.priority === "High"
                              ? "default"
                              : request.priority === "Medium"
                                ? "secondary"
                                : "outline"
                        }
                      >
                        {request.priority}
                      </Badge>
                      <span className="font-medium">{request.id}</span>
                      <Badge
                        variant="outline"
                        className={
                          request.status === "Completed"
                            ? "border-accent text-accent"
                            : request.status === "In Progress"
                              ? "border-secondary text-secondary"
                              : "border-muted-foreground text-muted-foreground"
                        }
                      >
                        {request.status}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">SLA: {request.sla}</p>
                      <p className="text-xs text-muted-foreground">{request.timeRemaining}</p>
                    </div>
                  </div>

                  <h4 className="font-medium mb-2">{request.title}</h4>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{request.requester}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>Assigned to:</span>
                      <span className="font-medium">{request.assignee}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* End-to-End Automation */}
      <Card className="mt-8 border-2">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-chart-4/10 rounded-full">
              <Workflow className="h-6 w-6 text-chart-4" />
            </div>
            <div>
              <CardTitle className="text-2xl">End-to-End Automation Workflow</CardTitle>
              <CardDescription>Complete automation from request to fulfillment</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="workflow" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="workflow">Automation Flow</TabsTrigger>
              <TabsTrigger value="create">Create Request</TabsTrigger>
            </TabsList>

            <TabsContent value="workflow" className="space-y-6">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">Live Example: Laptop Request Automation</h4>
                  <Badge variant="secondary">60% Complete</Badge>
                </div>
                <Progress value={automationProgress} className="mb-4" />
              </div>

              <div className="space-y-4">
                {automationSteps.map((step) => (
                  <div key={step.step} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          step.status === "completed"
                            ? "bg-accent text-accent-foreground"
                            : step.status === "in-progress"
                              ? "bg-secondary text-secondary-foreground"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {step.status === "completed" ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : step.status === "in-progress" ? (
                          <Clock className="h-4 w-4" />
                        ) : (
                          step.step
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium">{step.title}</h5>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                      {step.status === "in-progress" && (
                        <div className="flex items-center space-x-2 mt-2">
                          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                          <span className="text-xs text-secondary">Currently processing...</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="create" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="request-type">Request Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select request type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hardware">Hardware Request</SelectItem>
                        <SelectItem value="software">Software Installation</SelectItem>
                        <SelectItem value="access">Access Request</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="priority">Priority Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="title">Request Title</Label>
                    <Input id="title" placeholder="Brief description of your request" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="description">Detailed Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide detailed information about your request..."
                      className="h-32"
                    />
                  </div>

                  <div>
                    <Label htmlFor="business-justification">Business Justification</Label>
                    <Textarea
                      id="business-justification"
                      placeholder="Explain why this request is needed..."
                      className="h-20"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Workflow className="h-5 w-5 text-accent" />
                  <span className="font-medium">Automation Preview</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  This request will be automatically routed to the appropriate team, approved based on your role and
                  request type, and tracked through completion with real-time updates.
                </p>
              </div>

              <Button className="w-full" size="lg">
                Submit Request
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
