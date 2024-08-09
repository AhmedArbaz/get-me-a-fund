import React from 'react'
// ya ham tab [username] banaty hain [] ais may jab dynamic routing karni ho to dakho params ko use kar kay ham aus ka name lay rahy hain 
const Username = ({params}) => {
  return (
    <div>
      {params.username}
    </div>
  )
}

export default Username
