import React, { useEffect, useState } from 'react'
import AppBar from '../components/AppBar'
import HeroSection from '../components/HeroSection'

function Index() {
  const [filterData, setFilterData] = useState([]);
  const [ResponseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:9000/');
        const data = await response.json();
        setResponseData(data);
        setFilterData(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filtering = (e) => {
    const search = e.target.value;
    console.log(search);

    if (search === "") {
      setFilterData(ResponseData);
    } else {
      const filtered = ResponseData.filter((food) => food.name.toLowerCase().includes(search.toLowerCase()));
      setFilterData(filtered);
    }
  };

  const buttonFiltering = (foodType)=>{
    if(foodType==='all') {
      setFilterData(ResponseData);
      return
    }
    const buttonFiltered = ResponseData.filter((food) => food.type.includes(foodType));
    setFilterData(buttonFiltered);
  };

  if (error) return <div className='min-h-screen flex justify-center items-center'>An error occurred.</div>
  if (loading) return <div className='min-h-screen flex justify-center items-center'>Loading...</div>

  return (
    <div className='min-h-screen'>
      <AppBar filtering={filtering} buttonFiltering={buttonFiltering} />
      <HeroSection ResponseData={filterData} />
    </div>
  )
}

export default Index;
