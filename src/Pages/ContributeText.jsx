import React, { useState } from 'react'
import UploadIcon from '../assets/icons/send-square.svg'
import { useAuth } from '../provider/authProvider';

const ContributeText = () => {
  const { token } = useAuth();
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [inputText, setInputText] = useState("");

  const handleInputText = (event) => {
    setInputText(event.target.value);
  }

  const handleSubmit = async () => {
    //alert(inputText);
    if(token && token !== "initial") {
      if(inputText !== "") {
        setStatus("pending");
        try {
          await axios.post('https://signs-5n09.onrender.com/text', {
            text: inputText
          })
          .then(res => {
            if(res.data.status === true) {
              setStatus("success");
              setMessage(res.data.message);
              alert(res.data.message);
              setInputText("");
            } else if(res.data.status === false) {
              setStatus("failed");
              setMessage(res.data.message);
              alert(res.data.message);
            }
          })
        } catch (err) {
          console.log(err);
          setMessage("Something went wrong, pls try again");
          alert("Something went wrong, pls try again");
        }
      } else {
        alert("Enter text!")
      }
    } else {
      alert("Login to contribute!");
    }
  }

  return (
    <div className='flex flex-col justify-center items-center gap-[var(--custom-gap)] bg-[var(--tertiary-background)] w-[100%] max-w-[100vw] py-[3rem] px-[1.5rem] sm:p-[var(--custom-padding)] md:h-[calc(100vh-97.19px)]'>
      <div className='flex flex-col text-center'>
        <h1 className='font-bold text-[2rem]'>Contribute Text</h1>
        <p className='text-[1rem] text-[var(--input-color)]'>Type in the text translation for the given video</p>
      </div>
      <div className='flex flex-col items-center gap-[2.5rem] w-[100%]'>
        <div className='flex flex-col gap-[var(--custom-gap)] w-[100%] md:w-[50%]'>
          <div className='flex flex-col items-center justify-center p-[var(--button-padding)] bg-[var(--white-background)] h-[50vh] w-[100%] sm:w-[100%]'>
            <textarea onChange={(event) => handleInputText(event)} value={inputText} className='text-center align-middle outline-none text-[2rem] text-[var(--input-color)] font-semibold text-wrap w-[100%] h-auto' placeholder='Enter text here...'></textarea>
          </div>
          <div className='flex flex-row justify-around'>
            <button onClick={handleSubmit} className='text-[1rem] bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)]'>Upload<img className='h-[var(vh-icon)]' src={UploadIcon} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContributeText
