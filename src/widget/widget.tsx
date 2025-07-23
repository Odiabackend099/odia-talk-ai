
import React from 'react';
import { createRoot } from 'react-dom/client';
import VoiceChat from '../components/VoiceChat';
import { Toaster } from '../components/ui/toaster';
import '../index.css';

// Widget initialization function
function initODIAWidget() {
  const container = document.getElementById('odia-chat-container');
  
  if (!container) {
    console.error('ODIA Widget: Container element with id "odia-chat-container" not found');
    return;
  }

  // Create React root and render the widget
  const root = createRoot(container);
  root.render(
    <div className="odia-widget">
      <VoiceChat />
      <Toaster />
    </div>
  );
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initODIAWidget);
} else {
  initODIAWidget();
}

// Export for manual initialization
(window as any).ODIAWidget = {
  init: initODIAWidget
};
