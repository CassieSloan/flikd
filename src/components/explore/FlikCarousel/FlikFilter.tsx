import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '@/components/common/buttons/base/Button';
import { primary700, secondary700 } from '@/design/colors/colors';
import Plus from '@/images/icons/plus.svg';
import { SearchedFliks } from '@/types/fliks/fliks';

type FlikFilterProps = {
	searchResults?: SearchedFliks;
};

const Container = styled.div`
	button {
		&:hover {
			.plus-icon.primary {
				path {
					fill: white;
				}
			}
			.plus-icon.secondary {
				path {
					fill: white;
				}
			}
		}
		.plus-icon {
			&.primary {
				path {
					fill: ${primary700};
				}
			}
			&.secondary {
				path {
					fill: ${secondary700};
				}
			}
		}
	}
`;
/**
 * Render FlikFilter FlikFilter.
 */
export const FlikFilter: FC<FlikFilterProps> = ({ searchResults }) => {
	return (
		<Container>
			<Button theme="primary" shape="outlined" icon={<Plus className="plus-icon primary" />}>
				Tv
			</Button>
			<Button theme="secondary" shape="outlined" icon={<Plus className="plus-icon secondary" />}>
				Movies
			</Button>
		</Container>
	);
};
