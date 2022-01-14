import React from 'react'
import Label from './Label'

const DataList: React.FC<any> = (props) => {
    const dataOptions = props.options.split(', ');

    // Generate list of options
    const dataOptionsList = dataOptions.map((dataOption: string, index: any) => {
        return <option key={index} value={dataOption} />
    });
    return (
        <fieldset>
            <Label
                hasLabel={props.hasLabel}
                htmlFor={props.htmlFor}
                label={props.label}
            />
            <input list={props.htmlFor} />

            <datalist
                defaultValue=''
                id={props.htmlFor}
            >
                <option value='' disabled>Select one option</option>

                {dataOptionsList}
                
            </datalist>
        </fieldset>
    )
}
export default DataList;