import React from 'react'
import styles from "./MainMenu.module.css"
import PushButton from './UI/PushButton'
import ContactsSVG from './SVG/ContactsSVG'
import EstimatesSVG from './SVG/EstimatesSVG'
import InvoicesSVG from './SVG/InvoicesSVG'
import ProjectsSVG from './SVG/ProjectsSVG'
import ToDoSVG from './SVG/ToDoSVG'
import ProductsSVG from './SVG/ProductsSVG'
import NotesSVG from './SVG/NotesSVG'
import FilesSVG from './SVG/FilesSVG'
import CreateButton from "./UI/CreateButton";


const MainMenu = () => {
    return (
        <div className={`${styles.mainMenu} ${'box-shadow'}`}>
            <div className={styles.mainMenu__buttons}>
                <PushButton svgElement={<ContactsSVG />} width={"73px"} height={"61px"} title={"Contacts"} counterField={0} />
                <PushButton svgElement={<EstimatesSVG />} width={"73px"} height={"61px"} title={"Estimates"} counterField={0} />
                <PushButton svgElement={<InvoicesSVG />} width={"73px"} height={"61px"} title={"Invoices"} counterField={0} />
                <PushButton svgElement={<ProjectsSVG />} width={"73px"} height={"61px"} title={"Projects"} counterField={0} />
                <PushButton svgElement={<ToDoSVG />} width={"73px"} height={"61px"} title={"Tasks"} counterField={0} />
                <PushButton svgElement={<ProductsSVG />} width={"73px"} height={"61px"} title={"Products"} counterField={0} />
                <PushButton svgElement={<NotesSVG />} width={"73px"} height={"61px"} title={"Notes"} counterField={0} />
                <PushButton svgElement={<FilesSVG />} width={"73px"} height={"61px"} title={"Files"} counterField={0} />
            </div>

            <div className={styles.mainMenu__addButton}>
                <CreateButton /> 
                <span>Add Contacts</span>
                <div className={styles.mainMenu__lineBreak}></div>
            </div>
        </div>        
    )
}

export default MainMenu
