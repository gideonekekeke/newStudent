import React, { useState } from "react";
import styled from "styled-components";
import left from "./left.png";
import right from "./Right.png";

import Swal from "sweetalert2";
import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillLinkedin,
	AiFillGoogleCircle,
} from "react-icons/ai";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { SiFirebase } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import pic1 from "./Assets/ab1.svg";
import pic2 from "./Assets/ab2.svg";

import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";

import Loading from "./LoadState";

const url = "https://codelabintakeapi.onrender.com";

const StudentRegistration = () => {
	const navigate = useNavigate();
	const [myChecked, setMyChacked] = useState(false);
	const [loading, setLoading] = useState(false);
	const [image, setImage] = React.useState();
	const [avatar, setAvatar] = React.useState("");

	const yupSchema = yup.object().shape({
		name: yup.string().required("Please enter your Full Name!"),
		address: yup.string().required("Please enter your house Address!"),
		email: yup.string().email().required("Please enter your desired email!"),
		phoneNumber: yup.string().required("Please enter your phoneNumber!"),
		profile: yup.string().required("Please enter a profile about you!"),
		localgovernment: yup.string().required("Please select your local government!"),
	});

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({ resolver: yupResolver(yupSchema) });

	const handleImageOnChange = (e) => {
		const file = e.target.files[0];
		const fileRef = URL.createObjectURL(file);
		setImage(fileRef);
		console.log(file);
		setAvatar(file);
	};

	const onSubmit = handleSubmit(async (value) => {
		const { name, email, address, phoneNumber, profile, localgovernment } =
			value;
		if (!avatar) {
			Swal.fire({
				title: "Please upload an image",
				icon: "error",
				showConfirmButton: false,
				timer: 2000,
			});
		} else {
			const formData = new FormData();

			formData.append("name", name);
			formData.append("email", email);
			formData.append("address", address);
			formData.append("profile", profile);
			formData.append("localgovernment", localgovernment);
			formData.append("phoneNumber", phoneNumber);
			formData.append("avatar", avatar);

			const config = {
				"content-type": "multipart/form-data",
			};

			const newURL = `${url}/api/register`;
			setLoading(true);
			await axios
				.post(newURL, formData)
				.then((res) => {
					navigate("/studentview");
					setLoading(false);
					localStorage.setItem("regUser", res?.data?.data?.code);
					console.log(res);
				})
				.catch((error) => {
					new Swal({
						// title: error.response.data.message,
						text: "Please check and fix this ERROR",
						icon: "error",
						showConfirmButton: false,
						timer: 3500,
					}).then(() => {
						setLoading(false);
					});
					console.log(error);
				});
		}
	});

	return (
		<Container>
			{loading ? <Loading /> : null}
			<Wrapper>
				<Card onSubmit={onSubmit}>
					<LogoHolder to='/'>
						{/* <Bar>One</Bar> */}
						<Logo>KODE10X NEW-INTAKE FORM</Logo>
					</LogoHolder>
					{avatar ? (
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<img
								src={image}
								style={{
									width: "70px",
									height: "70px",
									background: "silver",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									borderRadius: "50%",
									objectFit: "cover",
								}}
							/>
						</div>
					) : (
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<img
								src='https://i.stack.imgur.com/l60Hf.png'
								style={{
									width: "70px",
									height: "70px",
									background: "silver",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									borderRadius: "50%",
									objectFit: "cover",
								}}
							/>
						</div>
					)}
					<Title>
						<TitleHead>Register 🚀🥊</TitleHead>
						<TitleSub>
							to stay connected with <span>Kode10X</span>, at all times!
						</TitleSub>
					</Title>
					<br />

					<label
						style={{
							marginTop: "100px",
							width: "100%",
							height: "30px",
							backgroundColor: "gray",
							color: "white",
							border: 0,
							outline: "none",
							borderRadius: "5px",
							fontSize: "17px",
							fontFamily: "Poppins",
							textTransform: "uppercase",
							transition: "all 350ms",
							padding: "10px",
							cursor: "pointer",
						}}
						htmlFor='Pix'>
						Upload Image
					</label>
					{avatar ? (
						<div style={{ marginTop: "10px", fontSize: "12px" }}>
							{avatar?.name}
						</div>
					) : (
						<div style={{ marginTop: "5px" }}>select an image</div>
					)}
					<input
						onChange={handleImageOnChange}
						id='Pix'
						style={{
							display: "none",
						}}
						type='file'
					/>
					<br />

					<InputRow>
						<InputHolder1>
							<Label>FullName</Label>
							<Input placeholder='Full Name' {...register("name")} />
							<Error>{errors?.name?.message}</Error>
						</InputHolder1>
						<InputHolder2>
							<Label>Email</Label>
							<Input placeholder='Email' {...register("email")} />
							<Error>{errors?.email?.message}</Error>
						</InputHolder2>
					</InputRow>

					<InputRow>
						<InputHolder1>
							<Label>House Address</Label>
							<Input
								placeholder='house address'
								{...register("address")}
								type='text'
							/>
							<Error>{errors?.address?.message}</Error>
						</InputHolder1>
						<InputHolder2>
							<Label>Phone No.</Label>
							<Input
								placeholder='Phone Number'
								{...register("phoneNumber")}
								type='text'
							/>
							<Error>{errors?.phoneNumber?.message}</Error>
						</InputHolder2>
					</InputRow>

					<InputHolder>
						<Label>Local govement</Label>
						<Select {...register("localgovernment")}>
							<option disabled selected value='Alimosho'>
								--Select localgovernment--
							</option>
							<option value='Alimosho'> Alimosho</option>
							<option value='Ajeromi-Ifelodun'> Ajeromi-Ifelodun</option>
							<option value='Kosofe'>Kosofe</option>
							<option value='Mushin'>Mushin</option>
							<option value='Oshodi-Isolo'>Oshodi-Isolo</option>
							<option value='Ojo'> Ojo</option>
							<option value='Ikorodu'> Ikorodu</option>
							<option value='Surulere'>Surulere</option>
							<option value='Agege'> Agege</option>
							<option value='Ifako-Ijaiye'>Ifako-Ijaiye</option>
							<option value='Somolu'> Somolu</option>
							<option value='Amuwo-Odofin'>Amuwo-Odofin</option>
							<option value='Lagos Mainland'>Lagos Mainland </option>
							<option value='Ikeja'>Ikeja</option>
							<option value='	Eti-Osa'> Eti-Osa</option>
							<option value='Badagry'> Badagry</option>
							<option value='Apapa'>Apapa</option>
							<option value='Lagos Island'>Lagos Island</option>
							<option value='Epe'> Epe</option>
							<option value='Ibeju-Lekki'>Ibeju-Lekki</option>
							<option value='Others'>Others</option>
						</Select>

						<Error>{errors?.localgovernment?.message}</Error>
					</InputHolder>

					<InputHolder>
						<Label>Profile</Label>
						<Input
							placeholder='Write a Profile about yourself'
							{...register("profile")}
						/>
						<Error>{errors?.profile?.message}</Error>
					</InputHolder>

					<CheckHolder>
						<CheckBox
							type='checkbox'
							value={myChecked}
							onClick={() => {
								setMyChacked(!myChecked);
							}}
						/>
						<COntent>
							I agree to privacy <span>policy</span> & <span>terms</span>
						</COntent>
					</CheckHolder>
					<BUtton
						type='submit'
						bg={myChecked ? "bg" : ""}
						disabled={!myChecked}
						onClick={() => {
							console.log("Hello", myChecked);
						}}>
						Sign up
					</BUtton>

					<Content>What we Teach students</Content>

					<LineHolder>
						<Line />
						<Text>Our</Text>
						<Line />
					</LineHolder>

					<Social>
						<SocialText>Core stacks</SocialText>
						<Icons>
							<Icon />
							<Icon1 />
							<Icon2 />
							<Icon3 />
							<Icon4 />
							<Icon5 />
						</Icons>
					</Social>
				</Card>
			</Wrapper>

			<Space />
			<Holder></Holder>
		</Container>
	);
};

export default StudentRegistration;

const Lab = styled.label`
	margin: 100px;
	width: 300px;
	height: 50px;
	background-color: ${({ bg }) => (bg ? "#742e9d" : "gray")};
	color: white;
	border: 0;
	outline: none;
	border-radius: 5px;
	font-size: 20px;
	font-family: Poppins;
	text-transform: uppercase;
	transition: all 350ms;

	:hover {
		transform: scale(0.99);
	}
`;

const Text = styled.div`
	font-size: 15px;
	padding: 0 5px;
`;

const Line = styled.div`
	border-bottom: 1px solid silver;
	width: 100%;
`;

const LineHolder = styled.div`
	display: flex;
	align-items: center;
	margin: 20px 0;
`;

const InputRow = styled.div`
	display: flex;
`;

const Icon = styled(FaReact)`
	font-size: 35px;
	color: #50abf1;
	:hover {
		cursor: pointer;
	}
`;
const Icon5 = styled(AiOutlineGithub)`
	font-size: 35px;
	color: black;
	:hover {
		cursor: pointer;
	}
`;

const Icons = styled.div`
	display: flex;
	margin-top: 20px;
`;

const Icon3 = styled(FaNodeJs)`
	font-size: 35px;
	color: green;
	:hover {
		cursor: pointer;
	}
`;
const Icon4 = styled(SiFirebase)`
	font-size: 35px;
	color: #ffa611;
	:hover {
		cursor: pointer;
	}
`;

const Icon2 = styled(SiJavascript)`
	font-size: 35px;
	color: #ffff00;
	:hover {
		cursor: pointer;
	}
`;

const Icon1 = styled(ImHtmlFive)`
	font-size: 35px;
	color: red;
	:hover {
		cursor: pointer;
	}
`;

const SocialText = styled.div`
	font-size: 12px;
	display: flex;
	margin-top: 0px;
`;

const Social = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 10px;
`;

const Span = styled(Link)`
	text-decoration: none;
	color: #742e9d;
	font-weight: 700;
	margin-left: 5px;
	cursor: pointer;
`;

const Content = styled.div`
	display: flex;
	font-size: 13px;
	justify-content: center;
`;

const BUtton = styled.button`
	margin: 20px 0;
	width: 100%;
	height: 50px;
	background-color: ${({ bg }) => (bg ? "#0B163F" : "gray")};
	color: white;
	border: 0;
	outline: none;
	border-radius: 5px;
	font-size: 20px;
	font-family: Poppins;
	text-transform: uppercase;
	transition: all 350ms;
	:hover {
		cursor: pointer;
		transform: scale(0.99);
	}
`;

const COntent = styled.div`
	font-size: 13px;
	span {
		color: #0b163f;
		font-weight: 700;
	}
`;

const CheckBox = styled.input`
	margin-right: 10px;
`;

const CheckHolder = styled.div`
	display: flex;
`;

const Error = styled.div`
	color: red;
	position: absolute;
	bottom: -18px;
	font-size: 10px;
	font-weight: bolder;
`;

const Input = styled.input`
	width: 97%;
	height: 100%;
	outline: none;
	border: 0;
	background-color: transparent;
	::placeholder {
		font-family: Poppins;
		padding-left: 10px;
		color: lightgray;
	}
`;

const Select = styled.select`
	width: 97%;
	height: 100%;
	outline: none;
	border: 0;
	background-color: transparent;
	::placeholder {
		font-family: Poppins;
		padding-left: 10px;
		color: lightgray;
	}
`;

const Label = styled.label`
	font-size: 14px;
	position: absolute;
	top: -10px;
	left: 10px;
	background-color: white;
	padding: 0 3px;
	font-weight: 700;
`;

const InputHolder2 = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	margin-bottom: 35px;
	border: 1px solid #0b163f;
	width: 100%;
	height: 40px;
	border-radius: 3px;
	margin-left: 3px;
	color: #0b163f;
`;

const InputHolder1 = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	margin-bottom: 35px;
	border: 1px solid #0b163f;
	width: 100%;
	height: 40px;
	border-radius: 5px;
	margin-right: 5px;
	color: #0b163f;
`;

const InputHolder = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	margin-bottom: 35px;
	border: 1px solid #0b163f;
	width: 100%;
	height: 40px;
	border-radius: 5px;
	color: #0b163f;
`;

const TitleSub = styled.div`
	color: lightgray;
	font-weight: 500;
	font-size: 13px;
	span {
		color: #0b163f;
		font-weight: bold;
	}
`;

const TitleHead = styled.div`
	font-size: 22px;
	font-weight: bolder;
	color: #0b163f;
`;

const Title = styled.div`
	margin-top: 30px;
`;

const LogoTitle = styled.div`
	font-weight: 700;
	color: gray;
	width: 100px;
	line-height: 1;
	font-size: 25px;
	color: #742e9d;
`;

const Logo = styled.div`
	padding: 20px;
	color: #0b163f;

	border-radius: 3px;
	margin-right: 5px;
	font-weight: 700;
`;

const LogoHolder = styled(Link)`
	margin-top: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
`;
const Card = styled.form`
	width: 90%;
	height: 100%;

	@media screen and (max-width: 500px) {
		min-height: 500px;
	}
`;

const Wrapper = styled.div`
	width: 450px;
	min-height: 700px;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	position: absolute;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media screen and (max-width: 500px) {
		width: 90%;
		margin: 0;
		display: flex;
		justify-content: center;
		min-height: 130vh;
	}
`;

const Right = styled.img`
	width: 200px;
	height: 300px;
	object-fit: cover;
	@media screen and (max-width: 500px) {
		display: none;
	}
`;

const Left = styled.img`
	width: 248px;
	height: 185px;
	object-fit: cover;
`;

const Holder = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	background-image: url("https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/pages/auth-v1-mask-light.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;

const Space = styled.div`
	flex: 1;
`;

const Container = styled.div`
	width: 100%;
	min-height: 130vh;
	display: flex;
	flex-direction: column;
	position: relative;
	align-items: center;
	justify-content: center;
`;
