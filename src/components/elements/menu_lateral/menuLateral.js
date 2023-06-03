import React from 'react';
import { connect } from 'react-redux';
import './menuLateral.scss';


const menu = [{ name: 'Vecindario Financiero', id: '1234' }
    , { name: 'Vencindario Landing', id: '1235' }
    , { name: 'Vencindario Agendador', id: '1236' }
]
class menuLateral extends React.Component {

    state = {};


    componentDidMount() {
    }

    ativar() {
        const nav = document.querySelector('.menu')
        nav.classList.toggle('active')
    }
    renderMenuDinamic() {
        let menus = [];
        menu.map((m) => {
            menus.push(
                <li id={m.id} key={m.id} className='uqa-menu-li '>
                    <p className='uqa-menu-din-option'><i className="fa-solid fa-list-check"></i> {m.name}</p>
                </li>
            );
        })
        return menus;
    }
    render() {
        return (
            <div className="menu">
                <div className="menu-icon">
                    <div className="logo uqa-menu-logo"><i className="fa-solid fa-flask-vial"></i> UQA</div>
                    {/*<i className="fa-solid fa-align-left" id='botao' onClick={() => { this.ativar() }}></i>*/}
                </div>
                <hr className='uqa-card-menu-line' />
                <nav className="nav">
                    <ul>
                        <li className='uqa-menu-li'><i className="fa-solid fa-gauge-med"></i> Dashboard</li>
                        <li className='uqa-menu-li'><i className="fa-solid fa-file-export"></i> Results</li>
                        <li className='uqa-menu-li'><i className="fa-solid fa-cubes-stacked"></i> Tests</li>
                        <li className='uqa-menu-li'><i className="fa-solid fa-gears"></i> Settings</li>
                    </ul>
                </nav>
                <p className='uqa-menu-label-test'>TEST PLAN</p>
                <nav className="nav">
                    <ul>
                        {this.renderMenuDinamic()}
                    </ul>
                </nav>

                <div className='uqa-card-footer'>
                    <div className="card uqa-card-menu">
                        <div className="card-body">
                            <div className='container '>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className="card uqa-card-menu-icon">
                                            <div className="card-body">
                                                <div className='uqa-card-menu-i-cont'>
                                                    <i className="fa-solid fa-question uqa-card-menu-i-color"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <p className='uqa-menu-help-label'>
                                            Need help?
                                        </p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <p className='uqa-menu-help-text'>
                                            Please check our docs
                                        </p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-8 offset-md-2'>
                                        <button type="button" className="btn btn-primary uqa-card-card-btn uqa-menu-help-btn">
                                            DOCUMENTATION
                                        </button>
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

export default connect(mapStateToProps, {})(menuLateral);