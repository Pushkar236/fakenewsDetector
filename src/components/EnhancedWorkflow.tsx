import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileSearch,
  Globe,
  CheckSquare,
  Brain,
  Search,
  ShieldCheck,
  Database,
  Network,
  Zap,
  Target,
  Filter,
  BarChart3,
  Lock,
  Eye,
  Cpu,
  Activity,
  GitBranch,
  Hash,
} from "lucide-react";

const EnhancedWorkflow = () => {
  const workflowSteps = [
    {
      title: "Content Ingestion",
      processes: [
        { name: "Text Extraction", icon: FileSearch, status: "active" },
        { name: "Image OCR", icon: Eye, status: "completed" },
        { name: "Video Transcription", icon: Activity, status: "pending" },
        { name: "Metadata Analysis", icon: Hash, status: "completed" },
      ],
    },
    {
      title: "Source Verification",
      processes: [
        { name: "Domain Reputation", icon: Globe, status: "active" },
        { name: "SSL Certificate Check", icon: Lock, status: "completed" },
        { name: "WHOIS Lookup", icon: Database, status: "active" },
        { name: "Historical Analysis", icon: BarChart3, status: "pending" },
      ],
    },
    {
      title: "Fact Cross-Reference",
      processes: [
        { name: "Wikipedia API", icon: CheckSquare, status: "active" },
        { name: "Reuters Fact Check", icon: Target, status: "completed" },
        { name: "Snopes Integration", icon: Filter, status: "active" },
        { name: "PolitiFact Query", icon: Search, status: "pending" },
      ],
    },
    {
      title: "AI Analysis Engine",
      processes: [
        { name: "NLP Processing", icon: Brain, status: "active" },
        { name: "Sentiment Analysis", icon: Activity, status: "active" },
        { name: "Pattern Recognition", icon: Network, status: "completed" },
        { name: "ML Classification", icon: Cpu, status: "active" },
      ],
    },
    {
      title: "Deep Learning Verification",
      processes: [
        { name: "Neural Network", icon: GitBranch, status: "active" },
        { name: "Image Forensics", icon: Eye, status: "pending" },
        { name: "Deepfake Detection", icon: Zap, status: "active" },
        { name: "Behavioral Analysis", icon: Brain, status: "completed" },
      ],
    },
    {
      title: "Final Assessment",
      processes: [
        { name: "Confidence Scoring", icon: BarChart3, status: "active" },
        { name: "Risk Assessment", icon: ShieldCheck, status: "pending" },
        { name: "Report Generation", icon: FileSearch, status: "pending" },
        { name: "Quality Assurance", icon: CheckSquare, status: "pending" },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-500 bg-green-100 dark:bg-green-900/20";
      case "active":
        return "text-blue-500 bg-blue-100 dark:bg-blue-900/20 animate-pulse";
      case "pending":
        return "text-gray-400 bg-gray-100 dark:bg-gray-800";
      default:
        return "text-gray-400 bg-gray-100 dark:bg-gray-800";
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
          Real-time Analysis Workflow
        </h2>
        <p className="text-muted-foreground">
          Advanced AI systems working simultaneously to verify your content
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {workflowSteps.map((step, stepIndex) => (
          <Card
            key={stepIndex}
            className="border border-border/50 bg-card/50 backdrop-blur-sm"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {step.processes.map((process, processIndex) => (
                <div
                  key={processIndex}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${getStatusColor(
                    process.status
                  )}`}
                >
                  <process.icon className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm font-medium">{process.name}</span>
                  {process.status === "active" && (
                    <div className="ml-auto flex space-x-1">
                      <div className="w-1 h-1 bg-current rounded-full animate-bounce"></div>
                      <div
                        className="w-1 h-1 bg-current rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-current rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  )}
                  {process.status === "completed" && (
                    <div className="ml-auto">
                      <CheckSquare className="h-3 w-3" />
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Status */}
      <Card className="mt-8 border border-border/50 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                24
              </div>
              <div className="text-sm text-muted-foreground">
                Active Processes
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
                8
              </div>
              <div className="text-sm text-muted-foreground">AI Models</div>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                156
              </div>
              <div className="text-sm text-muted-foreground">Data Sources</div>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
                99.7%
              </div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedWorkflow;
