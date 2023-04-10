import React, {useState, useEffect} from 'react'
import Contact from './Contact';

function App() {

  const [list, setList] = useState([])

  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(data => setList(data.results))
  }, [])

  return (
    <div className='main'>
      {list.map((x)=>{
        return(
          <Contact
            picture = {x.picture.large}
            fname = {x.name.first}
            lname = {x.name.last}
            email = {x.email}
            age = {x.dob.age}
          />
        )
      })}
    </div>

  );
}

export default App;
