import React from 'react'
import Label from './Label'

const Input: React.FC<any> = (props) => {
    return (
        <fieldset>
            <Label
                hasLabel={props.hasLabel}
                htmlFor={props.htmlFor}
                label={props.label}
            />
            <input
                id={props.htmlFor}
                max={props.max || null}
                min={props.min || null}
                name={props.name || null}
                placeholder={props.placeholder || null}
                required={props.required || null}
                step={props.step || null}
                type={props.type || 'text'}
            />
        </fieldset>
    )
}
export default Input;