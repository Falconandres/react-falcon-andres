import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {categoria} ) => {


    const {data:images, loading} = useFetchGifs( categoria );


    return (
        <>
            <h3 className='animate__animated animate__fadeIn'> {categoria} </h3>

            { loading && <p className='animate__animated animate__flash'>Loading</p> }
            
            <div className="card-grid">
                {
                    images.map( imgs => {
                    //return <GifGridItem key={images.id} images = {images}/>
                    return <GifGridItem key={imgs.id} {...imgs} />
                    })
                }
                
            </div>
        </>
    )
}
