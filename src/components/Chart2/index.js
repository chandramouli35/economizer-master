import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts'  

const MyLineCharto = () =>{

    const data = [
        {
          "name": "12:00 AM",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "Now",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "11:59 PM",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        
        
      ]
    return(
    
    <LineChart width={200} height={300} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart>)
    };
 
  export default MyLineCharto