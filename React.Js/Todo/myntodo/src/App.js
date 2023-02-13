import { useState } from "react";

const App = () => {
  const [changevalue, setChangevalue] = useState("");
  const [allData, setAllData] = useState([]);
  const [userErr, setUserErr] = useState(false);
  const [checked, setChecked] = useState([]);
  const [render, setrender] = useState(false);
  const [update, setUpdate] = useState(false);
  const [editindex, setEditIndex] = useState("");

  const AddValue = () => {
    if (changevalue !== "") {
      setUserErr(false)
      if (update) {
        allData[editindex] = changevalue;
      } else {
        setAllData((oldArray) => [...oldArray, changevalue]);
      }
    } else {
      setUserErr(true);
    }

    setChangevalue("");
    setUpdate(false);
    setrender(!render);
  };

  function handleCheck(j) {
    setChecked((i) => i.concat(j));
  }

  const deleteList = (e) => {
    let blankArr = allData;
    blankArr.splice(e, 1);
    setrender(!render);
  };

  const editValue = (item, index) => {
    console.log("kjhbgvfcdx", item, index);
    setEditIndex(index);
    setChangevalue(item);
    setUpdate(true);
  };

  return (
    <div>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div
            style={{
              backgroundImage: "linear-gradient(to left, black ,skyblue)",
            }}
          >
            {" "}
            {/* Input point */}
            <h1 className="ps-5">Todo-list</h1>
            <div className="row pb-3">
              <div className="col-sm-4 ps-5">
                {" "}
                <input
                  type="text"
                  className="rounded-pill text-center"
                  placeholder="Enter your task"
                  value={changevalue}
                  onChange={(e) => setChangevalue(e.target.value)}
                />
                { userErr ? (
                  <span className="text-danger ms-5 ps-4">
                   Enter some task
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="col-sm-8">
                <button className="rounded-pill bg-primary" onClick={AddValue}>
                  {update == true ? "Update Task" : "Add Task"}
                </button>
              </div>
            </div>
            {/*End Input point */}
          </div>
          <br />
          <div>
            {allData.length > 0 &&
              allData.map((item, index) => {
                return (
                  <>
                    <div
                      className="d-flex  rounded-start"
                      style={{
                        backgroundImage:
                          "linear-gradient(to left, rgba(255,0,0,0), skyblue)",
                      }}
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-8">
                            <div className="row">
                              <div className="col-sm-1 pt-2">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  onChange={() => handleCheck(item)}
                                  id="flexCheckDefault"
                                />
                              </div>
                              <h5 className="col-sm-11 pt-2">{item}</h5>
                            </div>
                          </div>
                          <div className="col-sm-4 position-end">
                            <button
                              type="btn"
                              className="btn outline-dark bg-info mt-1 mb-1"
                              onClick={() => editValue(item, index)}
                            >
                              Edit
                            </button>
                            {checked.includes(item) ? (
                              <h2
                                className="btn outline-dark bg-primary ms-1 mt-2"
                                onClick={() => deleteList(index)}
                              >
                                Completed
                              </h2>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                  </>
                );
              })}
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
};

export default App;
