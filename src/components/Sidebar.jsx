import React from 'react'

export default function Sidebar() {
  return (
    <section>
        <Router>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/tasks">Tasks</NavLink>
                <NavLink to="/notes">Notes</NavLink>
                <NavLink to="/library">Library</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </nav>
        </Router>
    </section>
  )
}
