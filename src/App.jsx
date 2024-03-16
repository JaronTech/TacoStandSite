import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.jsx';
import Home from "./Index.jsx";
import Menu from "./Menu.jsx";
import About from "./About.jsx";
import Header from './Header';
import Footer from './Footer';

import companyLogo from './assets/TacoStandLogo.png'

function App() {
    return(
        <BrowserRouter>
            <Header image={companyLogo}/>
            <ScrollToTop>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </ScrollToTop>
            <Footer />
        </BrowserRouter>
    );
}

export default App