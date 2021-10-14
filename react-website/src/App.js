import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import GlobalStyles from "./components/GlobalStyle";

function App () {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
