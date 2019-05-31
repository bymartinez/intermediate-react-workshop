import React from 'react';
import ThemeContext from './ThemeContext';

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
    };
  }

  updateTheme = (color) => {
    this.setState({
      color,
    });
  }

  render() {
    return (
      <ThemeContext.Provider value={{
        color: this.state.color,
        changeColor: this.updateTheme,
      }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeProvider;