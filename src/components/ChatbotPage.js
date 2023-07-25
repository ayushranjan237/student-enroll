// ChatbotPage.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setName, setAge } from "../redux/actions";



const ChatbotPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGotItClick = () => {
    // Save name and age to Redux store
    dispatch(setName(name));
    dispatch(setAge(age));
  };

  // Implement the chatbot behavior using the react-chatbot-kit library

  return (
    <div>
     
      {/* Chatbot content here */}
      {/* Display Name and Age input fields */}
      <label>Enter your Name</label>
      <input type="text" value={name} onChange={handleNameChange} />

      <label>Enter your Age</label>
      <select value={age} onChange={handleAgeChange}>
        <option value="">Select your age</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
        <option value="33">33</option>
        <option value="34">34</option>
        <option value="35">35</option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40">40</option>
      </select>

      <button onClick={handleGotItClick}>Got it!</button>

      <Link to="/confirmation">
        <button>Next</button>
      </Link>
    </div>
  );
};

export default ChatbotPage;
