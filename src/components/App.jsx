import React from 'react';
import Header from './Header';
import Log from './Log';
import Login from './Login';
import Footer from './Footer';

import logs from '../logs';

var isLoggedIn = true;
var userIsRegistered = true;

function createLog(log) {
  return (
    <Log
      key={log.workout_log_id}
      name={log.name}
      last_updated={log.last_updated}
    />
  );
}

function renderConditionally() {
  if (isLoggedIn === true) {
    return (
      <div>
        <Header />
          {logs.map(createLog)}
          <Log
              name="Test Log"
              last_updated="2023-07-12T12:33:17.000Z"
          />
        <Footer />
      </div>
    );
  } else {
    return (
      <Login />
    );
  }
}

function App() {
    return (
        <div>
        {
          isLoggedIn ?
          <div>
            <Header />
              {logs.map(createLog)}
              <Log
                  name="Test Log"
                  last_updated="2023-07-12T12:33:17.000Z"
              />
              <button type='submit' className='btnAdd'>+</button>
            <Footer />
          </div>
          :
          <Login isRegistered={userIsRegistered} />
        }
        </div>
    );
}

export default App;
