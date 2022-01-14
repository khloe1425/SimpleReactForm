import React from 'react'
import Label from './Label';


const Textarea: React.FC<any> = (props) => {

    return (
        <fieldset>
            <Label
                hasLabel={props.hasLabel}
                htmlFor={props.htmlFor}
                label={props.label}
            />

            <textarea
                cols={props.cols || null}
                id={props.htmlFor}
                name={props.name || null}
                required={props.required || null}
                rows={props.rows || null}
            >
            </textarea>
        </fieldset>
    )
}
export default Textarea;