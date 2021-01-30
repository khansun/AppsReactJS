import React from "react";

const Searchbar = (props) => {
  return (
    <div className="container">
      
      <div className="row">
        <section className="col s6 offset-s3">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="input-field">
              <input
                placeholder="Find Books!"
                type="text"
                onChange={props.handleChange}
                
              />
              <button class="btn btn-success btn-lg float-right" 
                        type="submit"
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
