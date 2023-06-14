import React, { useContext } from 'react'
import NoteContext from './NoteContext'

export default function NoteList() {
    const { state: { notes, filter } } = useContext(NoteContext)
    return (
        <div>
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
        </div>
    )
}
