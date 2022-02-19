import styled from 'styled-components'

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 40px;
    margin-top: 20px;
`

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
`

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
`

export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`

export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`

export const Select = styled.select`
    width: 100%;
    height: 32px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    background-color: #fff;
`

export const AddItem = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    background-color: #2B4162;
    color: #fff;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background-color: rgba(0, 0, 0, 0.20);
        color: #2B4162;
    }
`

export const Error = styled.p`
    color: red;
    margin-top: 15px;
    font-size: 14px;
    display: block;
    padding: 0px 65px;
`
