// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
// STAR MATCH - Starting Template

import {stat} from "fs";
import {useState} from "react";

const App = () => {

    const StarsDisplay =(props: any) => (
        <>
            {utils.range(1,props.count).map(starId =>
                <div key={starId} className="star"></div>
            )}
        </>
    );

    const PlayNumber = (props:any ) => (

        <button  className="number"
                 style={{backgroundColor: colors[props.status as keyof typeof colors]}}
                 onClick={()=>console.log(`Num`,props.number)}>
            {props.number}</button>
    );
    const [stars,setStars] = useState(utils.random(1,9));

    // const [availableNums,setAvailableNums] = useState(utils.range(1,9));
    // const  [candidateNums, setCandidateNums] = useState<any[]>([]);
    const [availableNums,setAvailableNums] = useState([1,2,3,4,5]);
    const  [candidateNums, setCandidateNums] = useState([2,3]);
    const candidateAreWrong = utils.sum(candidateNums) > stars;

    const numberStatus = (number: number) => {
        if (!availableNums.includes(number))
        {
            return 'used';
        }
        if (candidateNums.includes(number))
        {
            return candidateAreWrong ? 'wrong':'candidate';
        }
        return 'available';
    };
    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    <StarsDisplay count={stars}/>
                </div>
                <div className="right">
                    {utils.range(1,9).map(numberId =>
                       <PlayNumber key={numberId}
                                   status = {numberStatus(numberId)}
                                   number={numberId}/>
                    )}
                </div>
            </div>
            <div className="timer">Time Remaining: 10</div>
        </div>
    );
};

// Color Theme
const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};

// Math science
const utils = {
    // Sum an array
    sum: (arr: any[]) => arr.reduce((acc, curr) => acc + curr, 0),

    // create an array of numbers between min and max (edges included)
    range: (min: number, max: number) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

    // pick a random number between min and max (edges included)
    random: (min: number, max: number) => min + Math.floor(Math.random() * (max - min + 1)),

    // Given an array of numbers and a max...
    // Pick a random sum (< max) from the set of all available sums in arr
    randomSumIn: (arr: string | any[], max: number) => {
        const sets = [[]];
        const sums = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0, len = sets.length; j < len; j++) {
                const candidateSet = sets[j].concat(arr[i]);
                const candidateSum = utils.sum(candidateSet);
                if (candidateSum <= max) {
                    sets.push(candidateSet);
                    sums.push(candidateSum);
                }
            }
        }
        return sums[utils.random(0, sums.length - 1)];
    },
};
export default App;
