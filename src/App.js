import Header from "./components/Header";
import Banner from "./components/Banner";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app">
      <div className="banner_header">
        <Header />
        <Banner />
      </div>
      <AboutMe />
      <Projects />

      {/* header */}
      {/* banner */}
      {/* projects */}
      {/* languages */}
      {/* contact */}
    </div>
  );
}

export default App;
