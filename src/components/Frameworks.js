import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase'
import Framework from './Framework'
import VoteDialog from './VoteDialog'

function Frameworks() {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState('')
  const [voted, setVoted] = useState('')

  useEffect(() => {
    db
      .collection('frameworks')
      .onSnapshot(snapshot => {
        const docs = []
        snapshot.forEach(doc => {
          docs.push({ id: doc.id, ...doc.data() })
        })
        setData(docs)
        setLoading(false)
      }, error => {
        console.log(error)
        setError('Something went wrong')
      })
  }, [])
  
  if (error) {
    return <h1>{error}</h1>
  }
  
  if (loading) {
    return <h1>Loading...</h1>
  }

  if (voted) {
    return <h1>Thanks, you voted for {voted.name}</h1>
  }

  return (
    <div className="App">
      <h1>Frameworks</h1>
      {data.map(framework => <Framework 
        data={framework}
        key={ framework.name }
        setSelected={setSelected}
        voted={voted}
      />)}
      <VoteDialog
        selected={selected}
        setSelected={setSelected}
        setVoted={setVoted}
      />
    </div>
  );
}

export default Frameworks