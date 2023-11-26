import { createSlice } from '@reduxjs/toolkit'

const inicializacao_Valores = {
    id: null,
    nome: null,
    data: null,
    imageUrl: null,
}

export const searchSlice = createSlice({
    name: 'search',
    initialState: inicializacao_Valores,
    reducers: {
        reducerSetSearch: (state, action) => {
            state.id = action.payload.id
            state.nome = action.payload.nome
            state.data = action.payload.data
            state.imageUrl = action.payload.imageUrl
        },
    }
})

export const { reducerSetSearch } = searchSlice.actions

export default searchSlice.reducer