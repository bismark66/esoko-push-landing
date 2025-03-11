import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CopilotKit publicApiKey={import.meta.env.VITE_COPILOT_API_KEY}>
      <CopilotPopup
        labels={{
          title: "Sidebar Assistant",
          initial: "How can I help you today?",
        }}
        instructions="You are assisting the user as best as you can. Answer in the best way possible given the data you have. Answer in the language of the user and in a way that is easy to understand. Let your responses be only limited to the scope of this website and responses related to well-being. No other information aside the content of this website should be shared. If you have no contextual information, just say, contact support at +233246347907"
      />
      <App />
    </CopilotKit>
  </StrictMode>
);

