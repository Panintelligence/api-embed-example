import React from 'react';
import PiContext from '../../contexts/PiContext';
import './PiChart.css';

class PiChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartId = props.chartId
  }

  get hasPiDetails() {
    console.log(this.context.piURL,this.context.piToken)
    return this.context.piURL && this.context.piToken;
  }

  render() {
    return (
      this.hasPiDetails ? <iframe title={`panintelligence-chart-${this.chartId}`} className="PiChart" src={`${this.context.piURL}/chart?token=${this.context.piToken}#chart-filter/${this.chartId}__1`}></iframe> : <div>Loading...</div>
    );
  }
}
PiChart.contextType = PiContext;

export default PiChart;
