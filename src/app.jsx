import './styles/app.less';
import React from 'react';
import Navbar from './components/nav.jsx';
import Footer from './components/footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app-container">
        <Navbar />
        <div className="container">
          { this.props.children }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
