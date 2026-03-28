import '../App.css'
import { useState } from 'react'

export default function ToggleGenre({ visible, toggleGenre}) {

    return (
        <>
            <button onClick={() => toggleGenre("fiction")}>{visible["fiction"] ? "Hide" : "Show"} Fiction</button>
            <button onClick={() => toggleGenre("non-fiction")}>{visible["fiction"] ? "Hide" : "Show"} Non-Fiction</button>
            <button onClick={() => toggleGenre("children")}>{visible["fiction"] ? "Hide" : "Show"} Children</button>
        </>
    )
}