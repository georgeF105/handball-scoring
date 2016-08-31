import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div className='home-page'>
      <div className='header'>
        <div className='header-text'>
          <h1>Handball Scoring <br /> <small>(a woring name)</small></h1>
          <h3>A Tool for Scoring Handball Games</h3>
          <div className='links-bar'>
            <Link to='/game' className='btn btn-lg'><h2>View Games</h2></Link>
          </div>
        </div>
      </div>
      <section id='about' className='about'>
        <div className='container'>
          <div className='about-header'>
            <h2>Tools for Everyone</h2>
            <hr className='small' />
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='jumbotron'>
                <h2>Coaches</h2>
                <p>Manage Teams <br /> View Stats <br /> Communicate with Players</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='jumbotron'>
                <h2>Players</h2>
                <p>View Stats <br /> See Upcoming Games</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='jumbotron'>
                <h2>Organisations</h2>
                <p>Manage Games <br /> Communicate with Coaches</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className='container'>
          <h4>Handball Scoring - A TR Initiative</h4>
          <a href='https://github.com/georgeF105'><p className='text-muted'>Built George Francis</p></a>
        </div>
      </footer>
    </div>
  )
}
