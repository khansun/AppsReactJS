import React, { useState } from 'react';
import { Button } from 'reactstrap';
const Searchbar = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  return (
    
    <div >
      
      <div className="row">
        
        <section className="col s6 offset-s3">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="input-field">
              <input
                placeholder="Find Books!"
                type="text"
                onChange={props.handleChange}
                
              
              />
              
               
                
                <button type="button" class="btn btn-primary" 
                onClick={props.handleSortNewest}>Show Newest First
                </button>
                <span > &emsp; &emsp; &emsp;
                   &emsp; &emsp; &emsp; &emsp;
                    &emsp; &emsp; &emsp; &emsp;
                     &emsp; &emsp; &emsp; &emsp;
                      &emsp; &emsp; &emsp; &emsp;
                      &emsp; &emsp; &emsp; &emsp;
                      &emsp; 
                   </span>
                <button type="submit" class="btn btn-primary"
                        onClick={props.handleSubmit}>
                         Search
                    
                </button> 
                
                
            </div>
            
            
          </form>
          
        </section>
        
      </div>
    </div>
  );
};

export default Searchbar;
