import React from 'react';
import { Flex, Rate } from 'antd';


const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const FilterRate = ({searchRate, setSearchRate, isRating, rate} ) => {


  return (
    <Flex gap="middle" vertical style = {{margin: '2%'}}>
    {isRating ?
        <Rate tooltips = {desc} onChange = {setSearchRate} value = {searchRate} />
      : <Rate disabled value = {rate} />}
    </Flex>
  );
};
export default FilterRate;