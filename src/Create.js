import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('John Doe')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    const clearForm = () => {
        setTitle('')
        setBody('')
        setAuthor('John Doe')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}
        setIsPending(true)

        setTimeout(()=> {
            fetch('http://localhost:8000/posts', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            }).then(()=>{
                setIsPending(false)
                clearForm()
                navigate('/')
            })
        }, 1000)

        
    }

    return ( 
        <div className="create">
            <h2>Add a new Post!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Post title</label>
                <input type="text" required value={title} onChange={(e)=>{setTitle(e.target.value)}}/>

                <label htmlFor="">Post content</label>
                <textarea value={body} onChange={(e)=>{setBody(e.target.value)}}></textarea>
                
                <label htmlFor="">Author</label>
                <select value={author} onChange={(e)=>{setAuthor(e.target.value)}} name="" id="">
                    <option value="John Doe">John Doe</option>
                    <option value="Mary Jane">Mary Jane</option>
                    <option value="Tom Soer">Tom Soer</option>
                </select>

                {isPending && <button disabled>Adding post...</button>}
                {!isPending && <button> Create post </button> }
            </form>
        </div>
     );
}
 
export default Create;
