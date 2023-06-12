import React, { useContext } from 'react'
import NoteContext from './NoteContext'

export default function AddNote() {
    const { desc, setDesc, handleAdd } = useContext(NoteContext)
    return (
        <div>
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
