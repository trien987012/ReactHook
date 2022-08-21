//rfc
import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderHome = () => {
    return (
<div>
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <NavLink className="navbar-brand" to="/">Project Hook</NavLink>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav me-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="visually-hidden">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hook</a>
          <div className="dropdown-menu" aria-labelledby="dropdownId">
            <NavLink className="dropdown-item" to="/usestate">UseState</NavLink>
            <NavLink className="dropdown-item" to="/useeffect">UseEffect</NavLink>
            <NavLink className="dropdown-item" to="/usecallback">UseCallback</NavLink>
            <NavLink className="dropdown-item" to="/usememo">UseMemo</NavLink>
            <NavLink className="dropdown-item" to="/useref">UseRef</NavLink>
            <NavLink className="dropdown-item" to="/useredux">UseRedux</NavLink>

          </div>
        </li>
      </ul>
      <form className="d-flex my-2 my-lg-0">
        <input className="form-control me-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</div>

    );
}

export default HeaderHome;
