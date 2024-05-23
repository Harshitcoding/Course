import React from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../CreactSlice/CartSlice';
import { removeForm } from '../CreactSlice/formSlice';

const Teachers = [
  {
    id: 2,
    name: "Jane Smith",
    subject: "Data Analytics",
    description: "Passionate MERN stack developer with a knack for problem-solving.",
    video: "https://www.youtube.com/watch?v=iu-LBY7NXD4",
    price: 100
  },
  {
    id: 3,
    name: "Polka Dot",
    subject: "Full Stack",
    description: "Passionate MERN stack developer with a knack for problem-solving.",
    video: "https://www.youtube.com/watch?v=gfGULxgjOhY",
    price: 100
  },
  {
    id: 4,
    name: "Smith",
    subject: "MERN Stack",
    description: "Passionate MERN stack developer with a knack for problem-solving.",
    video: "https://www.youtube.com/watch?v=1xD7IqFO9L8",
    price: 100
  },
  {
    id: 5,
    name: "Sam Altman",
    subject: "MERN Stack",
    description: "Passionate MERN stack developer with a knack for problem-solving.",
    video: "https://www.youtube.com/watch?v=NEsDfUqede8",
    price: 100
  }
];

function Course() {
  const cartItems = useSelector(state => state.form.form);
  const dispatch = useDispatch(); 

  const handleSubmit = (teach) => {
    dispatch(add(teach)); 
  }

  const remove = (teach) => {
    dispatch(removeForm(teach))
  }
  return (
    <div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Teachers.map((teach) => (
          <div key={teach.id} className="bg-white shadow-md rounded-xl overflow-hidden">
            <div className="flex justify-center">
              <ReactPlayer url={teach.video} controls />
            </div>
            <div className="p-4">
              <div className="font-semibold text-xl text-gray-800">{teach.name}</div>
              <div className="text-gray-600 text-sm">{teach.subject}</div>
              <div className="text-gray-700 mt-2">{teach.description}</div>
              <div className="text-gray-800 font-bold mt-2">${teach.price}</div> 
              <button onClick={() => handleSubmit(teach)} className='btn-96'>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
     <div className='flex gap-6'>
     {cartItems.map((Course, index) => (
        <div key={index} className=" bg-white shadow-md rounded-xl overflow-hidden mt-6 " style={{ width: 360 }}>
          <div className="flex justify-center">
            {Course.video && <ReactPlayer url={Course.video} controls width={350} />}
          </div>
          <div className='p-4'>
            <div className="font-semibold text-xl text-gray-800">{Course.name}</div> 
            <div className='text-gray-600 text-sm'>{Course.subject}</div>
            <div className='text-gray-700 mt-2'>{Course.description}</div>
            <div className="text-gray-800 font-bold mt-2">${Course.price}</div>
            <button onClick={() => handleSubmit(Course)} className='btn-96'>Add to cart</button>
            <button onClick={() => remove(Course)}>remove</button>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
}

export default Course;
