import React from 'react'


const DisplayCards = ({listData, loading}) => {
  return (
    <div className='container'>
      <h2 className='text'>Posts</h2>
      {listData.map((item, index) => {
        return (
          <div className={'card'} key={index}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        )
      })}
      {loading && <h3>fetching data.....</h3>}
    </div>   
  )
}

export default DisplayCards;