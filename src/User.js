import React from 'react';

const User = (props) => {
  return (
    <div className='User'>
      <img lazy={true} className={`profile-photo ${props.class}`} src={props.user.avatar_url}></img>
      <div>{props.user.login}</div>
    </div>
  )
}

export default User;