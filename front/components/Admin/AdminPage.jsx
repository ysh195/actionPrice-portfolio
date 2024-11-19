/* eslint-disable no-unused-vars */
// src/pages/AdminPage.js

import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { colors } from "../../assets/assest.js";

import { Link, useSearchParams } from "react-router-dom";
import { Box, Pagination, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserList,
  blockUser,
  resetRefreshToken,
} from "../../redux/slices/adminPageSlice";
import { Button } from "@mui/material";
import PostSearch from "../Post/PostSearch.jsx";

const StyledTableCell = (props) => (
  <TableCell
    {...props}
    sx={{
      fontWeight: "bold",
      backgroundColor: colors.tableHead,
      color: "white",
    }}
  />
);

const AdminPage = () => {
  const itemsPerPage = 10;
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNum = parseInt(searchParams.get("pageNum")) || 1;
  const keyword = searchParams.get("keyword") || "";
  const { userList, totalPageNum, error } = useSelector(
    (state) => state.adminPage
  );

  // Fetch user list based on page number and keyword
  useEffect(() => {
    dispatch(fetchUserList({ pageNum: pageNum - 1, keyword }));
  }, [dispatch, pageNum, keyword]);

  //function: Handle search submission //
  const handleSearch = (searchKeyword) => {
    setSearchParams({ keyword: searchKeyword, pageNum: 1 }); // Reset to page 1 on new search
    console.log("api call for fetchUserList-handleSearch submission");
    dispatch(fetchUserList({ pageNum: 0, keyword: searchKeyword })); // Fetch user list with new keyword
  };
  //function: handleResetSearch  submission //
  const handleResetSearch = () => {
    setSearchParams({ pageNum: 1 }); // Reset to the first page
  };

  const handlePageChange = (event, value) => {
    if (value < 1) return; // Prevent navigating to less than page 1
    setSearchParams({ pageNum: value, keyword });
  };

  const handleBlockUser = (username) => {
    dispatch(blockUser(username));
  };

  const handleResetRefreshToken = (username) => {
    dispatch(resetRefreshToken(username));
  };

  if (error) return <Typography color="error">{`Error: ${error}`}</Typography>;

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ mt: "5rem", textAlign: "center", color: colors.darkBrown }}
      >
        사용자 목록
      </Typography>
      <div style={{ display: "flex", alignSelf: "flex-end" }}>
        <PostSearch
          keyword={keyword}
          onSearch={handleSearch}
          onReset={handleResetSearch}
        />
      </div>

      <TableContainer
        sx={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Table aria-label="User List Table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No</StyledTableCell>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Posts</StyledTableCell>
              <StyledTableCell>Comments</StyledTableCell>
              <StyledTableCell>Authorities</StyledTableCell>
              <StyledTableCell>Blocked</StyledTableCell>
              <StyledTableCell>Token Reset</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {userList.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  해당 키워드로 사용자나 이메일을 찾을 수 없습니다.
                </TableCell>
              </TableRow>
            ) : (
              userList.map((user, index) => (
                <TableRow
                  key={user.username}
                  sx={{
                    "&:nth-of-type(even)": {
                      backgroundColor: "#F7F2EF",
                    },
                    "&:hover": {
                      backgroundColor: "#f8f8f8",
                    },
                  }}
                >
                  <TableCell>
                    {(pageNum - 1) * itemsPerPage + index + 1}
                  </TableCell>
                  <TableCell>
                    <Link
                      to={`/api/mypage/${user.username}/myposts`}
                      style={{ color: colors.button1 }}
                    >
                      {user.username}
                    </Link>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.postCount}</TableCell>
                  <TableCell>{user.commentCount}</TableCell>
                  <TableCell>{user.authorities}</TableCell>
                  <TableCell>
                    {user.tokenExpiresAt === null ? (
                      "None"
                    ) : (
                      <Button
                        variant="contained"
                        sx={{
                          border: `1px solid ${colors.green}`,
                          backgroundColor: "white",
                          color: colors.green,
                          "&:hover": {
                            backgroundColor: colors.green,
                            color: "white",
                          },
                        }}
                        onClick={() => handleBlockUser(user.username)}
                      >
                        {user.blocked ? "Unblock" : "Block"}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {user.tokenExpiresAt === null ? (
                      "None"
                    ) : (
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: colors.button1 }}
                        onClick={() => handleResetRefreshToken(user.username)}
                      >
                        Reset
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Pagination
          count={totalPageNum} // Total number of pages from Redux state
          page={pageNum} // Current page
          onChange={handlePageChange}
          variant="outlined"
          sx={{ margin: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default AdminPage;
