import { Box, Container } from '@mui/material'
import Button from '../components/Button'
import CheckBox from '../components/CheckBox'
import DataList from '../components/DataList'
import Input from '../components/Input'
import Radio from '../components/Radio'
import Select from '../components/Select'
import Textarea from '../components/Textarea'
// import { Button } from '../components/Button'
export default function Home() {
    return (
        <Container maxWidth="xl" >
            <Box mt={5}>
                <form method='' action=''>
                    <Input
                        hasLabel={true}
                        htmlFor='textInput'
                        label='Text input'
                        required={true}
                        type='text'
                    />

                    <Input
                        hasLabel={true}
                        htmlFor='emailInput'
                        label='Email input'
                        required={true}
                        type='email'
                    />

                    <Input
                        hasLabel={true}
                        htmlFor='numberInput'
                        label='Number input'
                        required={true}
                        type='number'
                        min='0.5'
                        max='100'
                        step='0.5'
                    />

                    <Input
                        hasLabel={true}
                        htmlFor='passwordInput'
                        label='Password input'
                        required={true}
                        type='password'
                    />

                    <Select
                        hasLabel={true}
                        htmlFor='select'
                        label='Select'
                        options='one, two, three, option four, five'
                        required={true}
                    />

                    <DataList
                        hasLabel={true}
                        htmlFor='datalist'
                        label='Datalist'
                        options='Chrome, Edge, Firefox, Internet Explorer, Opera, Safari, Vivaldi'
                        required={true}
                    />

                    <Textarea
                        hasLabel={true}
                        htmlFor='textarea'
                        label='Textarea'
                        required={true}
                    />

                    <CheckBox
                        htmlFor='checkbox'
                        label='Checkbox'
                        required={true}
                    />

                    <Radio
                        hasLabel={true}
                        htmlFor='radioOne'
                        label='Radio one'
                        name='radios'
                        required={true}
                    />

                    <Radio
                        hasLabel={true}
                        htmlFor='radioTwo'
                        label='Radio two'
                        name='radios'
                        required={true}
                    />

                    <Button
                        type='submit'
                        value='submit'
                        text='Send form'
                    />
                </form>
            </Box>
        </Container>
    )
}
