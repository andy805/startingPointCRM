import React from 'react'
import {useState} from 'react'
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
import MainMenuPortal from './UI/MainMenuPortal'

const buttonBar = [{ icon:ContactsSVG , width:"73px", height:"61px", title:"Contacts", counterField:0, active: false},
                {icon: InvoicesSVG, width:"73px", height:"61px", title:"Invoices", counterField:0, active:false},
                {icon: ProjectsSVG, width:"73px", height:"61px", title:"Projects", counterField:0, active:false},
                {icon: NotesSVG, width:"73px", height:"61px", title:"Notes", counterField:0, active:false},
                {icon: FilesSVG, width:"73px", height:"61px", title:"Files", counterField:0, active:false}
];

const MainMenu = (props) => {
    const [active, setActive] = useState(0);
    return (
        <div className={`${styles.mainMenu} ${'box-shadow'}`}>
            <div className={styles.mainMenu__buttons}>
                {buttonBar.map((button, index) => (
                    <PushButton svgElement={<button.icon />} width={button.width} height={button.height} title={button.title}
                    counterField={button.counterField} active={button.active} />

                ))}
                {/* <PushButton svgElement={<ContactsSVG />} width={"73px"} height={"61px"} title={"Contacts"} counterField={0} />
                <PushButton svgElement={<EstimatesSVG />} width={"73px"} height={"61px"} title={"Estimates"} counterField={0} />
                <PushButton svgElement={<InvoicesSVG />} width={"73px"} height={"61px"} title={"Invoices"} counterField={0} />
                <PushButton svgElement={<ProjectsSVG />} width={"73px"} height={"61px"} title={"Projects"} counterField={0} />
                <PushButton svgElement={<ToDoSVG />} width={"73px"} height={"61px"} title={"Tasks"} counterField={0} />
                <PushButton svgElement={<ProductsSVG />} width={"73px"} height={"61px"} title={"Products"} counterField={0} />
                <PushButton svgElement={<NotesSVG />} width={"73px"} height={"61px"} title={"Notes"} counterField={0} />
                <PushButton svgElement={<FilesSVG />} width={"73px"} height={"61px"} title={"Files"} counterField={0} /> */}
            </div>

            <div className={styles.mainMenu__addButton}>
                <CreateButton /> 
                <span>Add Contacts</span>
                <div className={styles.mainMenu__lineBreak}></div>
            </div>
            
            <MainMenuPortal />

        </div>        
    )
}

export default MainMenu
