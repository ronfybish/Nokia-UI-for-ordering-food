import React from 'react';
import Hero from './components/Hero';
import CardList from './components/CardList';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
          
            <div style={{ background: '#8E8E81' }}>
                <NavBar />
                <Hero />
                <CardList />
                <Footer />
            </div>

        </>
    );
};

export default App;
