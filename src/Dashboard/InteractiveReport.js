import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
const IframeCustomized = styled.div`
  justify-self: center;
  background-color: white;
`;
function Test (){
		return <div>
			<div>Interactive Report</div>
			<IframeCustomized> 
			<iframe src="https://baonhi3008.github.io/DART-testing/" width="1570" height ="1300" />;
			</IframeCustomized>
			
		</div>
	
}
export default Test;