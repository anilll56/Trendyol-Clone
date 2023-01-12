import React from 'react'
import './popupSearch.css'

function PopupSearch() {
  return (
    <div className='popup1'>
      <div>
        <h5>Popüler aramalar</h5>
        <div className='boxesCss'>
        <Boxes text={'Gömlek'}></Boxes>
        <Boxes text={'Avize'}></Boxes>
        <Boxes text={'Sweatshirt'}></Boxes>
        <Boxes text={'Ayakkabı'}></Boxes>
        <Boxes text={'Telefon'}></Boxes>
        <Boxes text={'Apple'}></Boxes>
        </div>
        <div className='boxesCss'>
        <Boxes text={'Koton'}></Boxes>
        <Boxes text={'Sırt Çantası'}></Boxes>
        <Boxes text={'Bere'}></Boxes>
        <Boxes text={'Nike'}></Boxes> 
        </div>
      </div>
      <div>
        <h5>Sana özel kategoriler</h5>
        <div className='boxesCss'>
        <Boxes text={'Gömlek'}></Boxes>
        <Boxes text={'Avize'}></Boxes>
        <Boxes text={'Sweatshirt'}></Boxes>
        <Boxes text={'Ayakkabı'}></Boxes>
        <Boxes text={'Telefon'}></Boxes>
        <Boxes text={'Apple'}></Boxes>
        </div>
        <div className='boxesCss'>
        <Boxes text={'Koton'}></Boxes>
        <Boxes text={'Sırt Çantası'}></Boxes>
        <Boxes text={'Bere'}></Boxes>
        <Boxes text={'Nike'}></Boxes> 
        </div>
      </div>
    </div>
  )
}
function Boxes(props){
  return(
    <div className='textsDiv'>{props.text}</div>
  );
}

export default PopupSearch
