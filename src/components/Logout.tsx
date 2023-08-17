import { useQueryClient } from "@tanstack/react-query";
import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    await localStorage.removeItem("todo_access_token");
    await localStorage.removeItem("todo_refresh_token");

    const hasAccessToken: string | null = await localStorage.getItem(
      "todo_access_token"
    );

    !hasAccessToken &&
      (async () => {
        await queryClient.clear();
        navigate("/", { replace: true });
      })();
  };

  return (
    <>
      <Button danger ghost onClick={() => handleLogout()}>
        Logout
      </Button>
    </>
  );
};

export default Logout;
