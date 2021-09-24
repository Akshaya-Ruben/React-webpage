import "./charts.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function charts() {
    
    const data = [
        {
          time: '12 AM',
          batteryEnergy: 4000,
          powerDistribution: 2400,
          energyUsage: 2400,
        },
        {
            time: '2 AM',
            batteryEnergy: 3000,
            powerDistribution: 1398,
            energyUsage: 2210,
        },
        {
            time: '4 AM',
            batteryEnergy: 2000,
            powerDistribution: 9800,
            energyUsage: 2290,
        },
        {
            time: '6 AM',
            batteryEnergy: 2780,
            powerDistribution: 3908,
            energyUsage: 2000,
        },
        {
            time: '8 AM',
            batteryEnergy: 1890,
            powerDistribution: 4800,
            energyUsage: 2181,
        },
        {
            time: '10 AM',
            batteryEnergy: 2390,
            powerDistribution: 3800,
            energyUsage: 2500,
        },
        {
            time: '12 PM',
            batteryEnergy: 3490,
            powerDistribution: 4300,
            energyUsage: 2100,
        },
          {
              time: '2 PM',
              batteryEnergy: 3000,
              powerDistribution: 1398,
              energyUsage: 2210,
          },
          {
              time: '4 PM',
              batteryEnergy: 2000,
              powerDistribution: 9800,
              energyUsage: 2290,
          },
          {
              time: '6 PM',
              batteryEnergy: 2780,
              powerDistribution: 3908,
              energyUsage: 2000,
          },
          {
              time: '8 PM',
              batteryEnergy: 1890,
              powerDistribution: 4800,
              energyUsage: 2181,
          },
          {
              time: '10 PM',
              batteryEnergy: 2390,
              powerDistribution: 3800,
              energyUsage: 2500,
          },
          {
              time: '12 PM',
              batteryEnergy: 3490,
              powerDistribution: 4300,
              energyUsage: 2100,
          },
      ];
    
    return (
        <div className="charts">
            <h3 className="charttittle">Energy Balance</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                 <XAxis dataKey="time" stroke="lightgray"/>
                 <YAxis stroke="lightgray"/>
                 <Line type= "monotone" dataKey ="powerDistribution" stroke="gray" />
                 <Line type= "monotone" dataKey ="energyUsage" stroke="blue"/>
                 <Line type= "monotone" dataKey ="batteryEnergy" stroke="green"/>
                 <Tooltip/>
                
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
