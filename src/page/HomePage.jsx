import React, { Fragment } from 'react'
import Header from '../components/header/Header'
import Toogle from '../components/toogle/Toogle'
import Main from '../components/main/Main'

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <div className="d-flex">
        <Toogle />
        <Main />
      </div>
    </Fragment>
  );
}

export default HomePage