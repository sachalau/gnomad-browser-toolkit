import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TranscriptTrack from '@broad/track-transcript'

import {
  currentTissue,
  currentTranscript,
  currentExon,
  transcripts,
  transcriptsGrouped,
  tissueStats,
  actions as geneActions,
} from '../resources/genes'

const TranscriptConnected = ({
  ownProps,
  transcripts,
  currentTranscript,
  transcriptsGrouped,
  setCurrentTranscript,
  currentExon,
  setCurrentExon,
  currentTissue,
  setCurrentTissue,
  tissueStats,
}) => {
  return (
    <TranscriptTrack
      transcripts={transcripts}
      currentTranscript={currentTranscript}
      transcriptsGrouped={transcriptsGrouped}
      onTranscriptNameClick={setCurrentTranscript}
      currentExon={currentExon}
      onExonClick={setCurrentExon}
      currentTissue={currentTissue}
      tissueStats={tissueStats}
      onTissueChange={setCurrentTissue}
      {...ownProps}
    />
  )
}
TranscriptConnected.propTypes = {
  ownProps: PropTypes.object.isRequired,
  currentTissue: PropTypes.string,
  currentTranscript: PropTypes.string,
  currentExon: PropTypes.string,
  transcripts: PropTypes.array.isRequired,
  transcriptsGrouped: PropTypes.object.isRequired,
  tissueStats: PropTypes.any.isRequired,
  setCurrentTissue: PropTypes.func.isRequired,
  setCurrentTranscript: PropTypes.func.isRequired,
  setCurrentExon: PropTypes.func.isRequired,
}

TranscriptConnected.defaultProps = {
  currentTissue: null,
  currentTranscript: null,
  currentExon: null,
}

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  currentTissue: currentTissue(state),
  currentTranscript: currentTranscript(state),
  currentExon: currentExon(state),
  transcripts: transcripts(state),
  transcriptsGrouped: transcriptsGrouped(state),
  tissueStats: tissueStats(state),
})

export default connect(mapStateToProps, geneActions)(TranscriptConnected)
