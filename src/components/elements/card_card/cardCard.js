import React from 'react';
import { connect } from 'react-redux';
import images from '../../utils/image.json';
import './cardCard.scss';
import FormTest from '../../pages/forms/form_Test/formTest';
import Modal from '../../../Modal';
import FormTechnical from '../../pages/forms/form_Technical/formTechnical';
import FormInformation from '../../pages/forms/form_Information/formInformation';
import { setTextInformation, setModalOpen, setSelCard,setContextSituational } from '../../../actions';
import { GetStateUserStory } from '../../../apis/configBack';

class cardCard extends React.Component {

    state = { w: 800, tech: undefined, information: undefined };


    componentDidMount() {
        let w = this.props.cards.length * 380;
        this.setState({ w })
    }

    componentDidUpdate() {
        if (!this.props.modalOpen && this.state.information !== undefined) {
            this.setState({ information: undefined });
        }

        if (!this.props.modalOpen && this.state.tech !== undefined) {
            this.setState({ tech: undefined });
        }
    }

    renderCard(cards) {
        let card = [];
        if (cards != null && cards != undefined) {
            cards.map((c, i) => {

                let image = Math.floor(Math.random() * images.unsplash.length);
                let cc = this.props.sel_card?.gid === c.gid ? 'uqa-selection_': '';
                console.log(c)
                card.push(
                    <div className={'col-md-4 card_container '  } key={i + 'k'} onClick={() => { console.log("slection"); this.props.setSelCard(c); this.props.GetStateUserStory(this.props.token.AccessToken, c.gid, this)}}>
                        <div className={'card uqa-card-unity ' + cc} key={i + 'j'}>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <img className='uqa-card-card-img' src={images.unsplash[image]} alt="user story" />
                                </div>
                            </div>
                            <div className='row uqa-card-card-space'>
                                <div className='col-md-12'>
                                    <p className='uqa-card-card-number-us'>US #{i}</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <p className='uqa-card-card-title'>{c.name}</p>
                                </div>
                            </div>
                            <div className='row uqa-card-card-text_'>
                                <div className='col-md-12'>
                                    <p className='uqa-card-card-text'>{c.activity}</p>
                                </div>
                            </div>
                            <div className='row uqa-card-card-text_'>
                                <div className='col-md-6'>
                                    {c.contextSituational === 'pending' ? <button type="button" className="btn btn-primary uqa-card-card-btn" onClick={() => {

                                        this.setState({ tech: <Modal modal={<FormTechnical name={c.name} id={c.gid} us={c.activity} />} active={true} /> })
                                        this.props.setModalOpen(true);

                                    }}>
                                        <i className="fa-sharp fa-solid fa-circle-info"></i>  Technical Detail
                                    </button> : <></>

                                    }

                                </div>
                                <div className='col-md-4'>
                                    <button type="button" className="btn btn-primary uqa-card-card-btn" onClick={() => {
                                        this.props.setTextInformation(c.contextLocal);
                                        this.setState({
                                            information: <Modal modal={<FormInformation />} active={true} />
                                        })
                                        this.props.setModalOpen(true);
                                    }}>
                                        <i className="fa-sharp fa-solid fa-eye"></i>  View all
                                    </button>
                                </div>
                                <div className='col-md-2'>
                                    {c.contextSituational === 1 ? <i className="fa-sharp fa-solid fa-check uqa-card-card-btn_"></i> : <></>}
                                </div>
                            </div>
                        </div>
                    </div>)
            });
        }


        return card;
    }

    render() {


        if (this.props.uss !== undefined && this.props.uss !== null && this.props.uss[0] !== undefined && this.props.uss[0].storyUser !== undefined)
            return (
                <div className='horizontal-scrollable' style={{ width: this.state.w + 'px' }}>
                    <div className='row'>

                        {this.state.information}
                        {this.state.tech}
                        {this.renderCard(this.props.uss[0].storyUser)}
                    </div>
                </div>);
        else
            <div></div>

    }

}


const mapStateToProps = state => {
    return {
        sel_card: state.uqa.sel_card,
        uss: state.uqa.uss,
        modalOpen: state.uqa.modalOpen,
        token: state.uqa.token,
    };
};

export default connect(mapStateToProps, { setTextInformation, setModalOpen, setSelCard, GetStateUserStory, setContextSituational })(cardCard);