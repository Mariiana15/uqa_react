import React from 'react';
import { connect } from 'react-redux';
import './formInformation.scss';

class formInformation extends React.Component {

    state = {};


    componentDidMount() {
    }


    render() {

        let description = 'Nuevo mecanismo de pagos';
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <form className='uqa-form'>
                        <div className='row uqa-form-spaces'>
                            <div className='col-md-12'>
                                <h3 className='uqa_color_text'>Probables amenazas</h3>
                            </div>
                        </div>
                        <div className='row uqa-form-spaces'>
                            <div className='col-md-12'>
                                <p className='uqa_color_text'>{this.props.text}</p>
                            </div>
                        </div>
                       
                    </form>

                </div>
            </div>


        );
    }

}


const mapStateToProps = state => {
    return {


        text: state.uqa.text
    };
};

export default connect(mapStateToProps, {})(formInformation);