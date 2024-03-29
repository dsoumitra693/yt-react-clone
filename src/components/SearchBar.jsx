import { useState } from "react"
import { Link } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import { Search } from '@mui/icons-material'
const SearchBar = () => {
    const [SearchValue, setSearchValue] = useState('')
    const handleInput = (evt) => {
        setSearchValue(evt.target.value)
        evt.target.value = ''
    }
    return (
        <Paper component="form"
            onSubmit={() => { }}
            sx={{
                borderRadius: 20,
                display: 'flex',
                pl: 2,
                border: '1px solid #e3e3e3',
                mr: { sm: 5, }
            }}>
            <input
                className="search-bar"
                placeholder="Search..."
                value={SearchValue}
                onChange={handleInput}
            />
            <Link to={`/search/${SearchValue}`}>
                <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
                    <Search />
                </IconButton>
            </Link>
        </Paper>
    )
}

export default SearchBar