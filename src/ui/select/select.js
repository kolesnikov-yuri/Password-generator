import React from 'react'

import styles from './select.module.css'


/* eslint-disable react/prop-types */
function Select ({ options, onBlur }) {
    return (
        <select onBlur={onBlur} className={styles['select']}>{
            options && options.map((option, index) => {
                return <option key={index}>{option}</option>
            })
        }</select>
    )
}

export {Select}