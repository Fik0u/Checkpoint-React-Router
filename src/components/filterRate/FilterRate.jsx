import React from 'react';
import { Flex, Rate } from 'antd'; //importing the Flex and Rate components from the antd library

//The FilterRate component is a filter that allows the user to filter movies by rating. It displays a star rating system that the user can use to filter movies by their rating.
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