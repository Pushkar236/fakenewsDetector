
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  FileSearch, 
  Globe, 
  CheckSquare, 
  Brain, 
  Search, 
  ShieldCheck,
  ArrowRight,
  Loader2
} from 'lucide-react';

interface AnalysisWorkflowProps {
  currentStep: number;
  steps: string[];
}

const AnalysisWorkflow: React.FC<AnalysisWorkflowProps> = ({ currentStep, steps }) => {
  // ...existing rendering logic, but use the steps prop instead of hardcoded steps
  // For each step, render its status based on currentStep
  return (
    <div className="flex justify-center items-center min-h-[300px]"> {/* Center horizontally and vertically */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {steps.map((step, idx) => (
          <div
            key={step}
            className={`p-6 rounded-lg border-2 transition-colors duration-300 ${
              idx < currentStep
                ? 'border-green-500 bg-green-100 dark:bg-green-900/30' // completed
                : idx === currentStep
                ? 'border-blue-500 bg-blue-100 dark:bg-blue-900/30' // active
                : 'border-gray-300 bg-card/50' // pending
            }`}
          >
            <div className="font-semibold mb-2">{step}</div>
            <div className="text-xs text-muted-foreground">
              {idx < currentStep
                ? 'Completed'
                : idx === currentStep
                ? 'In Progress'
                : 'Pending'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalysisWorkflow;
