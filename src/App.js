import React from 'react';
import Hero from './components/Hero';
import CardList from './components/CardList';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import bg from './images/test.jpg';
const App = () => {
    return (
        <>
            <section
                style={{
                    position: 'relative',
                    background: `url(${bg}) no-repeat center center/cover`,
                    height: '244vh',
                }}
            >
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: 'auto',
                    }}
                >
                    <NavBar />
                    <Hero />
                    <CardList />
                    <Footer />
                </div>
            </section>
        </>
    );
};

export default App;
