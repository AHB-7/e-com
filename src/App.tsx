import { Navbar } from "./components/layouts/navbar";
import { AppRouter } from "./routes/routes";

function App() {
    return (
        <>
            <Navbar />
            <AppRouter />
        </>
    );
}

export default App;
