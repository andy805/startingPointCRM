import React from 'react'
import styles from "./MainMenu.module.css"
import PushButton from './UI/PushButton'
import ContactsSVG from './SVG/ContactsSVG'
import EstimatesSVG from './SVG/EstimatesSVG'
import InvoicesSVG from './SVG/InvoicesSVG'
import ProjectsSVG from './SVG/ProjectsSVG'
import TasksSVG from './SVG/TasksSVG'
import ProductsSVG from './SVG/ProductsSVG'
import NotesSVG from './SVG/NotesSVG'
import FilesSVG from './SVG/FilesSVG'


const MainMenu = () => {
    return (
        <div className={`${styles.mainMenu} ${'box-shadow'}`}>
            <div className={styles.mainMenu__buttons}>
                <PushButton svgElement={<ContactsSVG />} width={"73px"} height={"61px"} title={"Contacts"} counterField={0} />
                <PushButton svgElement={<EstimatesSVG />} width={"73px"} height={"61px"}/>
                <PushButton svgElement={<InvoicesSVG />} width={"73px"} height={"61px"}/>
                <PushButton svgElement={<ProjectsSVG />} width={"73px"} height={"61px"}/>
                <PushButton svgElement={<TasksSVG />} width={"73px"} height={"61px"}/>
                <PushButton svgElement={<ProductsSVG />} width={"73px"} height={"61px"}/>
                <PushButton svgElement={<NotesSVG />} width={"73px"} height={"61px"}/>
                <PushButton svgElement={<FilesSVG />} width={"73px"} height={"61px"}/>
            </div>
        </div>        
    )
}

export default MainMenu
