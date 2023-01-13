import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../Components/Assets/Blacl_logo.png";
import img2 from "../Components/Assets/1.svg";
import { GrStatusGood } from "react-icons/gr";
import axios from "axios";
import Loading from "./LoadState";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserData } from "./Global/GlobalState";

const url = "https://codelabintakeapi.onrender.com";
const EntryUserPage = () => {
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("");
	const navigate = useNavigate();
	const [Users, setUser] = useRecoilState(UserData);
	const user = useRecoilValue(UserData);

	console.log("recoil user", user);

	const CheckUserRegister = async () => {
		setLoading(true);
		await axios
			.post(`${url}/api/login`, { name })
			.then((res) => {
				console.log(res?.data?.data);
				setLoading(false);
				setUser(res.data?.data);

				navigate(
					"/student-iq-test-457erhfbdr46364783-codelab-intake-578349ffdnbghg-question",
				);
			})
			.catch((res) => {
				setLoading(false);
				Swal.fire({
					title: res?.response?.data?.message,
					icon: "error",
				});
				console.log(res);
			});
	};

	return (
		<div>
			{loading ? <Loading /> : null}
			<Container>
				<Wrapper>
					<First>
						<LogoHold>
							<Logo src={img1} />
						</LogoHold>
						<SignUpHold>
							<h1>Start Test</h1>
							<p>
								By Clicking the Start test Button we believe you have read the
								test instruction and your clear with it.
							</p>
							<Input
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
								placeholder='Enter Your Registration name'
								type='text'
							/>
							{name !== "" ? (
								<Button
									style={{ cursor: "pointer" }}
									onClick={CheckUserRegister}>
									{" "}
									Start Test
								</Button>
							) : (
								<Button
									style={{ backgroundColor: "silver", cursor: "not-allowed" }}>
									Start Test
								</Button>
							)}
						</SignUpHold>
					</First>
					<Second>
						<IconHold>
							<Icon src={img2} />
						</IconHold>
						<Desc>
							<h2> Test Instructions</h2>
							<ul>
								<li>
									{" "}
									<Gicon style={{ color: "green" }}>
										<GrStatusGood />
									</Gicon>{" "}
									Answer all 10 questions given .
								</li>
								<li>
									{" "}
									<Gicon>
										<GrStatusGood />
									</Gicon>{" "}
									Click Submit after you are done.
								</li>
								<li>
									{" "}
									<Gicon>
										<GrStatusGood color='#fff' />
									</Gicon>{" "}
									Make sure you Submit before the time Elapsed.
								</li>
							</ul>
						</Desc>
					</Second>
				</Wrapper>
			</Container>
		</div>
	);
};

export default EntryUserPage;

const Gicon = styled.div`
	color: green;
	margin-right: 7px;
	/* font-size: 30px; */
`;

const Desc = styled.div`
	li {
		display: flex;
		list-style: none;
		margin-bottom: 10px;
		margin-right: 13px;
	}

	h2 {
		font-weight: 400;
		font-size: 20px;
		margin-bottom: 10px;
		margin-top: 20px;
	}

	p {
		margin-top: 0px;
	}

	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Icon = styled.img`
	height: 100%;
	width: 100%;
`;

const IconHold = styled.div`
	height: 100px;
	width: 100px;
`;

const Button = styled.button`
	width: 600px;
	height: 50px;
	margin-bottom: 20px;
	border: none;
	outline: none;
	border-radius: 5px;
	background-color: #7463f3;
	color: white;
	@media screen and (max-width: 960px) {
		width: 300px;
	}
`;

const Input = styled.input`
	width: 600px;
	height: 50px;
	margin-bottom: 20px;
	border: 1px solid silver;
	outline: 0px;
	border-radius: 5px;
	padding-left: 20px;

	@media screen and (max-width: 960px) {
		width: 300px;
	}
`;

const SignUpHold = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	height: 400px;
	flex-direction: column;
	padding-bottom: 70px;
	/* background-color: red; */

	h1 {
		font-weight: 500;
		margin: 0;
	}

	p {
		margin-left: 13px;
		margin-right: 13px;
		width: 600px;
		@media screen and (max-width: 960px) {
			width: 300px;
		}
	}

	span {
		color: blue;
		text-decoration: underline;
	}
`;

const LogoHold = styled.div`
	width: 130px;
	height: 70px;
	margin-left: 30px;
`;

const Logo = styled.img`
	object-fit: contain;
	height: 100%;
	width: 100%;
`;

const Second = styled.div`
	width: 30%;
	height: 500px;
	background-color: white;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const First = styled.div`
	width: 70%;
	height: 500px;
	display: flex;
	flex-direction: column;
	/* background-color: white; */
`;

const Wrapper = styled.div`
	width: 90%;
	margin: 100px 0px 0px 0px;
	border-radius: 13px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 1px 1px 10px 1px rgba(218, 218, 218, 0.9);
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color: white; */
`;
