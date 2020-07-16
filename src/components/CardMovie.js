import React from 'react'

function CardMovie(props) {
    const arr =[1,1,1,1,1] ;
    const {movie} = props ;
    const number = movie.Rate ;
    const arr2 =  arr.map ((num,index)=> ( index<number ?  num = 1 : num = 0  ) )
    return (


        <div className="card">

            <img src={movie.image} alt={movie.name} />

            <div> 
              <h1 style={{fontSize:'20px'}}>{movie.name}</h1>
              <h1 style={{fontSize:'20px'}}>{movie.year}</h1>
            </div>

            <div style={{display:"flex",justifyContent:"center"}}>
            {  arr2.map((element)=> (element=='1' ?  <span style={{color:'#ffa64d',margin:'5px' }} class="fa fa-star"></span> : <span style={{margin:'5px'}} class="fa fa-star"></span> ))}
               
            </div>
        </div>
    )
}

export default CardMovie
