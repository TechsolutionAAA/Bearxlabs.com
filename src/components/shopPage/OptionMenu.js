import React from 'react';
import { Container } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa";

const OptionMenu = () => {
  return (
    <div>
        <Container>
            <div className="shop__option">
                <div className="shop__item">
                    <div className="option__btn">
                        <FaPlus className='icons__size'/>
                    </div>
                    <div className="option__btn">
                        <select id="item" className='select__design'>
                            <option value="item">item</option>
                            <option value="item">item</option>
                            <option value="item">item</option>
                            <option value="item">item</option>
                        </select>
                    </div>
                    <div className="option__btn"  >
                        <select id="item" className='select__design'>
                            <option>rarity</option>
                            <option value="rarity">rarity</option>
                            <option value="rarity">rarity</option>
                            <option value="rarity">rarity</option>
                            <option value="rarity">rarity</option>
                        </select>
                    </div>
                </div>
                <div className="shop__item">
                    
                    <div className="option__btn">
                        <select id="item" className='select__design'>
                            <option value="lowest price">lowest price</option>
                            <option value="lowest price">lowest price</option>
                            <option value="lowest price">lowest price</option>
                            
                        </select>
                    </div>
                    <div className="option__btn">
                        <select id="item" className='select__design'>
                            <option value="characters">characters</option>
                        </select>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default OptionMenu