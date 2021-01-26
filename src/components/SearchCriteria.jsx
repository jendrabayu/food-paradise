import React from 'react'

const SearchCriteria = props => {
  const { criteria, handleRemoveCriteria, onClickSearch } = props

  return (
    <div className="card bg-light mb-3" style={{ marginTop: 20 }}>
      <div className="card-body">
        <p className="card-title">Find Restaurants based on criteria : </p>
        <table className="table table-hover">
          <tbody>
            <table className="table table-hover">
              <tbody>
                {criteria.map((v, i) => (
                  <tr key={i} className="table-active">
                    <td width="40%">{v.criteriaName}</td>
                    <td width="50%">{v.data.name}</td>
                    <td>
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{ color: 'red' }}
                        onClick={() => handleRemoveCriteria(i)}
                      >
                      </i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </tbody>
        </table>
        <div className="pull-right">
          <button
            className="btn btn-primary"
            type="button"
            onClick={onClickSearch}
          >
            Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchCriteria