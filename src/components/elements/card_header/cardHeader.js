import React from 'react';
import { connect } from 'react-redux';
import './cardHeader.scss';


class cardHeader extends React.Component {

    state = {};

    componentDidMount() {
    }


    render() {
        let project = 'asana';
        let nameProject = 'Vecindario Financiero'
        return (
            <div className="card uqa-center-card uqa-header-card">
                <div className="card-body">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <div className="card" >
                                            <div className="uqa-card-icon">
                                                <div className="uqa-card-letter">
                                                    {nameProject[0] + nameProject[1].toUpperCase()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-8 uqa-card-name-description'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <p className='uqa-card-name-projec'>{nameProject}</p>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <p className='uqa-card-name-project-orgin'>project: {project}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-5 offset-md-3 uqa-card-name-menus-margin'>
                                <div className='row uqa-card-name-description'>
                                    <div className='col-md-3'>
                                        <button type="button" className="btn btn-primary uqa-card-name-menus uqa-card-name-menus-btn">
                                        <i className="fa-sharp fa-solid fa-rotate"></i>  Sync 
                                        </button>
                                    </div>
                                    <div className='col-md-3 uqa-card-name-menus'>
                                        <i className="fa-sharp fa-solid fa-file-circle-exclamation"></i><a className=' uqa-card-name-menus' href='/'> Logs</a>
                                    </div>
                                    <div className='col-md-4 uqa-card-name-menus'>
                                    <i className="fa-sharp fa-solid  fa-bell-concierge"></i><a className=' uqa-card-name-menus' href='/'>  Proactive Alerts</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}


const mapStateToProps = state => {
    return {



    };
};

export default connect(mapStateToProps, {})(cardHeader);