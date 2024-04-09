import { useEffect, useState } from 'react'
import NewTaskInput from './components/NewTaskInput'


function App() {
  const [data, setData] = useState(null);
  
  const handleAddTask = (newTaskTitle) => {
    fetch('http://localhost:8000/task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTaskTitle }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add task');
        }
        return response.json();
    })
    .then(addedTask => {
        setData(prevData => [...prevData, addedTask]);
        console.log('Task added successfully:', addedTask);
    })
    .catch(error => console.error('Error adding task:', error));
};
  
    useEffect( ()=> {
        fetch('http://localhost:8000/task')
        //  res is not the data is just the response object
        .then(res => {
            console.log("data is coming");
            return res.json();
        })
        .then (comingData => {
            setData(comingData)
            console.log(comingData);
        });
        
    },[])

  return (
    <>
      <div className='w-full bg-primary'>
        <div className='flex flex-col-3 p-10 justify-center items-center'>
        <div className='w-1/3  justify-center items-center bg-secondary'>
           <div className=''>
            <NewTaskInput onAddTask={handleAddTask}/>
           </div> 
           
           <div className='p-2 m-2 text-gray-400'>
            <h4> Tasks to do {data ? data.length : 0}</h4>
           </div>
           {
            data && 
            data.map((t, index) => (
              <div className='p-4' key={t.id}>
              <div className='bg-indigo-950 py-4  flex justify-between rounded-md'>
                  <h4 className='px-1'>{t.title}</h4>
                  <div>
                     <button className='bg-indigo-600 rounded-sm m-1 px-1'>Done</button>
                     <button className='bg-indigo-600 rounded-sm m-1 px-1'>Delete</button>
                  </div>
                 
              </div>
           </div>
            ))
           }

           <div className='p-2 m-2 text-gray-400'>
            <h4> Done - </h4>
           </div>
           <div className='p-4'>
              <div className='bg-indigo-950 py-4  flex justify-between rounded-md'>
                 fdfdsfsfs
                 
              </div>
              
           </div>

        </div>



       
        </div>
      </div>
    </>
  )
}

export default App
