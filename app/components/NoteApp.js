'use client'
import React, { useEffect, useReducer, useState } from 'react'
import noteService from '../services/noteService'
import NoteFilter from './NoteFilter'
import NoteList from './NoteList'
import AddNote from './AddNote'
import NoteContext from './NoteContext'

const noteReducer = (state, action) => {
    switch (action.type) {
        case 'setNotes':
            return {
                ...state,
                notes: action.payload
            }
        case 'setDesc':
            return {
                ...state,
                desc: action.payload
            }
        case 'setFilter':
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state
    }
}

export default function NoteApp() {
    const [state, dispatch] = useReducer(noteReducer, {
        notes: [],
        desc: "",
        filter: ""
    })


    useEffect(() => {
        noteService.getAllNotes()
            .then(data => dispatch({
                type: 'setNotes',
                payload: data
            }))
    }, [])



    return (
        <div>
            <NoteContext.Provider
                value={{
                    state,
                    dispatch
                }}
            >
                <NoteFilter />

                <NoteList />

                <AddNote />
            </NoteContext.Provider>
        </div>
    )
}