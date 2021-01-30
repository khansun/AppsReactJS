import React, { useState, useEffect } from "react";
import { getBooksDetails } from "./../services/GoogleBooks";
import { Link } from "react-router-dom";

const BookDetails = (props) => {
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    getBooksDetails(props.location.book_id, setCurrentBook);
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img
                src={props.history.location.details.imageLinks.thumbnail}
                alt=""
                style={{ width: "400", height: "800" }}
              />
            </div>
            <div className="card-content">
              <span
                className="card-title"
                style={{ color: "teal", fontSize: "100", marginLeft:"50"}}
              >
                <p style={{ marginLeft: "50" }}>
                  {props.history.location.details.title}
                </p>
              </span>
            </div>
            <div className="card-content">
              <p>{props.history.location.details.authors}</p>
            </div>
            <div className="card-content">
              <p>{props.history.location.details.description}</p>
            </div>
            <div className="card-action">
              <Link to="/">Go to search page!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
