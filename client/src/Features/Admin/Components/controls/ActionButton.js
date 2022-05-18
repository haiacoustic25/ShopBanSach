import { Button } from '@material-ui/core'
import React from 'react'

export default function ActionButton(props) {
    const { children, onClick } = props
    return (
        <Button
            onClick={onClick}
        >
            {children}
        </Button>
    )
}
