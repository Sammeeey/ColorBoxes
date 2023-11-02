import './ColorBox.css'
import { useState } from "react"

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
const randomColor = () => colors[Math.floor(Math.random() * colors.length)]

function ColorBox() {
    const [color, setColor] = useState(randomColor)

    const setRandomColor = () => {
        console.log(randomColor)

        return setColor(randomColor)
    }

    return (
        <div className='ColorBox' style={{backgroundColor: color}} onClick={setRandomColor}></div>
    )
}

export default ColorBox
