import axios from "axios";
import React, { useState, useEffect } from "react";
import "./min.css";
import moment from "moment";
import ContentLoader from "react-content-loader";
import ScaleLoader from "react-spinners/ScaleLoader";
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";
import pic from "./sam.jpg";
import Swal from "sweetalert2";
import Loading from "./LoadState";

const url = "https://codelabintakeapi.onrender.com";
function KelechiPage() {
	const [dataUser, setDataUser] = useState([]);
	const [load, setLoad] = React.useState(true);
	const [loading, setLoading] = React.useState(false);
	const [leaderships, setLeaderships] = React.useState(0);
	const [searchValue, setSearchValue] = React.useState("");

	const mapData = async () => {
		await axios.get(`${url}/api/users`).then((res) => {
			// console.log(res?.data?.data);
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
			{loading ? <Loading /> : null}
			<br />
			<br />

			<center>
				{" "}
				<div style={{ fontWeight: "bold" }}>{dataUser.length} students</div>
			</center>
			<center>
				<input
					onChange={(e) => {
						setSearchValue(e.target.value);
					}}
					placeholder='Search for a student'
					style={{
						fontWeight: "bold",
						height: "40px",
						width: "300px",
						borderRadius: "5px",
					}}
				/>
			</center>
			<div className='admin_container'>
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

				{dataUser
					.filter((val) => {
						if (searchValue === "") {
							return val;
						} else if (
							val.name.toLowerCase().includes(searchValue.toLowerCase())
						) {
							return val;
						}
					})

					.map(
						({
							name,
							email,
							logic,
							leadership,
							leadershipToggle,
							psycho,
							avatar,
							profile,
							createdAt,
							phoneNumber,
							address,
							localgovernment,

							_id,
						}) => (
							<div className='admin_card'>
								<div className='card_holder'>
									<div className='name_img'>
										<div key={_id} className='card_img'>
											<img
												src={avatar}
												style={{
													height: "100%",
													width: "100%",
													objectFit: "cover",
													borderRadius: "50px",
													border: "1px solid #3863df",
												}}
											/>
										</div>

										<div
											style={{
												marginLeft: "20px",
												fontWeight: "bold",
												textTransform: "uppercase",
												fontSize: "14px",
											}}>
											{name}
											<div
												style={{
													fontSize: "10px",
													fontWeight: "lighter",
													textTransform: "none",
												}}>
												{moment(createdAt).fromNow()}
											</div>
											<div
												style={{
													fontSize: "12px",
													fontWeight: "bold",
													textTransform: "none",
												}}>
												<FiPhoneCall /> {phoneNumber}
											</div>
											<div style={{ display: "flex", alignItems: "center" }}>
												<div
													style={{
														fontSize: "12px",
														fontWeight: "lighter",
														textTransform: "none",
														marginRight: "10px",
													}}>
													<ImLocation2 />
													{address}
												</div>
												<div
													style={{
														fontSize: "10px",
														border: "1px solid coral",
														padding: "5px",
														borderRadius: "20px",
														color: "coral",
													}}>
													{localgovernment}
												</div>
											</div>
										</div>
									</div>

									<p>{profile}</p>
									<center>
										<h5>
											Score {name}({leadership})
										</h5>
									</center>
									<div className='box_input'>
										<div className='box'>
											<div className='name_img1'>
												<div className='card_img1'>
													<img
														src='https://shanghai-date.com/uploads/g/t/t/h/q2t34kjldqrqv0pl7ihh.png'
														style={{
															height: "100%",
															width: "100%",
															objectFit: "cover",
															borderRadius: "50px",
															objectFit: "cover",
														}}
													/>
												</div>
												<div style={{ marginLeft: "10px" }}>
													Admin Leadership
												</div>
											</div>
											<center></center>
											<input
												onChange={(e) => {
													setLeaderships(e.target.value);
												}}
												placeholder='enter your score'
												type='number'
												style={{ width: "90%" }}
											/>
											<br />
											{leadershipToggle ? (
												<button
													disabled
													style={{
														width: "100px",
														height: "35px",
														marginTop: "10px",
														background: "red",
														color: "white",
														cursor: "not-allowed",
													}}>
													Submit
												</button>
											) : (
												<button
													onClick={() => {
														toggleLoad();
														axios
															.patch(`${url}/api/editLeadership/${_id}`, {
																leadership: leaderships,
															})
															.then((res) => {
																Swal.fire({
																	title: "Successfull",
																	icon: "success",
																});
																window.location.reload();
																setLoading(false);
															});
													}}
													style={{
														width: "100px",
														height: "35px",
														marginTop: "10px",
														background: "#3863DF",
														color: "white",
														cursor: "pointer",
													}}>
													Submit
												</button>
											)}
										</div>
									</div>
									<center>
										<h5>Total Accumulated Scores </h5>
										<div style={{ fontWeight: "bold" }}>
											{parseInt(logic) +
												parseInt(leadership) +
												parseInt(psycho)}
										</div>
									</center>
								</div>
							</div>
						),
					)}
			</div>
		</>
	);
}

export default KelechiPage;
