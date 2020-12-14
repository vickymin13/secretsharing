import './App.css';
import pic from './pic.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

var ans = '';

function handleChange(event) {
  ans = event.target.value;
  return event.target.value;
}

function show() {
  if(ans === '2') {
    alert("You got the secret code! Polynomials has $1,024,311.25 in funds.");
  } else {
    alert("Sorry, that is not the correct secret code. Please try again.");
  }
}

function App() {
  return (
    <div className="App">
      <h1><b>WELCOME TO POLYNOMIAL INC'S BANK ACCOUNT.</b></h1>
      <div classname="logo">
        <img src={pic} alt="logo" width="250" height="250" />
      </div>
      <p>
      To access funds, please type in the secret code.</p>
      <TextField id="standard-basic" onChange={handleChange}/>
      <Button onClick={show} variant="contained" color="primary">
        Enter
      </Button>
      <p id="amountt"></p>
    </div>
  );
}

export default App;
