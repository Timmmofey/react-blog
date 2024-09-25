import { useEffect, useState } from "react";
import Bloglist from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    const [updateFlag, setUpdateFlag] = useState(false)
    const {data, isLoading, error} = useFetch('http://localhost:8000/posts', updateFlag)


    return ( 
        <div className="home">
            {error && <div>{error}</div>} 
            {isLoading && <h3>Loading...</h3>} 
            {data && <Bloglist updateFlag={updateFlag} setUpdateFlag={setUpdateFlag} posts = {data}/>}
        </div>
      );
}
 
export default Home;