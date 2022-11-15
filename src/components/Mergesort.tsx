import CSS from 'csstype';
import { Outlet, Link } from "react-router-dom";

import { default as start } from '../assets/play-outline.svg'
import { default as reset } from '../assets/refresh-outline.svg'

const Mergesort = () => {
    const data:number[] = [];
    const output:any[] = [];

    for (let i=0; i<50; i++) {
        data[i] = Math.floor(Math.random() * 500);
        let id = `d${i}`;
        // console.log(data[i]);
        const barStyle:CSS.Properties = {
            position: `relative`,
            height: `${data[i]}px`,
            left: `${5*i}px`,
            top: `${500 - data[i]}px`
        }
        output.push(<span id={id} className='bar' style={barStyle}></span>);
    }

    const beginMergesort = () => {
        return mergesort(data, 0, data.length-1, []);
    };

    const mergesort = (data:number[], leftStart:number, rightEnd:number, result:number[]) => {
        if (leftStart >= rightEnd) return;
        const middle = Math.floor((rightEnd - leftStart) / 2) + leftStart;
        mergesort(data, leftStart, middle, result);
        mergesort(data, middle + 1, rightEnd, result); 
        merge(data, leftStart, rightEnd, result);
    }

    const merge = (data:number[], leftStart:number, rightEnd:number, result:number[]) => {
        const leftEnd = Math.floor((rightEnd - leftStart) / 2) + leftStart;
        const rightStart = leftEnd + 1;

        let left = leftStart;
        let right = rightStart;
        let index = left;

        while (left <= leftEnd && right <= rightEnd) {
            if (data[left] <= data[right]) {
                result[index] = data[left];
                left++;
            } else {
                result[index] = data[right];
                right++;
            }
            index++;
        }
         
        for (let i=left,j=index; i<=leftEnd; i++,j++) {
            result[j] = data[i];
        }
        for (let i=right,j=index; i<=rightEnd; i++,j++) {
            result[j] = data[i];
        }
        for (let i=leftStart; i<=rightEnd; i++) {
            data[i] = result[i];
            updateUI.begin(i);
        }
    }
    
    const updateUI = (() => {
        let count = 1;
        const begin = (i:number) => {
            count++;
            setTimeout(()=>{
                document.getElementById(`d${i}`)!.style.height = `${data[i]}px`;
                document.getElementById(`d${i}`)!.style.top = `${500-data[i]}px`;  
            }, count * 5);            
        };
        const clear = () => {
            count = 1;
        }
        return {
            begin,
            clear
        };
    })();

    function resetMergesort() {
        updateUI.clear();
        for (let i=0; i<data.length; i++) {
            data[i] = Math.floor(Math.random() * 500);
            document.getElementById(`d${i}`)!.style.height = `${data[i]}px`;    
            document.getElementById(`d${i}`)!.style.top = `${(500-data[i])}px`; 
        }
    }

    return (
        <div className='sortAlgDemo'>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td className="title">
                                Merge Sort
                            </td>
                            <td className="other">
                                <Link className="link" to="/sortAlgDemo/quicksort">Quick Sort</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr/>
            </div>            
            <div className="header">
                <span className="label" onClick={beginMergesort}>
                    <img src={start} className="svg-filter"></img>
                    Play   
                </span>
                <span>&nbsp;</span>
                <span className="label" onClick={resetMergesort}>
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

export default Mergesort;