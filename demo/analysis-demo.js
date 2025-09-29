import { GeminiAnalysisService } from '../src/lib/gemini-service.js';

// Demo script to test the Gemini analysis service
const demoAnalysis = async () => {
  const service = new GeminiAnalysisService();
  
  console.log('🚀 NewsCheck Fake News Detector - Demo Analysis\n');
  
  // Test cases
  const testCases = [
    {
      title: "Reliable News",
      content: "The World Health Organization announced today that vaccination rates have increased by 15% globally compared to last year, according to their annual health report."
    },
    {
      title: "Suspicious Content",
      content: "SHOCKING! Scientists don't want you to know this ONE WEIRD TRICK that will change everything! Doctors HATE this! Click now before it's banned forever!"
    },
    {
      title: "Mixed Content",
      content: "Local weather reports indicate a chance of rain tomorrow. However, some conspiracy theorists claim this is part of a government weather control program."
    }
  ];
  
  for (const testCase of testCases) {
    console.log(`\n📊 Analyzing: ${testCase.title}`);
    console.log(`Content: "${testCase.content}"\n`);
    
    try {
      const result = await service.analyzeContent(testCase.content);
      
      console.log(`✅ Verdict: ${result.verdict}`);
      console.log(`🎯 Confidence: ${result.confidence}%`);
      console.log(`📝 Reasoning: ${result.reasoning}`);
      console.log(`⚠️  Warnings: ${result.warnings.join(', ') || 'None'}`);
      console.log(`📂 Categories: ${result.categories.join(', ')}`);
      console.log(`📊 Detailed Analysis:`);
      console.log(`   - Factual Accuracy: ${result.detailedAnalysis.factualAccuracy}%`);
      console.log(`   - Source Credibility: ${result.detailedAnalysis.sourceCredibility}%`);
      console.log(`   - Emotional Manipulation: ${result.detailedAnalysis.emotionalManipulation}%`);
      console.log(`   - Logical Consistency: ${result.detailedAnalysis.logicalConsistency}%`);
      console.log(`   - Bias Level: ${result.detailedAnalysis.biasLevel}%`);
      
    } catch (error) {
      console.log(`❌ Analysis failed: ${error.message}`);
    }
    
    console.log('\n' + '─'.repeat(80));
  }
  
  console.log('\n✨ Demo completed! Visit http://localhost:8081 to try the interactive interface.');
};

// Run the demo if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  demoAnalysis().catch(console.error);
}

export { demoAnalysis };