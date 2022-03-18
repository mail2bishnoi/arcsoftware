import React, { useState } from 'react';
import Header from './ui/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import theme from './ui/Theme';
import Footer from './ui/Footer';

import LandingPage from './LandingPage';

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/services" component={()=><div>Services</div>} />
          <Route exact path="/revolution" component={()=><div>The Revolution</div>} />
          <Route exact path="/customSoftware" component={()=><div>Custome Software</div>} />
          <Route exact path="/app" component={()=><div>App Development</div>} />
          <Route exact path="/web" component={()=><div>Web App Development</div>} />
          <Route exact path="/estimate" component={()=><div>Estimate</div>} />
          <Route exact path="/about" component={()=><div>About Us</div>} />
          <Route exact path="/contact" component={()=><div>Contact Us</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
