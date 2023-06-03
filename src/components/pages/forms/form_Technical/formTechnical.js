import React from 'react';
import { connect } from 'react-redux';
import './formTechnical.scss';
import LabelOptions from '../../../elements/label_options/labelOptions';
import config from '../../../utils/variables.json';
import { AddRequirementTech } from '../../../../apis/configBack';
import { setModalOpen, setContextSituational } from '../../../../actions';
import Spinner from '../../../elements/spinner/spinner';

class formTechnical extends React.Component {

    state = { requirement: '', spinner: false };


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
                                <h3>Necesitamos mas informacion para crear tu historia de usuario de seguridad</h3>
                            </div>
                        </div>
                        <div className='row uqa-form-spaces'>
                            <div className='col-md-12'>
                                <div htmlFor="exampleFormControlInput1" className=" form_label form-label">Define el modelo de datos que vas a utilizar</div>
                                <div className='col-md-12 offset-md-1'>
                                    <LabelOptions optionsLabel={config.bbdd} opId="op1" />
                                </div>
                            </div>
                        </div>
                        <div className='row uqa-form-spaces'>
                            <div className='col-md-12'>
                                <div htmlFor="exampleFormControlInput1" className=" form_label form-label">Define los elementos de infraestructura que necesitaras</div>
                                <div className='col-md-12 offset-md-1'>
                                    <LabelOptions optionsLabel={config.infra} opId="op2" />
                                </div>
                            </div>
                        </div>
                        <div className='row uqa-form-spaces'>
                            <div className='col-md-12'>
                                <div htmlFor="exampleFormControlInput1" className=" form_label form-label">Selecciona las tecnologias que quieres utilizar</div>
                                <div className='col-md-12 offset-md-1'>
                                    <LabelOptions optionsLabel={config.language} opId="op3" />
                                </div>
                            </div>
                        </div>
                        <div className='row uqa-form-spaces' >
                            <div className='col-md-10 offset-md-1'>
                                <div htmlFor="exampleFormControlInput1" className=" form_label form-label">Describe los requerimientos técnicos que se deberian tener en la historia de usuario "{this.props.name}"</div>
                                <div className='col-md-12 '>
                                    <input type="text" id="login" value={this.state.requirement} onChange={(e) => { this.setState({ requirement: e.target.value }) }} className="fadeIn second" name="login" placeholder="El proceso deberia tener .." />
                                </div>
                            </div>
                        </div>

                        <div className='uqa-form-spaces'>
                            <input type="submit" onClick={async (e) => {
                                e.preventDefault();
                                let x = document.getElementById("op1").childNodes;
                                let bbdd = ''
                                x.forEach(element => {
                                    if (element.getAttribute('aria-checked')) {
                                        bbdd = element.childNodes[2].innerHTML + ' , ' + bbdd;
                                    }

                                });
                                x = document.getElementById("op2").childNodes;
                                let infrastructure = ''
                                x.forEach(element => {
                                    if (element.getAttribute('aria-checked')) {
                                        infrastructure = element.childNodes[2].innerHTML + ' , ' + infrastructure;
                                    }

                                });
                                x = document.getElementById("op3").childNodes;
                                let language = ''
                                x.forEach(element => {
                                    if (element.getAttribute('aria-checked')) {
                                        language = element.childNodes[2].innerHTML + ' , ' + language;
                                    }

                                });

                                this.setState({ spinner: true });
                                this.props.AddRequirementTech(this, this.props.token.AccessToken, bbdd, infrastructure, language, this.state.requirement, this.props.id, this.props.us);
                                this.setState({ spinner: false });
                                this.props.setModalOpen(false);

                            }} className="fadeIn fourth" value="Save" />
                            <Spinner open={this.state.spinner}></Spinner>
                        </div>

                    </form>

                </div>
            </div>


        );
    }

}


const mapStateToProps = state => {
    return {
        token: state.uqa.token,

    };
};

export default connect(mapStateToProps, { AddRequirementTech, setModalOpen, setContextSituational })(formTechnical);