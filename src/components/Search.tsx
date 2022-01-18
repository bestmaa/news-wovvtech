import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "./Search.css";
import { Button } from "@mui/material";

function Search() {
  const [searchBy, setsearchBy] = useState("which type of search :First click Type Of Search");
  const [dis, setdis] = useState(true);
  return (
    <div className="search">
      <Autocomplete
        disablePortal
        disabled={dis}
        id="combo-box-demo"
        options={["ok", "ok1", "ok3"]}
        sx={{ width: { xs: 300, sm: 600 } }}
        onChange={(event, value) => {
          console.log(value);
        }}
        renderInput={(params) => <TextField {...params} label={searchBy} />}
      />
      <div className="activeBtn">
        <Button
          variant="outlined"
          onClick={() => {
            setsearchBy("searchByTitle");
            setdis(false);
          }}
        >
          search Title
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            setsearchBy("searchByauthor");
            setdis(false);
          }}
        >
          search author
        </Button>
      </div>
    </div>
  );
}

export default Search;
