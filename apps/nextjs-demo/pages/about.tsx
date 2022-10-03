import {readFileSync} from 'fs';
export default function About( {name}){

    return <h1> about  {name }</h1>
}

export function getStaticProps() {
// const context = readFileSync();
console.log('+++++++++++');

return {
    props: {
        name: "james about page"
    }
}
}