import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileSearch,
  Link,
  Send,
  Loader2,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  Globe,
  Brain,
  Shield,
  BarChart3,
} from "lucide-react";
import EnhancedWorkflow from "@/components/EnhancedWorkflow";
import AnalysisWorkflow from "@/components/AnalysisWorkflow";
import { toast } from "sonner";
import { GeminiAnalysisService, AnalysisResult } from "@/lib/gemini-service";

const NewsCheckDetector = () => {
  const [inputText, setInputText] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [activeTab, setActiveTab] = useState("text");

  const analysisSteps = [
    "Processing Input",
    "Source Verification",
    "Fact Checking",
    "AI Analysis",
    "Generating Report",
  ];

  const geminiService = new GeminiAnalysisService();

  const handleAnalysis = async () => {
    const content = activeTab === "text" ? inputText : inputUrl;

    if (!content.trim()) {
      toast.error("Please enter content to analyze");
      return;
    }

    setIsAnalyzing(true);
    setCurrentStep(0);
    setResult(null);

    try {
      // Simulate step progression
      for (let i = 0; i < analysisSteps.length; i++) {
        setCurrentStep(i);
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      let analysisResult: AnalysisResult;
      if (activeTab === "url") {
        analysisResult = await geminiService.analyzeUrl(content);
      } else {
        analysisResult = await geminiService.analyzeContent(content);
      }

      setResult(analysisResult);
      
      // Check if this was a fallback analysis (lower confidence typically indicates fallback)
      if (analysisResult.confidence < 70 && analysisResult.reasoning.includes('basic') || analysisResult.reasoning.includes('heuristic')) {
        toast.success("Analysis completed using local algorithms!", {
          description: "AI service unavailable, used pattern-based analysis"
        });
      } else {
        toast.success("Analysis completed successfully!");
      }
    } catch (error) {
      console.error("Analysis failed:", error);
      toast.error("Analysis failed. Using fallback analysis...");
      
      // Even on error, try to provide fallback analysis
      try {
        const fallbackResult = await geminiService.analyzeContent(content);
        setResult(fallbackResult);
        toast.info("Fallback analysis provided", {
          description: "Basic pattern analysis completed"
        });
      } catch (fallbackError) {
        toast.error("All analysis methods failed. Please try again.");
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case "TRUE":
        return "bg-green-100 text-green-800 border-green-200";
      case "FALSE":
        return "bg-red-100 text-red-800 border-red-200";
      case "MIXED":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "UNVERIFIED":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case "TRUE":
        return <CheckCircle className="h-4 w-4" />;
      case "FALSE":
        return <XCircle className="h-4 w-4" />;
      case "MIXED":
        return <AlertTriangle className="h-4 w-4" />;
      case "UNVERIFIED":
        return <Info className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
          AI-Powered Fact Verification
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Advanced artificial intelligence to detect misinformation, verify
          facts, and protect you from fake news.
        </p>
        
        {/* API Status Notice */}
        <div className="mt-4 max-w-lg mx-auto">
          <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-sm text-blue-800 dark:text-blue-200">
              Using intelligent pattern analysis with AI enhancement. Results may use local algorithms when cloud AI is unavailable.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Input Section */}
      <Card className="border-2 border-dashed border-border hover:border-primary/50 transition-colors">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Content Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="text" className="flex items-center gap-2">
                <FileSearch className="h-4 w-4" />
                Text Analysis
              </TabsTrigger>
              <TabsTrigger value="url" className="flex items-center gap-2">
                <Link className="h-4 w-4" />
                URL Analysis
              </TabsTrigger>
            </TabsList>

            <TabsContent value="text" className="space-y-4">
              <div>
                <Label htmlFor="text-input">Enter text to analyze</Label>
                <Textarea
                  id="text-input"
                  placeholder="Paste the content you want to fact-check here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  rows={6}
                  className="mt-2"
                />
              </div>
            </TabsContent>

            <TabsContent value="url" className="space-y-4">
              <div>
                <Label htmlFor="url-input">Enter URL to analyze</Label>
                <Input
                  id="url-input"
                  type="url"
                  placeholder="https://example.com/article"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="mt-2"
                />
              </div>
            </TabsContent>
          </Tabs>

          <Button
            onClick={handleAnalysis}
            disabled={isAnalyzing}
            className="w-full mt-4"
            size="lg"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Analyze Content
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Analysis Progress */}
      {isAnalyzing && (
        <Card>
          <CardHeader>
            <CardTitle>Analysis in Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <AnalysisWorkflow currentStep={currentStep} steps={analysisSteps} />
            <Progress
              value={(currentStep / analysisSteps.length) * 100}
              className="mt-4"
            />
          </CardContent>
        </Card>
      )}

      {/* Enhanced Workflow */}
      {!isAnalyzing && !result && <EnhancedWorkflow />}

      {/* Results Display */}
      {result && (
        <div className="space-y-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Analysis Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Verdict Badge */}
              <div className="flex items-center justify-center">
                <Badge
                  className={`text-lg px-6 py-3 ${getVerdictColor(
                    result.verdict
                  )}`}
                >
                  {getVerdictIcon(result.verdict)}
                  <span className="ml-2 font-semibold">{result.verdict}</span>
                </Badge>
              </div>

              {/* Confidence Score */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label>Confidence Score</Label>
                  <span className="text-lg font-semibold">
                    {result.confidence}%
                  </span>
                </div>
                <Progress value={result.confidence} className="h-3" />
              </div>

              {/* Reasoning */}
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription className="text-sm leading-relaxed">
                  {result.reasoning}
                </AlertDescription>
              </Alert>

              {/* Warnings */}
              {result.warnings.length > 0 && (
                <Alert className="border-yellow-200 bg-yellow-50">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertDescription>
                    <strong>Warnings:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      {result.warnings.map((warning, index) => (
                        <li key={index} className="text-sm">
                          {warning}
                        </li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}

              {/* Detailed Analysis Metrics */}
              {result.detailedAnalysis && (
                <div className="space-y-4">
                  <Label className="text-base font-semibold">
                    Detailed Analysis
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Factual Accuracy</span>
                        <span className="text-sm font-medium">
                          {result.detailedAnalysis.factualAccuracy}%
                        </span>
                      </div>
                      <Progress
                        value={result.detailedAnalysis.factualAccuracy}
                        className="h-2"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Source Credibility</span>
                        <span className="text-sm font-medium">
                          {result.detailedAnalysis.sourceCredibility}%
                        </span>
                      </div>
                      <Progress
                        value={result.detailedAnalysis.sourceCredibility}
                        className="h-2"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Logical Consistency</span>
                        <span className="text-sm font-medium">
                          {result.detailedAnalysis.logicalConsistency}%
                        </span>
                      </div>
                      <Progress
                        value={result.detailedAnalysis.logicalConsistency}
                        className="h-2"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Emotional Manipulation</span>
                        <span className="text-sm font-medium">
                          {result.detailedAnalysis.emotionalManipulation}%
                        </span>
                      </div>
                      <Progress
                        value={result.detailedAnalysis.emotionalManipulation}
                        className="h-2"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Categories */}
              <div>
                <Label className="mb-2 block">Categories</Label>
                <div className="flex flex-wrap gap-2">
                  {result.categories.map((category, index) => (
                    <Badge key={index} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Recommended Sources */}
              <div>
                <Label className="mb-2 block">
                  Recommended Fact-Check Sources
                </Label>
                <div className="space-y-2">
                  {result.sources.map((source, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Globe className="h-4 w-4" />
                      {source}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default NewsCheckDetector;
