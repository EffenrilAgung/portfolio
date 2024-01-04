import React from 'react';
import ContainerItem from '../templates/container_content/ContainerItem';
import profile from '../../assets/images/profile.jpeg';
import Button from '../fragments/button';
import JavascriptIcon from '../../assets/icon/javascript.svg';

const Credential = () => {
	return (
		<React.Fragment>
			<div className="mx-5 lg:container">
				<div className="grid grid-cols-12 grid-flow-row gap-5 mt-5">
					<div className=" col-span-12 md:col-span-5 lg:col-span-4 ">
						<ContainerItem
							className="sticky top-2  h-[642px]  py-5 px-5 "
							bottom="bottom-0"
							snow={false}
							right="right-0"
						>
							<div className=" flex justify-center items-center flex-col">
								<img
									src={profile}
									alt=""
									className="w-[324px] h-[324px] object-cover"
								/>
								<h1 className="text-2xl text-center mt-10 font-bold text-white">
									Effenril Agung Marpaung
								</h1>
								<p className="text-sm italic font-light">@effenrilagung</p>
								<div className="flex mt-5 justify-evenly flex-row ">
									<div className="flex flex-center items-center justify-center h-12 w-12 flex-row   bg-experience rounded-full cursor-pointer hover:bg-[#fff]">
										{/* Facebook */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="60"
											height="60"
											viewBox="0 0 40 40"
											className="hover:fill-[#0866FF]"
										>
											<path d="M23.8287 11.8345H26V8.16173C24.9487 8.05241 23.8924 7.99844 22.8354 8.00003C19.6939 8.00003 17.5457 9.91726 17.5457 13.4283V16.4543H14V20.566H17.5457V31.0992H21.796V20.566H25.3301L25.8614 16.4543H21.796V13.8326C21.796 12.6199 22.1193 11.8345 23.8287 11.8345Z" />
										</svg>
									</div>
									<div className="flex mx-2 flex-center justify-center items-center flex-row h-12 w-12 rounded-full p-0 bg-experience cursor-pointer hover:bg-[#fff]">
										{/* Twitter */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											viewBox="0 0 16 16"
										>
											<path
												fill="currentColor"
												d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
											/>
										</svg>
									</div>
									<div className="flex mr-2 flex-center h-12 w-12 justify-center items-center flex-row p-0 bg-experience rounded-full cursor-pointer hover:bg-[#fff]">
										{/* Linkedin */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											viewBox="0 0 32 32"
											className="hover:fill-[#0A66C2]"
										>
											<path d="M27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047c-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739V11.999h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468c4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912a2.75 2.75 0 0 1-2.751-2.756a2.753 2.753 0 1 1 2.751 2.756m2.374 17.359H4.74V12h4.749zM29.636 0H2.36C1.057 0 0 1.031 0 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307V2.307C32 1.031 30.932 0 29.631 0z" />
										</svg>
									</div>
									<div className="flex flex-center items-center h-12 w-12 justify-center flex-row p-0 bg-experience rounded-full cursor-pointer hover:bg-[#fff]">
										{/* Github */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											viewBox="0 0 1664 1408"
											className="hover:fill-white"
										>
											<path d="M640 960q0 40-12.5 82t-43 76t-72.5 34t-72.5-34t-43-76t-12.5-82t12.5-82t43-76t72.5-34t72.5 34t43 76t12.5 82m640 0q0 40-12.5 82t-43 76t-72.5 34t-72.5-34t-43-76t-12.5-82t12.5-82t43-76t72.5-34t72.5 34t43 76t12.5 82m160 0q0-120-69-204t-187-84q-41 0-195 21q-71 11-157 11t-157-11q-152-21-195-21q-118 0-187 84t-69 204q0 88 32 153.5t81 103t122 60t140 29.5t149 7h168q82 0 149-7t140-29.5t122-60t81-103t32-153.5m224-176q0 207-61 331q-38 77-105.5 133t-141 86t-170 47.5t-171.5 22t-167 4.5q-78 0-142-3t-147.5-12.5t-152.5-30t-137-51.5t-121-81t-86-115Q0 992 0 784q0-237 136-396q-27-82-27-170q0-116 51-218q108 0 190 39.5T539 163q147-35 309-35q148 0 280 32q105-82 187-121t189-39q51 102 51 218q0 87-27 168q136 160 136 398" />
										</svg>
									</div>
								</div>
								<Button
									className="w-[246px] flex items-center justify-center rounded-md mt-5 font-bold text-xl h-12 bg-[#323232] "
									to="/contact"
								>
									Contact Me
								</Button>
							</div>
						</ContainerItem>
					</div>

					{/* About */}
					<div className="col-span-12  md:col-span-7 lg:col-start-6 lg:col-span-6">
						<h2 className="text-xl font-bold">ABOUT ME</h2>
						<p>
							A recent graduate with a strong eagerness to kickstart a career in
							the software development industry. I possess knowledge of various
							technologies and programming languages, including JavaScript, and
							Node.js, and a keen interest in UI/UX Design. I recently earned a
							Bachelor of Computer degree in System Computer from Universitas
							Panca Budi Medan. I am highly motivated to learn and thrive in the
							technology industry.
							<br />
							<br />
							As a full stack developer, I can provide end-to-end solutions for
							complex projects. I have expertise in managing databases using
							various database systems, including MongoDB, and MySQL,.
							Additionally, I also have in-depth knowledge of the Linux
							operating system, enabling me to comfortably manage and maintain
							infrastructure in a Linux environment.
						</p>

						<div className="mt-16">
							<h2 className="text-xl font-bold">EXPERIENCE</h2>
							<p className="text-base font-medium mt-5 text-white-200">
								1 Oktober - Januari 2023
							</p>
							<p className="text-lg font-bold text-blue">
								PT COMODO MATIC DECENTRALIZED
							</p>
							<p className="text-base font-medium text-white-200">
								Fullstack Developer
							</p>
							<ol className="list-decimal ml-6">
								<li>Designing and Developing The Local News Portal</li>
								<li>
									Carrying out development for the crypto website so that it
									conforms to the design created by the UI/UX
								</li>
								<li>
									Helping News Portals increase traffic and improve rankings by
									improving sitemap structure and implementing SEO and SEM
								</li>
							</ol>

							<p className="text-base font-medium text-white-200 mt-10">
								3 Month
							</p>
							<p className="text-lg font-bold  text-blue">CV DJATUN COMPUTER</p>
							<p className="text-base font-medium text-white-200">IT Support</p>
							<ol className="list-decimal ml-6">
								<li>Perform maintenance on WiFi network devices</li>
								<li>Install it on an internet cafe or office computer</li>
								<li>
									Building a new network in remote areas by utilizing triangle
									towers Monitor network disruptions
								</li>
								<li>
									Repair computers that experience problems both on the hardware
									and software side
								</li>
							</ol>

							<div className="mt-16">
								<h2 className="text-xl font-bold">EDUCATION</h2>
								<p className="text-base mt-5 font-medium text-white-200">
									2018 - 2023
								</p>
								<p className="text-lg font-bold  text-blue">
									UNIVERSITY PEMBANGUNAN PANCABUDI
								</p>

								<p className="text-base font-medium text-white-200">
									Bachelor's Degree in System Computer, 3.69/4.00
								</p>
								<p className="text-sm mt-4 font-normal text-white">
									I am a graduate of Pancabudi University in Medan with a major
									in Computer Systems. During my academic journey, I gained a
									profound understanding of how computers operate, starting from
									fundamental concepts to more complex topics.
									<br />
									<br />
									In addition to my studies, I pursued various online courses
									that involved software development, system analysis, network
									administration, and web development. My skills include HTML,
									CSS, JavaScript, React, Node.js, and MongoDB.
									<br />
									<br />
									With experience in managing infrastructure in a Linux
									environment and knowledge of operating systems, I am ready to
									pursue a career as a dedicated software developer. I am always
									enthusiastic about learning more, especially concerning the
									latest technological advancements, and aspire to make a
									meaningful contribution to the world of technology.
								</p>
							</div>

							<div className="mt-16">
								<h2 className="text-lg font-bold">SKILLS</h2>
								<p className="text-sm font-normal text-white-200 mt-10">
									FRONT-END
								</p>
								<div className="grid grid-cols-3 gap-5 justify-items-center md:grid-cols-4 lg:grid-cols-5">
									<div className="flex items-center justify-center ">
										<div className="flex flex-col items-center">
											<p className="text-sm font-normal text-white-200">HTML</p>
											<svg
												role="img"
												width="40"
												height="40"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												fill="#E34F26"
												className="fill-[#E34F26]"
											>
												<title>HTML5</title>
												<path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
											</svg>
										</div>
									</div>
									<div className="flex flex-col items-center justify-center  ">
										<p className="text-sm font-normal text-white-200">
											Javascript
										</p>
										<div>
											<svg
												role="img"
												width="40"
												height="40"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												fill="#F7DF1E"
											>
												<title>JavaScript</title>
												<path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
											</svg>
										</div>
									</div>
									<div className="flex flex-col items-center justify-center  ">
										<p className="text-sm font-normal text-center text-white-200">
											React Native
										</p>
										<div>
											<svg
												role="img"
												width="40"
												height="40"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												className="fill-[#61DAFB]"
											>
												<title>React</title>
												<path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
											</svg>
										</div>
									</div>
									<div className="flex flex-col items-center justify-center  ">
										<p className="text-sm font-normal text-white-200">Figma</p>
										<div>
											<svg
												role="img"
												width="40"
												height="40"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												className="fill-[#F24E1E]"
											>
												<title>Figma</title>
												<path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
											</svg>
										</div>
									</div>
									<div className="flex flex-col items-center justify-center  ">
										<p className="text-sm font-normal text-white-200">CSS 3</p>
										<div>
											<svg
												role="img"
												width="40"
												height="40"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												className="fill-[#1572B6]"
											>
												<title>CSS3</title>
												<path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
											</svg>
										</div>
									</div>
									<div className="flex flex-col items-center justify-center  ">
										<p className="text-sm font-normal text-white-200">
											Tailwind
										</p>
										<div>
											<svg
												role="img"
												width="40"
												height="40"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												className="fill-[#06B6D4]"
											>
												<title>Tailwind CSS</title>
												<path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
											</svg>
										</div>
									</div>
									<div className="flex flex-col items-center justify-center  ">
										<p className="text-sm font-normal text-white-200">
											Bootstrap
										</p>
										<div>
											<svg
												role="img"
												width="40"
												height="40"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												className="fill-[#7952B3]"
											>
												<title>Bootstrap</title>
												<path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" />
											</svg>
										</div>
									</div>
								</div>
							</div>

							<p className="text-sm font-normal text-white-200 mt-10">
								BACK-END
							</p>
							<div className="grid grid-cols-3 gap-5 justify-items-center md:grid-cols-4 lg:grid-cols-5">
								<div className="flex flex-col items-center justify-center  ">
									<p className="text-sm font-normal text-center text-white-200">
										NPM
									</p>
									<div>
										<svg
											role="img"
											width="40"
											height="40"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											className="fill-[#CB3837]"
										>
											<title>npm</title>
											<path
												fill-rule="evenodd"
												d="M0 4h15v7H7v2H4v-2H0zm4 6V5H1v5h1V6h1v4zm1-5v7h1v-2h2V5zm4 0v5h1V6h1v4h1V6h1v4h1V5zM6 9V6h1v3z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col items-center justify-center  ">
									<p className="text-sm font-normal text-center text-white-200">
										MongoDB
									</p>
									<div>
										<svg
											role="img"
											width="40"
											height="40"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											className="fill-[#47A248]"
										>
											<title>MongoDB</title>
											<path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
										</svg>
									</div>
								</div>
								<div className="flex flex-col items-center justify-center  ">
									<p className="text-sm font-normal text-center text-white-200">
										MongoDB
									</p>
									<div>
										<svg
											role="img"
											width="40"
											height="40"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											className="fill-[#339933]"
										>
											<title>Node.js</title>
											<path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
										</svg>
									</div>
								</div>
								<div className="flex flex-col items-center justify-center  ">
									<p className="text-sm font-normal text-center text-white-200">
										SEQUELIZE
									</p>
									<div>
										<svg
											role="img"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											width="40"
											height="40"
											className="fill-[#52B0E7]"
										>
											<title>Sequelize</title>
											<path d="M12.0264 0 1.5947 5.9922v12.0156L12.0264 24l10.3789-5.9922V5.9922L12.0264 0zm-.0274 3.4844 7.4297 4.2266v8.5781l-7.4297 4.2266-7.3476-4.1817-.0801-8.623 7.4277-4.2266zm.0489.5898c-.9765.5627-1.9519 1.1274-2.9277 1.6914v.2539l2.6074 1.5234v.4824c.1355-.0781.2616-.1511.4023-.2324l.2559.1504v-.3359c.8844-.5068 1.8073-1.0412 2.5684-1.4805.0035-.1232.0027-.2534.0039-.373-.9703-.5596-1.9403-1.1197-2.9102-1.6797zM8.335 6.1387c-.9705.553-1.9312 1.1228-2.8926 1.6914v3.4023c.965.5553 1.9287 1.1127 2.8926 1.6699l.4023-.2324v-2.916c.8561-.4945 1.7522-1.0126 2.4902-1.4395v-.4843L8.335 6.1387zm7.4433.0879-2.8926 1.6699v.3379l2.6367 1.541v3.0664c.0854.0494.1705.0991.2559.1484l2.8926-1.6699V7.918l-2.8926-1.6914zm-3.6484 2.1445c-.9636.5584-1.9281 1.1151-2.8926 1.6719v3.4238c.965.5553 1.9287 1.1127 2.8926 1.6699l2.8926-1.6719v-3.4023l-2.8926-1.6914zm-6.1973 3.7227c-.1627.0962-.3275.1889-.4902.2852v3.4023c.9643.5571 1.9284 1.1145 2.8926 1.6719l.4023-.2324v-2.918c.1625-.0939.3086-.1787.4727-.2734-.1629-.0945-.3047-.1763-.4727-.2734v-.508l-.4023.2325c-.8251-.4771-1.6902-.976-2.4024-1.3867zm12.2481.0859-2.4023 1.3887c-.088-.0509-.1672-.0972-.2559-.1484v.334l-.4922.2852.4922.2871v3.0664c.0854.0494.1705.0991.2559.1484l2.8926-1.6719v-3.4023l-.4903-.2872zm-8.4688 2.1387c-.1581.0913-.3165.1821-.4746.2734v3.4238c.9637.5575 1.9282 1.1136 2.8926 1.6699l2.8926-1.6699v-3.4023l-.4902-.2871-2.4023 1.3887c-.8307-.4804-1.7013-.9829-2.4181-1.3965z" />
										</svg>
									</div>
								</div>
								<div className="flex flex-col items-center justify-center  ">
									<p className="text-sm font-normal text-center text-white-200">
										EXPRESS
									</p>
									<div>
										<svg
											role="img"
											width="40"
											height="40"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											className="fill-[#fff]"
										>
											<title>Express</title>
											<path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
										</svg>
									</div>
								</div>
								<div className="flex flex-col items-center justify-center  ">
									<p className="text-sm font-normal text-center text-white-200">
										MONGOOSE
									</p>
									<div>
										<svg
											role="img"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											width="40"
											height="40"
											className="fill-[#880000]"
										>
											<title>Mongoose</title>
											<path d="M14.014 7.37a9.162 9.162 0 0 0-.808.025c-.218.017-.434.072-.65.11.229.118.456.213.68.315.225.103.436.232.629.387-.253-.097-.499-.208-.752-.298a8.046 8.046 0 0 0-1.624-.421c-.273-.037-.546-.073-.819.005-.276.078-.354.18-.38.458-.04.46.098.887.281 1.298a4.432 4.432 0 0 0 1.185 1.573c.391.335.825.598 1.305.787.136.053.274.103.411.155l-.009.032c-.263-.072-.532-.126-.787-.22a4.14 4.14 0 0 1-1.222-.73 4.16 4.16 0 0 1-1.007-1.22 3.43 3.43 0 0 1-.43-1.609l-.012.005C4.891 7.488.402 11.595.035 11.94l-.034.014c-.002.005 0 .01.003.016L0 11.974l.005-.002c.004.008.01.016.013.024.087-.019.173-.042.26-.054l.069-.01c.324-.115.655-.205.997-.253.484-.069.985-.159 1.48-.156.468.002.943.074 1.402.153.129.022.255.052.38.087.335.075.65.21.933.391l.06.03c.403.19.758.47 1.038.811.052.057.141.116.187.178.096.114.142.236.303.363v-1.737h2.01l.939 1.733.942-1.733h2.07v3.357l.343-.226s.375-1 2.116-1.14l1.996-.064c-.308-.637-.307-.637-.159-.83.147-.19 1.28-.314 1.48-.433l2.912-.588c.007-.022.015.012.03.007.072-.022.147-.037.25-.061l.66-.16c.042-.025.093-.034.14-.05.308-.107.577-.245.726-.573.145-.319.339-.616.41-.967.022-.111.003-.208-.078-.288-.097-.096-.222-.138-.35-.171-.421-.173-.84-.35-1.264-.513-.261-.101-.529-.185-.795-.27a30.574 30.574 0 0 0-.794-.243c-.244-.072-.49-.138-.736-.205-.24-.066-.48-.133-.72-.192-.282-.07-.565-.13-.847-.195-.215-.05-.428-.102-.644-.146-.234-.047-.47-.089-.706-.13-.302-.053-.602-.112-.905-.153-.366-.05-.734-.082-1.101-.125-.345-.04-.691-.065-1.038-.07zm-3.303.767a.154.154 0 0 1 .056.007c.42.13.83.277 1.216.491.365.203.695.45.979.756.012.013.02.028.036.05l-.645-.293-.021.026.37.551-.022.022a1.986 1.986 0 0 0-.665-.322l-.02.02.633.74-.416-.136-.017.02c.163.27.376.505.58.775-.354-.2-.665-.42-.956-.669a4.488 4.488 0 0 1-1.01-1.185c-.107-.19-.201-.385-.222-.606a.468.468 0 0 1 .011-.15.123.123 0 0 1 .113-.097zm5.424.668c.154.002.311-.006.464.015.278.037.555.092.832.14.158.027.317.052.474.086.297.064.594.133.89.2.196.046.392.092.587.14l-.329.161c-.365.027-.731.055-1.097.057a3.268 3.268 0 0 1-.675-.074c-.28-.058-.514-.196-.652-.466-.02-.04-.09-.063-.14-.078-.18-.054-.362-.1-.544-.168.063-.005.126-.014.19-.013zm3.223 2.635.005.02c-.08.022-.16.042-.239.067-.455.14-.916.266-1.363.428-.28.101-.544.25-.81.388-.233.119-.315.322-.287.575.019.162.04.324.055.488a1.786 1.786 0 0 1-.288-.701c-.035-.169.058-.273.18-.365.238-.178.496-.318.777-.41.35-.117.702-.233 1.059-.325.251-.065.513-.09.77-.133.048-.008.094-.021.141-.032zM9.141 13.955v2.676h1.869l.064-.066v-2.61l-.97 1.495z" />
										</svg>
									</div>
								</div>
								<div className="flex flex-col items-center justify-center  ">
									<p className="text-sm font-normal text-center text-white-200">
										NGINX
									</p>
									<div>
										<svg
											role="img"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											width="40"
											height="40"
											className="fill-[#009639]"
										>
											<title>NGINX</title>
											<path d="M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .705-.646 1.29-1.529 1.29-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18H18z" />
										</svg>
									</div>
								</div>
								<div className="flex flex-col items-center justify-center  ">
									<p className="text-sm font-normal text-center text-white-200">
										APACHE
									</p>
									<div>
										<svg
											role="img"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											width="40"
											height="40"
											className="fill-[#D22128]"
										>
											<title>Apache</title>
											<path d="M17.805 2.197v.066h.156v.44h.072v-.44h.156v-.066zm.9 0l-.175.353-.172-.353h-.087v.506h.067V2.3l.172.35h.045l.172-.35v.404h.066v-.506zm-4.257 1c-.204.31-.424.66-.66 1.06l-.04.062a44.457 44.457 0 00-1.265 2.29c-.187.36-.38.742-.577 1.146l2.267-.25c.66-.302.955-.578 1.242-.976a15.5 15.5 0 00.23-.342c.23-.363.46-.763.663-1.16.197-.386.37-.767.505-1.11.083-.22.15-.422.198-.6.042-.158.074-.307.1-.45-.884.15-1.965.295-2.668.33zM11.894 7.78l-.077.16c-.078.16-.157.32-.236.488-.086.18-.172.364-.26.552l-.132.287a75.265 75.265 0 00-1.427 3.3c-.163.397-.327.807-.493 1.23-.15.38-.297.765-.45 1.164l-.02.06c-.15.396-.3.802-.453 1.22l-.01.027.72-.08a.213.213 0 01-.042-.006c.863-.106 2.01-.75 2.75-1.547.342-.367.652-.8.94-1.306.213-.377.413-.795.604-1.258.168-.405.328-.843.48-1.318-.196.105-.423.18-.673.235a2.184 2.184 0 01-.273.046c.806-.31 1.314-.905 1.683-1.64a2.816 2.816 0 01-.968.428c-.06.012-.116.022-.174.03l-.043.006h.002c.278-.118.514-.248.718-.403a2.571 2.571 0 00.637-.698l.063-.104.077-.154a8.107 8.107 0 00.367-.85l.03-.088a3.04 3.04 0 00.123-.463.733.733 0 01-.094.065c-.243.145-.66.277-.996.34l.663-.074-.664.073h-.017l-.1.017c.006-.003.01-.006.017-.008l-2.265.25-.013.022zM8.27 16.45c-.117.323-.236.654-.355.992l-.005.015c-.016.046-.032.094-.05.142-.08.227-.15.432-.31.9.264.12.475.435.675.793a1.44 1.44 0 00-.466-.99c1.293.06 2.41-.27 2.99-1.217.05-.084.096-.173.14-.268-.26.333-.59.474-1.2.44 0 0-.004 0-.005.002l.004-.002c.9-.404 1.354-.79 1.754-1.433.094-.153.186-.32.28-.503-.788.81-1.702 1.04-2.664.865l-.72.078a6.43 6.43 0 00-.067.183zM15.42.112c-.376.222-1 .85-1.748 1.763l.686 1.294c.48-.687.97-1.307 1.462-1.836l.058-.062c-.02.02-.04.04-.057.062-.16.176-.644.74-1.375 1.863.703-.035 1.784-.18 2.666-.33.262-1.47-.258-2.142-.258-2.142s-.66-1.07-1.436-.61zm-3.084 6.402a40.253 40.253 0 011.306-2.26l.04-.064c.224-.352.45-.693.677-1.02l-.685-1.293-.157.192c-.197.245-.403.51-.613.79a39.853 39.853 0 00-2.016 2.97l-.022.038.893 1.763c.19-.378.38-.752.575-1.118zm-3.73 8.32c.158-.406.319-.81.483-1.225.156-.394.32-.79.484-1.19a91.133 91.133 0 011.6-3.604l.205-.424c.12-.243.237-.485.36-.724a.125.125 0 01.02-.04l-.895-1.763-.044.07c-.207.34-.414.687-.617 1.042a38.056 38.056 0 00-1.092 2.04l-.094.193a24.573 24.573 0 00-1.258 3.087 18.492 18.492 0 00-.52 1.997l.896 1.77c.117-.317.24-.638.364-.963zm-1.376-.476a13.38 13.38 0 00-.234 1.692c0 .02-.004.04-.005.06-.28-.45-1.03-.888-1.026-.884.537.778.944 1.55 1.005 2.31-.29.058-.684-.027-1.14-.195.475.436.83.556.97.588-.434.03-.89.328-1.346.67.668-.27 1.21-.38 1.596-.29-.61 1.74-1.23 3.655-1.843 5.69a.538.538 0 00.364-.354c.11-.368.84-2.786 1.978-5.965l.097-.27.028-.078c.12-.332.246-.672.374-1.02l.09-.237v-.004L7.24 14.3c-.003.02-.01.04-.012.06z" />
										</svg>
									</div>
								</div>
								<div className="flex flex-col items-center justify-center  ">
									<p className="text-sm font-normal text-center text-white-200">
										DEBIAN
									</p>
									<div>
										<svg
											role="img"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											width="40"
											height="40"
											className="fill-[#A81D33]"
										>
											<title>Debian</title>
											<path d="M13.88 12.685c-.4 0 .08.2.601.28.14-.1.27-.22.39-.33a3.001 3.001 0 01-.99.05m2.14-.53c.23-.33.4-.69.47-1.06-.06.27-.2.5-.33.73-.75.47-.07-.27 0-.56-.8 1.01-.11.6-.14.89m.781-2.05c.05-.721-.14-.501-.2-.221.07.04.13.5.2.22M12.38.31c.2.04.45.07.42.12.23-.05.28-.1-.43-.12m.43.12l-.15.03.14-.01V.43m6.633 9.944c.02.64-.2.95-.38 1.5l-.35.181c-.28.54.03.35-.17.78-.44.39-1.34 1.22-1.62 1.301-.201 0 .14-.25.19-.34-.591.4-.481.6-1.371.85l-.03-.06c-2.221 1.04-5.303-1.02-5.253-3.842-.03.17-.07.13-.12.2a3.551 3.552 0 012.001-3.501 3.361 3.362 0 013.732.48 3.341 3.342 0 00-2.721-1.3c-1.18.01-2.281.76-2.651 1.57-.6.38-.67 1.47-.93 1.661-.361 2.601.66 3.722 2.38 5.042.27.19.08.21.12.35a4.702 4.702 0 01-1.53-1.16c.23.33.47.66.8.91-.55-.18-1.27-1.3-1.48-1.35.93 1.66 3.78 2.921 5.261 2.3a6.203 6.203 0 01-2.33-.28c-.33-.16-.77-.51-.7-.57a5.802 5.803 0 005.902-.84c.44-.35.93-.94 1.07-.95-.2.32.04.16-.12.44.44-.72-.2-.3.46-1.24l.24.33c-.09-.6.74-1.321.66-2.262.19-.3.2.3 0 .97.29-.74.08-.85.15-1.46.08.2.18.42.23.63-.18-.7.2-1.2.28-1.6-.09-.05-.28.3-.32-.53 0-.37.1-.2.14-.28-.08-.05-.26-.32-.38-.861.08-.13.22.33.34.34-.08-.42-.2-.75-.2-1.08-.34-.68-.12.1-.4-.3-.34-1.091.3-.25.34-.74.54.77.84 1.96.981 2.46-.1-.6-.28-1.2-.49-1.76.16.07-.26-1.241.21-.37A7.823 7.824 0 0017.702 1.6c.18.17.42.39.33.42-.75-.45-.62-.48-.73-.67-.61-.25-.65.02-1.06 0C15.082.73 14.862.8 13.8.4l.05.23c-.77-.25-.9.1-1.73 0-.05-.04.27-.14.53-.18-.741.1-.701-.14-1.431.03.17-.13.36-.21.55-.32-.6.04-1.44.35-1.18.07C9.6.68 7.847 1.3 6.867 2.22L6.838 2c-.45.54-1.96 1.611-2.08 2.311l-.131.03c-.23.4-.38.85-.57 1.261-.3.52-.45.2-.4.28-.6 1.22-.9 2.251-1.16 3.102.18.27 0 1.65.07 2.76-.3 5.463 3.84 10.776 8.363 12.006.67.23 1.65.23 2.49.25-.99-.28-1.12-.15-2.08-.49-.7-.32-.85-.7-1.34-1.13l.2.35c-.971-.34-.57-.42-1.361-.67l.21-.27c-.31-.03-.83-.53-.97-.81l-.34.01c-.41-.501-.63-.871-.61-1.161l-.111.2c-.13-.21-1.52-1.901-.8-1.511-.13-.12-.31-.2-.5-.55l.14-.17c-.35-.44-.64-1.02-.62-1.2.2.24.32.3.45.33-.88-2.172-.93-.12-1.601-2.202l.15-.02c-.1-.16-.18-.34-.26-.51l.06-.6c-.63-.74-.18-3.102-.09-4.402.07-.54.53-1.1.88-1.981l-.21-.04c.4-.71 2.341-2.872 3.241-2.761.43-.55-.09 0-.18-.14.96-.991 1.26-.7 1.901-.88.7-.401-.6.16-.27-.151 1.2-.3.85-.7 2.421-.85.16.1-.39.14-.52.26 1-.49 3.151-.37 4.562.27 1.63.77 3.461 3.011 3.531 5.132l.08.02c-.04.85.13 1.821-.17 2.711l.2-.42M9.54 13.236l-.05.28c.26.35.47.73.8 1.01-.24-.47-.42-.66-.75-1.3m.62-.02c-.14-.15-.22-.34-.31-.52.08.32.26.6.43.88l-.12-.36m10.945-2.382l-.07.15c-.1.76-.34 1.511-.69 2.212.4-.73.65-1.541.75-2.362M12.45.12c.27-.1.66-.05.95-.12-.37.03-.74.05-1.1.1l.15.02M3.006 5.142c.07.57-.43.8.11.42.3-.66-.11-.18-.1-.42m-.64 2.661c.12-.39.15-.62.2-.84-.35.44-.17.53-.2.83" />
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Credential;
