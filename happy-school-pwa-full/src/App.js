import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Happy School - Inscription</h1>
      <form>
        <input type="text" placeholder="Nom" /><br/>
        <input type="text" placeholder="Prénom" /><br/>
        <input type="text" placeholder="Classe" /><br/>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default App;
