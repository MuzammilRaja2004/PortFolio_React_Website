import React from 'react'
import home_style from './home.module.css'
import img1 from './image/home_img.png'
import './image/home-backss.png'



function Home() {
    return (
        <div className={home_style.main_div}>

            <div className={home_style.left_head}>
                <h1 className={home_style.left_head1}>StartUp Coding</h1>
                <h1 className={home_style.left_head2}>We Are Animation</h1>

                <p className={home_style.left_pera1}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae aut expedita esse hic aperiam! Quos ipsum praesentium eos. Natus suscipit aut aspernatur necessitatibus animi voluptate alias nostrum voluptates soluta!</p>

                <button className={home_style.left_button}>Get Started</button>
            </div>

            <div className={home_style.right_div}>
                <img src={img1} alt="Team" className={home_style.images}/>
            </div>
        </div>
    )
}

export default Home
