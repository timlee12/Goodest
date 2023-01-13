import React, { useRef } from "react";
import { useEffect } from "react";

const AddDetails = (props) => {
  const animalInput = useRef(null);
  const descInput = useRef(null);
  const picInput = useRef(null);

  const { user } = props;
  
  useEffect(() => console.log('user in add details is: ', user))

  // const updateDetails = () => {
  //   fetch('http://localhost:3000/user/details', {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       username: user.username,
  //       animalType: animalInput.current.value,
  //       description: descInput.current.value,
  //       profilePic: picInput.current.value
  //     })
  //   })
  //     .then(data => data.json())
  //     .then(data => {
  //       console.log('data received', data)
  //     })
  //     .catch(err => console.log(err))
  // };

  return (
    <div className="detailsForm">
      <div id='details-header'>Add Details</div>
      <form id='details-field'>
        <div id='inputs'>
          What kind of animal are you?
          <select ref={animalInput} name="animalList" id='animalList'>
            <option value='cat'>Cat</option>
            <option value='dog'>Dog</option>
            <option value='other'>Other</option>
          </select>
        </div>
        <div id='inputs'>
          <p>Tell us about yourself:</p>
          <textarea ref={descInput} name='aboutMe' id='desc-field' cols='50' rows ='10'/>
        </div>
        <div id='inputs'>
          <p>Upload a profile picture:</p>
          <input ref={picInput} type="file" id='pic-input'/>
        </div>
      </form>
      <div id='submit-details'>
        <button id='account-button' onClick={updateDetails}>Submit</button>
      </div>
    </div>
  )
};

export default AddDetails;