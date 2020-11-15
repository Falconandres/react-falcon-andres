import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['tom']);

    /*const handleAdd = () => {
        //setCategorias([...categorias, 'Hola']);
        setCategorias(cats => [...cats, 'Hola']);
    }*/


    return( 
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr/>
            
            <ol>
                {
                    categorias.map( categoria => {
                    return <GifGrid key={categoria} categoria={categoria} /> 
                    })
                }
            </ol>
        </div>
    );
}

export default GifExpertApp;
