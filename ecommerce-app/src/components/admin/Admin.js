import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "./adminSlice";

function Admin() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.admin.isAuthenticated)

  const handleChangeUserId = (e) => {
    setUserId(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLoginSubmit = () => {
    if (userId === "admin" && password === "admin") {
      dispatch(authenticate())
      // setIsAuthenticated(true);
    }
  };
  console.log(`isAuthenticated: ${isAuthenticated}`)
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  if (!isAuthenticated) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: 30,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            paddingY: 7,
            paddingX: 10,
          }}
        >
          <TextField
            name="login"
            placeholder="User Id or Email"
            value={userId}
            onChange={handleChangeUserId}
            sx={{
              width: 300,
            }}
          />
          <TextField
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChangePassword}
            sx={{
              marginTop: 2,
              width: 300,
            }}
          />
          <Button
            onClick={handleLoginSubmit}
            variant="contained"
            sx={{
              marginTop: 3,
            }}
          >
            Log In
          </Button>
        </Box>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        paddingTop: 30,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          paddingX: 30,
        }}
      >
        <Button>
          <Link to="/about">View Sales</Link>
        </Button>
        <Button>
          <Link to="/admin/manage-products">Manage Products</Link>
        </Button>
        <Button>
          <Link to="/admin/manage-products">Sell Store</Link>
        </Button>
      </Box>
    </Box>
  );
}

export default Admin;
