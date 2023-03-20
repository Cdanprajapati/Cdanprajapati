function useFetchAPI() {
  var myHeaders = new Headers();
  let token = localStorage.getItem("Token")||""
  console.log(`Bearer ${token}`)
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
  const base = "http://192.168.29.145:8000/";
  const endpoint = "user/register";

  console.log("i asadsf")

  const apiFunction = async (endpoint, type, data, res) => {
    var raw = JSON.stringify(data);

    var requestOptions = {
      method: type,
      headers: myHeaders,
   // body : raw,
      redirect: "follow",
    };
    
    if(data)
    requestOptions.body = raw   
    
   console.log(requestOptions,"here req")

    try {
      const response = await fetch(base + endpoint, requestOptions);
      if (!response.ok) {
        const e = await response.json();
        console.log(e.message)
        throw new Error(e.message);
      } 
        const data = await response.json();
        res(data, null); 
           
    } 
    catch (error) {
      res(null, error.message);   
    }
    
  };
  return apiFunction;
}

export default useFetchAPI;
