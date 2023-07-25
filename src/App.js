// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Update the import statement
import HomePage from "./components/HomePage";
import ChatbotPage from "./components/ChatbotPage";
import ConfirmationPage from "./components/ConfirmationPage";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
