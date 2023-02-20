import React from 'react'
import cx from 'clsx'

import styles from './checkbox.module.css'

/* eslint-disable react/prop-types */
function Checkbox ({name, id, className, defaultCheckbox, onChange}) {
    return <input
     type="checkbox"
     name={name}
     id={id}
     className={cx(styles['checkbox'], className)}
     defaultCheckbox={defaultCheckbox}
     onChange={onChange}></input>
}

export { Checkbox }