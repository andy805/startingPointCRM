import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

// This variable lets you dynamically change size of circle
let width = "6px";

const ellipsis = {
    fontSize: "13px",
    backgroundColor: "#f2f2f2",
    color: "var(--fmsp-blue)",
    padding: `${width}`,
    borderRadius: `calc(9px + ${width})`,
};

function Ellipsis() {
    return (
        <FontAwesomeIcon icon={faEllipsisH} style={ellipsis}></FontAwesomeIcon>
    );
}

export default Ellipsis;
