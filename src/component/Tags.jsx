import React from 'react'
import ds from "./post.module.css"
import p1 from "../images/p1.jpg"
import p2 from "../images/p2.jpg"
import p3 from "../images/p3.jpg"
import p4 from "../images/p4.jpg"
import p5 from "../images/p5.jpg"
import p6 from "../images/p6.jpg"
import p7 from "../images/p7.jpg"
import p8 from "../images/p8.jpg"
import p9 from "../images/p9.jpg"
import p10 from "../images/vid-1.mp4"
import p11 from "../images/vid-2.mp4"
import p12 from "../images/vid-3.mp4"

const Tags = () => {
    return (
        <section id={ds.con}>
                <div>
                    <img src={p2} alt="" />
                    <video src={p10} autoPlay loop muted></video>
                    <img src={p3} alt="" />
                    <video src={p11} autoPlay loop muted></video>
                    <img src={p4} alt="" />
                    <img src={p5} alt="" />
                    <img src={p6} alt="" />
                    <img src={p7} alt="" />
                    <img src={p8} alt="" />
                    <img src={p9} alt="" />
                    <video src={p12} autoPlay loop muted></video>
                    <img src={p1} alt="" />
                </div>
        </section>
    )
}

export default Tags
