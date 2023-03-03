function useFetchAPI() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const base = "https://todo-api-xu4f.onrender.com/";
  const endpoint = "user/register";

  const apiFunction = (endpoint, type, data, setState) => {
    var raw = JSON.stringify(data);

    var requestOptions = {
      method: type,
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(base + endpoint, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        setState(res);
      });
  };
  return apiFunction; 
}

export default useFetchAPI;
