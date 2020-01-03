import * as React from 'react';
import * as PropTypes from 'prop-types';
import { HNItem as propTypesHNItem } from '../globals.PropTypes';
import ItemMeta from './ItemMeta';

interface CommentProps {
	comment: HNItem;
	depth: number;
	toggleCollapse: () => void;
	collapsed: boolean;
}

const Comment: React.FC<CommentProps> = ({
	comment,
	depth,
	toggleCollapse,
	collapsed,
}: CommentProps): JSX.Element => {
	const { id, by, time, text } = comment;

	return (
		<div style={{ marginLeft: 40 * depth }} className="comment">
			<a className="toggleCollapse" href="#" onClick={toggleCollapse}>
				[{collapsed === true ? '+' : '-'}]
			</a>
			{collapsed !== true && (
				<React.Fragment>
					<ItemMeta by={by} time={time} id={id} />
					<p
						dangerouslySetInnerHTML={{
							__html: text,
						}}
					/>
				</React.Fragment>
			)}
		</div>
	);
};

Comment.propTypes = {
	comment: propTypesHNItem.isRequired,
	depth: PropTypes.number.isRequired,
	toggleCollapse: PropTypes.func.isRequired,
	collapsed: PropTypes.bool.isRequired,
};

export default Comment;
