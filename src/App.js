// import { Component } from 'react';
import { useState, useEffect, Suspense, lazy } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import axios from 'axios';

const CardList = lazy(() => import('./components/card-list/card-list.component'));


const App = () => {

  const [searchField, setSearchField] = useState('');     //[value, setValue]
  const [monsters, setMonsters] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((users) => setMonsters(users)
  //   )
  // }, [])
  const getMonsters = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    // console.log(data);
    setMonsters(data);
  }
  useEffect(() => {
    getMonsters();
  }, []);





  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const filteredMonsters = monsters.filter((m) => {
    return m.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search Monsters'
        className='monsters-search-box'
      />
      <Suspense fallback={<div className='fallback'>Please Wait...</div>}>
        <CardList monsters={filteredMonsters} />
      </Suspense>

    </div>
  );
};


// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }
//   componentDidMount() {
//     console.log('componentdidmount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => 
//         this.setState(
//           () => {
//             return { monsters: users };
//           })
//       )
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     })
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((m) => {
//       return m.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (

//       <div className="App">
//         <h1 className='app-title'>monsters Rolodex</h1>
//         <SearchBox 
//           onChangeHandler={onSearchChange}
//           placeholder='search'
//           className='search-box'
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }


export default App;
