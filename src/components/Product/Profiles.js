import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Profiles = () => {

  const [profile, setProfile] = useState('profile1')

  const handleNav = (name) =>{

    setProfile(name)
  }

 
  
  
  return (
    <Container>
      <h2>Our different profiles and features</h2>
      <nav>
          <ul className="noselect">
            <li onClick={() =>{handleNav('profile1')}} className={profile === 'profile1' ? 'active' : ''}>profile1</li>
            <li  onClick={() =>{handleNav('profile2')}} className={profile === 'profile2' ? 'active' : ''}>profile2</li>
            <li onClick={() =>{handleNav('profile3')}} className={profile === 'profile3' ? 'active' : ''}>profile3</li>
          </ul>
        </nav>
      <div className="wrapper">
        {profile === 'profile1' && <>hello</>}
        {profile === 'profile2' && <>hi</>}
        {profile === 'profile3' && <>yo</>}
        
      </div>
    </Container>
  );
};

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-bottom: 100px;

ul{
  display: flex;
  margin: 20px 0;

  li{
    transition: 500ms;
    padding:15px 30px;
    border-radius: 10px;
    margin: 0 20px;
    cursor: pointer;

    &.active {
        background-color:#95cfe8; 
        
      }
  }
}

.wrapper{
  height: 500px;
  border: 1px solid black;
  border-radius: 30px;
}
`;

export default Profiles;
