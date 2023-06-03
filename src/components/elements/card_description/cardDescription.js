import React from 'react';
import { connect } from 'react-redux';
import './cardDescription.scss';
import Modal from '../../../Modal';
import FormInformation from '../../pages/forms/form_Information_2/formInformation2';
import {  setModalOpen } from '../../../actions';
class cardDescription extends React.Component {

    state = { information: undefined };

    componentDidUpdate() {

        if (!this.props.modalOpen && this.state.information !== undefined) {
            this.setState({ information: undefined });
        }
    }
    componentDidMount() {
    }


    render() {
        let idproject = 'HU1234456';
       
        if (this.props.context_situational === undefined)
            return   <div className="card uqa-center-card uqa-detail-card uqa-detail-background"></div>
        let description = this.props.context_situational?.userStory
        return (
            <div className="card uqa-center-card uqa-detail-card uqa-detail-background">
                {this.state.information}
                <div className="card-body">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-10 offset-md-1'>
                                <h5 className='uqa-card-desciption-detail-header'>Description of US</h5>
                            </div>
                        </div>
                        <div className='row uqa-card-description-container'>
                            <div className=' bh-card-descp-x'>
                                <p className='uqa-card-desciption-detail'>{description != undefined? description: this.props.context_situational?.detail_tech}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7 '>
                                <a className=' uqa-card-name-menus uqa-card-name-menus_' onClick={()=>{this.setState({
                                    information: <Modal modal={<FormInformation textx={this.props.context_situational.techTest ?this.props.context_situational.techTest: this.props.context_situational.sec_tests}/>} active={true} />
                                });
                                this.props.setModalOpen(true);
                                }}>More Detail  <i className="fa-sharp fa-solid fa-caret-right"></i> </a>
                            </div>
                            <div className='col-md-4 offset-md-1 '>
                                <a className=' uqa-card-name-menus uqa-card-name-menus__' target='_blank' href={this.props.sel_card !== null? this.props.sel_card.permalink_url: ''} >{this.props.sel_card !== null? this.props.sel_card.gid: ''}</a>
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

        context_situational: state.uqa.context_situational,
        modalOpen: state.uqa.modalOpen,
        sel_card: state.uqa.sel_card,

    };
};

export default connect(mapStateToProps, {setModalOpen})(cardDescription);