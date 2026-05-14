// Import React hooks
// useState -> store and update data
// useEffect -> run side effects like API calls

import { useEffect, useState } from 'react'

// Import CSS styling file
import './App.css'

// Axios helps frontend communicate with backend APIs
import axios from "axios"

function App() {

  // jokes -> current jokes data
  // setJokes -> function to update jokes state

  // Initial state is empty array because
  // backend data has not arrived yet

  const [jokes, setJokes] = useState([])

  // useEffect runs after component renders

  // Empty dependency array [] means:
  // run only once when component loads

  useEffect(() => {

    // Async function to fetch jokes from backend

    const FetchJokes = async () => {

      try {

        // Send GET request to backend API

        const response = await axios.get("/api/jokes")

        // response.data contains actual jokes array

        // Update state with backend data

        setJokes(response.data)

      } catch (error) {

        // If API request fails,
        // print error in console

        console.log(error);

      }
    }

    // Call function to start fetching jokes

    FetchJokes()

  }, [])

  // Debugging:
  // Shows current jokes state on every render

  console.log(jokes)

  return (
    <>

      {/* Main heading */}
      <h1>Crazy Jokes</h1>

      {/* Display total number of jokes */}
      <p>JOKES : {jokes.length}</p>

      {

        // map() loops through each joke object

        jokes.map((joke) => (

          // key helps React identify elements uniquely

          <div key={joke.id}>

            {/* Display joke title */}
            <h3>{joke.title}</h3>

            {/* Display joke content */}
            <p>{joke.content}</p>

          </div>
        ))
      }

    </>
  )
}

export default App