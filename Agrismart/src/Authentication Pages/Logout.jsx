import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

const Logout = () => {
  const { LogoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      LogoutUser();
      navigate("/");
    };

    handleLogout();
  }, [LogoutUser, navigate]);
};

export default Logout;
