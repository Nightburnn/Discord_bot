import React, { useState, useEffect } from 'react';
import request from 'superagent';

function NumberOfSubscribers({ subreddit }) {
  // Declare two state variables: one to store the number of subscribers and one to store any errors
  const [subscribers, setSubscribers] = useState(null);
  const [error, setError] = useState(null);

  // Use the useEffect hook to make an API call to the Reddit API to get the number of subscribers for the given subreddit
  useEffect(() => {
    // Make a fetch request to the Reddit API
    fetch(`https://www.reddit.com/r/${subreddit}/about.json`, {
      headers: {
        'User-Agent': 'myBot/0.0.1', // set custom User-Agent
      },
    })
      .then(response => {
        // If the response is not ok, throw an error
        if (!response.ok) {
          throw new Error('Invaid Subreddit');
        }
        // If the response is ok, parse the JSON data and set the number of subscribers
        return response.json();
      })
      .then(data => setSubscribers(data.data.subscribers))
      .catch(error => setError(error.message));
  }, [subreddit]);

  // If there is an error, display the error message
  if (error) {
    return <div>{error}</div>;
  }

  // If the number of subscribers has not yet been set, display a loading message
  if (subscribers === null) {
    return <div>Loading...</div>;
  }

  // If there are no errors and the number of subscribers has been set, display the number of subscribers
  return <div>{`Subscribers: ${subscribers}`}</div>;
}

export default NumberOfSubscribers;
