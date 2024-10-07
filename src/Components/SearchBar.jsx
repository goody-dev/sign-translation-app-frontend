import React, { useEffect, useState } from 'react'
import SearchIcon from "../assets/icons/search-icon.svg"
import SearchList from './SearchList';


const SearchBar = ({searchData}) => {
	const [searchInput, setSearchInput] = useState("");

	const handleSearchInput = (event) => {
		setSearchInput(event.target.value);
		console.log(event.target.value);
	}

  return (
		<div className='w-[100%] md:ol-span-1 relative flex flex-col'>
			<div className='h-[36px] w-[100%] flex flex-row items-center bg-[var(--searchbar-background)] rounded-[0.375rem] px-[0.5rem] py-[0.25rem] gap-[var(--custom-gap)]' >
				<img src={SearchIcon} className="h-[12px] w-[12px]" />
				<input onChange={handleSearchInput} className='focus:outline-none w-[100%] bg-transparent focus:border-none' placeholder='Find Translation' value={searchInput}>
				</input>
			</div>
			{searchInput > "" && <SearchList items={searchData? searchData: null} search={searchInput} />}
		</div>

  )
}

export default SearchBar
