import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { IoHourglassOutline } from "react-icons/io5";
import { MdOutlineAlignHorizontalLeft } from "react-icons/md";
// import { TestData } from "./TestData";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import Loading from "../LoadState";
import { UserData } from "../Global/GlobalState";
import { useRecoilState, useRecoilValue } from "recoil";
// import { useRecoilValue } from "recoil";
// import { User } from "../../Global/RecoilState";

const url = "https://codelabintakeapi.onrender.com";

const AllQuestion = () => {
	const Navigate = useNavigate();
	// const { id } = useParams();
	const user = useRecoilValue(UserData);

	// console.log("reading the userdfgh", user);

	const [answer, setAnswer] = useState([]);
	const [testData, setTestData] = useState({});
	const [allMapTest, setAllMapTest] = useState([]);
	const [randData, setRandData] = useState([]);

	const [dataOption, setDataOption] = React.useState([]);
	const [min, setMin] = React.useState(0);
	const [secs, setSecs] = React.useState(0);
	const [User, setUser] = useRecoilState(UserData);
	const [inter, setInter] = useState(null);
	const fetchData = async () => {
		const local = "http://localhost:15790";
		const newURL = `${url}/api/test/viewTest`;
		await axios.get(newURL).then((res) => {
			setTestData(res?.data?.data[0]);
		});
	};

	const page = Math.floor(Math.random() * 18);

	const fetchTestData = async () => {
		const local = "http://localhost:15790";
		const newURL = `${url}/api/test/viewTested?page=${page}`;
		await axios.get(newURL).then((res) => {
			setAllMapTest(res?.data?.data);
			// console.log(testData);
		});
	};

	const [loading, setLoading] = useState(false);

	const onRadioButtonChange = (e) => {
		setAnswer({
			...answer,
			[e.target.name]: e.target.value,
		});
	};

	let correctAnswer = [];
	let score = 0;
	let status = "";

	const submitTest = async () => {
		setLoading(true);
		for (let i = 0; i < allMapTest.length; i++) {
			correctAnswer.push(allMapTest[i].answer);

			if (correctAnswer[i] === Object.values(answer)[i]) {
				score++;
			}
		}

		// console.log("my answer: ", answer);
		// console.log("correct: ", correctAnswer);

		// console.log(score);

		if (score >= 5) status = "Pass";
		else status = "Fail";

		var date = new Date();
		var d =
			date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
		var t = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

		let data = {
			result_status: status,
			result_score: score,
			exam_date: d + " " + t,
			total_marks: "5",
			// exam_id: id,
			total_Question: "5",
		};
		// console.log(data);

		// const newURL = `${url}/api/performance/${user._id}/create-student-performance`;
		// axios.post(newURL, {
		// 	right: score,
		// 	testCode: testData.testCode,
		// });
		correctAnswer = [];
	

		axios
			.patch(`${url}/api/editLogic/${user._id}`, {
				logic: score * 10,
			})
			.then((res) => {
				Swal.fire({
					title: "You have Concluded your IQ test.",
					icon: "success",
					text: `your score is : ${score * 10}`,
				}).then(() => {
					setUser({});
					// Navigate("/logic-iqtest-page");

					window.location.reload(Navigate("/logic-iqtest-page"));
				});

				setLoading(false);
			});
	};

	const StartTimer = () => {
		const CountDown = Date.now() + 240000;
		setInter(
			setInterval(() => {
				const nowTime = new Date();
				const distance = CountDown - nowTime;

				const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

				const seconds = Math.floor((distance % (1000 * 60)) / 1000);

				if (distance <= 0) {
					clearInterval(inter);
					setMin(0);
					setSecs(0);
					submitTest();
				} else {
					setMin(minutes);
					setSecs(seconds);
				}
			}, 1000),
		);
	};

	React.useEffect(() => {
		fetchData();
		fetchTestData();
		// if (showNew) {
		if (testData && allMapTest.length <= 1) {
			StartTimer();
		}
	}, [user]);
	return (
		<Container>
			{loading ? <Loading /> : null}
			<Wrapper>
				<Top>
					<DetailText>
						<h4>Welcome {user?.name}</h4>
						<span> - KODE10X NEWINTAKE TEST -</span>
					</DetailText>
					<Row1>
						<DetCard>
							<CrdHold>
								<Tit>
									{" "}
									<AiTwotoneCalendar color='#90A1C0' size='15px' />{" "}
									<span>Starts</span>{" "}
								</Tit>
								<Cont>
									{moment(testData.createdAt).format(
										"dddd, MMMM Do YYYY, h:mm:ss a",
									)}
								</Cont>
							</CrdHold>
						</DetCard>
						<DetCard>
							<CrdHold>
								<Tit>
									{" "}
									<BiTimeFive color='#90A1C0' size='15px' />{" "}
									<span>Duration</span>{" "}
								</Tit>
								<Cont style={{ display: "flex", alignItems: "center" }}>
									4mins
									<Cont
										style={{
											marginLeft: "100px",
											fontWeight: "bold",
											fontSize: "20px",
											display: "flex",
											alignItems: "center",
										}}>
										{min} :{" "}
										{min === 0 && secs <= 30 ? (
											<div style={{ color: "red" }}>{secs}</div>
										) : (
											<div>{secs}</div>
										)}
									</Cont>
								</Cont>
							</CrdHold>
						</DetCard>
					</Row1>
					<Row1>
						<DetCard>
							<CrdHold>
								<Tit>
									{" "}
									<IoHourglassOutline color='#90A1C0' size='15px' />{" "}
									<span>Finish Time</span>{" "}
								</Tit>
								<Cont>
									{moment(testData?.createdAt).format(
										"dddd, MMMM Do YYYY, h:mm:ss a",
									)}
								</Cont>
							</CrdHold>
						</DetCard>
						<DetCard>
							<CrdHold>
								<Tit>
									{" "}
									<MdOutlineAlignHorizontalLeft
										color='#90A1C0'
										size='15px'
									/>{" "}
									<span>Total Questions</span>{" "}
								</Tit>
								<Cont>10</Cont>
							</CrdHold>
						</DetCard>
					</Row1>
				</Top>
				<Buttom>
					<InstQues>
						<QuestTitle> Interview Questions</QuestTitle>
						<Instruct>{testData.instruction}</Instruct>
					</InstQues>

					{allMapTest?.map((props, i) => (
						<MainQuestions key={props._id}>
							<QuestionHold>
								<No>{i + 1}.</No>
								<Question>
									<Quest>{props.question}</Quest>
									<Answers>
										<Ans>
											<input
												type={"radio"}
												id={props.a}
												name={i + 1}
												value={props.a}
												onChange={(e) => {
													onRadioButtonChange(e);
												}}
											/>
											<label htmlFor={props.a}>{props.a}</label>
										</Ans>
										<Ans>
											<input
												type={"radio"}
												id={props.b}
												name={i + 1}
												value={props.b}
												onChange={(e) => {
													onRadioButtonChange(e);
												}}
											/>
											<label htmlFor={props.b}>{props.b}</label>
										</Ans>
										<Ans>
											<input
												type={"radio"}
												name={i + 1}
												id={props.c}
												value={props.c}
												onChange={(e) => {
													onRadioButtonChange(e);
												}}
											/>
											<label htmlFor={props.c}>{props.c}</label>
										</Ans>
										<Ans>
											<input
												type={"radio"}
												name={i + 1}
												id={props.d}
												value={props.d}
												onChange={(e) => {
													onRadioButtonChange(e);
												}}
											/>
											<label htmlFor={props.d}>{props.d}</label>
										</Ans>
									</Answers>
								</Question>
							</QuestionHold>
						</MainQuestions>
					))}

					<MyButton
						onClick={() => {
							submitTest();
						}}>
						Submit
					</MyButton>
				</Buttom>

				<Answers> </Answers>
			</Wrapper>

			<TimerCount bd={min === 0 && secs <= 30 ? "red" : "#0fbbfe"}>
				<h6 style={{ margin: "0" }}>Time</h6>
				{min === 0 && secs <= 30 ? (
					<div style={{ display: "flex", alignItems: "center", color: "red" }}>
						<div
							style={{
								// marginLeft: "100px  #0fbbfe",
								fontWeight: "bold",
								fontSize: "20px",
								display: "flex",
								alignItems: "center",
								margin: "0",
							}}>
							{min} :{" "}
							{min === 0 && secs <= 30 ? (
								<div style={{ color: "red" }}>{secs}</div>
							) : (
								<div>{secs}</div>
							)}
						</div>
					</div>
				) : (
					<div style={{ display: "flex", alignItems: "center" }}>
						<div
							style={{
								// marginLeft: "100px  #0fbbfe",
								fontWeight: "bold",
								fontSize: "20px",
								display: "flex",
								alignItems: "center",
								margin: "0",
							}}>
							{min} :<div>{secs}</div>
						</div>
					</div>
				)}
			</TimerCount>
		</Container>
	);
};

export default AllQuestion;

const TimerCount = styled.div`
	height: 100px;
	width: 100px;
	border-radius: 50%;
	background-color: white;
	position: fixed;
	border: 1px solid ${(props) => props.bd};
	left: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	// right :
`;

const MyButton = styled.div`
	height: 35px;
	width: 120px;
	background-color: #0fbbfe;
	color: white;
	border: none;
	margin-top: 15px;
	border-radius: 6px;
	cursor: pointer;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 350ms;

	:hover {
		transform: scale(1.1);
	}
`;

const Container = styled.div`
	width: 100%;
	/* width: calc(100vw - 230px); */
	min-height: calc(100vh - 60px);
	display: flex;
	justify-content: center;
	padding-bottom: 80px;
	padding-top: 70px;

	background-color: #f7f9fc;
	/* background-color: gold; */
	overflow: hidden;
	position: absolute;
	right: 0px;
	// top: 50px;

	@media screen and (max-width: 1100px) {
		width: 95%;
	}
	@media screen and (max-width: 1005px) {
		width: 100%;
	}

	/* background-color: #352b1e; */
`;

const Wrapper = styled.div`
	width: 95%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Top = styled.div`
	margin-bottom: 30px;
`;

const Row1 = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
const DetCard = styled.div`
	height: 80px;
	width: 300px;
	margin: 0 15px 12px 0;
	background-color: #fff;
	display: flex;
	align-items: center;

	@media (max-width: 500px) {
		margin: 5px 0;
	}
`;

const CrdHold = styled.div`
	padding: 0 20px;
	font-size: 13px;
`;

const DetailText = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	span {
		font-size: 13px;
		margin-bottom: 10px;
	}

	button {
		height: 30px;
		width: 120px;
		font-family: poppins;
		background-color: transparent;
		border: 1px solid #1da1f2;
		color: #000;
		border-radius: 3px;
		font-size: 15px;
		font-weight: 600;
		cursor: pointer;
		margin-right: 10px;
		/* border: none; */
		cursor: pointer;
	}
`;

const Tit = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	span {
		margin-left: 5px;
		margin-top: 2px;
	}
`;
const Cont = styled.div``;
const Buttom = styled.div`
	width: 620px;
	margin: 0 15px 12px 0;

	@media (max-width: 600px) {
		width: 90%;
		margin: 5px 0;
	}
`;
const InstQues = styled.div`
	margin-bottom: 20px;
`;
const QuestTitle = styled.div`
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 6px;
`;
const Instruct = styled.div`
	font-size: 11px;
	color: gray;
`;
const MainQuestions = styled.div`
	width: 100%;
	background-color: #fff;
	margin-bottom: 10px;
	border-radius: 6px;
`;
const QuestionHold = styled.div`
	display: flex;
	padding: 15px;
	font-size: 14px;
`;
const No = styled.div`
	margin-right: 10px;
`;
const Question = styled.div``;
const Quest = styled.div`
	margin-bottom: 10px;
`;
const Answers = styled.div``;
const Ans = styled.div`
	margin-left: -3px;
	margin-bottom: 10px;
`;
