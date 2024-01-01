/* eslint-disable react/prop-types */
import React from 'react';

const ContainerItems = (props) => {
	const { children, className, width = "w-full"  } = props;
	return (
		<React.Fragment>
			<div
				className={`bg-gradient-to-r ${width} from-[#202020] from-0% [#1A1A1A] via-47.14% to-[#1E1E1E] to-100% rounded-[20px] ${className}`}
			>
				{children}
			</div>
		</React.Fragment>
	);
};

export default ContainerItems;
