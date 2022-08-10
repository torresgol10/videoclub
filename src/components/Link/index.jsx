import React from 'react'
import {A, Button} from './style'

export default function Link({ children, href}) {
    return href 
        ? <A href={href}>{children}</A>
        : <Button >{children}</Button>
}
