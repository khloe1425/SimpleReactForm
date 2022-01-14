import React from 'react'
import Label from './Label';


const Select: React.FC<any> = (props) => {
    const selectOptions = props.options.split(', ');

    // Generate list of options
    const selectOptionsList = selectOptions.map((selectOption: any, index: any) => {
        return <option key={index} value={index}>{selectOption}</option>
    });
    return (
        <fieldset>
            <Label
                hasLabel={props.hasLabel}
                htmlFor={props.htmlFor}
                label={props.label}
            />

            <select
                defaultValue=''
                id={props.htmlFor}
                name={props.name || null}
                required={props.required || null}
            >
                <option value='' disabled>Select one option</option>
                {selectOptionsList}
            </select>
        </fieldset>
    )
}
export default Select;