//import { Tile } from "../classes/tile";

export const mapper = (matrix) => {
    let odd = false;
    const map = [];
    for(let row of matrix){
        odd = !odd;
        for(let column of row){            
            console.log(column, odd ? 'odd' : 'pair');
        }
    }
    return map;
};
