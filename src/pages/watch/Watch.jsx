import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import "./watch.scss"

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video
                className="video"
                autoPlay
                progress
                controls
                src="https://www.youtube.com/watch?v=dMKoW_mXBOw"
            />
        </div>
    )
}
