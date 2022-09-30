import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Header.css';

const Header = () => {
	return (
		<Box className="header">
			<Box className="social-icons">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/Jean-Cairoli/Puppies-App"
					className="redirect"
				>
					<GitHubIcon fontSize="large" />
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/feed/"
					className="redirect"
				>
					<LinkedInIcon fontSize="large" />
				</a>
			</Box>

			<Typography variant="h5" className="name">
				Jean Cairoli
			</Typography>
		</Box>
	);
};

export default Header;
