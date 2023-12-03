import { Fragment, useState, useEffect } from 'react'
import './App.css'
import ProductList from './components/product-list/product-list.component';
import DepartmentFilter from './components/department-filter/department-filter.component';
import Sorter from './components/sorter/sorter.component';
import SearchInputBox from './components/search-input/search-input.component';

function App() {
  const [data, setData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [searchfield, setSearchfield] = useState('');

  //Instead of just importing json file from root directory, using fetch to get file from public directory
  //to imitate real life situation
  //Couldn't find an API endpoint
  useEffect(() => {
    const getData = async() => {
        const response = await fetch('product-data.json', {
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                            'Accept': 'application/json'
                                                        }}
                                        )
        const fetchedData = await response.json();
        setData(fetchedData);
        setDisplayedData(fetchedData);
    }

    getData();

  }, [])

  //Searches for product when user types in the searchfield
  useEffect(() => {
    const searchedProducts = data.filter((product) => {
      return product.name.toLocaleLowerCase().includes(searchfield);
    });

    if(searchfield === ''){
      setSelectedFilter(selectedFilter);
    }
    setSelectedFilter('') //Searching in all departments
    setSelectedSort('') //Resetting the sort during the search
    setDisplayedData(searchedProducts);
  }, [searchfield, data]);


  
  const handleChangeFilter = (e) => {
    setSelectedFilter(e.target.value);
    setSelectedSort(''); // Reset the sort when filter changes
    if(e.target.value === '' || e.target.value === "All Products") setDisplayedData(data);
    else setDisplayedData(data.filter(d => d.department === e.target.value));
  }

const handleChangeSort = (e) => {
    setSelectedSort(e.target.value);

    if (e.target.value === "Ascending") {
      const sortedData = [...displayedData].sort((a, b) => a.envImpact - b.envImpact);
      setDisplayedData(sortedData);
    }
  
    if (e.target.value === "Descending") {
      const sortedData = [...displayedData].sort((a, b) => b.envImpact - a.envImpact);
      setDisplayedData(sortedData);
    }
  }
  
  const handleChangeInput = (e) => {
    setSearchfield(e.target.value.toLocaleLowerCase());
  }

//Dynamically creates a set (eventuallu an array) of all the departments listed in data array, instead of hardcoding each value
const filterOptions = Array.from(new Set(data.map(item => item.department)));


  return (
    <Fragment>
      <h1>Green Choice</h1>
      <p className='p'>Number next to the product name is the environmental impact score</p>
      <p className='p'>Environmental scores range from 1 to 5, where 1 is the best score a product can have and 5 is the worst</p>
      <div className='menu'>
          <DepartmentFilter
            selectedFilter={selectedFilter}
            handleChangeFilter={handleChangeFilter}
            filterOptions={filterOptions}
          />
          <Sorter
            selectedSort={selectedSort}
            handleChangeSort={handleChangeSort}
          />
      </div>
      <SearchInputBox
        className='searchBox'
        searchChange={handleChangeInput}
      />
      {displayedData && <ProductList data={displayedData}/>}
    </Fragment>
  )
}

export default App
