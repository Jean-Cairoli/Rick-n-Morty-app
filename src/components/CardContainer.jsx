import {
	Grid,
	Typography,
	CardContent,
	CardMedia,
	Card,
	CardActionArea,
	CardHeader,
	Alert,
} from '@mui/material';

const CardContainer = ({ data }) => {
	return (
		<Grid
			spacing={0}
			container
			direction="row"
			justifyContent="center"
			alignItems="center"
		>
			{data ? (
				data.map(({ id, name, status, image, species }) => {
					return (
						<Grid
							item
							xs={4}
							key={id}
							padding="10px"
							display="flex"
							justifyContent="center"
						>
							<Card sx={{ maxWidth: 250, height: 375 }}>
								<CardHeader title={name} data-testid="dog-card" />

								<CardActionArea>
									<CardMedia
										component="img"
										image={image}
										height="230px"
										alt={name}
									/>

									<CardContent>
										<Typography variant="body2" color="text.secondary">
											Status: {status}
										</Typography>
										<br />
										<Typography variant="body2" color="text.secondary">
											Species: {species}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					);
				})
			) : (
				<Alert severity="info">Not Character found please try agian</Alert>
			)}
		</Grid>
	);
};

export default CardContainer;
