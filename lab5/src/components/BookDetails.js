import React, { useState, useEffect } from "react";
import { getBooksDetails } from "./../services/GoogleBooks";
import { Link } from "react-router-dom";

const BookDetails = (props) => {
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    getBooksDetails(props.location.book_id, setCurrentBook);
  }, []);

  return (
    <div className = "container" style={{ marginLeft: 440}} >
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image" >
              <img
                src={props.history.location.details.imageLinks.thumbnail}
                alt=""
                style={{ width: "100", height: "200" }}
              />
            </div>
            <div className="card-content">
              <span
                className="card-title"
                style={{ color: "black", fontSize: "100", marginLeft:"50", fontWeight: "bold"}}
              >
                <p style={{ marginLeft: "50" }}>
                  {props.history.location.details.title}
                </p>
              </span>
            </div>
            <div className="card-content" style={{ color: "royalblue", fontSize: "100", marginLeft:"50", fontWeight: "bold"}}>
              <p>{props.history.location.details.authors}</p>
              
            </div>
            <div className="card-content">
              <p>{props.history.location.details.description} </p>
            </div>

            <div className="card-content" style={{ color: "green", fontSize: "100", marginLeft:"50", fontWeight: "420"}}>
              <p> {"Published On: "}{props.history.location.details.publishedDate}</p>
            </div>
            <div className="card-action" style={{ color: "green", fontSize: "100", marginLeft:"50", fontWeight: "bold"}}>
              <Link to="/">Find More Books!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
