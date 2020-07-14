import React, { Component } from 'react'
import PersonComp from './PersonComp'
class NameListObjectRender extends Component {
    render() {
        const personsList = [
            {
                id: 1,
                name: "Prasanth",
                gender: "Male"
            },
            {
                id: 2,
                name: "Tanu",
                gender: "Female"
            },
            {
                id: 3,
                name: "Shashi",
                gender: "Female"
            },
            {
                id: 4,
                name: "PRCV",
                gender: "Male"
            }
        ]
        const names = ["Prasanth", "Tanu", "Shashi", "PRCV","PRCV"]

        const personListValues = personsList.map(pVal =>
            <PersonComp key={pVal.id} person={pVal}></PersonComp>
        )
        const personListinSameComp = personsList.map(aVal =>
            <li key={aVal.id}>I am {aVal.name}. My ID is {aVal.id} and i am {aVal.gender} </li>
        )

        const nameList = names.map((a,index) =>
            <li key={index}>indexVal: {index}- {a}</li>
        )
        return (
            <div> 
               <b> When not haivng Unique key use - index: </b>
                {nameList}
              <b>Using Unique ID value from object: </b>
                Using Same Component:
                {personListinSameComp}
                <br />
                Using different Component:
                <ul>

                    {personListValues}
                </ul>
            </div>
        )
    }
}

export default NameListObjectRender
