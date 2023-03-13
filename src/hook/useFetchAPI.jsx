function useFetchAPI() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const base = "http://192.168.29.145:8000/";
  const endpoint = "user/register";

  const apiFunction = (endpoint, type, data, setState) => {
    var raw = JSON.stringify(data);

    var requestOptions = {
      method: type,
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    // console.log(endpoint, type, data, setState, "===here====")
    fetch(base + endpoint, requestOptions)
      .then((res) => {
        const {status} = res;
        const response = res.json()
        response.status = status;
        setState(response); 
        return response;
      })
      .then((res) => {
        setState(res)
      })
  };
  return apiFunction; 
}

export default useFetchAPI;
