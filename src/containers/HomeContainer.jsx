import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';

// import { 
//     __INSERT ACTIONS__
// } from '../actions/index';

import Me from '../components/Me';
import Time from '../components/Time';
import Todo from '../components/Todo';

export class HomeContainer extends Component {
    render() {
        return (
            <div class="home-container">
                <Time />
                <Me />
                <Todo />
            </div>
            );
    }
}

function mapDispatchToProps(dispatch) {
    // return bindActionCreators({ 
    //     __INSERT_ACTIONS__
    // }, dispatch);
}


function mapStateToProps({ browse }) {

    // const { __STATE_PROPERTIES__ } = __REDUCER_GROUP__;

    // return {
    //     __STATE_PROPERTIES__
    // };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);