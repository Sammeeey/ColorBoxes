import './ColorBoxes.css'
import { useState } from "react"
import ColorBox from "./ColorBox"

function ColorBoxes() {
    const [color, setColor] = useState('aqua')

    const setRandomColor = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        console.log(randomColor)

        return setColor(randomColor)
    }

    return (
        <div className="ColorBoxes">
            <ColorBox />
            <ColorBox />
            <ColorBox />
            <ColorBox />
            <ColorBox />
        </div>
    )
}

export default ColorBoxes
