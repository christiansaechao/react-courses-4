import React from 'react'

export const CardSection = () => {
  return (
    <div>
      {data.map((ele) => <IndividualCards data={ele}/>)}
    </div>
  )
}
