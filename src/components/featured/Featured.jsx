import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import "./featured.scss"

function Featured({ type }) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                    </select>
                </div>
            )}
            <img src="https://images.pexels.com/photos/5568743/pexels-photo-5568743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />

            <div className="info">
                <img src="https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />

                <span className="desc">
                    apple ball cat dog apple ball cat dog apple ball cat dog apple ball cat dog apple ball cat dog
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Featured
