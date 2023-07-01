import { Button } from "antd";
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "../../helpers";

const AppHeader = () => {
  const { user } = useAuthContext();
  const history = useHistory();

  const handleLogout = () => {
    removeToken();
    history.replace("/signin");
  };

  return (
    <div className="header_space"> {/* Fixed className to div */}
      <Button className="header_space_brand" href="/" type="link">
        <CgWebsite size={64} />
      </Button>
      <div className="auth_buttons"> {/* Fixed className to div */}
        {user ? (
          <>
            <Button className="auth_button_login" href="/profile" type="link">
              {user.username}
            </Button>
            <Button
              className="auth_button_signUp"
              type="primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button className="auth_button_login" href="/signin" type="link">
              Login
            </Button>
            <Button
              className="auth_button_signUp"
              href="/signup"
              type="primary"
            >
              SignUp
            </Button>
          </>
        )}
      </div> 
    </div>
  );
};

export default AppHeader;
