import jwt_decode from "jwt-decode";

function apicall(){  
  const responce = fetch("http://localhost:8000/user/access-token-generate", {
    method: "POST"
  })
  .then((res) => res.json())
  .catch((err) => console.log(err))
  console.log(responce,"==here i am responce====>")
}

function useFetchAPI(){
  const myHeaders = new Headers();
  let token = localStorage.getItem("Token")||""
  console.log(`Bearer ${token}`)
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
  const base = "http://https://todo-api-xu4f.onrender.com/";

  if(token){
    const decoded = jwt_decode(token);
    console.log(decoded, "===here decoded=== jwt");
    
    //current time aur decoded 

    const currentTime = new Date();
    if(currentTime > decoded.exp){
      apicall();
    }
  }

  const apiFunction = async (endpoint, type, data, res) => {
    let raw = JSON.stringify(data);

    let requestOptions = {
      method: type,
      headers: myHeaders,
    //body : raw,
      redirect: "follow",
    };
    
    if(data)
    requestOptions.body = raw       

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
