import React, {useState} from "react";
import * as XLSX from 'xlsx'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";
import { useLocalStorage } from "../useLocalStorage";
const pdata = [
    {
        productKey: 1,
        accuracy: 95
    },
    {
        productKey: 2,
        accuracy: 88
    },
    {
        productKey: 3,
        accuracy: 78
    },
    {
        productKey: 4,
        accuracy: 84
    },
    {
        productKey: 5,
        accuracy: 100
    },
    {
        productKey: 6,
        accuracy: 94
    },
    {
        productKey: 7,
        accuracy: 84
    },
    {
        productKey: 8,
        accuracy: 76
    },
    {
        productKey: 9,
        accuracy: 88
    },
    {
        productKey: 10,
        accuracy: 91
    },
]
let finalData = []

export const ParseExcel = () => {
    const[fileName, setFileName] = useState(null);

    //getting user name from localstorage
    const [name, setName] = useLocalStorage("name", "");
    
    

    const handleFile = async (e) => {
        const file = e.target.files[0];

        setFileName(file.name);

        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);

        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1,
            defval: ""
        });
        
        for(let i = 1 ; i < jsonData.length; i++){
            finalData.push({
                productKey: jsonData[i][0],
                accuracy: jsonData[i][1]
            })
        }
        // console.log(finalData)
        
        
    }
    console.log(finalData)



    return (
    <div>
            <h2>
                UserName: <span>{name}</span>
            </h2>
                    
            <p>
                Filename:- <span>{fileName}</span>
                
            </p>
        <input type="file" onChange={(e) => handleFile(e)} />
        <div>
        <ResponsiveContainer width="80%" aspect={3}>
            <LineChart data={pdata}>
                <XAxis dataKey="productKey" interval={'preserveStartEnd'}/>
                <YAxis dataKey="accuracy" interval={'preserveStartEnd'}/>
                <Line dataKey="accuracy" />
            </LineChart>
        </ResponsiveContainer>

    </div>
    </div>)
};