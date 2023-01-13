import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import "./reg.css";

const url = "https://codelabintakeapi.onrender.com";

export const ViewStudents = () => {
	const [dataUser, setDataUser] = useState([]);
	const [load, setLoad] = React.useState(true);
	const [loading, setLoading] = React.useState(false);

	const mapData = async () => {
		await axios.get(`${url}/api/users`).then((res) => {
			console.log("ghfdsfdgrftgyuik", res?.data?.data);
			setDataUser(res.data?.data);
			setLoad(false);
		});
	};

	const toggleLoad = () => {
		setLoading(true);
	};

	React.useEffect(() => {
		mapData();
	}, []);

	return (
		<>
			<br />
			<br />

			<div>
				{" "}
				<div
					style={{
						fontWeight: "bold",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					{" "}
					{dataUser.length} Students
				</div>
			</div>

			{load ? (
				<div>
					<ContentLoader viewBox='0 0 500 420' height={420} width={500}>
						<rect x='16' y='17' rx='0' ry='0' width='360' height='200' />
						<circle cx='35' cy='248' r='20' />
						<rect x='69' y='229' rx='2' ry='2' width='275' height='15' />
						<rect x='69' y='253' rx='2' ry='2' width='140' height='15' />
					</ContentLoader>
					<ContentLoader viewBox='0 0 500 420' height={420} width={500}>
						<rect x='16' y='17' rx='0' ry='0' width='360' height='200' />
						<circle cx='35' cy='248' r='20' />
						<rect x='69' y='229' rx='2' ry='2' width='275' height='15' />
						<rect x='69' y='253' rx='2' ry='2' width='140' height='15' />
					</ContentLoader>
					<ContentLoader viewBox='0 0 500 420' height={420} width={500}>
						<rect x='16' y='17' rx='0' ry='0' width='360' height='200' />
						<circle cx='35' cy='248' r='20' />
						<rect x='69' y='229' rx='2' ry='2' width='275' height='15' />
						<rect x='69' y='253' rx='2' ry='2' width='140' height='15' />
					</ContentLoader>
					<ContentLoader viewBox='0 0 500 420' height={420} width={500}>
						<rect x='16' y='17' rx='0' ry='0' width='360' height='200' />
						<circle cx='35' cy='248' r='20' />
						<rect x='69' y='229' rx='2' ry='2' width='275' height='15' />
						<rect x='69' y='253' rx='2' ry='2' width='140' height='15' />
					</ContentLoader>
					<ContentLoader viewBox='0 0 500 420' height={420} width={500}>
						<rect x='16' y='17' rx='0' ry='0' width='360' height='200' />
						<circle cx='35' cy='248' r='20' />
						<rect x='69' y='229' rx='2' ry='2' width='275' height='15' />
						<rect x='69' y='253' rx='2' ry='2' width='140' height='15' />
					</ContentLoader>
					<ContentLoader viewBox='0 0 500 420' height={420} width={500}>
						<rect x='16' y='17' rx='0' ry='0' width='360' height='200' />
						<circle cx='35' cy='248' r='20' />
						<rect x='69' y='229' rx='2' ry='2' width='275' height='15' />
						<rect x='69' y='253' rx='2' ry='2' width='140' height='15' />
					</ContentLoader>
					<ContentLoader viewBox='0 0 500 420' height={420} width={500}>
						<rect x='16' y='17' rx='0' ry='0' width='360' height='200' />
						<circle cx='35' cy='248' r='20' />
						<rect x='69' y='229' rx='2' ry='2' width='275' height='15' />
						<rect x='69' y='253' rx='2' ry='2' width='140' height='15' />
					</ContentLoader>
					<ContentLoader viewBox='0 0 500 420' height={420} width={500}>
						<rect x='16' y='17' rx='0' ry='0' width='360' height='200' />
						<circle cx='35' cy='248' r='20' />
						<rect x='69' y='229' rx='2' ry='2' width='275' height='15' />
						<rect x='69' y='253' rx='2' ry='2' width='140' height='15' />
					</ContentLoader>
					<ContentLoader viewBox='0 0 500 420' height={420} width={500}>
						<rect x='16' y='17' rx='0' ry='0' width='360' height='200' />
						<circle cx='35' cy='248' r='20' />
						<rect x='69' y='229' rx='2' ry='2' width='275' height='15' />
						<rect x='69' y='253' rx='2' ry='2' width='140' height='15' />
					</ContentLoader>
					<ContentLoader viewBox='0 0 500 420' height={420} width={500}>
						<rect x='16' y='17' rx='0' ry='0' width='360' height='200' />
						<circle cx='35' cy='248' r='20' />
						<rect x='69' y='229' rx='2' ry='2' width='275' height='15' />
						<rect x='69' y='253' rx='2' ry='2' width='140' height='15' />
					</ContentLoader>
					<ContentLoader viewBox='0 0 500 420' height={420} width={500}>
						<rect x='16' y='17' rx='0' ry='0' width='360' height='200' />
						<circle cx='35' cy='248' r='20' />
						<rect x='69' y='229' rx='2' ry='2' width='275' height='15' />
						<rect x='69' y='253' rx='2' ry='2' width='140' height='15' />
					</ContentLoader>
				</div>
			) : null}
			<div className='View_Container'>
				{dataUser?.map((props) => (
					<div className='View_ContainerWrapper'>
						{props?.psychoToggle ? (
							<button
								style={{
									background: "#3863df",
									color: "white",
									borderRadius: "10px",
									margin: "10px",
									width: "150px",
									height: "40px",
								}}>
								Interviewed
							</button>
						) : (
							<button
								style={{
									background: "red",
									color: "white",
									borderRadius: "10px",
									margin: "10px",
									width: "150px",
									height: "40px",
								}}
								type='primary'
								className='Activate_Container'>
								Not Interviewed
							</button>
						)}

						<div className='Profile_Holder'>
							<div className='Image_Pix'>
								<img
									src={props.avatar}
									alt='profile'
									style={{
										height: "100%",
										width: "100%",
										borderRadius: "50px",
										objectFit: "cover",
									}}
								/>
							</div>
							<div className='Name_Holder'>
								<div>{props.name}</div>

								<div>{moment(props.createdAt).fromNow()}</div>
								<div
									style={{
										fontWeight: "bold",
										color: "black",
										fontSize: "12px",
									}}>
									Interview Code({props.code})
								</div>
							</div>
						</div>

						<img
							src={props.avatar}
							style={{
								width: "100%",
								height: "150px",
								backgroundColor: "gray",
								objectFit: "cover",
							}}
						/>
						<div className='Interest_Container'>
							<b>{props.profile} </b>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
