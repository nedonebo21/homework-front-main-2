const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeActionType): typeof initState=> { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
type ChangeThemeActionType = {
    type: 'SET_THEME_ID'
    id: number
}
