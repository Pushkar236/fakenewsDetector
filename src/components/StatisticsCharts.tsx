import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, BarChart3, PieChart as PieChartIcon, Activity } from 'lucide-react';

const StatisticsCharts: React.FC = () => {
  // Sample data for charts
  const sourceCredibilityData = [
    { source: 'Reuters', credibility: 95, articles: 120 },
    { source: 'AP News', credibility: 92, articles: 98 },
    { source: 'BBC', credibility: 89, articles: 85 },
    { source: 'CNN', credibility: 78, articles: 156 },
    { source: 'Social Media', credibility: 45, articles: 287 },
    { source: 'Blogs', credibility: 38, articles: 198 }
  ];

  const verificationTrends = [
    { month: 'Jan', genuine: 78, fake: 22, suspicious: 15 },
    { month: 'Feb', genuine: 75, fake: 25, suspicious: 18 },
    { month: 'Mar', genuine: 82, fake: 18, suspicious: 12 },
    { month: 'Apr', genuine: 79, fake: 21, suspicious: 16 },
    { month: 'May', genuine: 85, fake: 15, suspicious: 10 },
    { month: 'Jun', genuine: 88, fake: 12, suspicious: 8 }
  ];

  const categoryDistribution = [
    { name: 'Politics', value: 35, color: '#EF4444' }, // Red from Google palette
    { name: 'Health', value: 28, color: '#10B981' }, // Green
    { name: 'Technology', value: 18, color: '#3B82F6' }, // Blue
    { name: 'Sports', value: 12, color: '#F59E0B' }, // Yellow
    { name: 'Entertainment', value: 7, color: '#8B5CF6' } // Purple
  ];

  const factCheckingMetrics = [
    { metric: 'Claims Verified', value: 1247, change: '+12%' },
    { metric: 'Sources Checked', value: 89, change: '+5%' },
    { metric: 'Images Analyzed', value: 456, change: '+18%' },
    { metric: 'Videos Processed', value: 123, change: '+25%' }
  ];

  return (
    <div className="space-y-8 mt-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 bg-clip-text text-transparent mb-2">Analysis Statistics</h2>
        <p className="text-muted-foreground">Comprehensive insights from your content analysis</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {factCheckingMetrics.map((metric, index) => (
          <Card key={index} className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 bg-clip-text text-transparent mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground mb-2">{metric.metric}</div>
              <div className="text-xs text-green-600 dark:text-green-400 font-medium">{metric.change}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Source Credibility Chart */}
        <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>Source Credibility Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sourceCredibilityData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="source" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  fontSize={12}
                  className="fill-muted-foreground"
                />
                <YAxis className="fill-muted-foreground" />
                <Tooltip 
                  formatter={(value, name) => [
                    `${value}${name === 'credibility' ? '%' : ' articles'}`,
                    name === 'credibility' ? 'Credibility Score' : 'Articles Analyzed'
                  ]}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="credibility" fill="url(#gradient1)" name="credibility" />
                <defs>
                  <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChartIcon className="h-5 w-5" />
              <span>Content Categories</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Verification Trends */}
        <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Verification Trends (6 Months)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={verificationTrends}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" className="fill-muted-foreground" />
                <YAxis className="fill-muted-foreground" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="genuine" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  name="Genuine Content (%)"
                />
                <Line 
                  type="monotone" 
                  dataKey="fake" 
                  stroke="#EF4444" 
                  strokeWidth={3}
                  name="Fake Content (%)"
                />
                <Line 
                  type="monotone" 
                  dataKey="suspicious" 
                  stroke="#F59E0B" 
                  strokeWidth={3}
                  name="Suspicious Content (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Analysis Summary */}
      <Card className="border-0 shadow-xl bg-gradient-to-r from-red-500/5 via-yellow-500/5 via-green-500/5 to-blue-500/5">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5" />
            <span>Analysis Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Average Accuracy Rate</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">↗ +3% from last month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent mb-2">1.2K+</div>
              <div className="text-sm text-muted-foreground">Content Pieces Analyzed</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">↗ +15% from last month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent mb-2">98.7%</div>
              <div className="text-sm text-muted-foreground">System Reliability</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">↗ +0.5% from last month</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatisticsCharts;
