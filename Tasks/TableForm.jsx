import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
function TableData(){
    const [data,setData]=useState()
    let history=useHistory()
    const getTheData=async()=>{
        const response=await fetch(`https://jsonplaceholder.typicode.com/users`)
        const ResultData=await response.json()
        setData(ResultData)
    }
    console.log(data)
    useEffect(()=>{
       getTheData()
    },[])
  
    const validation=()=>{
        
        history.push('/Form')
    }

  
    return(
        <>
             <button className='btn float-right'onClick={validation}><i className="bi bi-plus-lg"></i></button>
            <button className='btn float-right'><i className="bi bi-printer-fill"></i></button>
            <button className='btn float-right'><i className="bi bi-cloud-arrow-down-fill"></i></button>
            <button className='btn float-right'><i className="bi bi-search"></i></button> 
               <table className="table table-bordered table-hover ">
                        <thead className='table-brodered text-white text-center '>
                            <tr className='Table_Heading'>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>USERNAME</th>
                            <th>CITY</th>
                            <th>SUITE</th>
                            <th>ZIPCODE</th>
                            </tr>
                        </thead>
                        <tbody className='text-black text-center'>
                        {data && data.map((ourData)=>(
                            <tr key={ourData.id}>
                                    <td>{ourData.id}</td>
                                    <td>{ourData.name}</td>
                                    <td>{ourData.username}</td>
                                    <td>{ourData.address?.city}</td>
                                    <td>{ourData.address?.suite}</td>
                                    <td>{ourData.address?.zipcode}</td>
                                 </tr>
                                    ))}
                        </tbody>
                        </table>

        </>
    )
}
export default TableData