import React from 'react';
import { connect } from 'react-redux';
import './cardResult.scss';


class cardResult extends React.Component {

    state = { select: undefined };

    componentDidMount() {
    }


    render() {
        let idproject = 'HU1234456';
        let tester = this.props.context_situational?.result?.tester;
        let date = this.props.context_situational?.result?.date;
        let enviorement = "Produccion";
        let recomendations = this.props.context_situational?.result?.urlAlert;
        let description = this.props.context_situational?.result?.description
        let result = "";
        let descriptionAll = [];
        if (description !== undefined && description !== null && description !== "") {

            result = JSON.parse(description);

            Object.keys(result).map((key) => {
                console.log(result[key])
                if (this.state.select === undefined || this.state.select === result[key].confidence)
                    descriptionAll.push(<li class="list-group-item d-flex justify-content-between align-items-start uqa-card-result-li">
                        <div class="ms-2 me-auto uqa-card-result-font">
                            <div class="fw-bold">{result[key].name}</div>
                            {result[key].description}
                        </div>
                        <span class="badge bg-primary rounded-pill">{result[key].alertRef}</span>
                    </li>);
            });
        }

        if (this.props.context_situational?.state === 'start' || this.props.context_situational?.state === 'pending' || this.props.sel_card?.gid !== this.props.context_situational?.result.gId)
            return (
                <div className="card uqa-center-card uqa-detail-card ">
                    <div className="card-body">
                        <div className='container'>

                        </div>
                    </div>
                </div>
            );

        return (
            <div className="card uqa-center-card uqa-detail-card ">
                <div className="card-body">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-10 offset-md-1 uqa-card-result-div '>
                                <h5 className='uqa-card-result-detail-header'>Result</h5>
                                <select className="form-select uqa-card-result-select-filter" onChange={(e) => { this.setState({ select: e.target.value }) }} aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>
                        </div>
                        <div className='row uqa-card-result-description'>
                            <div className='col-md-10 offset-md-1'>
                                <p className='uqa-card-result-detail'>

                                    <ol class="list-group list-group-numbered uqa-card-result-ol">
                                        {descriptionAll}
                                    </ol>
                                </p>
                            </div>
                        </div>
                        <hr className='uqa-card-result-line' />
                        <div className='row'>
                            <div className='col-md-10 offset-md-1 '>
                                <ul className='uqa-card-result-data-tester'>
                                    <li>
                                        <p className=' uqa-card-result-data-tester' href='/'>Tester:  {tester}</p>
                                    </li>
                                    <li>
                                        <p className=' uqa-card-result-data-tester' href='/'>Date:   {date}</p>
                                    </li>
                                    <li>
                                        <p className=' uqa-card-result-data-tester' href='/'>Envioriment:  {enviorement}</p>
                                    </li>
                                    <li>
                                        <p className=' uqa-card-result-data-tester'>Recomendation: <a className=' ' Target="_blank" href={recomendations}>{this.props.context_situational?.result?.urlScript}</a>  </p>
                                    </li>
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

        context_situational: state.uqa.context_situational,
        sel_card: state.uqa.sel_card,
    };
};

export default connect(mapStateToProps, {})(cardResult);