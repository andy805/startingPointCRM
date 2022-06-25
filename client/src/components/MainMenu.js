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
import CreateButton from "./UI/CreateButton.js";
import MainMenuPortal from './UI/MainMenuPortal.js'
import Slideshow from './UI/Slideshow.js'
import Slide from './UI/Slide.js'

const buttonBar = [{ icon:ContactsSVG , width:"73px", height:"61px", title:"Contacts", counterField:0, active: false},
                {icon: InvoicesSVG, width:"73px", height:"61px", title:"Invoices", counterField:0, active:false},
                {icon: ProjectsSVG, width:"73px", height:"61px", title:"Projects", counterField:0, active:false},
                {icon: NotesSVG, width:"73px", height:"61px", title:"Notes", counterField:0, active:false},
                {icon: FilesSVG, width:"73px", height:"61px", title:"Files", counterField:0, active:false}
];

// const basePath = "http://shielded-oasis-43540.herokuapp.com/"
const basePath = "http://localhost:3000/"

const MainMenu = (props) => {
    const [active, setActive] = useState(0);

    
    return (
        
        
        <div className={`${styles.mainMenu} ${'box-shadow'}`}>
            <div className={styles.mainMenu__buttons}>
                {buttonBar.map((button, index) => (
                    <PushButton svgElement={<button.icon />} width={button.width} height={button.height} title={button.title}
                    counterField={button.counterField} active={button.active} slideFunc={props.changeSlides} activeSlide={props.activeSlide}/>

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
  
            <Slideshow>
        {/* make this dynamic using active slide */}
            <CreateButton 
            path={basePath+"contacts/create"}
            user= {props.user}
            /> 


                <Slide name={"Contacts"} activeSlide={props.activeSlide}>
                    <div className={styles.mainMenu__addButton}>
                        <span>
                            Add Contacts</span>
                        <div className={styles.mainMenu__lineBreak}></div>
                    </div>
                    <MainMenuPortal />
                </Slide>
                <Slide name={'Invoices'} activeSlide={props.activeSlide}>
                    <h1> Invoices</h1>
                </Slide>
                <Slide name={'Projects'} activeSlide={props.activeSlide} >
                    <h1> Projects</h1>
                </Slide>
                <Slide name={'Notes'} activeSlide={props.activeSlide}>
                    <h1> Notes </h1>
                </Slide>
                <Slide name={'Files'} activeSlide={props.activeSlide}>
                    <h1> Files</h1>
                </Slide>
            </Slideshow>


        </div>        
    )
}

export default MainMenu
