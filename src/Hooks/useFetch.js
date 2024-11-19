import { useEffect , useState } from "react"




// Custom Hook
const useFetch = (url) => {
  const [data,setDate] = useState([])

  useEffect(()=> {
    fetch(url).then((response)=> {
      response.json().then((result)=> {
        setDate(result)
      })
    })
  },[])
  return data
}

export default useFetch