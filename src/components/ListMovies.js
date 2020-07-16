import React from 'react'
import CardMovie from './CardMovie'
function ListMovies(props) {
    return (
        <div className="listMovies">
            {props.movies.map((movie)=><CardMovie movie={movie}/> )}
        </div>
    )
}

export default ListMovies
