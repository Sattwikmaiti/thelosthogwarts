import React, { useState, useEffect } from 'react';
import AnimatedCursor from "react-animated-cursor"
const Cursor = () => {
 


  return (
  <AnimatedCursor
    innerSize={8}
    outerSize={35}
    innerScale={2}
    outerScale={2}
    outerAlpha={0}
    hasBlendMode={true}
    clickables={[
      '.di1',
     
    ]}
    innerStyle={{
      backgroundColor: 'white'
    }}
    outerStyle={{
      border: '3px solid white'
    }}
  />
  
  );
};

export default Cursor;