import React from "react";
import Avatar from "./components/Avatar";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Avatar />
      <section className="main-content">
        <Header />
        <Content />
      </section>
      <Footer />      
    </div>
  );
}

export default App;
