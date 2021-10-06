import React from 'react'
import styles from "./MainMenu.module.css"
import PushButton from './UI/PushButton'
import DetailViewSVG from './SVG/DetailViewSVG'


const MainMenu = () => {
    return (
        <div className={`${styles.mainMenu} ${'box-shadow'}`}>
            <div className={styles.mainMenu__buttons}>
                <PushButton svgElement={<DetailViewSVG />} width={"73px"} height={"61px"}/>
                <PushButton svgElement={<DetailViewSVG />} width={"73px"} height={"61px"}/>
                <PushButton svgElement={<DetailViewSVG />} width={"73px"} height={"61px"}/>
                <PushButton svgElement={<DetailViewSVG />} width={"73px"} height={"61px"}/>
                <PushButton svgElement={<DetailViewSVG />} width={"73px"} height={"61px"}/>
                <PushButton svgElement={<DetailViewSVG />} width={"73px"} height={"61px"}/>
                <PushButton svgElement={<DetailViewSVG />} width={"73px"} height={"61px"}/>
                <PushButton svgElement={<DetailViewSVG />} width={"73px"} height={"61px"}/>
            </div>
        </div>        
    )
}

export default MainMenu
