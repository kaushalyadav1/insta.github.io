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
import p10 from "../images/p10.jpg"
import p11 from "../images/p11.jpg"
import p12 from "../images/p12.jpg"

const Post = () => {
    return (
        <section id={ds.con}>
                <div>
                    <img src={p2} alt="" />
                    <img src={p3} alt="" />
                    <img src={p4} alt="" />
                    <img src={p5} alt="" />
                    <img src={p6} alt="" />
                    <img src={p7} alt="" />
                    <img src={p8} alt="" />
                    <img src={p9} alt="" />
                    <img src={p10} alt="" />
                    <img src={p11} alt="" />
                    <img src={p12} alt="" />
                    <img src={p1} alt="" />
                </div>
        </section>
    )
}

export default Post
