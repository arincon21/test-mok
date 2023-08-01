import './App.css';
import { useState, useEffect } from 'react';
import TableUsers from './components/table/table.js';
import Header from './components/header/header.js';
import { deleteArray } from './utils/utils.js';

function App() {

  const [usersOriginal, setUsersOriginal] = useState([]);
  const [usersDelete, setUsersDelete] = useState([]);
  const [usersVersion, setUsersVersion] = useState([]);
  const [striped, setStriped] = useState(false);

  useEffect(function () {
    fetch("https://randomuser.me/api/?page=1&results=100")
    .then(res => res.json())
    .then(response => {
      const users = response.results.map(user => {
        return { 
          thumbnail: user.picture.thumbnail,
          first: user.name.first,
          last: user.name.last,
          country: user.location.country
        }
      })
      setUsersOriginal(users)
      setUsersDelete(users)
      setUsersVersion(users)
    })
  }, [])

  const stripedChange = () => {
    setStriped(!striped)
  }

  const orderName = () => { 
    const newOrder = [...usersDelete].sort((a,b) => (a.first > b.first) ? 1 : ((b.first > a.first) ? -1 : 0))
    setUsersDelete([...newOrder])
    setUsersVersion([...newOrder])
  }

  const orderLastName = () => { 
    const newOrder = [...usersDelete].sort((a,b) => (a.last > b.last) ? 1 : ((b.last > a.last) ? -1 : 0))
    setUsersDelete([...newOrder])
    setUsersVersion([...newOrder])
  }

  const orderCountry = () => { 
    const newOrder = [...usersDelete].sort((a,b) => (a.country > b.country) ? 1 : ((b.country > a.country) ? -1 : 0))
    setUsersDelete([...newOrder])
    setUsersVersion([...newOrder])
  }

  const restore = () => {
    setUsersDelete([...usersOriginal])
    setUsersVersion([...usersOriginal])
  }

  const filter = (event) => {
    const result =  [...usersDelete].filter((user) => user.country.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
    setUsersVersion([...result])
  }

  const deleteUser = (index) => {
    const result = deleteArray([...usersDelete], index);
    setUsersDelete([...result])
    setUsersVersion([...result])
  }


  return (
    <div className="App">
      <h1>Lista de usuarios</h1>
      <Header 
        stripedChange={stripedChange}
        orderCountry={orderCountry}
        restore={restore}
        filter={filter}
      ></Header>
      <TableUsers 
        usersAll={usersVersion} 
        striped={striped} 
        deleteUser={deleteUser} 
        orderName={orderName} 
        orderLastName={orderLastName}
        orderCountry={orderCountry}
      
      ></TableUsers>
    </div>
  );
}

export default App;
