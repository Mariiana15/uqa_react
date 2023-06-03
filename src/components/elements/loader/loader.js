import React from 'react';
import { connect } from 'react-redux';
import './loader.scss';


class loader extends React.Component {

    state = {};


    componentDidMount() {
    }


    render() {
       
          return (
            <div className="loader" id="loader-4">
            <span></span>
            <span></span>
            <span></span>

            <span></span>
            <span></span>
          </div>
        );
    }

}


const mapStateToProps = state => {
    return {



    };
};

export default connect(mapStateToProps, {})(loader);