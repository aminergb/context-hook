import React, { createContext, useContext } from 'react'
//dans ce hook on y trouve :
//usecontext qu'on importera au fur est a mesure : on utilise une fois useContext "reutilisabilité"
//le contexte sera crée ici au niveau de ce hook "create context"
//
export const useContextTheme = () => {
    return useContext(ContextTheme)
}
export const useContextTheme1 = () => {
    return useContext(ContextTheme1)
}
// @ts-ignore
//la creation du context
export const ContextTheme = React.createContext()
// @ts-ignore
export const ContextTheme1 = React.createContext()
//les valeurs et fonctions du context
const hello = "hello "
const world = "world"
export const ContextThemeProvider = ({ children }) => {

    return (
        //le contextprovider ou les context providers avec les valeurs 
        //avec ce hook, on ne fait qu'appeler contextthemeprovider 
        <>
            <ContextTheme.Provider value={hello}>
                <ContextTheme1.Provider value={world}>
                    {children}
                </ContextTheme1.Provider>

            </ContextTheme.Provider>
        </>
    )
}
