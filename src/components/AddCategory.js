import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = (props) => {

    const [inputValue, setInputValue] = useState('tom');

    const {setCategorias} = props;

    const handleinputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => { // Esta funcion se ejecuta cuando damos un enter
        e.preventDefault(); // para no recargar toda la pagina

        if( inputValue.trim().length > 2){
            setCategorias(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleinputChange }
            />
        </form>
        
    )
}

AddCategory.propTypes={
    setCategorias : PropTypes.func.isRequired
}