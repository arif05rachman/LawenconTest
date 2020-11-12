import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Datetime from "react-datetime";
import moment from "moment";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDatas, addTitle } from "../store/actions/data";
export default function Content() {
  const dispatch = useDispatch();
  const history = useHistory()
  const search = useSelector((state) => state.dataReducer);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState([]);
  const [date, setDate] = useState("");
  const [goTo, setGoTo] = useState([]);
  const [disable, setDisable] = useState(true);
  const handleChangeFrom = (e) => {
    setFrom(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeTo = (e) => {
    setGoTo(e.target.value);
    // dispatch(getDatas(e.target.value));
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getDatas(goTo));
    dispatch(addTitle(from+to+date));
  };
  const handleChangeDate = (value) => {
    setDate(value._d);
    // console.log(value._d);
  };
  useEffect(() => {
    if (search.datas.length) {
      history.push("/result");
    }
    if (from === "Dhaka") {
      setTo([
        {
          name: "Comilla",
          id: 1109001,
        },
        {
          name: "Chittagong",
          id: 1109002,
        },
        {
          name: "Kuakata",
          id: 1109003,
        },
        {
          name: "Coxs Bazar",
          id: 1109004,
        },
        {
          name: "Rajshahi",
          id: 1109005,
        },
      ]);
    } else if (from === "Comilla") {
      setTo([
        {
          name: "Chittagong",
          id: 2209002,
        },
        {
          name: "Dhaka",
          id: 2209001,
        },
        {
          name: "Rajshahi",
          id: 2209003,
        },
      ]);
    } else if (from === "Chittagong") {
      setTo([
        {
          name: "Mymensingh",
          id: 3309003,
        },
        {
          name: "Dhaka",
          id: 3309001,
        },
        {
          name: "Sylet",
          id: 3309002,
        },
      ]);
    } else {
      setTo([]);
    }
    if (date !== "" && from !== "") {
      setDisable(false);
    }
  }, [from, date, search]);
  const yesterday = moment().subtract(1, "day");
  const valid = (current) => {
    return current.isAfter(yesterday);
  };
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="w-25 p-1 border m-2">
        <Form>
          <Form.Group style={{ width: "200px" }}>
            Leaving From
            <Form.Control as="select" custom onChange={handleChangeFrom}>
              <option value="">Please Select</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Comilla">Comilla</option>
              <option value="Chittagong">Chittagong</option>
            </Form.Control>
            Going To
            <Form.Control as="select" custom onChange={handleChangeTo}>
              <option value="">Please Select</option>
              {
                // console.log(to.length)
                to.length
                  ? to.map((city, idx) => {
                      return (
                        <option value={city.id} key={city.id}>
                          {city.name}
                        </option>
                      );
                    })
                  : ""
              }
            </Form.Control>
            Departing On
            <Datetime
              timeFormat={false}
              onChange={handleChangeDate}
              isValidDate={valid}
            ></Datetime>
            {/* <Link to="/result"> */}
              <button
                disabled={disable}
                style={{ backgroundColor: "orange" }}
                onClick={handleSearch}
              >
                <span>Search</span>
              </button>
            {/* </Link> */}
          </Form.Group>
        </Form>
      </div>
      <div className="w-25 m-2">
        <img
          src="http://192.168.1.100:85/assets/img/redBus-coupons-offers-1586.PNG"
          alt=""
          height="276"
          width="445"
        />
      </div>
    </div>
  );
}
