import React, { useContext } from 'react'
import { useContextTheme, useContextTheme1 } from '../hooks/ContextProvider'

export const Display = () => {

    //appel directement usecontext depuis le contextprovider "le hook"
    const helloo = useContextTheme()
    const world = useContextTheme1()
    return (
        <>
            {helloo} {world}
        </>
    )
}
