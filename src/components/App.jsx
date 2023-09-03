import React from 'react';
import Header from './Header';
import Log from './Log';
import Footer from './Footer';

import logs from '../logs';

function createLog(log) {
  return (
    <Log
      key={log.workout_log_id}
      name={log.name}
      last_updated={log.last_updated}
    />
  );
}

function App() {
    return (
        <div>
            <Header />
              {logs.map(createLog)}
              <Log
                  name="Back Day, Week 3"
                  last_updated="2023-07-12T12:33:17.000Z"
              />
            <Footer />
        </div>
    );
}

export default App;
