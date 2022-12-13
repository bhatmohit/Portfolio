

function Form(){
    return(
        <div className='create'>
            <h2>Add a new blog</h2>
            <form>
                <label>Blog Title</label>
                <input 
                type='text'
                required>    
                </input>
                <label>Blog body:</label>
                <textarea required></textarea>
                <label>Author:</label>
                <select>
                    <option value='mario'>mario</option>
                    <option value='yoshi'>yoshi</option>
                    {/* <option value='mario'>mario</option> */}
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default Form;