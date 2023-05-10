import React from 'react';
import NumberOfSubscribers from './0-subs'
import './App.css'

function Table() {
  return (
   
    <table>
       <h1>Subreddit Subscribers</h1>
      <thead>
        <tr>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Memes</td>
          <td><NumberOfSubscribers subreddit="memes" />
</td>
         
        </tr>
        <tr>
          <td>Programming</td>
          <td><NumberOfSubscribers subreddit="programming" />
</td>
          
        </tr>
        <tr>
          <td>Anime</td>
          <td><NumberOfSubscribers subreddit="anime"/></td>
         
        </tr>
        <tr>
          <td>React</td>
          <td><NumberOfSubscribers subreddit="reactjs"/></td>
         
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
