import React, {useState} from 'react';
import Card from './Card'
import Header from './Header'
import AppContext, {themes} from "./context"
import ThemeToggler from './ThemeToggler';

const App = () => {

  const [currentTheme, setCurrentTheme] = useState(themes.light)

  const toggleTheme = () => {
    console.log("Works!")
    setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light)
  }

  return (
    <div>

      {/* <button onClick={() => {setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light)
        }} >Toggle theme
      </button> */}

        <AppContext.Provider value={{currentTheme, userEmail: "mike@gmail.com"}}>
            <Header />
            <Card onToggle={toggleTheme}/>
        </AppContext.Provider>

    </div>
  );
}

export default App;
