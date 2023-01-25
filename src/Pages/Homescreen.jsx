import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../Components/Room";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import { DatePicker, Space } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;
function Homescreen() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState(true);

  const [fromdate, setfromdate] = useState();
  const [todate, settodate] = useState();

  const [searchkey, setsearchkey]=useState('')
  const [type, settype]=useState('all')

  // for hidding the current booking rooms
  const [duplicaterooms, setduplicaterooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // You can await here
      setloading(true);
      const response = await axios.get("/api/rooms/getallrooms");
      setrooms(response.data);
      console.log(response.data);

      setduplicaterooms(response.data);
      // setrooms("data", response);
      // if(response.data != null){

      //   setloading(false);
      // }

      // ...
    };

    // seterror(true);
    fetchData();
    setloading(false);
  }, []);

  function filterByDtae(dates) {
    setfromdate(moment(dates[0].$d).format("DD_MM_YYYY"));
    settodate(moment(dates[1].$d).format("DD_MM_YYYY"));

    // condition for hide the booked rooms on Homescreen
    
    var temprooms = [];
    var availability = false;

    for (const room of duplicaterooms) {
      if (room.currentbookings.length > 0) {
        for (const booking of room.currentbookings) {
          if (
            !moment(moment(dates[0].$d).format("DD_MM_YYYY")).isBetween(
              booking.fromdate,
              booking.todate
            ) &&
            !moment(moment(dates[1].$d).format("DD_MM_YYYY")).isBetween(
              booking.fromdate,
              booking.todate
            )
          ) {
            if (
              moment(dates[0].$d).format("DD_MM_YYYY") !== booking.fromdate &&
              moment(dates[0].$d).format("DD_MM_YYYY") !== booking.todate &&
              moment(dates[1].$d).format("DD_MM_YYYY") !== booking.fromdate &&
              moment(dates[1].$d).format("DD_MM_YYYY") !== booking.todate
            ) {
              availability = true;
            }
          }
        }
      }
      if (availability == true || room.currentbookings.length == 0) {
        temprooms.push(room);
      }

      setrooms(temprooms);
    }
  }

  function filterBySearch(){
    const temprooms = duplicaterooms.filter(room=>room.name.toLowerCase().includes(searchkey.toLowerCase()))

    setrooms(temprooms)
  }

  function filterByType(e){
    const temprooms = duplicaterooms.filter(room=>room.type.toLowerCase()==e.toLowerCase())

    setrooms(temprooms)
  }

  return (
    <div className="container">
      <div className="row mt-5 bs">
        <div className="col-md-3">
          <RangePicker format="DD-MM-YYYY" onChange={filterByDtae} className=" select" />
        </div>

        <div className="col-md-5">
        <input type="text"  className="form-control select" placeholder="Search Rooms" value={searchkey} onChange={(e)=>{setsearchkey(e.target.value)}} onKeyUp={filterBySearch} />
        </div>

        <div className="col-md-3">
        <select className="form-control select" value={type} onChange={(e)=>{filterByType(e.target.value)}}
        >
        <option value="all">All</option>
        <option value="delux">Delux</option>
        <option value="non-delux">Non-Delux</option>
        </select>
        </div>
      </div>

      <div className="row justify-content-center mt-4 ">
        {loading ? (<Loader />) : rooms?.map((room) => (
          <div className="col-md-9 mt-4">
            <Room roomss={room} fromdate={fromdate} todate={todate} />
          </div>
        ))}
      </div>
     
      </div>
    
  );
}



export default Homescreen;
