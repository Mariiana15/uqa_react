import React from 'react';
import { connect } from 'react-redux';
import Cards from '../card_card/cardCard';
import './cardUS.scss';

const cards = [{
    title: "Moder", description: "s Uber works through a huge amount of internalmanagement turmoil."
},
{
    title: "Moder", description: "s Uber works through a huge amount of internalmanagement turmoil."
},
{
    title: "Moder", description: "s Uber works through a huge amount of internalmanagement turmoil."
},
{
    title: "Moder", description: "s Uber works through a huge amount of internalmanagement turmoil."
}]
class cardUS extends React.Component {

    state = {};


    componentDidMount() {
    }


    render() {
       
        let description = 'Nuevo mecanismo de pagos';
          return (
            <div className="card  card_ uqa-center-card uqa-test-card">
                <div className="card-body">
                    <div className='container '>
                        <div className='row'>
                            <div className='col-md-10 '>
                                <h5 className='uqa-card-result-detail-header'>User Stories</h5>
                            </div>
                        </div>
                        <div className='row '>
                            <div className='col-md-10 '>
                                <p className='uqa-card-tests-detail'>{this.props.uss !== undefined && this.props.uss[0] !== undefined?this.props.uss[0].name: description }</p>
                            </div>
                        </div>
                        <div className='row uqa-card-card uqa-cards-container'>
                            <div className='col-md-12'>
                                <Cards cards={cards}/>
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
        uss: state.uqa.uss


    };
};

export default connect(mapStateToProps, {})(cardUS);