import * as React from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

const { useState, useEffect } = React;

const HookC = (props: { id: number }) => {
  const initialState = {
    count: 0,
    updated: "",
    isOnline: false
  };
  const [state, setState] = useState(initialState);
  const incr = () => {
    const date = new Date();
    setState(prevState => ({
      ...prevState,
      count: prevState.count + 1,
      updated: `${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`
    }));
  };
  const checkStatus = () => {
    interface Res {
      userStatus: string;
    }
    axios
      .get("/api/status", { params: { id: props.id } })
      .then((res: AxiosResponse<Res>) => {
        setState(prevState => ({
          ...prevState,
          isOnline: res.data.userStatus === "online" ? true : false
        }));
      })
      .catch((err: AxiosError) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    checkStatus()
    return () => {
      setState(prevState => ({ ...prevState, isOnline: false }));
    };
  }, [props.id]);

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Lust update was at: {state.updated}</p>
      <p>
        User is:{" "}
        <span style={{ color: state.isOnline ? "green" : "red" }}>
          {state.isOnline ? "online" : "offline"}
        </span>{" "}
      </p>
      <button onClick={incr}>INC</button>
    </div>
  );
};

export default HookC;
