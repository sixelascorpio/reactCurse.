import { createStore } from "redux"

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Harry kane",
            foto: "https://img.a.transfermarkt.technology/portrait/big/132098-1623778520.jpg?lm=1"
        },
        {
            id: 2,
            nombre: "Angel Gomes",
            foto: "https://img.a.transfermarkt.technology/portrait/header/392770-1495456053.jpg?lm=1"
        },
        {
            id: 3,
            nombre: "Keane Lewis-Potter",
            foto: "https://img.a.transfermarkt.technology/portrait/header/644401-1642684319.jpg?lm=1"
        },
        {
            id: 4,
            nombre: "Folarin Balogun",
            foto: "https://img.a.transfermarkt.technology/portrait/header/503770-1611906508.jpg?lm=1"
        },
        {
            id: 5,
            nombre: "Noni Madueke",
            foto: "https://img.a.transfermarkt.technology/portrait/header/503987-1613230340.jpg?lm=1"
        },
        {
            id: 6,
            nombre: "Levi Colwill",
            foto: "https://img.a.transfermarkt.technology/portrait/header/614258-1641462234.png?lm=1"
        },
        {
            id: 7,
            nombre: "Tiago Araújo",
            foto: "https://img.a.transfermarkt.technology/portrait/header/481628-1616428306.png?lm=1"
        },
        {
            id: 8,
            nombre: "Gonçalo Tabuaço",
            foto: "https://img.a.transfermarkt.technology/portrait/header/540182-1547566046.png?lm=1"
        },
        {
            id: 9,
            nombre: "Francisco Conceição",
            foto: "https://img.a.transfermarkt.technology/portrait/header/487474-1614847613.png?lm=1"
        },
        {
            id: 10,
            nombre: "Fábio Silva",
            foto: "https://img.a.transfermarkt.technology/portrait/header/505653-1552402139.jpg?lm=1"
        },
        {
            id: 11,
            nombre: " Afonso Sousa",
            foto: "https://img.a.transfermarkt.technology/portrait/big/375378-1552061122.jpg?lm=1"
        },
        {
            id: 12,
            nombre: "Fábio Vieira",
            foto: "https://img.a.transfermarkt.technology/portrait/header/537598-1552402760.jpg?lm=1"
        },
        {
            id: 13,
            nombre: "Gonçalo Ramos",
            foto: "https://img.a.transfermarkt.technology/portrait/header/550550-1603796122.jpg?lm=1"
        }
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {

    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "AGREGAR_SUPLENTE" ) {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if ( action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)