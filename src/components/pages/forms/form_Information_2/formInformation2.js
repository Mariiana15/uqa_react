import React from 'react';
import { connect } from 'react-redux';
import './formInformation2.scss';

class formInformation extends React.Component {

    state = {};


    componentDidMount() {
    }


    render() {

        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <form className='uqa-form'>
                        <div className='row uqa-form-spaces'>
                            <div className='col-md-12'>
                                <h3 className='uqa_color_text'>Pasos a seguir</h3>
                            </div>
                        </div>
                        <div className='row uqa-form-spaces'>
                            <div className='col-md-12'>
                                <p className='uqa_color_text'>{this.props.textx}</p>
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