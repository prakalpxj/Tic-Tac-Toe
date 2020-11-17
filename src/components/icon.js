import React from "react"
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa"

const Icon = ({ name }) => {
    switch (name) {
        case 'circle':
            return <FaRegCircle classname="icons" />
        case 'cross':
            return <FaTimes classname="icons" />
        default:
            return <FaPen classname="icons" />

    }
}

export default Icon 