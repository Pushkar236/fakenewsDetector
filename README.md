# NewsCheck - AI-Powered Fake News Detector

An advanced fake news detection system powered by Google's Gemini AI, designed to help users verify the credibility of news articles, social media posts, and other content.

## 🌟 Features

- **AI-Powered Analysis**: Uses Google Gemini 1.5 Flash for advanced content analysis
- **Multi-Format Support**: Analyze text content or URLs
- **Real-time Processing**: Live analysis workflow with step-by-step progress
- **Detailed Scoring**: Comprehensive credibility metrics including:
  - Factual Accuracy
  - Source Credibility
  - Emotional Manipulation Detection
  - Logical Consistency
  - Bias Level Assessment
- **Interactive Dashboard**: Beautiful, responsive interface with dark/light theme support
- **Fact-Check Sources**: Recommendations for reliable fact-checking resources

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Google Gemini API key

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd newscheck-detector-0.0.1
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory:

   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:8081`

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **AI Integration**: Google Generative AI (Gemini)
- **Build Tool**: Vite
- **State Management**: React Hooks
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📊 Analysis Features

### Content Analysis

- Text content verification
- URL and article analysis
- Multi-step verification process
- Real-time progress tracking

### Credibility Metrics

- **Overall Confidence Score**: 0-100% reliability rating
- **Verdict Categories**: TRUE, FALSE, MIXED, UNVERIFIED
- **Detailed Breakdown**:
  - Factual Accuracy (%)
  - Source Credibility (%)
  - Emotional Manipulation Detection (%)
  - Logical Consistency (%)
  - Bias Level (%)

### Visual Workflow

- Enhanced workflow visualization
- Real-time processing indicators
- Step-by-step analysis progress
- Interactive results dashboard

## 🔧 Configuration

### Environment Variables

| Variable              | Description           | Required |
| --------------------- | --------------------- | -------- |
| `VITE_GEMINI_API_KEY` | Google Gemini API key | Yes      |

### API Configuration

The application uses Google's Gemini 1.5 Flash model for content analysis. Make sure you have:

1. A valid Google Cloud account
2. Generative AI API enabled
3. A valid API key with appropriate quotas

## 🧪 Usage Examples

### Analyzing Text Content

1. Select the "Text Analysis" tab
2. Paste or type the content you want to verify
3. Click "Analyze Content"
4. View the detailed analysis results

### Analyzing URLs

1. Select the "URL Analysis" tab
2. Enter the URL of the article or page
3. Click "Analyze Content"
4. Review the comprehensive analysis

## 📱 Responsive Design

The application is fully responsive and works on:

- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🎨 Themes

- **Light Mode**: Clean, professional interface
- **Dark Mode**: Easy on the eyes for extended use
- **System Theme**: Automatically adapts to your OS preference

## 🔒 Privacy & Security

- Content is analyzed securely via Google's Gemini API
- No content is stored permanently
- API keys are handled securely via environment variables
- HTTPS connections for all API calls

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Hosting Platform

The built application can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Generative AI team for the Gemini API
- shadcn/ui for the beautiful component library
- The open-source community for various tools and libraries

## 📞 Support

For support, please open an issue on GitHub or contact the development team.

---

**Made with ❤️ for combating misinformation and promoting media literacy.**
