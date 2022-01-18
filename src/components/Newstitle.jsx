import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { GetMoreNasaData, GetNasaData } from "../action/NasaDataAction";
import { minWidth } from "@mui/system";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function Newstitle() {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.NewsData);
  const [LOADING, setLOADING] = useState();
  const [count, setcount] = useState(20);
  const [rows, setrows] = useState([]);
  const columns = [
    {
      field: "Title",
      headerName: "Title",
      minWidth: 500,
      renderCell: (params) => <Link to="details" state={{state:params.value.all}}>{params.value.title}</Link>,
    },
    {
      field: "Author",
      minWidth: 150,
    },
    {
      field: "URL",
      minWidth: 200,
    },
  ];
  useEffect(() => {
    dispatch(GetNasaData());
  }, []);
  useEffect(() => {
    let p = data?.map((d, i) => {
      return { id: ++i, Title: {all:d,title:d.title}, Author: d.author, URL: d.url };
    });
    setrows(p);
  }, [data]);

  useEffect(() => {
    if (LOADING === count) {
      dispatch(GetMoreNasaData(count / 20));
      setcount(count + 20);
    }
  }, [LOADING, count]);
  console.log(count);

  return (
    <div>
      {loading ? <Loader /> : ""}
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows ? rows : [{ id: 1, Title: "Loading..." }]}
          onRowsScrollEnd={() => console.log("ok ok ")}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
          getCellClassName={(props) => setLOADING(props.id)}
          columnBuffer={3}
        />
      </div>
    </div>
  );
}

export default Newstitle;
