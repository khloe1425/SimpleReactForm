import React from 'react'
type CheckBoxProps = {
    htmlFor?: string;
    label?: string;
    name?: string;
    required?: boolean;
}
const CheckBox: React.FC<CheckBoxProps> = (props) => {

    return (
        <fieldset>
            <label
                htmlFor={props.htmlFor}
            >
                <input
                    id={props.htmlFor}
                    name={props.name}
                    required={props.required}
                    type='checkbox'
                />
                {props.label}
            </label>
        </fieldset>
    )
}
export default CheckBox;