import React from 'react'


const Radio: React.FC<any> = (props) => {
    return (
        <fieldset>
            <label
                htmlFor={props.htmlFor}
            >
                <input
                    id={props.htmlFor}
                    name={props.name || null}
                    required={props.required || null}
                    type='radio'
                />
                {props.label}
            </label>
        </fieldset>
    )
}
export default Radio;