'use client'
import React, { useEffect, useState } from 'react'
import noteService from '../services/noteService'

export default function NoteApp() {
    const [notes, setNotes] = useState([])
    const [desc, setDesc] = useState("")
    const [filter, setFilter] = useState("")

    useEffect(() => {
        noteService.getAllNotes()
            .then(data => setNotes(data))
    }, [])

    const handleAdd = (evt) => {
        evt.preventDefault()
        if (desc.trim() !== "") {
            const newNote = {
                desc: desc,
                important: Math.random() < 0.5
            }

            noteService.createNote(newNote)
                .then(data => setNotes(notes.concat(data)))
            setDesc('')
        }
    }

    return (
        <div>
            <input type='text'
                placeholder='search notes ...'
                value={filter}
                onChange={(e) => setFilter(e.target.value)} />

            <ul>
                {
                    notes.filter(note => note.desc.toLowerCase().includes(filter.toLocaleLowerCase()))
                        .map(note => (
                            <li key={note.id}>
                                {note.desc}
                            </li>
                        ))
                }
            </ul>

            <form onSubmit={handleAdd}>
                <input type='text' placeholder='add note ...'
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <button>add</button>
            </form>
        </div>
    )
}