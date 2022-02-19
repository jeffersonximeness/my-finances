import React, { useEffect, useState } from 'react'
import { Item } from '../../types/Item'
import * as C from './styles'

import { categories } from '../../data/categories'

type Props = {
    onAdd: (item: Item) => void
}

export const InputArea = ({ onAdd }: Props) => {

    const [date, setDate] = useState('')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [value, setValue] = useState(0)
    const [errors, setErrors] = useState({dateError: '', categoryError: '', titleError: '', valueError: ''})

    let categoryKeys: string[] = Object.keys(categories)

    const clearFieldValues = () => {
        setDate('')
        setCategory('')
        setTitle('')
        setValue(0)
    }
    
    const handleAddItem = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let temp = {
            dateError: '', 
            categoryError: '', 
            titleError: '', 
            valueError: ''
        }

        if (date === '') {
            temp.dateError = 'Data inválida'
        }

        if (!categoryKeys.includes(category)) {
            temp.categoryError = 'Categoria inválida'
        }

        if (title === '') {
            temp.titleError = 'Titulo inválido'
        }

        if (value <= 0) {
            temp.valueError = 'Valor inválido'
        }

        setErrors({
            ...temp
        })

        if (Object.values(temp).every(value => value === '')) {
            let newItem: Item = {
                date: new Date(date),
                title: title,
                category: category,
                value: value
            }
            onAdd(newItem)
            clearFieldValues()
        }
    }


    return (
        <C.Container>
            <C.Form onSubmit={handleAddItem}>
                <C.InputLabel>
                    <C.InputTitle>Data</C.InputTitle>
                    <C.Input type="date" value={date} onChange={event => setDate(event.target.value)}></C.Input>
                    { errors.dateError != '' ? <C.Error>{ errors.dateError }</C.Error> : ''}
                </C.InputLabel>
                <C.InputLabel>
                    <C.InputTitle>Categoria</C.InputTitle>
                    <C.Select value={category} onChange={event => setCategory(event.target.value)}>
                        <>
                            <option></option>
                            {categoryKeys.map((key, index) => (
                                <option key={index} value={key}>{categories[key].title}</option>
                            ))}
                        </>
                    </C.Select>
                    { errors.categoryError != '' ? <C.Error>{ errors.categoryError }</C.Error> : ''}
                </C.InputLabel>
                <C.InputLabel>
                    <C.InputTitle>Título</C.InputTitle>
                    <C.Input value={title} onChange={event => setTitle(event.target.value)}></C.Input>
                    { errors.titleError != '' ? <C.Error>{ errors.titleError }</C.Error> : ''}
                </C.InputLabel>
                <C.InputLabel>
                    <C.InputTitle>Valor</C.InputTitle>
                    <C.Input value={value} type="number" onChange={event => setValue(parseFloat(event.target.value))}></C.Input>
                    { errors.valueError != '' ? <C.Error>{ errors.valueError }</C.Error> : ''}
                </C.InputLabel>
                <C.InputLabel>
                    <C.InputTitle>&nbsp;</C.InputTitle>
                    <C.AddItem>
                        Adicionar
                    </C.AddItem>
                </C.InputLabel>
            </C.Form>
        </C.Container>
    )
}