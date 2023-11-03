import React from "react";

export const ThemeContext = React.createContext();
export default class ThemeContextProvider extends React.Component {
  state = {
    isLightTheme: true,
    ligth: { bg: "#bbb", txt: "#091019" },
    dark:{ bg: "#091019", txt: "#bbb" }
  };

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render(){
    return(
        <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
            {this.props.children}
        </ThemeContext.Provider>
    )
  }
}
