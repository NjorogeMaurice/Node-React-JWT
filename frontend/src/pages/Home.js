import Header from "../components/Header"
import React, { useEffect,useState } from 'react';
import FarmerDash from "../dashboards/Farmer";
import DistributorDash from "../dashboards/Distributor";
import OfficerDash from "../dashboards/Officer";
import { useParams } from "react-router-dom";

export default function Home(){
    const [authState,setauthState]=useState(false);
    const [data,setData] = useState()
    const {type } = useParams()
    const data1 = type
    useEffect( () => {
      async function fetchData(){
        try {
          // Make an API call to your backend with the user's credentials
          const response = await fetch('http://127.0.0.1:5000/user/validateToken', {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${sessionStorage.getItem('token')}`

              },
              
              
          });
  
          // Assuming your backend returns JSON response
          const data = await response.json();
          console.log(data)
          sessionStorage.setItem('token', data.token);
          setauthState(data.authenticated)
          setData(sessionStorage.getItem('username'))
          console.log(data1.data)
      } catch (error) {
          // Handle network errors or other exceptions
          // console.error('Error during login:', error);
          setauthState(false)
      }
      }
      fetchData();
      }, []);
    return(
        <>
        {authState?
        data1 == 'farmer' ? <FarmerDash/> : 
        data1 == 'officer'? <OfficerDash/>: 
        data1 == 'distributor'? <DistributorDash/> :
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
        <Header
        heading="Specified User Not Found."
        paragraph="Kindly sign in to your account"
        linkName="Click here"
        linkUrl="/"
        data=""
        />
        </div>
        </div>
        
        :
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
        <Header
            heading="Sorry, your session expired."
            paragraph="Kindly sign in to your account"
            linkName="Click here"
            linkUrl="/"
            data=""
            />
        </div>
        </div>
        }
              
             
        </>
    )
}