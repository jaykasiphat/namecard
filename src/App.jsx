import React from "react";
import Avatar from "./components/Avatar";
import Title from "./components/Title";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <header>
        <Avatar />
      </header>
      <main className="main-content">
        <Title />
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;
