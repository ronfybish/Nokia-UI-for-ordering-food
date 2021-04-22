import React from 'react';
import Hero from './components/Hero';
import CardList from './components/CardList';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import bg from './images/test.jpg';
const App = () => {
    return (
        <>
            <NavBar />
            <section
                style={{
                    position: 'relative',
                    background: `url(${bg}) no-repeat center center/cover`,
                    height: '180vh',
                }}
            >
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    {/* <div
                        style={{
                            color: '#fff',
                            height: '100%',
                            width: '80%',
                            display: 'flex',
                            flexDirection: 'column',
                            margin: 'auto',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}
                    > */}
                    <Hero />
                    <CardList />
                    {/* </div> */}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default App;
