import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import history from './history';
//import { GetHackToken } from '../apis/configBack';
import TestPlan from './pages/testplan_action/testplan';
import './App.scss';
import MenuLateral from './elements/menu_lateral/menuLateral';
import FormIntro from './pages/forms/form_Intro/formIntro';
import Loader from './elements/loader/loader';

import { GetHackToken } from '../apis/configBack';
class App extends React.Component {


  handleClose = () => this.setState({ show: false });
  componentDidMount() {
    this.props.GetHackToken("123456789", "mariana@gmail.com")
  }

  componentDidUpdate() {

    let currentTimestamp = Date.now()
    if (this.props.token && currentTimestamp > Number(this.props.token.AtExpires) * 1000) {
      console.log(currentTimestamp)

      this.props.RefreshToken(this.props.token.AccessToken, this.props.token.RefreshToken)
      // this.props.DeleteToken(this.props.token.AccessToken)
    }
  }


  render() {
    return (
      <div className="container">
        <BrowserRouter history={history}>
          <MenuLateral/>
          <div>
            <Routes>
              <Route path="/" exact element={<TestPlan />} />
              <Route path="/form" exact element={<FormIntro />} />
              <Route path="/loader" exact element={<Loader />} />
             </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.uqa.token,
  };
};


export default connect(mapStateToProps, {  GetHackToken})(App);             