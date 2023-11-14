import CountdownCardStyled from "./CountdownCardStyled";
import { FC } from 'react';

const CountdownCard: FC<{ displayedNumber: number, nextNumber?: number, increment?: boolean }> = ({ displayedNumber, nextNumber, increment }) => {

    let next;
    let current = displayedNumber;
    
    if (nextNumber) next = nextNumber;
    else if (increment) {
        current = displayedNumber === 0 ? 9 : displayedNumber - 1;
        next = displayedNumber;
    }
    else {
        current = (displayedNumber + 1) % 10;
        next = displayedNumber;
    }

    return (<CountdownCardStyled>
        <li className="before">
            <div className="container">
                <div className="up">
                    <div className="shadow"></div>
                    <span>{next}</span>
                </div>
                <div className="down">
                    <div className="shadow"></div>
                    <span>{current}</span>
                </div>
            </div>
        </li>
        <li className="after">
            <div className="container">
                <div className="up">
                    <div className="shadow"></div>
                    <span>{current}</span>
                </div>
                <div className="down">
                    <div className="shadow"></div>
                    <span>{next}</span>
                </div>
            </div>
        </li>
    </CountdownCardStyled>)
}

export default CountdownCard;
