import Home from "./components/Home.jsx";
import { Analytics } from "@vercel/analytics/next"

export default function App() {
    return (
        <div className="App ">
            <Home />
            <Analytics />
        </div>
    );
}
