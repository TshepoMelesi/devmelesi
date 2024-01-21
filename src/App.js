import "./App.css"
import Header from "./components/Header.js"
import FloatingNav from "./components/FloatingNav.js"
import Body from "./components/Body.js"
import Footer from "./components/Footer.js"

const App = () => {
        return (
                <div className="App">
                        <Header />
                        <FloatingNav />
                        <Body />
                        <Footer />
                </div>
        )
}

export default App