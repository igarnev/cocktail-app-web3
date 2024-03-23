import { useState } from 'react';

import { Box, TextField, Button } from '@mui/material';

interface SearchBarProps {
  searchString: string;
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ searchString, onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState(searchString === 'a' ? '' : searchString);

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box onSubmit={handleSearch} sx={{ display: 'flex', justifyContent: 'center', p: 2, paddingBottom: 0 }}>
      <TextField
        variant="outlined"
        placeholder="Search for cocktail..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        sx={{
          width: '100%',
          maxWidth: '500px',
          '& .MuiOutlinedInput-root': {
            height: '45px',
          },
        }}
      />
      <Button sx={{ backgroundColor: '#2e70df' }} variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
