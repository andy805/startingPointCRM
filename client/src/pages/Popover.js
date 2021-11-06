import React, { Children, useState } from "react";
import { usePopper } from "react-popper";
import DropdownMenu from "../components/DropdownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import newStyles from "./Popover.module.css";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Popover = (props) => {
    const [visible, setVisible] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "bottom-end",
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement },
            },
            {
                name: "offset",
                options: {
                    offset: [353, 1],
                },
            },
        ],
    });

    // opens and closes Popover
    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <>
            <div ref={setReferenceElement} className={newStyles.div__button}>
                <FontAwesomeIcon
                    icon={props.icon}
                    onClick={visible ? "" : handleClick}
                />

                {/* Close button for popover */}
                {visible && (
                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        onClick={visible ? handleClick : ""}
                        style={styles.close}
                    />
                )}
            </div>

            <div
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
            >
                <div ref={setArrowElement} style={styles.arrow} />
                <DropdownMenu visible={visible}>{props.children}</DropdownMenu>
            </div>
        </>
    );
};

export default Popover;
