import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import First from './first';
import Second from './second';
import Third from './third';
import Four from './four';
import First1 from './first1';
import Second1 from './second1';
import Third1 from './third1';
import Four1 from './four1';
import Student  from './student';
import Students from './studentclass';
import Display from './display';
import Button from './button';


function App() {
  var props = {
    Name :"Ridhima",
    Address : "Ghaziabad",
    Scores: "92"
  }; 

  const sayHello = () => {
    console.log('hello');
  };

  const sayBye = () => {
    console.log('bye');
  };

  return (
    <div className="App">
      <header className="App-header">
  <React.StrictMode>
    <h1>Hello, World!</h1>
  </React.StrictMode>,
   <div>
      <First />
      <Second />
      <Third />
      <Four />
    </div>
    <div>
      <First1 />
      <Second1 />
      <Third1 />
      <Four1 />
    </div>
    <Student props={props} /> 
     <Students Name="Payal" Address="Ghaziabad" Scores="60" />
     <Display props={props}/>
     <div>
      <Button text="Say Hello" onClick={sayHello} />
      <Button text="Say Bye" onClick={sayBye} />
    </div>
    </header>
    </div>
  );
}

export default App;










