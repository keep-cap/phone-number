import "./App.css";
import MainGenerator from "./components/mainGenerator";

function App() {
  return (
    <>
      {/* <ThemeController /> */}
      <main className="main w-screen h-screen flex flex-col items-center justify-center">
        <MainGenerator />
      </main>
    </>
  );
}

export default App;
