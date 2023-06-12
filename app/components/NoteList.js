import React from 'react'

export default function NoteList({ notes, filter }) {
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
