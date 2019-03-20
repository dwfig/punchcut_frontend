import React from 'react';
import { NavLink } from 'react-router-dom';

const RedirectPage = () => {
  return (
    <div>You must <NavLink to="/admin">login</NavLink> to see this page.</div>
  )
}

export default RedirectPage
