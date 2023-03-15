function useFetchAPI() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const base = "http://192.168.29.145:8000/";
  const endpoint = "user/register";

  const apiFunction = async (endpoint, type, data, res) => {
    var raw = JSON.stringify(data);

    var requestOptions = {
      method: type,
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(base + endpoint, requestOptions);
      if (!response.ok) {
        const e = await response.json();
        console.log(e.message)
        throw new Error(e.message);
      } 

      if(response.ok) {
        const data = await response.json();
        console.log(data.message, "==here data====")
        const Msg = data.message;
        res(data.message, null);
      }  
    } 

    catch (error) {
      res(null, error.message);    
      // res(responce.message, null);  
    }
    
  };
  return apiFunction;
}

export default useFetchAPI;
