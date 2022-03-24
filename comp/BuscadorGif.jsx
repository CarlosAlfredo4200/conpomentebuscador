import React, { useState } from 'react'
import AddCategory from './componentes/AddCategory';
import GifGrid from './componentes/GifGrid';

const BuscadorGif = () => {

    const [categories, setCategories] = useState(['Usuarios Github']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'jefes'])
    // }


  return (
    <>
        <h1>Buscador de Usuarios Github</h1>
        <AddCategory categories={ categories} setCategories={ setCategories}  />
        <hr></hr>

        <ol>{
            categories.map( category => (
                 
                <GifGrid 
                    key={ category } 
                    category={category}
                      
                    />
            ))
        
        }</ol>

    </>
  )
}

export default BuscadorGif
