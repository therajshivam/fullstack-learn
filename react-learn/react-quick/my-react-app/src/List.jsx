// render list

function List () {
    // const fruits = ['apple', 'banana', 'papaya', 'orange', 'mango']
    // const listItems = fruits.map(fruits => <li>{fruits}</li>)
    // return(<ol>{listItems}</ol>)

    const fruits = [{id : '1',name :'apple', calories : 95}, 
                    {id : '2',name : 'banana', calories : 45}, 
                    {id : '3',name : 'papaya', calories : 105}, 
                    {id : '4',name : 'orange', calories : 159}, 
                    {id : '5',name : 'mango', calories : 37}]

    // fruits.sort((a,b)=> a.name.localeCompare(b.name)) // Alphabatical
    fruits.sort((a,b)=> b.name.localeCompare(a.name)) // reverse Alphabatical
    const listItems = fruits.map(fruits => <li key= {fruits.id}>
                                            {fruits.name}: &nbsp; 
                                            <b>{fruits.calories}</b></li>)
    return(<ol>{listItems}</ol>)

} 

export default List