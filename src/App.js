//import { Component } from "react";
import { useState ,useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.body";
import SearchBox from "./components/search-box/search-box.body";



// Functional Component 

const App =()=>{
const [persons , setpersons] = useState([]);
const [searchField , setsearchField] = useState('');
const [filtered , setFiltered] = useState(persons);


useEffect(()=>{
  async function fetching(){
    const request = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const response = await request.json();
  setpersons(response)  
  }
fetching()
},[])

useEffect(()=>{
  const filteredArr = persons.filter((person)=>{
    return person.name.toLocaleLowerCase().includes(searchField)
  })
  setFiltered(filteredArr)  
},[persons ,searchField])


const onSearch = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
 setsearchField(searchField)
  };



return(
  <div className="App">
<h1 className="app-title">monster rolodex</h1>
           <SearchBox
            onChangeHandler={onSearch}
            className="search-box"
            placeholder="Search person"
          />
          <CardList persons={filtered} />
        </div>  
)

}




// Class Components

// class App extends Component {
//   constructor() {
//     super();
//     this.state = { persons: [], searchField: "" };
//   }

//   async componentDidMount() {
//     const request = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     const response = await request.json();
//     this.setState(() => {
//       return { persons: response };
//     });
//   }

//   onSearch = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     //destruction
//     const { persons, searchField } = this.state;
//     const { onSearch } = this;

//     const filterPersons = persons.filter((person) => {
//       return person.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
// <h1 className="app-title">monster rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearch}
//           className="search-box"
//           placeholder="Search person"
//         />
//         <CardList persons={filterPersons} />
//       </div>
//     );
//   }
// }
export default App;
