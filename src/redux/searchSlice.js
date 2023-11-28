import { createSlice } from '@reduxjs/toolkit'

const inicializacao_Valores = {
    titulo: null,
    subtitulo: null,
    imageUrl: null,
    imageNome: null,
    vp: 0,
    vr: 0,
    vn: 0,
    vb: 0,
    ve: 0
}

export const searchSlice = createSlice({
    name: 'search',
    initialState: inicializacao_Valores,
    reducers: {
        reducerSetSearch: (state, action) => {
            state.titulo = action.payload.titulo
            state.subtitulo = action.payload.subtitulo
            state.imageUrl = action.payload.imageUrl
            state.imageNome = action.payload.imageNome
            state.vp = action.payload.vp
            state.vr = action.payload.vr
            state.vn = action.payload.vn
            state.vb = action.payload.vb
            state.ve = action.payload.ve
        },
    }
})

export const { reducerSetSearch } = searchSlice.actions

export default searchSlice.reducer