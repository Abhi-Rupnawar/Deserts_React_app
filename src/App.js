import React from 'react'

import IMG from './white-and-red-cherry.jpg'
const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  return (
    <div>
        <h1>This is a App component</h1>
        <img src='https://t4.ftcdn.net/jpg/08/87/17/59/360_F_887175938_aaAkIaSJswq2lKCr499Xf4dgQwqhLvf6.jpg'
        height="350px" alt='img'/>
        <img src={IMG} height="350px" />
     <counter/>
    </div>
  )
}

root.render(
  <>
  <App/>
  </>
)
export default App