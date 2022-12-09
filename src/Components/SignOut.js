import { auth } from "../firebase-config";

function SignOut() {
  return auth.currentUser && auth.signOut();
}

export default SignOut;
