import logo from './logo.svg';
import './App.css';

function App() {

  // let arr=[10,50,80,44,48,36];
  // let arr1=[39,88]; 

  // let newArr=arr.concat(arr1);
  // console.log(newArr); //10,50,80,44,48,36 length:8

  //  let ans=arr.some((a) => a>50);
  //  console.log(ans); // true

//  console.log(arr.tostring());  

  // let ans=arr.find((a)=> a>20);
  // console.log(ans); //50    


  // arr.splice(1,0,66); //10, 66, 50, 80, 44, 48, 36
  //  arr.splice(2,2); //10, 50, 48, 36
  // console.log(arr);

                        // OBJECT//
// let obj = {
// id : 11,
// name : "react"
// };
  //  console.log(obj.id,obj["name"]); // {id:11, name:react}
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
