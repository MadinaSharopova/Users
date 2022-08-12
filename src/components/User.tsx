import React from "react";
import del from '../assets/icons/Icon.svg'
import pen from '../assets/icons/Icon2.svg'
import email from '../assets/icons/Icon3.svg'
import icon3 from '../assets/icons/Icon4.svg'
import icon4 from '../assets/icons/Icon5.svg'
// import arrowUp from '../assets/icons/arrow.svg'
// import arrowDown from '../assets/icons/Arrow2.svg'
import expand from '../assets/icons/Expand.svg'


import styled from "styled-components";
import { Input } from "./Input";

export function User() {
    return (
        <StyledUser>
            <div className="card">
                <div className="main">
                    <h1>4 Users selected</h1>
                    <section>
                        <img src={del} className='icon icon-icon1' alt="img" />
                        <img src={pen} className='icon icon-icon2' alt="img" />
                        <img src={email} className='icon icon-icon3' alt="img" />
                        <img src={icon3} className='icon icon-icon4' alt="img" />
                        <img src={icon4} className='icon icon-icon5' alt="img" />
                    </section>
                </div>
            </div>
            <Input/>
            <div className="user-information">

                <div className="expand">
                    <input type="checkbox" />
                    <p>Full name</p>
                </div>
                <div className="expand">
                    <p>Date</p>
                    <span><img src={expand} alt="" /></span>
                </div>
                <div className="expand">
                    <p>Tel nomer</p>
                    <span><img src={expand} alt="" /></span>
                </div>
                <div className="expand">
                    <p>Soha</p>
                    <span><img src={expand} alt="" /></span>
                </div>
                <div className="expand">
                    <p>Brand</p>
                    <span><img src={expand} alt="" /></span>
                </div>
                <div className="expand">
                    <p>Xodimlar soni</p>
                    <span><img src={expand} alt="" /></span>
                </div>
                <div className="expand">
                    <p>Lavozimi</p>
                    <span><img src={expand} alt="" /></span>
                </div>

            </div>
            <footer className="card">
                <div className="expand">
                    <input type="checkbox" />
                    <p>Adison Rhiel Madsen</p>
                </div>
                <p>5001929442</p>
                <p>5001929442</p>
                <p>5001929442</p>
                <p>5001929442</p>
                <p>5001929442</p>
                <div className="banned">
                    banned
                </div>

            </footer>

        </StyledUser>
    )
}

const StyledUser = styled.div`
background: #FFFFFF;
box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
border-radius: 0 0 16px 16px;
margin: 0 38px;

h1{
    font-weight: 600;
    font-size: 14px;
    color: #8992A9;
}
    .main{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    section{
        display: flex;
        flex-direction: row;
        gap: 30px;
    }
  p{
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #8992A9;
  }
  .user-information{
     display: flex;
     justify-content: space-between;
     /* gap: 100px; */
     background: #FAFAFB;
     padding: 15px 18px;
 
  }
  .expand{
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
  }
  footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius:0 0 16px 16px ;

    .banned{
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        color: #FF3B3B;
        width: 60px;
        height: 20px;
        background: rgba(255, 59, 59, 0.14);
        border-radius: 6px;
        text-align: center;
        padding: 4px;
    }
    
}

`
