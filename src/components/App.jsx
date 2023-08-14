import React from 'react';
import Header from './Header';
import Log from './Log';
import Footer from './Footer';

function App() {
    return (
        <div>
            <Header />
            <Log 
                name="Back Day, Week 3" 
                last_updated="2023-07-12T12:33:17.000Z" 
            />
            <Log 
                name="Chest Day, Week 4" 
                last_updated="August 10, 2023" 
            />
            <Log 
                name="Leg Day, Week 4" 
                last_updated="Today" 
            />
            <Footer />
        </div>
    );
}

export default App;
