import React, { useState } from 'react'
import { db, increment } from '../services/firebase'

function VoteDialog({ selected, setSelected, setVoted }) {
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    db
      .collection('frameworks')
      .doc(selected.id)
      .update({ votes: increment })

    setVoted(selected)
    setEmail('')
    setSelected('')
  }

  return (
    <dialog style={{ top: 40 }} open={selected}>
      <h1>Vote for {selected.name}</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <menu>
          <button type="reset" onClick={() => setSelected('')}>Cancel</button>
          <button type="submit">Submit</button>
        </menu>
      </form>
    </dialog>
  )
}

export default VoteDialog