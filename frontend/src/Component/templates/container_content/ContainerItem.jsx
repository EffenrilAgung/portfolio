import React, { useState } from 'react';
import ContainerItems from '../../fragments/container_item';
import Snow from '../../fragments/snow';

const ContainerItem = (props) => {
	const { children, className, snow = true, bottom, right, top, left } = props;

	const [isSnow, setIsSnow] = useState(snow);

	return (
		<>
			<ContainerItems className={className}>
				{children}
				{isSnow ? (
					<Snow className={`${bottom} ${right} ${top} ${left}`} />
				) : null}
			</ContainerItems>
		</>
	);
};

export default ContainerItem;
