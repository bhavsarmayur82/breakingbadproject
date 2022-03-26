import {useEffect, useState} from 'react';   
import Header from './NavBar';
import CharacterList from './CharacterList';
import SearchBar from './SearchBar';
import axios from './api';
import Spinner from './Spinner';
function App() {
  const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(true);
  const [query,setQuery] = useState("");
  useEffect(()=>{
    const fetchItems = async()=>{
    const results =  await axios.get(`/characters?name=${query}`);
    setItems(results.data);
    setLoading(false);
    }
    fetchItems();
    },[query]);
     
return (
    <div className="App">
      <Header/>
      <SearchBar setQuery ={(query)=>{setQuery(query)}}/>
      {loading?<Spinner/>:<CharacterList items={items}/>}
    </div>
  );
}

export default App; 
