import { useState } from 'react';

const API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = 'YOUR_OPENAI_API_KEY';

function ChatAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: newMessages,
        }),
      });
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || '';
      setMessages([...newMessages, { role: 'assistant', content: reply }]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`p-2 rounded max-w-prose ${m.role === 'user' ? 'bg-blue-500 text-white self-end ml-auto' : 'bg-gray-200'}`}
          >
            {m.content}
          </div>
        ))}
        {loading && <div className="text-gray-500">Thinking...</div>}
      </div>
      <div className="flex">
        <input
          className="flex-1 border rounded-l p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatAssistant;
