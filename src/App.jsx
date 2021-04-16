import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Card from './component/card/Card';
import React from 'react'

function App() {

  // state / management memory
  let [data, setData] = React.useState([])

  // component lifecyle
  React.useEffect(() => {

    // function fetch
    fetch('http://localhost:8000/api/absen',{
      method : 'GET',
      mode : 'cors',
      headers : {
        "Content-Type" : 'application/json',
        Accept : 'application/json'
      }

    })
    .then(res => res.json())
    .then(hasil => {
      {console.log(hasil)}
      setData(hasil)
    })
    .catch(err => console.log(err))
    // return ini sebagai funsi clean up
    return () => {}

  }, [])



  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
      {data.map((e) => {
        return (
          <Card 
          key={e.id}
          id={e.id}
          name={e.name}
          email={e.email}
          phone={e.phone}
          batch={e.batch}
          date={e.date}
          
          />
        )
      })}
        
      </div>
    </div>
  );
}

export default App;
