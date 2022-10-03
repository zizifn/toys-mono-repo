// console.log(process.argv);


const args = process.argv.slice(2).reduce(
    (pre, curr)=>{

        return (+pre) + (+curr);
    },
    0
)

console.log(args);