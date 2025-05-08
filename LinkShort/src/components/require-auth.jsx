import { useNavigate } from "react-router";
import { UrlState } from "../context";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";

function RequrieAuth({children}) {
    const navigate = useNavigate();
    const {isAuthenticated , loading} = UrlState();

    useEffect(()=> {
        if(!isAuthenticated && loading === false) navigate('/auth');
    }, [isAuthenticated , loading])

    if (loading) <BarLoader width={"100%"} color="zinc" />

    if(isAuthenticated) return children
}

export default RequrieAuth