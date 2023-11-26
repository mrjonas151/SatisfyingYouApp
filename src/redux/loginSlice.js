import { createSlice } from '@reduxjs/toolkit'

const inicializacao_Valores = {
    email: null,
    password: null,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: inicializacao_Valores,
    reducers: {
        reducerSetLogin: (state, action) => {
            state.email = action.payload.email
            state.password = action.payload.password
        },
    }
})

export const { reducerSetLogin } = loginSlice.actions

export default loginSlice.reducer