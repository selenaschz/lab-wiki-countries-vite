import "./App.css";
import CountryDetails from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <HomePage />
      <CountryDetails />
    </div>
  );
}

export default App;
