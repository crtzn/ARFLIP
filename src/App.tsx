import { Header } from "@/components/Header";
import Main from "@/components/Main";

function App() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="flex flex-col items-center">
        <div
          id="header"
          className="flex justify-center items-center w-full min-h-[5rem]"
        >
          <div className="container mx-auto px-4">
            <Header />
          </div>
        </div>
        <main id="main-section" className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-center">
            <Main />
          </h1>
        </main>
        <h1>hello world</h1>
      </div>
    </div>
  );
}

export default App;
