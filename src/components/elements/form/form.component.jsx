import React, {useState} from 'react';
const Form = () => {
    const [inputs, setInputs] = useState({});

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return (
        <form className="py-10 bg-black-default">
            <div className="flex flex-wrap px-4 md:px-5">
                <div className="w-full md:w-1/2 px-2 md:px-3 mb-4 md:mb-6">
                    <input onChange={handleInputChange} value={inputs.name} className="w-full bg-white-0 px-4 py-3 outline-none" type="text" name="name" placeholder="name" />
                </div>
                <div className="w-full md:w-1/2 px-2 md:px-3 mb-4 md:mb-6">
                    <input onChange={handleInputChange} value={inputs.email} className="w-full bg-white-0 px-4 py-3 outline-none" type="emal" name="emal" placeholder="emal" />
                </div>
                <div className="w-full md:w-1/2 px-2 md:px-3 mb-4 md:mb-6">
                    <input onChange={handleInputChange} value={inputs.subject} className="w-full bg-white-0 px-4 py-3 outline-none" type="text" name="subject" placeholder="subject" />
                </div>
                <div className="w-full md:w-1/2 px-2 md:px-3 mb-4 md:mb-6">
                    <input onChange={handleInputChange} value={inputs.phone} className="w-full bg-white-0 px-4 py-3 outline-none" type="tel" name="phone" placeholder="phone" />
                </div>
                <div className="w-full px-2 md:px-3 mb-4 md:mb-6">
                    <textarea onChange={handleInputChange} value={inputs.message} className="w-full bg-white-0 px-4 py-3 outline-none" type="text" name="message" rows="8" placeholder="additional information" />
                </div>
            </div>
            <button className="mx-6 md:mx-8 duration-300 transform hover:-translate-y-2 text-center bg-gradient-to-b from-primary-light to-primary-dark heading-font font-black text-center px-6 py-2 text-lg text-white-0 inline-block">
                Submit
            </button>
        </form>
    )
}

export default Form