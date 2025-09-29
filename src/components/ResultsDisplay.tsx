
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp, 
  TrendingDown, 
  Info,
  RefreshCw,
  Download,
  Share2
} from 'lucide-react';
import jsPDF from 'jspdf';
import { useToast } from '@/hooks/use-toast';

interface AnalysisResults {
  originality: string;
  score: number;
  explanation: string;
}

interface ResultsDisplayProps {
  onReset: () => void;
  analysisResults: AnalysisResults | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ onReset, analysisResults }) => {
  const { toast } = useToast();
  if (!analysisResults) return null;

  const credibilityScore = Math.round(analysisResults.score * 100);
  const isReliable = analysisResults.originality === 'real' || credibilityScore >= 70;

  // PDF Download Handler
  const handleDownloadReport = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Fake News Analysis Report', 14, 20);
    doc.setFontSize(12);
    doc.text(`Originality: ${analysisResults.originality}`, 14, 40);
    doc.text(`Score: ${credibilityScore}%`, 14, 50);
    doc.text(`Explanation: ${analysisResults.explanation}`, 14, 60, { maxWidth: 180 });
    doc.save('fake-news-analysis-report.pdf');
  };

  // Copy Results Handler
  const handleCopyResults = async () => {
    const shareText = `Fake News Analysis Result:\nOriginality: ${analysisResults.originality}\nScore: ${credibilityScore}%\nExplanation: ${analysisResults.explanation}`;
    try {
      await navigator.clipboard.writeText(shareText);
      toast({
        title: 'Results Copied',
        description: 'Analysis results have been copied to your clipboard.',
      });
    } catch (e) {
      toast({
        title: 'Copy Failed',
        description: 'Could not copy results to clipboard.',
        variant: 'destructive',
      });
    }
  };

  // You can expand this to include more detailed breakdowns if backend provides them
  return (
    <div className="space-y-8">
      {/* Header with Overall Score */}
      <div className="text-center">
        <Card className="border-0 shadow-2xl bg-gradient-to-r from-card via-card/95 to-card/90 max-w-2xl mx-auto hover:shadow-3xl transition-shadow duration-300">
          <CardContent className="p-8">
            <div className="mb-6">
              <div className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-4 transition-colors ${
                isReliable 
                  ? 'bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-900/50' 
                  : 'bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50'
              }`}>
                {isReliable ? (
                  <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                ) : (
                  <AlertTriangle className="h-12 w-12 text-red-600 dark:text-red-400" />
                )}
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Analysis Complete</h2>
              <div className="text-6xl font-bold mb-4">
                <span className={`${isReliable ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>{credibilityScore}%</span>
              </div>
              <Badge 
                variant={isReliable ? "default" : "destructive"}
                className="text-lg px-4 py-2 hover:opacity-90 transition-opacity"
              >
                {isReliable ? 'Likely Genuine' : 'Suspicious Content'}
              </Badge>
              <p className="text-muted-foreground mt-4">{analysisResults.explanation}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Breakdown */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Score Breakdown */}
        <Card className="border-0 shadow-xl bg-card hover:shadow-2xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground">
              <TrendingUp className="h-5 w-5" />
              <span>Score Breakdown</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* This section will need to be updated to use analysisResults if backend provides it */}
            {/* For now, it's hardcoded to show a placeholder */}
            <div className="space-y-2 p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">Placeholder Score</span>
                <span className="text-sm font-bold text-foreground">80%</span>
              </div>
              <Progress 
                value={80} 
                className="h-2"
              />
            </div>
            <div className="space-y-2 p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">Placeholder Score</span>
                <span className="text-sm font-bold text-foreground">75%</span>
              </div>
              <Progress 
                value={75} 
                className="h-2"
              />
            </div>
            <div className="space-y-2 p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">Placeholder Score</span>
                <span className="text-sm font-bold text-foreground">68%</span>
              </div>
              <Progress 
                value={68} 
                className="h-2"
              />
            </div>
            <div className="space-y-2 p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">Placeholder Score</span>
                <span className="text-sm font-bold text-foreground">82%</span>
              </div>
              <Progress 
                value={82} 
                className="h-2"
              />
            </div>
            <div className="space-y-2 p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">Placeholder Score</span>
                <span className="text-sm font-bold text-foreground">75%</span>
              </div>
              <Progress 
                value={75} 
                className="h-2"
              />
            </div>
          </CardContent>
        </Card>

        {/* Key Findings */}
        <Card className="border-0 shadow-xl bg-card hover:shadow-2xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground">
              <Info className="h-5 w-5" />
              <span>Key Findings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* This section will need to be updated to use analysisResults if backend provides it */}
            {/* For now, it's hardcoded to show a placeholder */}
            <div className="border-l-4 border-primary pl-4 py-2 rounded-r-lg hover:bg-muted/30 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-sm text-foreground">Placeholder Finding</h4>
                <Badge 
                  variant="default"
                  className="text-xs hover:opacity-90 transition-opacity"
                >
                  Verified
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">This finding is a placeholder.</p>
              <div className="flex items-center space-x-2">
                <Progress value={90} className="h-1 flex-1" />
                <span className="text-xs text-muted-foreground">90%</span>
              </div>
            </div>
            <div className="border-l-4 border-primary pl-4 py-2 rounded-r-lg hover:bg-muted/30 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-sm text-foreground">Placeholder Finding</h4>
                <Badge 
                  variant="secondary"
                  className="text-xs hover:opacity-90 transition-opacity"
                >
                  Partial
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">This finding is a placeholder.</p>
              <div className="flex items-center space-x-2">
                <Progress value={70} className="h-1 flex-1" />
                <span className="text-xs text-muted-foreground">70%</span>
              </div>
            </div>
            <div className="border-l-4 border-primary pl-4 py-2 rounded-r-lg hover:bg-muted/30 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-sm text-foreground">Placeholder Finding</h4>
                <Badge 
                  variant="destructive"
                  className="text-xs hover:opacity-90 transition-opacity"
                >
                  Failed
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">This finding is a placeholder.</p>
              <div className="flex items-center space-x-2">
                <Progress value={50} className="h-1 flex-1" />
                <span className="text-xs text-muted-foreground">50%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      <Card className="border-0 shadow-xl bg-gradient-to-r from-muted/50 to-muted/30 hover:shadow-2xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-foreground">
            <Shield className="h-5 w-5" />
            <span>Recommendations</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {isReliable ? (
              <>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✓ Content appears credible</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    This content has passed most verification checks and appears to be from reliable sources.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Stay vigilant</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Always cross-reference important news with multiple trusted sources before sharing.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">⚠ Exercise caution</h4>
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    This content shows signs of misinformation. Verify with trusted sources before believing or sharing.
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">🔍 Additional verification needed</h4>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    Consider fact-checking websites and official sources for accurate information.
                  </p>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <Button onClick={onReset} variant="outline" className="flex items-center space-x-2 hover:bg-muted transition-colors">
          <RefreshCw className="h-4 w-4" />
          <span>Analyze New Content</span>
        </Button>
        <Button onClick={handleDownloadReport} variant="outline" className="flex items-center space-x-2 hover:bg-muted transition-colors">
          <Download className="h-4 w-4" />
          <span>Download Report</span>
        </Button>
        <Button onClick={handleCopyResults} variant="outline" className="flex items-center space-x-2 hover:bg-muted transition-colors">
          <Share2 className="h-4 w-4" />
          <span>Share Results</span>
        </Button>
      </div>
    </div>
  );
};

export default ResultsDisplay;
