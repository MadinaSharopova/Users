import React from "react";
import styled from "styled-components";
import del from '../assets/icons/Icon.svg'

export function Ticket() {
    return (
        <StyledTicket>
            <div className="container">
                <div className="ticket">
                    <p>4 Tickets selected</p>
                    <img src={del} alt="img" />
                </div>
            </div>

        </StyledTicket>
    )
}
const StyledTicket = styled.div`

    .ticket{
      border: solid 1px red;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 18px;
    }
`