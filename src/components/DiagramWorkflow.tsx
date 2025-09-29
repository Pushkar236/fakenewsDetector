import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FileText, 
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
  ArrowRight,
  Smartphone,
  Eye,
  Activity,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Hash,
  MessageSquare,
  Rss,
  Newspaper,
  Radio,
  Tv,
  Wifi,
  Server,
  Cloud,
  Cpu,
  HardDrive,
  Monitor,
  Link,
  Users,
  TrendingUp,
  AlertTriangle,
  Lock,
  Key,
  Fingerprint,
  ScanLine,
  GitBranch,
  Layers,
  Code,
  Binary,
  Webhook,
  Settings,
  Cog,
  Wrench,
  Hammer,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  RefreshCw,
  Download,
  Upload,
  Send,
  Share2,
  BookOpen,
  FileCheck,
  FileX,
  Flag,
  Bell,
  Zap as Lightning,
  Microscope,
  Crosshair,
  Radar,
  Satellite,
  Router,
  Gamepad2,
  PhoneCall,
  Mail,
  Globe as Browser1,
  Monitor as Browser2,
  Smartphone as Browser3
} from 'lucide-react';

const DiagramWorkflow = () => {
  const workflowSteps = [
    {
      id: 'input',
      title: 'LATEST NEWS',
      icon: FileText,
      position: { top: '50%', left: '5%' },
      color: 'bg-red-500',
      connections: ['analysis']
    },
    {
      id: 'analysis',
      title: 'AI ANALYSIS',
      icon: Brain,
      position: { top: '30%', left: '25%' },
      color: 'bg-blue-500',
      connections: ['verification', 'sources']
    },
    {
      id: 'verification',
      title: 'FACT CHECK',
      icon: CheckSquare,
      position: { top: '10%', left: '45%' },
      color: 'bg-green-500',
      connections: ['mobile']
    },
    {
      id: 'sources',
      title: 'SOURCE VERIFY',
      icon: Globe,
      position: { top: '50%', left: '45%' },
      color: 'bg-purple-500',
      connections: ['mobile']
    },
    {
      id: 'mobile',
      title: 'MOBILE APP',
      icon: Smartphone,
      position: { top: '30%', left: '65%' },
      color: 'bg-gray-700',
      connections: ['result']
    },
    {
      id: 'result',
      title: 'RESULT',
      icon: BarChart3,
      position: { top: '30%', left: '85%' },
      color: 'bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500',
      connections: []
    }
  ];

  const socialMediaIcons = [
    { icon: Twitter, top: '15%', left: '12%', color: 'text-blue-400' },
    { icon: Facebook, top: '25%', left: '8%', color: 'text-blue-600' },
    { icon: Instagram, top: '35%', left: '15%', color: 'text-pink-500' },
    { icon: Youtube, top: '45%', left: '10%', color: 'text-red-500' },
    { icon: Hash, top: '55%', left: '18%', color: 'text-blue-400' },
    { icon: MessageSquare, top: '65%', left: '12%', color: 'text-green-500' },
    { icon: Rss, top: '75%', left: '16%', color: 'text-orange-500' },
    { icon: Radio, top: '85%', left: '10%', color: 'text-purple-500' }
  ];

  const newsSourceIcons = [
    { icon: Newspaper, top: '5%', left: '35%', color: 'text-gray-600 dark:text-gray-300' },
    { icon: Tv, top: '8%', left: '38%', color: 'text-blue-500' },
    { icon: Radio, top: '12%', left: '32%', color: 'text-green-500' },
    { icon: Globe, top: '18%', left: '40%', color: 'text-purple-500' },
    { icon: BookOpen, top: '22%', left: '35%', color: 'text-orange-500' },
    { icon: FileText, top: '28%', left: '38%', color: 'text-red-500' }
  ];

  const apiIcons = [
    { icon: Database, top: '15%', left: '30%', color: 'text-blue-500' },
    { icon: Server, top: '20%', left: '35%', color: 'text-green-500' },
    { icon: Cloud, top: '25%', left: '28%', color: 'text-purple-500' },
    { icon: Network, top: '45%', left: '35%', color: 'text-orange-500' },
    { icon: Wifi, top: '50%', left: '32%', color: 'text-blue-400' },
    { icon: Router, top: '55%', left: '38%', color: 'text-green-400' },
    { icon: Webhook, top: '60%', left: '30%', color: 'text-purple-400' },
    { icon: Link, top: '65%', left: '35%', color: 'text-red-400' }
  ];

  const processingIcons = [
    { icon: Cpu, top: '8%', left: '55%', color: 'text-blue-500' },
    { icon: HardDrive, top: '12%', left: '52%', color: 'text-green-500' },
    { icon: Monitor, top: '16%', left: '58%', color: 'text-purple-500' },
    { icon: Binary, top: '20%', left: '50%', color: 'text-orange-500' },
    { icon: Code, top: '24%', left: '56%', color: 'text-blue-400' },
    { icon: GitBranch, top: '28%', left: '52%', color: 'text-green-400' },
    { icon: Layers, top: '32%', left: '58%', color: 'text-purple-400' },
    { icon: Search, top: '25%', left: '55%', color: 'text-red-400' },
    { icon: Eye, top: '65%', left: '50%', color: 'text-blue-500' },
    { icon: ScanLine, top: '70%', left: '55%', color: 'text-green-500' },
    { icon: Microscope, top: '75%', left: '52%', color: 'text-purple-500' },
    { icon: Crosshair, top: '80%', left: '58%', color: 'text-orange-500' },
    { icon: Radar, top: '85%', left: '53%', color: 'text-blue-400' }
  ];

  const securityIcons = [
    { icon: Lock, top: '40%', left: '52%', color: 'text-red-500' },
    { icon: Key, top: '44%', left: '58%', color: 'text-yellow-500' },
    { icon: Fingerprint, top: '48%', left: '50%', color: 'text-green-500' },
    { icon: ShieldCheck, top: '52%', left: '56%', color: 'text-blue-500' },
    { icon: AlertTriangle, top: '56%', left: '53%', color: 'text-orange-500' },
    { icon: Flag, top: '60%', left: '58%', color: 'text-purple-500' }
  ];

  const systemIcons = [
    { icon: Settings, top: '15%', left: '75%', color: 'text-gray-600 dark:text-gray-300' },
    { icon: Cog, top: '20%', left: '72%', color: 'text-blue-500' },
    { icon: Wrench, top: '25%', left: '78%', color: 'text-green-500' },
    { icon: RefreshCw, top: '35%', left: '75%', color: 'text-purple-500' },
    { icon: Activity, top: '40%', left: '72%', color: 'text-orange-500' },
    { icon: TrendingUp, top: '45%', left: '78%', color: 'text-blue-400' },
    { icon: BarChart3, top: '50%', left: '72%', color: 'text-green-400' },
    { icon: Bell, top: '55%', left: '78%', color: 'text-purple-400' }
  ];

  const communicationIcons = [
    { icon: Send, top: '70%', left: '25%', color: 'text-blue-500' },
    { icon: Share2, top: '75%', left: '28%', color: 'text-green-500' },
    { icon: Mail, top: '80%', left: '22%', color: 'text-purple-500' },
    { icon: PhoneCall, top: '85%', left: '26%', color: 'text-orange-500' },
    { icon: Download, top: '72%', left: '32%', color: 'text-blue-400' },
    { icon: Upload, top: '78%', left: '35%', color: 'text-green-400' }
  ];

  const browserIcons = [
    { icon: Browser1, top: '90%', left: '45%', color: 'text-blue-500' },
    { icon: Browser2, top: '88%', left: '48%', color: 'text-orange-500' },
    { icon: Browser3, top: '92%', left: '52%', color: 'text-blue-400' }
  ];

  const allSubProcesses = [
    ...socialMediaIcons,
    ...newsSourceIcons,
    ...apiIcons,
    ...processingIcons,
    ...securityIcons,
    ...systemIcons,
    ...communicationIcons,
    ...browserIcons
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 bg-clip-text text-transparent mb-4">
          AI Detection Workflow
        </h2>
        <p className="text-muted-foreground">
          Comprehensive analysis pipeline processing your content through multiple verification layers
        </p>
      </div>

      {/* Main Workflow Diagram */}
      <Card className="relative h-96 mb-8 border-0 shadow-xl bg-card/50 backdrop-blur-sm overflow-hidden">
        <CardContent className="p-0 h-full relative">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--muted-foreground))" />
              </marker>
            </defs>
            
            {/* Main connection lines */}
            <line x1="15%" y1="50%" x2="22%" y2="35%" 
              stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeDasharray="5,5" 
              markerEnd="url(#arrowhead)" />
            <line x1="30%" y1="30%" x2="40%" y2="15%" 
              stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeDasharray="5,5" 
              markerEnd="url(#arrowhead)" />
            <line x1="30%" y1="35%" x2="40%" y2="50%" 
              stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeDasharray="5,5" 
              markerEnd="url(#arrowhead)" />
            <line x1="52%" y1="30%" x2="60%" y2="30%" 
              stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeDasharray="5,5" 
              markerEnd="url(#arrowhead)" />
            <line x1="72%" y1="30%" x2="80%" y2="30%" 
              stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeDasharray="5,5" 
              markerEnd="url(#arrowhead)" />

            {/* Additional connecting lines for sub-processes */}
            {allSubProcesses.slice(0, 20).map((_, index) => (
              <line
                key={index}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="hsl(var(--muted-foreground))"
                strokeWidth="1"
                strokeDasharray="2,2"
                opacity="0.3"
              />
            ))}
          </svg>

          {/* All Sub-processes (icons scattered throughout) */}
          {allSubProcesses.map((process, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
              style={{ 
                top: process.top, 
                left: process.left,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="bg-background/80 dark:bg-background/90 border-2 border-dashed border-muted-foreground/30 p-1.5 rounded-full hover:scale-110 transition-transform">
                <process.icon className={`h-3 w-3 ${process.color}`} />
              </div>
            </div>
          ))}

          {/* Main workflow steps */}
          {workflowSteps.map((step, index) => (
            <div
              key={step.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ top: step.position.top, left: step.position.left }}
            >
              <div className="text-center">
                <div className={`${step.color} p-4 rounded-xl shadow-lg mb-2 transition-transform duration-300 hover:scale-110`}>
                  <step.icon className="h-6 w-6 text-white mx-auto" />
                </div>
                <div className="bg-background/95 dark:bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium border border-border shadow-sm">
                  {step.title}
                </div>
              </div>
            </div>
          ))}

          {/* Floating Process Labels */}
          <div className="absolute top-2 left-2 bg-background/90 dark:bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium border border-border">
            <span className="text-blue-500">●</span> Social Media APIs
          </div>
          <div className="absolute top-2 right-2 bg-background/90 dark:bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium border border-border">
            <span className="text-green-500">●</span> News Sources
          </div>
          <div className="absolute bottom-2 left-2 bg-background/90 dark:bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium border border-border">
            <span className="text-purple-500">●</span> Security Checks
          </div>
          <div className="absolute bottom-2 right-2 bg-background/90 dark:bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium border border-border">
            <span className="text-orange-500">●</span> Processing Units
          </div>
        </CardContent>
      </Card>

      {/* Real-time Statistics */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Activity className="h-5 w-5 text-blue-500 mr-2 animate-pulse" />
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400">Real-time</div>
            </div>
            <div className="text-sm text-muted-foreground">Processing</div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500/10 to-blue-500/10">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <ShieldCheck className="h-5 w-5 text-green-500 mr-2" />
              <div className="text-xl font-bold text-green-600 dark:text-green-400">99.7%</div>
            </div>
            <div className="text-sm text-muted-foreground">Accuracy</div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500/10 to-green-500/10">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Database className="h-5 w-5 text-purple-500 mr-2" />
              <div className="text-xl font-bold text-purple-600 dark:text-purple-400">287</div>
            </div>
            <div className="text-sm text-muted-foreground">Data Sources</div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-500/10 to-red-500/10">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Zap className="h-5 w-5 text-yellow-500 mr-2" />
              <div className="text-xl font-bold text-yellow-600 dark:text-yellow-400">47</div>
            </div>
            <div className="text-sm text-muted-foreground">AI Models</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DiagramWorkflow;
