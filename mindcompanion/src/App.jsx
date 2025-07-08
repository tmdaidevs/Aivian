import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChatAssistant from './pages/ChatAssistant';
import ProductivityTools from './pages/ProductivityTools';
import CreativeTools from './pages/CreativeTools';
import VoiceTools from './pages/VoiceTools';
import KnowledgeTools from './pages/KnowledgeTools';
import InsightsHistory from './pages/InsightsHistory';
import './App.css';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/chat" replace />} />
            <Route path="/chat" element={<ChatAssistant />} />
            <Route path="/productivity" element={<ProductivityTools />} />
            <Route path="/creative" element={<CreativeTools />} />
            <Route path="/voice" element={<VoiceTools />} />
            <Route path="/knowledge" element={<KnowledgeTools />} />
            <Route path="/insights" element={<InsightsHistory />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
