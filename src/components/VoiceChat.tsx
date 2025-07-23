
import React, { useState, useRef, useEffect } from 'react';
import { useConversation } from '@11labs/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, PhoneOff, MessageCircle, X, Send, Volume2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const VoiceChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Default demo agent ID - users should replace this with their actual agent ID
  const DEMO_AGENT_ID = 'your-elevenlabs-agent-id';

  const conversation = useConversation({
    onConnect: () => {
      toast({
        title: "Connected",
        description: "Voice agent is ready to chat",
      });
      addMessage('ai', 'Hello! I\'m your ODIA voice assistant. How can I help you today?');
      setIsConnecting(false);
    },
    onDisconnect: () => {
      toast({
        title: "Disconnected",
        description: "Voice conversation ended",
      });
      setIsConnecting(false);
    },
    onMessage: (message: any) => {
      console.log('Received message:', message);
      if (typeof message === 'string') {
        addMessage('ai', message);
      } else if (message && message.content) {
        addMessage('ai', message.content);
      }
    },
    onError: (error: any) => {
      console.error('Conversation error:', error);
      toast({
        title: "Connection Error",
        description: error?.message || "Failed to connect to voice agent",
        variant: "destructive",
      });
      setIsConnecting(false);
    }
  });

  const addMessage = (type: 'user' | 'ai', content: string) => {
    const message: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);
  };

  const startVoiceConversation = async () => {
    try {
      setIsConnecting(true);
      
      // Request microphone permission first
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Get signed URL from our secure backend
      const { data, error } = await supabase.functions.invoke('elevenlabs-conversation', {
        body: {
          action: 'get_signed_url',
          agentId: DEMO_AGENT_ID
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (!data?.signed_url) {
        throw new Error('Failed to get signed URL from backend');
      }

      console.log('Using signed URL:', data.signed_url);
      
      // Start conversation with signed URL
      await conversation.startSession({ url: data.signed_url });
      
    } catch (error) {
      console.error('Error starting voice conversation:', error);
      setIsConnecting(false);
      
      if (error instanceof Error && error.message.includes('Permission denied')) {
        toast({
          title: "Microphone Access Required",
          description: "Please allow microphone access to use voice features",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Connection Failed",
          description: error instanceof Error ? error.message : "Failed to start voice conversation",
          variant: "destructive",
        });
      }
    }
  };

  const endVoiceConversation = async () => {
    try {
      await conversation.endSession();
      setConversationId(null);
    } catch (error) {
      console.error('Error ending conversation:', error);
    }
  };

  const sendTextMessage = async () => {
    if (!inputText.trim()) return;
    
    addMessage('user', inputText);
    const userMessage = inputText;
    setInputText('');

    try {
      // Send message through our secure backend
      const { data, error } = await supabase.functions.invoke('elevenlabs-conversation', {
        body: {
          action: 'send_message',
          conversationId: conversationId,
          message: userMessage
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      // For demo purposes, show a response
      setTimeout(() => {
        addMessage('ai', `Thank you for your message: "${userMessage}". I'm processing this through the secure ODIA backend. To enable full voice functionality, please configure your ElevenLabs agent ID in the code.`);
      }, 1000);

    } catch (error) {
      console.error('Error sending message:', error);
      addMessage('ai', 'Sorry, I encountered an error processing your message. Please try again.');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendTextMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const { status, isSpeaking } = conversation;

  return (
    <>
      {/* Chat Widget Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className={cn(
            "w-14 h-14 rounded-full shadow-lg transition-all duration-300",
            "bg-gradient-to-br from-navy-light to-navy-deep hover:from-navy to-navy-deep",
            "border-2 border-gold/20 hover:border-gold/40",
            isOpen && "hidden"
          )}
        >
          <MessageCircle className="w-6 h-6 text-gold" />
        </Button>
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] max-h-[80vh]">
          <Card className="w-full h-full bg-navy-deep/95 backdrop-blur-sm border-gold/20 shadow-xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gold/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold/80 rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold text-sm">AI</span>
                </div>
                <div>
                  <h3 className="text-text-light font-semibold">ODIA Voice Agent</h3>
                  <p className="text-text-light/60 text-xs">
                    {status === 'connected' ? 'Connected' : 
                     isConnecting ? 'Connecting...' : 
                     'Ready to connect'}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-text-light hover:text-gold"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Voice Controls */}
            <div className="p-4 border-b border-gold/20 bg-navy/50">
              <div className="flex items-center justify-center space-x-4">
                {status === 'disconnected' ? (
                  <Button
                    onClick={startVoiceConversation}
                    className="bg-green hover:bg-green/90 text-white"
                    size="sm"
                    disabled={isConnecting}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {isConnecting ? 'Connecting...' : 'Start Voice Chat'}
                  </Button>
                ) : (
                  <Button
                    onClick={endVoiceConversation}
                    variant="destructive"
                    size="sm"
                  >
                    <PhoneOff className="w-4 h-4 mr-2" />
                    End Call
                  </Button>
                )}
                
                {isSpeaking && (
                  <div className="flex items-center text-gold text-sm">
                    <Volume2 className="w-4 h-4 mr-1 animate-pulse" />
                    Speaking...
                  </div>
                )}
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg p-3 text-sm",
                      message.type === 'user'
                        ? 'bg-gold text-navy ml-4'
                        : 'bg-navy-light text-text-light mr-4'
                    )}
                  >
                    {message.content}
                    <div className="text-xs opacity-60 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gold/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-navy-light/50 border border-gold/20 rounded-lg px-3 py-2 text-text-light placeholder:text-text-light/60 focus:outline-none focus:ring-2 focus:ring-gold/40"
                />
                <Button
                  onClick={sendTextMessage}
                  size="sm"
                  className="bg-gold hover:bg-gold/90 text-navy"
                  disabled={!inputText.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-text-light/60 mt-2 text-center">
                Press Enter to send • Secure backend integration active
              </p>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default VoiceChat;
