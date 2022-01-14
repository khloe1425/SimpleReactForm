import React from 'react'

// type valueButtonTypes = string | ReadonlyArray<string> | number | undefined;

type Props = {
    type: JSX.IntrinsicElements['button']['type'];
    value: JSX.IntrinsicElements['button']['value'];
    text: string | null;
}
const Button: React.FC<Props> = (props) => {
    return (
        <fieldset>
            <button
                type={props.type}
                value={props.value}
            >
                {props.text}
            </button>
        </fieldset>
    )
}

export default Button;