import React ,{useState}from 'react'
import StarRating from './StarRating'
import FindMovie from './FindMovie'
import ListMovies from './ListMovies'
import FoundRating from './FoundRating'
import AjoutMovie from './AjoutMovie'



function Movies() {

   const [movies,setMovies] = useState ([{id:'1',name:"Naruto",year:1946,Rate:5,image:'naruto.jpg'},
                                  {id:'2',name:"500 days of summer",year:2005,Rate:4,image:"days.jpg"},
                                  {id:'3',name:"The lord of the rings",year:2009,Rate:3,image:'Lord.jpg'},
                                  {id:'4',name:"one day",year:2015,Rate:4,image:'One.jpg'},
                                  {id:'5',name:"Braveheart",year:2005,Rate:2,image:'Braveheart.jpg'},
                                  {id:'6',name:"danish",year:2011,Rate:5,image:"danish.jpg"},
                                  {id:'7',name:"Gladiator",year:2020,Rate:3,image:'gladiator.jpg'},
                                  {id:'8',name:"Harry poter",year:2012,Rate:1,image:'harry.jpg'} ,
                                  {id:'10',name:"500 days of summer",year:1991,Rate:4,image:"days.jpg"},
                                  {id:'11',name:"The lord of the rings",year:1992,Rate:5,image:'Lord.jpg'},
                                  {id:'14',name:"danish",year:2000,Rate:1,image:"danish.jpg"},
                                  {id:'15',name:"more than blue",year:2003,Rate:0,image:"more.jpg"},
                                ]);


     const [foundFilm ,setFoundFilm] = useState('') ;
     const [foundRate ,setFoundRate] = useState('') ;
     const [Rated ,setRate] = useState(0) ;
     
     const[showedForm,setShowedForm] =useState(0)

     console.log("foundFilm is" + foundFilm)

    const Home = () =>
    {
        setFoundFilm('');
        setFoundRate('') ;
        console.log("foundFilm is" + foundFilm)
    }

  


    return (
        <div className="movies">
            
            <div className="bar">


               <button onClick={Home}>Home</button>
               <FindMovie movies={movies} setMoviesed={setMovies} setFoundFilm={setFoundFilm} />

               <div className="stars">           
                  <StarRating  setRate={setRate} setMovies={setMovies}  movies={movies}  />
                  <FoundRating Rated={Rated} movies={movies} setFoundRate={setFoundRate}  />

               </div>
            </div>

            <div className="addForm">
                
               <button  onClick={()=>setShowedForm(showedForm+1)}> + </button>
               <div >
                 {(showedForm %2 !==0)?  <AjoutMovie setMovies={setMovies} movies={movies}  setShowedForm={setShowedForm} showedForm={showedForm}  />   :<div></div> }

               </div>
   

            </div>



            <div>  
            
            {     (foundRate!=='')?   <ListMovies movies={foundRate}/>:((foundFilm!=='')?   <ListMovies movies={foundFilm}/> :  <ListMovies movies={movies}/>)} 

            </div>
           

          
            
        </div>
    )
}

export default Movies
