import Header from "./Header"
import Hero from "./Hero"
import Projects from "./Projects"
import Quotation from "./Quotation"
import Resume from "./Resume"

const Body = () => {
        return (
                <main className="main-body">
                        <Hero />
                        <Projects />
                        <Resume />
                        <Quotation />
                </main>
        )
}

export default Body