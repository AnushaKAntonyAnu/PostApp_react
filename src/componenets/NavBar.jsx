import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-secondary">
                <div class="container-fluid">
                   <h3> <a class="navbar-brand" href="#">MAKE-POST</a></h3>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/">Add Post</Link>
                            <Link class="nav-link" to="/search">Search Post</Link>
                            <Link class="nav-link" to="/delete">Delete Post</Link>
                            <Link class="nav-link" to="/view">ViewAll Post</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar