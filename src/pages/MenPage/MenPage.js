import React from 'react'
import HighlightsPopup from '../../components/Highlights/HighlightsPopup'
import Markalar from '../../components/Markalar/Markalar'
import İmageContainer from '../../components/imageContainer/İmageContainer'
import NewHiglights from '../../components/Highlights/NewHiglights'

function MenPage() {
  return (
    <div>
      <Markalar></Markalar>
      <HighlightsPopup></HighlightsPopup>
      <İmageContainer></İmageContainer>
      <İmageContainer></İmageContainer>
      <İmageContainer></İmageContainer>
      <İmageContainer></İmageContainer>
      <HighlightsPopup></HighlightsPopup>
      <İmageContainer></İmageContainer>
      <NewHiglights></NewHiglights>
    </div>
  )
}

export default MenPage
