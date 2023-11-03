import React from "react";
import BookList from "./components/books/BookList";
import "./global.css";
import BookContextProvider from "./context/BookContext";
import ThemeContextProvider from "./context/ThemeContext";

class App extends React.Component {
  render() {
    return (
      <div>
        <ThemeContextProvider>
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
        </ThemeContextProvider>
      </div>
    );
  }
}
export default App;
