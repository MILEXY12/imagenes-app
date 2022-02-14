import React from 'react';

function imagenes({datos=[]}){
    return (
        <div className="row">
            { 
            datos.map(item=> (
      <div key={item.id} className="col mb-4">
           <div className="card" style={{minWidth: "200px"}}>
               <img src="" alt="" />
               <div className="card-body">
                   <h5 className="card.title">titulo</h5>
                   <hr/>
                   <p>species {item.species}</p>
                   <p>location {item.location.name}</p>
               </div>
           </div>
       </div>
       ))
       }
       </div>
 )};

 export default imagenes;


      
    

            
        


        
        
        
        

    
    
    
