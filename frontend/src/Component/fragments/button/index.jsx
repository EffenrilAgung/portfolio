import React from 'react';

const Button = (props) => {
	const { to, className, children } = props;
	return (
		<div className={className} to={to}>
			{children}
		</div>
	);
};

export default Button;
