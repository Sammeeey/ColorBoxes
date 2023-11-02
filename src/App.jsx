import './App.css'
import ColorBoxes from './ColorBoxes'

const colors = [
  '#c7e0a3',
  '#40a848',
  '#e2bed3',
  '#5528b1',
  '#930a52',
  '#1f4b5a',
  '#47e432',
  '#b354e7',
  '#ff105b',
  '#fa312e',
  '#05e1c4',
]

function App() {

  return (
    <>
    <h1>ColorBoxes</h1>
    <h2>👇click👇</h2>
    <div>
      <ColorBoxes />
      <ColorBoxes />
      <ColorBoxes />
      <ColorBoxes />
      <ColorBoxes />
    </div>
    </>
  )
}

export default App
