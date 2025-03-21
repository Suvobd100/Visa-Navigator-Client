
import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const AuthNav = () => {
    const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-base-100 flex flex-col">
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <Link to="/">
          <div className="flex flex-col font-comic p-2 text-stone-400 animate__animated animate__flash ">
            <p className="text-3xl">VISA NAVIGATOR</p>
            
            <p className="text-lg text-slate-500">
            A Sim less Visa Application
            </p>
            <p className="btn rounded-2xl"> Home</p>
            <p className="btn rounded-2xl"> {user?.email}</p>
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default AuthNav;
