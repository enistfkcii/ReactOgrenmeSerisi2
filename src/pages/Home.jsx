
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { fetchData, modalOpenFunc } from "../redux/modalSlice";



const Home = () => {
const navigate = useNavigate();

const {modal,getData} = useSelector(state => state.modal)
const dispatch = useDispatch()
useEffect(() => {
    dispatch(fetchData())
},[dispatch])
console.log(getData);
return(
    <>
    <div>
        React Redux
    </div>
    </>
)
}

export default Home