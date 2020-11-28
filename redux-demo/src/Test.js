class Test extends React.Component{

    constructor(){
        super(props);
        const test={
            uname:'test',
            age:20
        }
    }

    // return ( <div>
    //     <h1>HEllo</h1>
    //        </div>
    //     )
}


function MyTest(){
    const [myvar, setNewSate] = useSate(0);

    return (
    <h1>HEllo, {myvar}</h1>
    )




}