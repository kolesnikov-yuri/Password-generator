import React from 'react'


import {Input} from '../../ui/input'
import {Select} from '../../ui/select'
import {Checkbox} from '../../ui/checkbox'
import {Button} from '../../ui/button'

import  './password-generator.modules.css'

function PasswordGenerator() {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDFGHIJKLMNOPQRSTUVWXYZ'
    const passwordLenghtValues = [12, 13, 14, 15, 16]
    const symbols = '!@#$%^&()_+?:{}[]'

    const  [result, setResult] = React.useState('')
    const [passwordLenght, setPasswordLenght] = React.useState(passwordLenghtValues[0])
    const [isSymbolUse, setIsSymbolUse] = React.useState(false)
    const [isPasswordCopy, setIsPasswordCopied] = React.useState(false)

    function handlePasswordGenerator () {
        let currentReasult = ''

        if (isSymbolUse) {
            chars += symbols
        }

        for (let i = 0; i < passwordLenght; i += 1) {
            const rundomNumber = Math.floor(Math.random() * chars.length)
            currentReasult += chars.substring(rundomNumber, rundomNumber + 1)
        }
        setResult(currentReasult)

    }

    function handleBlur (event) {
        setPasswordLenght(event.target.value)
    }

    function handleSymbolsUse () {
        setIsSymbolUse(!isSymbolUse)
    }

    function handlePasswordCopy () {
        if (result) {
            let timerId = null
            navigator.clipboard.writeText(result).then(() => {
                setIsPasswordCopied(true)
                timerId = setTimeout(() => {
                    setIsPasswordCopied(false)
                    clearTimeout(timerId)
                }, 2000)
            })
        }
    }

    return (
        <div className='root'>
            <h1 className='title'>Генератор паролей</h1>
            <div className='result'>
                <Input type='text' readonly={true} defaultValue={result}></Input>
                <button className='copy' onClick={handlePasswordCopy}></button>
                {isPasswordCopy && <spen className='copied'>Скопировано!</spen>}
            </div>
            <div className='option'>
                <spsn className='option-name'>Длина пароля</spsn>
                <Select options={passwordLenghtValues} onBlur={handleBlur}></Select>
            </div>
            <div className='option'>
                <label className='option-label' htmlFor='symbols'>
                    Использовать спецсимволы
                </label>
                <Checkbox defaultChecked={false} id="symbols" onChange={handleSymbolsUse}></Checkbox>
            </div>
            <Button type="button" onClick={handlePasswordGenerator}>Сгенерировать пароль</Button>
        </div>                                                      
    )
}

export { PasswordGenerator }