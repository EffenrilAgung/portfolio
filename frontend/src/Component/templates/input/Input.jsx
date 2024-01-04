import React from 'react';
import ComponentInput from '../../fragments/input';

const Input = (props) => {
	const {
		placeholder,
		onChange,
		value,
		label = false,
		labelClassName,
		children,
		className = 'bg-[#707070] bg-opacity-25 w-full mt-5 h-10 rounded-lg text-white px-1',
		cols = '30',
		rows = '10',
		name,
		textarea,
		textareaClassName = 'bg-[#707070] bg-opacity-25 w-full mt-5 rounded-lg text-white px-1',
	} = props;
	return (
		<div>
			<ComponentInput
				className={className}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				label={label}
				labelClassName={labelClassName}
				name={name}
				cols={cols}
				rows={rows}
				textarea={textarea}
				textareaClassName={textareaClassName}
			>
				{children}
			</ComponentInput>
		</div>
	);
};

export default Input;
