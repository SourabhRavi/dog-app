import { UserAuth } from "../context/AuthContext";
function Navbar() {
  const { user, logOut } = UserAuth();

  const { googleSignIn } = UserAuth();
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="/"
            style={user !== null ? { color: "#FFFBF5" } : { color: "#000" }}
          >
            DogApp
          </a>

          <div className="links-wrap">
            {user !== null ? (
              <button
                className="btn btn-black"
                type="submit"
                onClick={handleSignOut}
              >
                Logout
              </button>
            ) : (
              <button
                className="btn btn-black"
                type="submit"
                onClick={handleSignIn}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
