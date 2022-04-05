import { useEffect, useState } from "react";
import Article from "./Article";
import articles from "./data";

function App() {
  const [theme , setTheme] = useState(window.localStorage.getItem('theme') || 'light-theme');
  
  const toggleTheme = () => {
    setTheme(oldTheme => oldTheme === 'dark-theme' ? 'light-theme' : 'dark-theme');
  }
  useEffect(() => {
    document.documentElement.className = theme;
    window.localStorage.setItem('theme', theme);
  },[theme]);
  return (
    <section className="App">
      <navbar>
        <div className="logo">
          Rabhi<span>Abdelhak</span>
        </div>
        <button onClick={toggleTheme}>Toggle</button>
      </navbar>
      <section className="content">
       {articles.map(article => {
         return <Article key={article.id} {...article}/>
       })}
      </section>
    </section>
  );
}

export default App;
