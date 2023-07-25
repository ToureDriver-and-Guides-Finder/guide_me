import React, { useState } from 'react';
import '../Gig-Form/form.css';


export default function Form() {
  const [formStepsNum, setFormStepsNum] = useState(0);

  const formSteps = [
    // Define your form steps as JSX here
    // Each step should have a unique key and contain the corresponding form fields
    <div key={0} className={formStepsNum === 0 ? 'form-step form-step-active' : 'form-step'}>
      {/* Step 1 Form Fields */}
      <div className="input-group">
        <input type={"text"} name="fname" id="fname" placeholder='FirstName'/>
      </div>
      <div className="input-group">
        <input type={"text"} name="lname" id="lname" placeholder='LastName'/>
      </div>
      <div className="input-group">
        <input type={"text"} name="email" id="email" placeholder='Email'/>
      </div>
      <div className="input-group">
        <input type={"text"} name="contactNo" id="contactNo" placeholder='Contact No'/>
      </div>
      <div className="input-group">
        <div className="package">
          <select id="country">
            <option value="country">Country</option>
            {/* Add other options */}
          </select>
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="gender">Gender</label>
        <div className="gender-inputs">
          <input type="radio" name="gender" id="male" value="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female" value="female" />
          <label htmlFor="female">Female</label>
        </div>
      </div>
      <div className="input-group">
        <div className="package">
          <select id="lan">
            <option value="language">Language</option>
            {/* Add other options */}
          </select>
        </div>
      </div>
      <div className='btns-group'>
        <button onClick={() => handleNextStep()} className="btn btn-next width-50 ml-auto fbtn">Next</button>
      </div>
    </div>,
    // Define other form steps here
    // Example for Step 2
    <div key={1} className={formStepsNum === 1 ? 'form-step form-step-active' : 'form-step'}>
      {/* Step 2 Form Fields */}
      <div className="input-group">
        <div className="package">
          <select id="loc">
            <option value="location">Tick Your Location</option>
            {/* Add other options */}
          </select>
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="sdate">Start Date</label>
        <input type={"date"} name="s-date" id="s-date"/>
      </div>
      <div className="input-group">
        <label htmlFor="fdate">Finish Date</label>
        <input type={"date"} name="f-date" id="f-date"/>
      </div>
      <div className="input-group">
        <input type={"text"} name="duration" id="duration" placeholder="Duration"/>
      </div>
      <div className="input-group">
        <input type={"text"} name="no" id="no" placeholder="No of Passengers"/>
      </div>
      {/* Add your form fields */}
      <div className='btns-group'>
        <button onClick={() => handlePrevStep()} className="btn btn-prev">Previous</button>
        <button onClick={() => handleNextStep()} className="btn btn-next">Next</button>
      </div>
    </div>,
    // Add more form steps as needed
    <div key={2} className={formStepsNum === 2 ? 'form-step form-step-active' : 'form-step'}>
      {/* Step 2 Form Fields */}
      <div className="input-group">
        <label htmlFor="pay">Payment Range</label>
        <input type={"range"} name="pay" id="pay" min="100000" max="10000000"/>
      </div>
      <div className="input-group">
        <div className="package">
          <select id="vehical">
            <option value="vechical">Vehical Type</option>
            {/* Add other options */}
          </select>
        </div>
      </div>
      <div className="input-group">
        <input type={"text"} name="age-d" id="age-d" placeholder="Age"/>
      </div>
      <div className="input-group">
        <label htmlFor="gender">Gender</label>
        <div className="gender-inputs">
          <input type="radio" name="gender" id="male" value="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female" value="female" />
          <label htmlFor="female">Female</label>
        </div>
      </div>
      <div className="input-group">
        <div className="package">
          <select id="lan">
            <option value="language">Language</option>
            {/* Add other options */}
          </select>
        </div>
      </div>
      {/* Add your form fields */}
      <div className='btns-group'>
        <button onClick={() => handlePrevStep()} className="btn btn-prev">Previous</button>
        <button onClick={() => handleNextStep()} className="btn btn-next">Next</button>
      </div>
    </div>,

    <div key={3} className={formStepsNum === 3 ? 'form-step form-step-active' : 'form-step'}>
      {/* Step 2 Form Fields */}
     <div className="input-group">
        <label htmlFor="pay">Payment Range</label>
        <input type={"range"} name="pay" id="pay" min="100000" max="10000000"/>
      </div>
      <div className="input-group">
        <div className="package">
          <select id="exp">
            <option value="exp">Year Of Experience</option>
            {/* Add other options */}
          </select>
        </div>
      </div>
      <div className="input-group">
        <input type={"text"} name="age-d" id="age-d" placeholder="Age"/>
      </div>
      <div className="input-group">
        <label htmlFor="gender">Gender</label>
        <div className="gender-inputs">
          <input type="radio" name="gender" id="male" value="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female" value="female" />
          <label htmlFor="female">Female</label>
        </div>
      </div>
      {/* Add your form fields */}
      <div className='btns-group'>
        <button onClick={() => handlePrevStep()} className="btn btn-prev">Previous</button>
        <button onClick={() => handleNextStep()} className="btn btn-next">Add Gig</button>
      </div>
    </div>,
  ];

  const progressSteps = ['Info', 'Tour', 'Driver', 'Guide'];

  const handleNextStep = () => {
    setFormStepsNum((prev) => Math.min(prev + 1, formSteps.length - 1));
  };

  const handlePrevStep = () => {
    setFormStepsNum((prev) => Math.max(prev - 1, 0));
  };

  const updateProgressbar = () => {
    return `${(formStepsNum / (progressSteps.length - 1)) * 100}%`;
  };

  return (
    <main>
      <div className="formb">
        <form className="form">
          <h1 className="text-center">Plan Your Trip</h1>
          <p className='small'>
            <small className='text-center'>
              <span className='bold'>Within few clicks.</span>
            </small>
          </p>
          <div className="progressbar">
            <div className="progress" style={{ width: updateProgressbar() }}></div>
            {progressSteps.map((step, idx) => (
              <div
                key={idx}
                className={`progress-step ${idx <= formStepsNum ? 'progress-step-active' : ''}`}
                data-title={step}
              ></div>
            ))}
          </div>
          {formSteps[formStepsNum]}
        </form>
      </div>
    </main>
  );
}
