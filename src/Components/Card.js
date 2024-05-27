import './card.css';
export function Card(props)
{
    let data=props.data;
    const handleDelete=(taskNo)=>
        {
            // alert("Clickef")
            props.handleChildDelete(taskNo);
        }
    const handleEdit=(taskNo)=>
        {
            props.editParent(taskNo);
        }
    const handleStatus=(taskNo)=>
        {
            props.editStatus(taskNo);
        }
        return (
            <div style={{overflowY:"scroll"}} className="dashboard">
                {!Array.isArray(data) || data.length === 0 ? (
                    <div>Data is empty</div>
                ) : (
                    data.map((value) => (
                        <div key={value.taskNo} className='bg-blue-400 text-justify p-2 text-white w-5/6 justify-between flex m-3'>
                            <div className="w-3/5 flex text-xl items-center">
                                <input type="checkbox" className="mr-3 checkbox-large" checked={value.status} onChange={
                                    ()=>handleStatus(value.taskNo)
                                }/>
                                {value.plan}
                            </div>
                            <div className="w-1/5 text-justify flex justify-around flex-col md:flex-row">
                                <button className='bg-green-700 p-2 pl-4 pr-4 rounded-md'
                                onClick={()=>handleEdit(value.taskNo)}
                                >Edit</button>
                                <button className='bg-red-500 p-2 rounded-md' onClick={() => handleDelete(value.taskNo)}>Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        );
}