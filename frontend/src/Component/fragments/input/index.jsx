import React, { useState } from 'react';

const index = (props) => {
	const {
		type = 'input',
		placeholder,
		onChange,
		value,
		children,
		label = false,
		className,
		labelClassName,
		cols = '30',
		rows = '10',
		name,
		textarea = false,
		textareaClassName,
	} = props;
	return (
		<React.Fragment>
			{label ? <label className={labelClassName}>{children}</label> : null}
			{textarea ? (
				<textarea
					className={textareaClassName}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					name={name}
					cols={cols}
					rows={rows}
				></textarea>
			) : (
				<input
					type={type}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					className={className}
				/>
			)}
		</React.Fragment>
	);
};

export default index;
