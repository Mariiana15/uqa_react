import React from 'react';
import { connect } from 'react-redux';
import Cards from '../card_card/cardCard';
import './cardMetrics.scss';
import { SetStateTest } from '../../../apis/configBack';
import { setContextSituational } from '../../../actions';

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

        var progressCircles = document.querySelectorAll('.c-progress-circle');

        setTimeout(function () {
            for (var i = 0; i < progressCircles.length; i++) {
                var circle = progressCircles[i],
                    val = Number(circle.getAttribute('data-percentage')),
                    bar = circle.querySelectorAll('.c-progress-circle__bar')[0];

                if (isNaN(val)) {
                    val = 100;
                }
                else {
                    var r = bar.getAttribute('r');
                    var c = Math.PI * (r * 2);

                    if (val < 0) { val = 0; }
                    if (val > 100) { val = 100; }

                    var pct = ((100 - val) / 100) * c;

                    bar.style.strokeDashoffset = pct;
                    bar.setAttribute('data-percentage', val);
                }
            }
        }, 500);
    }


    render() {

        let nameUS = 'CONFIGURACIÓN VINCULACIÓN A FIDUCIARIA -';
        let dataUS = 'Business, Front';
        let tests = 4;
        let total = 6;


        if ( this.props.context_situational?.state === "start" || this.props.context_situational?.state === "" || this.props.context_situational?.state === "open" || this.props.sel_card?.gid !== this.props.context_situational?.result.gId)
            return (
                <div className="card  card_ uqa-center-card  uqa-detail-card">
                    <div className="card-body">
                        <div className='container '>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <h5 className='uqa-card-result-detail-header'>Results for User Story <p className='uqa-header-data-name'>{this.props.sel_card?.riskActivity}</p></h5>

                                </div>
                            </div>
                            <div className='row '>
                                <div className='col-md-10 offset-md-1 '>
                                    <p className='uqa-card-tests-detail uqa-card-title-metric'>{this.props.sel_card?.name}</p>
                                </div>
                            </div>
                            <div className='row uqa-card-metrics-met' onClick={() => { this.props.setContextSituational({ ...this.props.context_situational, state: 'pending' }); this.props.SetStateTest(this.props.token.AccessToken, this.props.sel_card.gid) }}>
                                <div className='col-md-4 offset-md-4 uqa-poimter'>
                                    <div className='uqa-card-metric-coverage-zoom'>
                                        <div className="c-progress-circle" id="circle" data-percentage="">
                                            <svg className="c-progress-circle__svg">
                                                <defs>
                                                    <linearGradient id="gradient">
                                                        <stop offset="0%" stopColor="#71b0ff" />
                                                        <stop offset="100%" stopColor="#8c6cff" />
                                                    </linearGradient>
                                                </defs>
                                                <circle className="c-progress-circle__bar" r="90" cx="50%" cy="50%" stroke="url(#gradient)"></circle>
                                            </svg>
                                        </div>
                                        <i className='fa-solid fa-play bh_fa_solid_play'></i>
                                        <p className='uqa-card-coverage uqa-card-coverage_'>Comenzar</p>
                                    </div>

                                </div>

                            </div>
                            <div className='row ' onClick={() => { this.props.SetStateTest(this.props.token.AccessToken, this.props.sel_card.gid) }}>
                                <div className='col-md-4 offset-md-5'>
                                    <p className='uqa-card-tests-total'>Start Test</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

        else if (this.props.context_situational?.state === "pending")
            return (
                <div className="card  card_ uqa-center-card  uqa-detail-card">
                    <div className="card-body">
                        <div className='container '>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <h5 className='uqa-card-result-detail-header'>Results for User Story <p className='uqa-header-data-name'>{this.props.sel_card?.riskActivity}</p></h5>

                                </div>
                            </div>
                            <div className='row '>
                                <div className='col-md-10 offset-md-1 '>
                                    <p className='uqa-card-tests-detail uqa-card-title-metric'>{this.props.sel_card?.name}</p>
                                </div>
                            </div>
                            <div className='row uqa-card-metrics-met'>
                                <div className='col-md-4 offset-md-4'>
                                    <div className='uqa-card-metric-coverage-zoom'>
                                        <div className="c-progress-circle" id="circle" data-percentage="">
                                            <svg className="c-progress-circle__svg">
                                                <defs>
                                                    <linearGradient id="gradient">
                                                        <stop offset="0%" stopColor="#71b0ff" />
                                                        <stop offset="100%" stopColor="#8c6cff" />
                                                    </linearGradient>
                                                </defs>
                                                <circle className="c-progress-circle__bar" r="90" cx="50%" cy="50%" stroke="url(#gradient)"></circle>
                                            </svg>
                                        </div>
                                        <i className='fa-solid fa-business-time bh_fa_solid_time'></i>
                                        <p className='uqa-card-coverage uqa-card-coverage_'>En proceso</p>
                                    </div>

                                </div>

                            </div>
                            <div className='row '>
                                <div className='col-md-4 offset-md-5'>
                                    <p className='uqa-card-tests-total'>Pending...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

        return (
            <div className="card  card_ uqa-center-card  uqa-detail-card">
                <div className="card-body">
                    <div className='container '>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h5 className='uqa-card-result-detail-header'>Results for User Story <p className='uqa-header-data-name'>{this.props.sel_card?.riskActivity}</p></h5>

                            </div>
                        </div>
                        <div className='row '>
                            <div className='col-md-10 offset-md-1 '>
                                <p className='uqa-card-tests-detail uqa-card-title-metric'>{this.props.sel_card?.name}</p>
                            </div>
                        </div>
                        <div className='row uqa-card-metrics-met'>
                            <div className='col-md-4 '>
                                <div className='uqa-card-metric-coverage-zoom'>
                                    <div className="c-progress-circle" id="circle" data-percentage={(this.props.context_situational?.result?.solutionTest / this.props.context_situational?.result?.totalTest) * 100}>
                                        <svg className="c-progress-circle__svg">
                                            <defs>
                                                <linearGradient id="gradient">
                                                    <stop offset="0%" stopColor="#71b0ff" />
                                                    <stop offset="100%" stopColor="#8c6cff" />
                                                </linearGradient>
                                            </defs>
                                            <circle className="c-progress-circle__bar" r="90" cx="50%" cy="50%" stroke="url(#gradient)"></circle>
                                        </svg>
                                    </div>
                                    <p className='uqa-card-coverage'>Coverage</p>
                                </div>

                            </div>
                            <div className='col-md-4 '>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className="card uqa-card-metric">
                                            <div className="card-body">
                                                <div className='row'>
                                                    <div className='col-md-7'>
                                                        <p className='uqa-card-t'>Alert Business</p>
                                                        <p className='uqa-card-l'>{this.props.context_situational?.result?.alert * 100}%</p>
                                                    </div>
                                                    <div className='col-md-5'>
                                                        <div className="card uqa-card-m">
                                                            <div className="card-body">
                                                                <div className='uqa-card-i'>
                                                                    <i className="fa-sharp fa-solid fa-building-flag "></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row uqa-card-m-s'>
                                    <div className='col-md-12'>
                                        <div className="card uqa-card-metric">
                                            <div className="card-body">
                                                <div className='row'>
                                                    <div className='col-md-7'>
                                                        <p className='uqa-card-t'>Stakeholder</p>
                                                        <p className='uqa-card-l'>{this.props.context_situational?.result?.stakeholder * 100}%</p>
                                                    </div>
                                                    <div className='col-md-5'>
                                                        <div className="card uqa-card-m">
                                                            <div className="card-body">
                                                                <div className='uqa-card-i'>
                                                                    <i className="fa-sharp fa-solid fa-user-alt "></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 '>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className="card uqa-card-metric">
                                            <div className="card-body">
                                                <div className='row'>
                                                    <div className='col-md-7'>
                                                        <p className='uqa-card-t'>Alert OWASP</p>
                                                        <p className='uqa-card-l_2'>{this.props.context_situational?.result?.owasp}</p>
                                                    </div>
                                                    <div className='col-md-5'>
                                                        <div className="card uqa-card-m_2">
                                                            <div className="card-body">
                                                                <div className='uqa-card-i'>
                                                                    <i className="fa-sharp fa-solid fa-shield-alt "></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row uqa-card-m-s'>
                                    <div className='col-md-12'>
                                        <div className="card uqa-card-metric">
                                            <div className="card-body">
                                                <div className='row'>
                                                    <div className='col-md-7'>
                                                        <p className='uqa-card-t'>Technologie</p>
                                                        <p className='uqa-card-l_2'>{this.props.context_situational?.result?.tech}</p>
                                                    </div>
                                                    <div className='col-md-5'>
                                                        <div className="card uqa-card-m_2">
                                                            <div className="card-body">
                                                                <div className='uqa-card-i'>
                                                                    <i className="fa-sharp fa-solid fa-laptop-code "></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row '>
                            <div className='col-md-6 offset-md-1'>
                                <p className='uqa-card-tests-total'>Tests {this.props.context_situational?.result?.solutionTest}/{this.props.context_situational?.result?.totalTest}</p>
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
        token: state.uqa.token,
    };
};

export default connect(mapStateToProps, { SetStateTest, setContextSituational })(cardUS);