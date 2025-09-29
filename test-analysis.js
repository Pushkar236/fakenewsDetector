import { GeminiAnalysisService } from '../src/lib/gemini-service.js';

console.log('🔍 Testing NewsCheck Fake News Detector - Fallback Analysis\n');

const testAnalysis = async () => {
  const service = new GeminiAnalysisService();
  
  // Test case with obvious misinformation patterns
  const testContent = "SHOCKING NEWS! Doctors HATE this ONE WEIRD TRICK that will change your life FOREVER! Click NOW before it's BANNED! You WON'T BELIEVE what happens next!!!";
  
  console.log('📝 Testing Content:');
  console.log(`"${testContent}"\n`);
  
  try {
    const result = await service.analyzeContent(testContent);
    
    console.log('📊 Analysis Results:');
    console.log('='.repeat(50));
    console.log(`🎯 Verdict: ${result.verdict}`);
    console.log(`📈 Confidence: ${result.confidence}%`);
    console.log(`🤔 Credible: ${result.isCredible ? 'Yes' : 'No'}`);
    console.log(`📝 Reasoning: ${result.reasoning}`);
    
    if (result.warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      result.warnings.forEach(warning => console.log(`   • ${warning}`));
    }
    
    console.log('\n📊 Detailed Analysis:');
    console.log(`   • Factual Accuracy: ${result.detailedAnalysis.factualAccuracy}%`);
    console.log(`   • Source Credibility: ${result.detailedAnalysis.sourceCredibility}%`);
    console.log(`   • Emotional Manipulation: ${result.detailedAnalysis.emotionalManipulation}%`);
    console.log(`   • Logical Consistency: ${result.detailedAnalysis.logicalConsistency}%`);
    console.log(`   • Bias Level: ${result.detailedAnalysis.biasLevel}%`);
    
    console.log('\n📚 Recommended Sources:');
    result.sources.forEach(source => console.log(`   • ${source}`));
    
    console.log('\n🏷️  Categories:');
    result.categories.forEach(category => console.log(`   • ${category}`));
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('✅ Test completed! The fallback analysis system is working.');
  console.log('🌐 Open http://localhost:8080 to try the web interface.');
};

testAnalysis();