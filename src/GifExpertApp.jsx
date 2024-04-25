import { useState } from "react";
import { AddCategory, GifGrid } from "./components";// por defecto busca el archivo index.js
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const addCategory = ( value ) => {
    // console.log(value);

    if(categories.includes(value)) return; // Si la categoría ya existe

    setCategories([value, ...categories]);
    // setCategories(cats => [...cats, 'nueva Categoria']);
  };

  // console.log(categories);

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* Inputs */}

      {/* <AddCategory setCategories={setCategories} /> */}
      <AddCategory onNewCategory={value => addCategory(value)} />

      { /*listado de gif */}

      <button onClick={addCategory} style={{marginTop: 10 + 'px'}} >Agregar Categoría</button>

      <ol>
        {/*map se utiliza para recorrer un array 
        y retornar los elementos modificados o con otra estructura */}

        {/* { categories.map( (categorie,idx) => (
              <div key={categorie} >
                <li>{ categorie }</li>
              </div>
            )
          ) 
        } */}

        { categories.map( (category,idx) => (
              <GifGrid 
                category={category} 
                key={category}/>
              ))
        }

      </ol>

    </>
    
  )
}
