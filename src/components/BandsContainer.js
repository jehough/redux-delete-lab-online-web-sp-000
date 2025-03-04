import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band.js'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map(band => <Band key={band.id} band={band} deleteBand={this.props.deleteBand}/>)
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name: name }),
  deleteBand: id => dispatch({type: "DELETE_BAND", id: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
