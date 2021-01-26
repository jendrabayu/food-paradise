import React from "react";

const SearchKeyword = props => {
  const { keyword, onChangeKeyword, onClickAddCriteria } = props

  return (
    <>
      <h5>Keyword</h5>
      <div className="card">
        <div className="card-body">
          <div className="form-row">
            <div className="col-10">
              <input
                className="form-control"
                type="text"
                placeholder="Type keyword i.e : restaurant's name, location, cuisine, etc."
                value={keyword}
                onChange={onChangeKeyword}
              />
            </div>
            <div className="col">
              <button
                className="btn btn-primary"
                type="button"
                onClick={onClickAddCriteria}
              >
                Add to criteria
                   </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default SearchKeyword