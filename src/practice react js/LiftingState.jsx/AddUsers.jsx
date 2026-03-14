// Add users component
function AddUsers({setUsers}){
    return(
        <div>
            <input type="text" placeholder="Enter your name" name="name"
            onChange={(e)=>setUsers(e.target.value)}
            />
        </div>
    )
}
export default AddUsers;