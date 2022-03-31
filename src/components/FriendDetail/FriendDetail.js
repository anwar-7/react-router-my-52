import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
  const { friendId } = useParams();

  const [friend, setFriend] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => setFriend(json));
  }, []);

  return (
    <div>
      <h2>This is detail of a bondhu...!!!{friendId}</h2>
      <h3>Name: {friend.name}</h3>
      <h4>Username: {friend.username}</h4>
      <h5>Email: {friend.email}</h5>
      <h6>Website: {friend.website}</h6>
      <p>
        <small>City: {friend.address?.city}</small>
      </p>
      <p>
        <small>Lat: {friend.address?.geo.lat}</small>
      </p>
    </div>
  );
};

export default FriendDetail;
