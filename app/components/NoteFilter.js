import React, { useContext } from 'react'
import NoteContext from './NoteContext'

export default function NoteFilter() {
    const { state: { filter }, dispatch } = useContext(NoteContext)
    return (
        <div>
            <input type='text'
                placeholder='search notes ...'
                value={filter}
                onChange={(e) => dispatch({
                    type: 'setFilter',
                    payload: e.target.value
                })} />
        </div>
    )
}
