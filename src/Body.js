import React, { useState } from 'react'

const Body = () => {

    const [search , setSearch] = useState("");
    const [arr , setArr] = useState([]);

    const solve = (index) => {
      setArr((old) => {
        return old.filter((ele , id) => {
          return index !== id;
        })
      })
    }

  return (
    <>
    <div>
      <div>
        <h1>To-Do</h1>
      </div>
      <div>
        <input 
        type = "text"
        placeholder='type'
        value = {search}
        onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <button
        onClick={() => {
            setArr((oldItems) => {
              return [...oldItems , search];
            })
            setSearch("")
        }}
        >Add</button>
      </div>
    </div>
    <div>
      {
        arr.map((val , index) => {
          return (
            <div className = "but" key = {index}>
              <h1 >{val}</h1>
              <button
              onClick={() => {
                solve(index);
              }}
              >Remove</button>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Body
