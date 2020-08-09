import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import './Home.css';
import { actions } from './HomeAction';

class Home extends Component<any> {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.props.getApiData}>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <span className="App-link" onClick={this.props.getHomeData} >
            {this.props.name}
          </span>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    ...state.home
  }
}
// const mapDispatchToProps = {getHomeData: () => (dispatch: any) => dispatch({type: 'EXAMPLE', payload: 'tttt'})}
const mapDispatchToProps = { ...actions }

// export default connect(mapStateToProps, {getHomeData})(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
