import {
    About,
    Contact,
    Footer,
    Gallery,
    Hero,
    Navbar,
    Service,
    Testimonial,
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
            <Testimonial />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
