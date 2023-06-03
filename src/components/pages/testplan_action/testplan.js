import React from 'react';
import { connect } from 'react-redux';
import './testplan.scss';

import CardHeader from '../../elements/card_header/cardHeader';
import CardDescription from '../../elements/card_description/cardDescription';
import CardResult from '../../elements/card_result/cardResult';
import CardTests from '../../elements/card_tests/cardTests';
import CardUS from '../../elements/card_us/cardUS';
import CardMetrics from '../../elements/card_metrics/cardMetrics';
import Modal from '../../../Modal';
import FormIntro from '../forms/form_Intro/formIntro';
import {  setModalOpen, setTypeModal } from '../../../actions';
import Spinner from '../../elements/spinner/spinner';
class testPlan extends React.Component {

    state = {intro: false};

    componentDidMount() {
        this.setState({intro: true});
        this.props.setTypeModal('intro');
        this.props.setModalOpen(true);
    }


    render() {
        let modal = <div></div>;
        console.log(this.props.modalOpen)
        if (this.props.type_modal == 'intro') {  modal = <Modal modal={<FormIntro />} active={true} /> }
        return (
            <div className='row__'>
                
                {modal}
                <div className='row'>
                    <div className='col-md-12'>
                        <CardHeader />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <CardDescription />
                    </div>
                    <div className='col-md-5'>
                        <CardMetrics/>
                    </div>
                    <div className='col-md-4'>
                        <CardResult />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <CardTests />
                    </div>
                    <div className='col-md-9'>
                        <CardUS/>
                    </div>
                </div>
            </div>
        );
    }

}


const mapStateToProps = state => {
    return {
        type_modal: state.uqa.type_modal,

        modalOpen: state.uqa.modalOpen,

    };
};

export default connect(mapStateToProps, {setModalOpen, setTypeModal})(testPlan);