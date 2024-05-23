import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addForm } from '../CreactSlice/formSlice';
import { useNavigate } from 'react-router-dom';
function Teach() {
  const [video, setVideo] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [subject , setSubject] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addForm({ name, description, video, price ,subject }));
    navigate('/course')
  };

  const handelvideoChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setVideo(url);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-44">
        <h1 className='text-center mb-10 text-6xl text-white'>Upload Course</h1>

        <input
          type="text"
          required
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-full text-black"
        />
        <input
          type="text"
          required
          placeholder="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-full text-black"
        />
        <textarea
          required
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-full resize-none text-black"
          rows="4"
        ></textarea>
        <input
          required
          type='text'
          placeholder='Price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-gray-400 rounded-md px-4 py-2 mb-4 w-full text-black"
        />

        <input
          required
          type="file"
          id="video-upload"
          onChange={handelvideoChange}
          className="mb-4"
        />

        <button type="submit" className="bg-blue-500  font-bold py-1 px-4 rounded text-black">
          Submit
        </button>
      </form>
    </>
  );
}

export default Teach;
