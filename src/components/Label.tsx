import React from 'react'
type PropsLabel = {
    hasLabel?: string;
    htmlFor?: string;
    label?: string;
}
const Label: React.FC<PropsLabel> = (props) => {
    return (
        <div>
            {props.hasLabel && <label htmlFor={props.htmlFor}>{props.label}</label>}
        </div>
    )
}

export default Label;