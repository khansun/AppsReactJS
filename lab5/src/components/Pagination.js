import React from "react";

const Pagination = (props) => {
    const totalPages=props.totalItems/20;
    const page_links = [];
    for (let i = 1, index=0; i <= totalPages; i++, index=index+20) {
      page_links.push(
        <button
          type="button" class="btn btn-primary"
          key={index}
          onClick={() => {
            props.nextPage(index);
          }}
        >
          {i}
        </button>
      );
    }
    return (
      <div className="container">
        <div className="row">{page_links}</div>
      </div>
    );
  };
  
  export default Pagination;