import React from 'react'
import { Stack } from "@mui/material"
import { categories } from '../utils/constants'


const SideBar = ({ selectedCategorie , setSelectedCategorie}) => (
    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { sm: "auto", md: "95%" },
            flexDirection: { md: "column" }
        }}>
        {categories.map((categorie) => (
            <button className='category-btn'
                style={{
                    background: selectedCategorie === categorie.name && "#fc1503",
                    color: 'white'
                }}
                key={categorie.name}
                onClick={()=>{
                    setSelectedCategorie(categorie.name)
                }}
                >
                <span
                    style={{
                        color: selectedCategorie === categorie.name ? 'white' : 'red',
                        marginRight: '15px'
                    }}>{categorie.icon}</span>
                <span style={{
                    opacity: categorie.name === selectedCategorie ? 1 : 0.8,
                }}>{categorie.name}</span>
            </button>
        ))}
    </Stack>
)

export default SideBar