import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => setFriends(json));
  }, []);
  return (
    <div>
      <h2>Hello Friends.. How are you..</h2>
      <p>
        <small>Parle kicu taka dar dis..: {friends.length} </small>
      </p>

      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default Friends;
