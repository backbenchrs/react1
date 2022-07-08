import logo from './logo.svg';
import './App.css';

function App() {

  // let x=10;
  // x=x+2;
  // console.log(x); //12

  // const x=10;
  // x=5;
  // console.log(x); // error

    // let x=5;
    // x=5;
    // const x;
    // x=5;
    // console.log(x); //error

  // const x=5; // Global Scope
  // {
  //   const x=5; // Local Scope
  // }
  // console.log(x);

  // const display =(Name , id) => {
  //   console.log(Name , id);
  // }
  // display("M" , 11); 



  // Array 

  let grid =[10,20,30,40,50,60,"m"];
  console.log(grid[6] , grid);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
