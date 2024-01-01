import React from 'react';
import { Link } from 'react-router-dom';

const LinkNav = (props) => {
	const { className, to, children } = props;
	return (
		<div>
			<ul>
				<li>
					<Link className={className} to={to}>
						{children}
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default LinkNav;
