import react from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
  var ImageURL = "https://images.app.goo.gl/eVvmQmAy2AZvgEyQ8"
  try {
   ImageURL = props.data.volumeInfo.imageLinks.thumbnail;
  } catch (error) {
    console.log(error);
    
  }
  
  
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          {ImageURL == null ? (
            <img
            src="https://picsum.photos/250/250"
            alt=""
            style={{ width: 250, height: 250 }}
            />
          ) : (
            <img
              src={ImageURL}
              alt=""
              style={{ width: 150, height: 220 }}
            />
          )}

          
        </div>
        <span className="card-title">{props.data.volumeInfo.title}</span>
        <div className="card-content">{props.data.volumeInfo.authors}{",  "} {props.data.volumeInfo.publishedDate}
        
        </div>

        <div className="card-action">
          <Link
            to={{
              pathname: "/Book/" + props.data.id,
              details: props.data.volumeInfo,
            }}
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;