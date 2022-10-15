import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to={'/'}>
        <a class="navbar-brand" href="#">QuizD</a>
        </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style={{justifyContent:'flex-end'}}>
    <div class="navbar-nav">
        <Link to={'/CreateQuestions'}>
        <a class="nav-item nav-link" href="#">Create Quiz</a>
        </Link>
        <Link to={'/EditQuestions'}>
        <a class="nav-item nav-link" href="#">Edit Quiz</a>
        </Link>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;