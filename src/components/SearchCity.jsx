import React from 'react'

const SearchCity = props => {
  const { value, onChange, onClickSearch } = props

  return (
    <div className="row" style={{ marginBottom: 30 }}>
      <div className="col">
        <h3>Search City</h3>
        <div className="card">
          <div className="card-body">
            <div className="form-row">
              <div className="col-11">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Type keyword or city name"
                  value={value}
                  onChange={onChange}
                />
              </div>
              <div className="col-1">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={onClickSearch}
                >Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SearchCity