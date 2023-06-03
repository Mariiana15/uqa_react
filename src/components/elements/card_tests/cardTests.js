import { tsMethodSignature } from '@babel/types';
import React from 'react';
import { connect } from 'react-redux';
import './cardTests.scss';
import FormTest from '../../pages/forms/form_Test/formTest';
import Modal from '../../../Modal';

const test = [{
    test: "primer test ", precision: 100
},
{
    test: "segundo test ", precision: 95
},
{
    test: "tercero test ", precision: 92
}]
class cardTests extends React.Component {

    state = { test: false };


    componentDidMount() {
    }

    renderTestConfigure(tests, filter) {
        let test = [];
        if (this.props.context_situational !== undefined &&  this.props.context_situational.tests !== null && this.props.context_situational.tests !== undefined) {
            
            this.props.context_situational.tests.filter(x => x.state === filter).map((t, i) => {
                test.push(
                    <li key={i}>
                        <div className="form-check form-switch" key={i}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={() => { this.setState({ test: true }) }} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{t.name}    <i className="fa-sharp fa-solid fa-check-double uqa-card-test-por"> {Math.round(t.affnity * 100) } %</i>  </label>
                        </div>
                    </li>
                );
            })
        }
        return test;
    }

    render() {
        let modal = <div></div>;
        if (this.state.test) { modal = <Modal modal={<FormTest />} active={true} /> }
        return (
            <div className="card  card_ uqa-center-card uqa-test-card">
                {modal}
                <div className="card-body">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-10 offset-md-1'>
                                <h5 className='uqa-card-result-detail-header'>Your Tests</h5>
                            </div>
                        </div>
                        <div className='row '>
                            <div className='col-md-10 '>
                                <p className='uqa-card-tests-detail'>Complete tests</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <ul className='uqa-card-test-bulled'>
                                    {this.renderTestConfigure(test, "complete")}
                                </ul>
                            </div>
                        </div>
                        <hr className='uqa-card-result-line' />
                        <div className='row '>
                            <div className='col-md-10 '>
                                <p className='uqa-card-tests-detail'>Configured tests</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <ul className='uqa-card-test-bulled'>
                                    {this.renderTestConfigure(test, "pending")}
                                </ul>
                            </div>
                        </div>
                        <hr className='uqa-card-result-line' />
                        <div className='row '>
                            <div className='col-md-10 '>
                                <p className='uqa-card-tests-detail'>Pending tests to configure</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12  '>
                                <ul className='uqa-card-test-bulled'>
                                    {this.renderTestConfigure(test, "active")}
                                </ul>
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

        context_situational: state.uqa.context_situational

    };
};

export default connect(mapStateToProps, {})(cardTests);