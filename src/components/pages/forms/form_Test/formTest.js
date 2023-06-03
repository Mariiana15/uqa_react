import React from 'react';
import { connect } from 'react-redux';
import './formTest.scss';
import LabelOptions from '../../../elements/label_options/labelOptions';
import config from '../../../utils/variables.json';

class formTest extends React.Component {

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
                                <h3>Configura tu test</h3>
                                <p>Configura los siguientes parametros para iniciar con las pruebas </p>
                            </div>
                        </div>
                       
                        <div className='row uqa-form-spaces' >
                            <div className='col-md-10 offset-md-1'>
                                <div htmlFor="exampleFormControlInput1" className=" form_label form-label">Define el host donde se haran las pruebas</div>
                                <div className='col-md-12 '>
                                    <input type="text" id="p1t1" className="fadeIn second" name="login" placeholder="Se debera ..." />
                                </div>
                            </div>
                        </div>
                        <div className='row uqa-form-spaces' >
                            <div className='col-md-10 offset-md-1'>
                                <div htmlFor="exampleFormControlInput1" className=" form_label form-label">Define el nombre del parametro a utilizar</div>
                                <div className='col-md-12 '>
                                    <input type="text" id="p2t1" className="fadeIn second" name="login" placeholder="Se debera ..." />
                                </div>
                            </div>
                        </div>

                        <div className='uqa-form-spaces'>
                            <input type="submit" className="fadeIn fourth" value="Save" />
                        </div>

                    </form>

                </div>
            </div>


        );
    }

}


const mapStateToProps = state => {
    return {



    };
};

export default connect(mapStateToProps, {})(formTest);