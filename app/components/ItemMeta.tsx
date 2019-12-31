import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/helpers';
import { ThemeConsumer } from '../contexts/theme';

interface ItemMetaProps {
	by: string;
	time: number;
	id: number;
	descendants?: number;
}

export default function PostMetaInfo({
	by,
	time,
	id,
	descendants,
}: ItemMetaProps): JSX.Element {
	return (
		<ThemeConsumer>
			{({ theme }: AppState): JSX.Element => (
				<div className={`meta-info-${theme}`}>
					<span>
						by <Link to={`/user?id=${by}`}>{by}</Link>
					</span>
					<span>on {formatDate(time)}</span>
					{typeof descendants === 'number' && (
						<span>
							with{' '}
							<Link to={`/post?id=${id}`}>{descendants}</Link>{' '}
							comments
						</span>
					)}
				</div>
			)}
		</ThemeConsumer>
	);
}
