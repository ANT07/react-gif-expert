// import { useEffect, useState } from 'react';

// import {getGifs} from '../helpers/getGifs'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( { category }) => {

  const {images, isLoading} = useFetchGifs(category);
  
  console.log(images, isLoading);

  // const [images, setImages] = useState([])

  //   // useEffect para ejecutar el codigo una ves cuando se redenderiza el componente
  //   useEffect(() => {
    
  //   getGifs(category).then((value) => {
  //       setImages(value);
  //     }
  //   );

  // }, []); 
  //[], es un array vacío, lo que significa que la función se va a ejcutar bajo ciertas condiciones
  // si [] es vacio, el codigo en la funcion solo se ejecuta una ves



  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        <div className='card-grid'>
          {images.map((image) => (
            // <GifItem  key={image.id} title={image.title} url={image.url} />
            <GifItem  key={image.id} {...image} /> // ... para agregar todas la propiedades del componente en las propiedades de los componentes
          ))}
        </div>

    </>
  )
}
