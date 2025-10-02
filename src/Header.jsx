const Header=()=>{
    return(
        <>
        <h1>my header</h1>
        <form action="">
            <input type="text" placeholder="enter name"  name="name" id="name" required/>
        <br />
          <input type="email" placeholder="enter email"  name="email" id="email" required/>
          <br />
          <button className="btn">Submit form</button>

        </form>

        </>
    )
}
export default Header;