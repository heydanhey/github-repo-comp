import React, { useEffect, useState } from 'react'
import { getRepoInfo } from '../services/github'

function Framework({ data, setSelected, voted }) {
  const [repo, setRepo] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  function fetchData(data) {
    getRepoInfo(data)
      .then(repoInfo => {
        setLoading(false)
        setRepo(repoInfo)
      })
      .catch(() => setError('Something went wrong'))
  }

  useEffect(() => fetchData(data), [data])
  
  if (error) {
    return <h1>{error}</h1>
  }
  
  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Forks: {repo.forks_count}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>Votes: {data.votes}</p>
      <button onClick={() => setSelected(data)} disabled={voted}>Vote</button>
    </div>
  )
}

export default Framework