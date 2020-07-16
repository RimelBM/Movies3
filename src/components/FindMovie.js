import React,{useState} from 'react'

function FindMovie({movies,setFoundFilm}) {

    

    const [film,setFilm] = useState('')
    console.log(film )
    console.log(movies)

    const trouverFilm =() =>
    {
        if(film!==''){
        const foud = movies.find((mov)=>mov.name===film) ;

        (foud) ? setFoundFilm([foud]) : setFoundFilm([ {id:'16',name:"no",year:1,Rate:0,image:"notFound.jpg"}])
         
        setFilm('') }
    }



    

    return (
        <div className="find">
            <input  type='text' value={film} onChange={(e)=>setFilm(e.target.value)}  />
            <button onClick={trouverFilm} >Search</button>
        </div>
    )
}

export default FindMovie
