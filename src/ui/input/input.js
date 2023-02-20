import React from 'react'
import cx from 'clsx'

import styles from './input.module.css'

/* eslint-disable react/prop-types */
function Input ({ type, placeholder, defaultValue, disabled, className, readonly }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            disabled={disabled}
            readonly={readonly}
            className={cx(styles['input'], className)}></input>
    )
}

export { Input }