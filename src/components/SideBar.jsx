import { Stack, Button } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction={{ xs: 'row', md: 'column' }} // Responsive direction
    sx={{
      overflowY: 'auto',
      height: { xs: 'auto', md: '95%' }, // Responsive height
      gap: 1, // Add spacing between buttons
    }}
  >
    {categories.map((category) => (
      <Button
        key={category.name}
        onClick={() => setSelectedCategory(category.name)}
        sx={{
          backgroundColor: category.name === selectedCategory ? '#FC1503' : 'transparent',
          color: category.name === selectedCategory ? 'white' : 'red',
          justifyContent: 'flex-start',
          textTransform: 'capitalize',
          padding: '10px 15px',
          borderRadius: '20px',
        }}
      >
        <span style={{ marginRight: '15px' }}>{category.icon}</span>
        <span>{category.name}</span>
      </Button>
    ))}
  </Stack>
);

export default SideBar;