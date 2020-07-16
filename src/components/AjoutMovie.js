import React ,{useState} from 'react'

function AjoutMovie({setMovies,movies,setShowedForm,showedForm}) {

    const[id,setId]=useState('');
    const[name,setName]=useState('');
    const[year,setyear]=useState('');
    const[Rate,setRate]=useState('');
    const[image,setImage]=useState('');


    const AjoutMovie=()=>{
        setMovies([{id:id,name:name,year:year,Rate:Rate,image:image},...movies]);

        setShowedForm(2)

    }

    
    return (
        
        
        <div className="ajoutMovie">


             <input type='text'  placeholder='Id'  onChange={(e)=>setId(e.target.value)}/>
             <input  type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)} />
             <input  type='text' placeholder='year' onChange={(e)=>setyear(e.target.value)} />
             <input  type='text' placeholder='Rate' onChange={(e)=>setRate(e.target.value)} />
             <input  type='text' placeholder='image' onChange={(e)=>setImage(e.target.value)} />


            <button  onClick={AjoutMovie}>Add</button>
        </div>
            
           
    )
}

export default AjoutMovie
