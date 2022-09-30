import './Footer.css';

export const Footer = () => {
	return (
		<div className="main-footer">
			<div className="container">
				<div className="row">
					<p className="col-sm">
						&copy;{new Date().getFullYear()}{' '}
						<span>
							Designed by{' '}
							<a
								target="_blank"
								href="https://www.linkedin.com/in/jean-cairoli-a94a6622a/"
								rel="noreferrer"
							>
								Jean Cairoli
							</a>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
