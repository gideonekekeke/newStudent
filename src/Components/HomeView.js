import React from "react";
import styled from "styled-components";
import left from "./left.png";
import right from "./Right.png";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { SiFirebase } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";

import { Link } from "react-router-dom";

const HomeView = () => {
	const readData = localStorage.getItem("regUser");
	return (
		<Container>
			<Wrapper>
				<Card>
					<LogoHolder to='/'>
						<Logo>CodeLab</Logo>
					</LogoHolder>

					<Title>
						<TitleHead>Registration Successfull 🚀🥊</TitleHead>
						<br />
						<TitleSub>
							You Have Successfull Register to CodeLab New Intake Interview,
							<span> Goodluck on Your Interview. </span>
							<div
								style={{
									fontWeight: "bold",
									color: "black",
									fontSize: "17px",
								}}>
								Interview Code({readData})
							</div>
						</TitleSub>
					</Title>

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
			<Holder>
				<Left src={left} />
				<Right src={right} />
			</Holder>
		</Container>
	);
};

export default HomeView;

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

const TitleSub = styled.div`
	color: lightgray;
	font-weight: 500;
	font-size: 13px;
	span {
		color: #742e9d;
		font-weight: bold;
	}
`;

const TitleHead = styled.div`
	font-size: 22px;
	font-weight: bolder;
	color: #742e9d;
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
	background-color: #742e9d;
	color: white;
	border-radius: 3px;
	margin-right: 5px;
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
`;

const Wrapper = styled.div`
	width: 450px;
	min-height: 300px;
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
	height: 100vh;
	display: flex;
	flex-direction: column;
	position: relative;
	align-items: center;
	justify-content: center;
`;
