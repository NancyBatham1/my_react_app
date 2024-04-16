import React from 'react';
import PropTypes from 'prop-types';

export default function Header({logo, isSearchBar,anyvalue}) {
  return (
    <div> <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="https://getbootstrap.com/docs/5.0/components/navbar/">{logo}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="https://getbootstrap.com/docs/5.0/components/navbar/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://getbootstrap.com/docs/5.0/components/navbar/">{anyvalue}</a>
          </li>
        
        </ul>
        {isSearchBar?
        <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>:
      'serachbar set false'

        }
        
      </div>
    </div>
  </nav></div>
  )
}

/// validation on propsTypes
Header.propTypes = {
  title: PropTypes.string,
  isSearchBar: PropTypes.bool.isRequired
}

///// deafualt value when no props passing from header attribute
Header.defaultProps ={
  anyvalue: 'AnyDefaultValue',
  isSearchBar: true/// if you comment or remove this line then it will show error as we have declare this required in proptypes
}
