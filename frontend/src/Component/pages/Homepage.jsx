import React from 'react';
import profile from '../../assets/images/profile.jpeg';
import projects from '../../assets/images/projects.png';
import ttd from '../../assets/images/ttd.svg';
import lupakode from '../../assets/images/lupakode.png';
import reactIcon from '../../assets/icon/react.svg';
import codeIcon from '../../assets/icon/termius.svg';
import debianIcon from '../../assets/icon/debian.svg';
import expressIcon from '../../assets/icon/express.svg';
import nodeIcon from '../../assets/icon/node.svg';
import mongodbIcon from '../../assets/icon/mongodb.svg';
import githubIcon from '../../assets/icon/github.svg';
import githubTentacleIcon from '../../assets/icon/githubTentacle.svg';
import linkedinIcon from '../../assets/icon/linkedin.svg';

import ContainerItem from '../templates/container_content/ContainerItem';
const Homepage = () => {
	return (
		<React.Fragment>
			<div className="container px-5 pt-5">
				<div className="flex flex-col lg:flex-row">
					<div className=" lg:items-start lg:w-1/2 lg:flex lg:flex-col lg:justify-start">
						<ContainerItem
							className="w-full flex flex-col justify-center p-5 h-[600px] md:h-[450px] lg:h-[373px] lg:p-0"
							bottom="bottom-[-53px] md:bottom-0 lg:bottom-5"
							right="right-0 lg:right-5"
						>
							<div className="flex flex-col items-center  md:flex-row md:items-center lg:pt-8 lg:pl-12 lg:pr-[50px] lg:pb-16 lg:flex-row">
								<img
									src={profile}
									className="rounded-tl-[30px] rounded-br-[30px] object-cover mt-3 h-80 w-[250px]  md:w-[300px] md:h-[350px] lg:w-[300px] lg:h-[250px] "
									alt="photo profile"
								/>
								<div className="flex flex-col mt-5 md:ml-5 lg:justify-center lg:ml-5">
									<h2 className="text-sm text-white-200 font-bold md:text-base">
										A Web Developer
									</h2>
									<h1 className="text-white text-2xl my-3 font-bold md:text-4xl lg:text-xl xl:text-5xl">
										Effenril Agung Marpaung
									</h1>
									<h2 className="text-sm text-white-200 font-bold md:text-base">
										I am a Full-Stack Web based in Medan, Indonesia
									</h2>
								</div>
							</div>
						</ContainerItem>
					</div>
					<div className="flex flex-col  pt-5 lg:pt-0 lg:ml-5 lg:flex-col lg:w-1/2 ">
						<div className="flex flex-col ">
							<ContainerItem
								snow={false}
								className="overflow-y-auto flex flex-col justify-center"
							>
								<p className="text-white-400 whitespace-nowrap py-4 px-5 ">
									Leatest Work And Feature • Leatest Work And Feature • Leatest
									Work And Feature • Leatest Work And Feature • Leatest Work And
									Feature • Leatest Work And Feature • Leatest Work And Feature
									•
								</p>
							</ContainerItem>
						</div>
						<div className="flex flex-col justify-center pt-6  md:px-0 md:flex-row md:justify-evenly lg:flex-row lg:pt-5 lg:justify-around lg:h-full">
							<ContainerItem
								className=" w-full h-[300px] px-6 md:w-[287px] lg:w-[280px] lg:h-[300px] "
								bottom="bottom-[-23px]"
								right="right-0"
							>
								<div className="flex flex-col items-center">
									<img
										src={ttd}
										alt="Tanda Tangan"
										className="w-[130px] h-[160px]"
									/>
								</div>
								<p className="mb-[14px] mt-8 text-white-200">More About Me</p>
								<h2 className="text-xl text-white font-bold">Credentials</h2>
							</ContainerItem>

							<ContainerItem
								className="  w-full mt-5  h-[300px] px-6 md:w-[287px] md:mt-0 lg:w-[280px] lg:ml-5 lg:mb-5 "
								bottom="bottom-[-23px]"
								right="right-0"
							>
								<h2 className="text-2xl font-bold uppercase text-center">
									MY PROJECTS
								</h2>
								<img
									className="mt-3 m-auto"
									src={projects}
									width="163px"
									alt="Gambar Projects"
								/>
								<p className="mb-[14px] mt-8 text-white-200">SHOWCASE</p>
								<h2 className="text-white text-xl font-bold">Projects</h2>
							</ContainerItem>
						</div>
					</div>
				</div>

				{/* Middle */}

				<div className="grid grid-cols-12 grid-flow-row gap-5 mt-5">
					<ContainerItem
						className="col-span-12 lg:col-span-3 py-5 px-5"
						bottom="bottom-0"
						right="right-0"
					>
						<img src={lupakode} alt="Lupakode" className="mx-auto" />
						<p className="mb-[14px] mt-8 text-white-200">SHOWCASE</p>
						<h2 className="text-white text-xl font-bold">Projects</h2>
					</ContainerItem>

					<ContainerItem
						className="col-span-12 h-[240px] p-5 lg:col-span-6"
						bottom="bottom-0"
						right="right-0"
					>
						<div className="flex flex-row overflow-auto md:justify-center">
							<img className="w-16  mr-3" src={nodeIcon} alt="nodejs icon" />
							<img className="w-16  mr-3" src={reactIcon} alt="reactjs" />
							<img
								className="w-16  mr-3"
								src={mongodbIcon}
								alt="mongodb icon"
							/>
							<img
								className="w-16  mr-3"
								src={expressIcon}
								alt="express icon"
							/>
							<img className="w-16  mr-3" src={debianIcon} alt="debian icon" />
							<img className="w-16  mr-3" src={codeIcon} alt="code icon" />
							<img className="w-16  mr-3" src={githubIcon} alt="github icon" />
						</div>
						<p className="mb-[14px] mt-14 text-white-200">Specialization</p>
						<h2 className="text-white text-xl font-bold">Services Offering </h2>
					</ContainerItem>

					<ContainerItem
						className="col-span-12 lg:col-span-3 p-5"
						bottom="bottom-0"
						right="right-0"
					>
						<div className="flex flex-row justify-center">
							<div className="flex flex-row items-center justify-evenly h-[92px] w-[203px] rounded-[30px] bg-zinc-800">
								<img
									src={githubTentacleIcon}
									className="w-16 h-16 rounded-full bg-black"
									alt="Github"
								/>
								<img
									src={linkedinIcon}
									className="w-16 h-16 rounded-full"
									alt="Linkedin"
								/>
							</div>
						</div>
						<p className="mb-[14px] mt-14 text-white-200">Specialization</p>
						<h2 className="text-white text-xl font-bold">Services Offering </h2>
					</ContainerItem>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
