import React, { FC, useState } from 'react';
import { Button } from '../common/buttons/base/Button';
import { Section } from '../common/Section';
import { TextInput } from '../forms/base/FormComponents';

type SearchProps = {
	handleSearch: (searchTerm?: string) => void;
};
/**
 * Render Search component.
 */
export const Search: FC<SearchProps> = ({ handleSearch }) => {
	const [searchTerm, setSearchTerm] = useState<string | undefined>();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);
	return (
		<Section padding={0}>
			<TextInput placeholder="Search Fliks" onChange={handleChange} />
			<Button type="submit" onClick={() => handleSearch(searchTerm)}>
				Search
			</Button>
		</Section>
	);
};
