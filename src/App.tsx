import {
    About,
    Contact,
    Footer,
    Gallery,
    Hero,
    Navbar,
    Service,
} from "./components";
import "./App.scss";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Service />
            <About />
            <Gallery />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
