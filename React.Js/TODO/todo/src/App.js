import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  function handlesubmit() {
    setlistData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }

  function removeActivity(i) {
      const updatedListData = listData.filter((elem, id)=>{
        return i!=id;
      })
      setlistData(updatedListData);
  }

  //this is basic todo 

  return (
    <div>
      <div className="row">
        <div className="col-sm-4"></div>
        <from className="col-sm-4 mt-5 pt-3 pb-3 bg-warning border border-4 rounded">
          <h1 className="text-center">Todo-list</h1>
          <input
            type="text"
            className="mx-3 p-2 rounded"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />

          <button
            className="btn btn-success rounded"
            type="submit"
            onClick={handlesubmit}
          >
            Add
          </button>
          <br />
          <p className="text-center bg-secondary border border-1">
            Here is your Task
          </p>

          {listData != [] &&
            listData.map((data, i) => {
              return (
                <div>
                  <p key={i}>
                    <ul>
                      <li>
                        <div className="row">
                          <div className="col-sm-8">{data}</div>
                          <div className="col-sm-4">
                            <button onClick={()=>removeActivity(i)} className="btn btn-danger">Delete</button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </p>
                </div>
              );
            })}
        </from>
        <div className="col-sm-4"></div>

        // this was first pull request 
      </div>
    </div>
  );
};

export default App;
