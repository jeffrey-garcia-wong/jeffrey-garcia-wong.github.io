import CSS from 'csstype';

import { default as start } from '../assets/play-outline.svg'
import { default as reset } from '../assets/refresh-outline.svg'

const Quicksort = () => {
    const data:number[] = [];
    const output:any[] = [];

    for (let i=0; i<50; i++) {
        data[i] = Math.floor(Math.random() * 500);
        let id = `d${i}`;
        console.log(id);
        const barStyle:CSS.Properties = {
            position: `relative`,
            height: `${data[i]}px`,
            left: `${5*i}px`,
            top: `${500 - data[i]}px`
        }
        output.push(<span id={id} className='bar' style={barStyle}></span>);
    }

    const delay = (time:number) => {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    async function beginQuicksort() {
        quicksort(data, 0, data.length-1);
    };

    async function quicksort(data:number[], start:number, end:number) {
        if (start < end) {
            let splitIndex = partition(data, start, end);
            await delay(200);
            quicksort(data, start, splitIndex - 1);
            quicksort(data, splitIndex + 1, end);         
        }
    }    

    const partition = (data:number[], start:number, end:number) => {
        const pivotVal = data[end];
        let i = (start - 1);
        
        for (let j=start; j<=end-1; j++) {
    
            // If current element is smaller
            // than the pivot
            if (data[j] < pivotVal) {
    
                // Increment index of
                // smaller element
                i++;
                
                swap(i, j);
            }
        }
        
        swap(i+1, end); 
        
        return i+1;
    }
    
    const swap = (a:number, b:number) => {
      let tmp = data[a];
      data[a] = data[b];
      data[b] = tmp;
      
      // refresh UI
      document.getElementById(`d${a}`)!.style.height = `${data[a]}px`;
      document.getElementById(`d${a}`)!.style.top = `${500-data[a]}px`;
      document.getElementById(`d${b}`)!.style.height = `${data[b]}px`;
      document.getElementById(`d${b}`)!.style.top = `${500-data[b]}px`;
    }

    function resetUI() {
        for (let i=0; i<data.length; i++) {
            data[i] = Math.floor(Math.random() * 500);
            document.getElementById(`d${i}`)!.style.height = `${data[i]}px`;    
            document.getElementById(`d${i}`)!.style.top = `${(500-data[i])}px`; 
        }
    }

    return (
        <div className='sortAlgDemo'>
            <div>
                <h1>Quick Sort</h1>
                <hr/>
            </div>            
            <div className="header">
                <span className="label" onClick={beginQuicksort}>
                    <img src={start} className="svg-filter"></img>
                    Play   
                </span>
                <span>&nbsp;</span>
                <span className="label" onClick={resetUI}>
                    <img src={reset} className="svg-filter"></img>
                    Reset 
                </span>
            </div>
            <div>
                {output}
            </div>
        </div>
    );
};

export default Quicksort;