import React from "react";

type PropsType = {
  title: stringff
}

export function User(props: PropsType) {
  return (
      <div>
        <h3>{props.title}</h3>
        <div>
          <input/>
          <button>+</button>
        </div>
        <ul>
          <li><input checked={true} type="checkbox"/>CSS & HTML</li>
          <li><input checked={true} type="checkbox"/>JS</li>
          <li><input checked={false} type="checkbox"/>REACT</li>
          <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
        </ul>
      </div>
  )
}
