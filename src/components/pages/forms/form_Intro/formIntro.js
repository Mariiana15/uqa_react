import React from 'react';
import { connect } from 'react-redux';
import './formIntro.scss';
import { GetTasksRich, GetTasksRichBD } from '../../../../apis/webSocket';
import { Code } from '../../../../apis/asana';
import { GetToken } from '../../../utils'
import { GetValidateSync } from '../../../../apis/configBack';
import { Oauth } from '../../../../apis/asana';
import { openMenu, setMenu, setUS, setModalOpen, setTypeModal } from '../../../../actions';
import { GetHackToken, RefreshToken, DeleteToken, GetProtocol } from '../../../../apis/configBack'
import Loader from '../../../elements/loader/loader';
class formIntro extends React.Component {

    state = { intro: false, loader: false };


    componentDidMount() {
        this.props.GetHackToken("123456789", "mariana@gmail.com")
        const querystring = window.location.search;
        const params = new URLSearchParams(querystring);
        let code = params.get('code');
        if (code !== undefined && code !== null) {
            this.setState({ intro: true })
            let token = GetToken()
            this.props.Oauth(code, sessionStorage.getItem('code_verifier'), token.AccessToken);
            this.props.GetValidateSync(token.AccessToken)
            this.props.GetProtocol(token.AccessToken, "tasks")
            this.timeout = setTimeout(() => {
                if (this.props.validate) {
                    //       this.u.push("/")
                }

            }, 200)
        }
        else {
            this.timeout = setTimeout(() => {
                this.props.Code(this.props.token.AccessToken);
            }, 200)
        }

    }

    getCodeVerifier() {
        sessionStorage.setItem("code_verifier", this.props.asanaOauth.code_verifier)
        return this.props.asanaOauth.url;
    }

    loadCards() {

        let sectionId = '1203337352114752';
        console.log(this.props.asanaToken)
        console.log(this.props.token.AccessToken)
        let ws = GetTasksRich(this.props.asanaToken, this.props.token.AccessToken, sectionId, this.props.protocol.protocol, this)
        this.timeout = setTimeout(() => {
            ws.close()
        }, 60000, ws)

        /*
        this.props.setModalOpen(false)  
           this.timeout = setTimeout(() => {
                 this.props.setUS(null);
                 let ws = GetTasksRichBD(this.props.token.AccessToken, sectionId, this.props.protocol.protocol, this)
                 this.timeout = setTimeout(() => {
                     ws.close()
                 }, this.props.protocol.timer, ws)
             }, 30000, sectionId)
         */
    }
    loaderIntro(){
        this.setState({loader: true})
        this.timeout = setTimeout(() => {
           this.setState({loader: false})
           this.props.setModalOpen(false);
            }, 20000)
    }
    render() {

       
        return (



            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <form className='uqa-form'>
                        <div className='row uqa-form-spaces'>
                            <div className='col-md-12'>
                                <h3 className='uqa-form-h3'>Iniciemos con la demo</h3>
                                <p className='uqa-form-h3'>Sincroniza tu herramienta con</p>
                            </div>
                        </div>
                        <ul className="card-list">
                            <li className="card__">

                                <a className="card-image uqa-card-style" onClick={()=>{this.props.setModalOpen(false); this.props.setTypeModal('')}} href={this.props.asanaOauth ? this.getCodeVerifier() : ""} target="_self"  >
                                
                                </a>
                            </li>
                        </ul>

                        <div className={`uqa-form-spaces uqa-form-btn ${this.state.intro ? 'uqa-btn-on' : 'uqa-btn-off'}`}>
                            Pulsa en continuar para sincronizar tus tareas
                            <div className='row'>
                            <div className='col-md-4 offset-md-4'>
                            <button className={`btn btn-primary uqa-card-name-menus uqa-card-name-menus-btn ${this.state.intro ? 'uqa-btn-on' : 'uqa-btn-off'}`} onClick={(e) => { e.preventDefault(); this.loadCards(); this.loaderIntro(); this.props.setModalOpen(false);this.props.setTypeModal(''); }} >
                                Entrar</button>
                            </div>
                            </div>
                           
                        </div>
                        <div className={`uqa-loader ${this.state.loader ? 'uqa-loader-on' : 'uqa-loader-off'}`} >
                            <Loader />
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
        page: state.uqa.page,
        uss: state.uqa.uss,
        asanaToken: state.uqa.asanaToken,
        menu: state.uqa.menu,
        asanaSectionId: state.uqa.asanaSectionId,
        protocol: state.uqa.protocol,
        asanaOauth: state.uqa.asanaOauth,

        validate: state.uqa.validate,
    };
};
export default connect(mapStateToProps, { setModalOpen, setUS, Code, GetHackToken, RefreshToken, DeleteToken, GetProtocol, GetValidateSync, Oauth, setTypeModal })(formIntro);