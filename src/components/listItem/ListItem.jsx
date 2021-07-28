import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import React, { useState } from 'react'
import "./listItem.scss"

export default function ListItem({ index }) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://www.youtube.com/watch?v=dMKoW_mXBOw"
    return (
        <div className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src="https://images.unsplash.com/photo-1616777103777-d11788eb26eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                alt=""
            />
            {isHovered && (
                <>
                    <video crossOrigin="anonymous" src={trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUpAltOutlined className="icon"/>
                            <ThumbDownAltOutlined className="icon"/>
                        </div>
                        <div className="itemInfoTop">
                            <span>1hr 14mins</span>
                            <span className="limit"> +16</span>
                            <span>1996</span>
                        </div>
                        <div className="desc">
                            loream ipso iafd afafmagkmasgminbjansbjnaksgmlkmaskgmlasmgmas
                            akmfaskmglkasnmmglkmlkasmglkmslgm
                        </div>
                        <div className="genre">
                            Action
                        </div>
                    </div></>
            )}
        </div>
    )
}
