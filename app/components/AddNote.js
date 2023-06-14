import React, { useContext } from 'react'
import NoteContext from './NoteContext'
import noteService from '../services/noteService'

export default function AddNote() {
    const { state: { desc, notes }, dispatch } = useContext(NoteContext)

    const handleAdd = (evt) => {
        evt.preventDefault()
        if (desc.trim() !== "") {
            const newNote = {
                desc: desc,
                important: Math.random() < 0.5
            }

            noteService.createNote(newNote)
                .then(data => dispatch({
                    type: 'setNotes',
                    payload: notes.concat(data)
                }))
            dispatch({ type: 'setDesc', payload: "" })
        }
    }
    return (
        <div>
            <form onSubmit={handleAdd}>
                <input type='text' placeholder='add note ...'
                    value={desc}
                    onChange={(e) => dispatch({ type: 'setDesc', payload: e.target.value })}
                />
                <button>add</button>
            </form>
        </div>
    )
}
