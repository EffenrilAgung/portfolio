import React from 'react';
import ContainerItem from '../templates/container_content/ContainerItem';
import Input from '../templates/input/Input';
import Button from '../fragments/button';

const Contact = () => {
	return (
		<React.Fragment>
			<div className=" mx-5 lg:container">
				{/* Contact Info */}
				<div className="grid grid-cols-12 grid-flow-row gap-5 lg:pl-5 xl:p-0 ">
					<div className="col-span-12 mt-10 lg:col-span-3 ">
						<h1 className="text-xl  font-bold uppercase">Contact Info</h1>
						<div className="flex flex-col ">
							<div className="flex flex-row mt-5 items-center">
								<div className="bg-gradient-to-br from-[#343434] from-[47.48%] via-[#3D3D3D94] via-100% p-2 rounded-md mr-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="40"
										height="40"
										viewBox="0 0 40 40"
										fill="none"
									>
										<path
											d="M36.6666 10C36.6666 8.16667 35.1666 6.66667 33.3333 6.66667H6.66659C4.83325 6.66667 3.33325 8.16667 3.33325 10V30C3.33325 31.8333 4.83325 33.3333 6.66659 33.3333H33.3333C35.1666 33.3333 36.6666 31.8333 36.6666 30V10ZM33.3333 10L19.9999 18.3333L6.66659 10H33.3333ZM33.3333 30H6.66659V13.3333L19.9999 21.6667L33.3333 13.3333V30Z"
											fill="#D9D9D9"
										/>
									</svg>
								</div>
								<div className="flex flex-col">
									<p className="uppercase text-white-200 font-medium  text-lg">
										Email
									</p>
									<p className="text-base font-bold">
										effenrilagung300@gmail.com
									</p>
								</div>
							</div>
							<div className="flex flex-row mt-[50px] items-center">
								<div className="bg-gradient-to-br from-[#343434] from-[47.48%] via-[#3D3D3D94] via-100% p-2 rounded-md mr-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="40"
										height="40"
										viewBox="0 0 40 40"
										fill="none"
									>
										<path
											d="M34.287 31.0541L35.1686 31.9408L34.2853 31.0541H34.287ZM13.277 27.4608L14.157 26.5741L13.2753 27.4608H13.277ZM6.40029 9.80745L5.52029 8.92245L6.40196 9.80912L6.40029 9.80745ZM26.297 26.0675L27.0586 25.3125L25.2936 23.5391L24.537 24.2941L26.297 26.0675ZM29.607 24.9958L32.792 26.7275L33.9836 24.5308L30.8003 22.8008L29.607 24.9958ZM33.4036 30.1675L31.037 32.5225L32.7986 34.2941L35.1653 31.9408L33.4036 30.1675ZM29.5936 33.2791C27.177 33.5058 20.927 33.3041 14.157 26.5741L12.3936 28.3458C19.7803 35.6908 26.812 36.0508 29.827 35.7691L29.592 33.2791H29.5936ZM14.157 26.5741C7.70529 20.1575 6.63529 14.7625 6.50196 12.4208L4.00529 12.5625C4.17196 15.5091 5.49696 21.4891 12.3936 28.3458L14.157 26.5741ZM16.4486 16.2741L16.927 15.7975L15.167 14.0258L14.6886 14.5008L16.4503 16.2725L16.4486 16.2741ZM17.307 9.73912L15.207 6.93245L13.2053 8.43245L15.3053 11.2375L17.307 9.73912ZM8.13862 6.32079L5.52196 8.92079L7.28529 10.6941L9.90029 8.09412L8.13862 6.32079ZM15.5686 15.3875C14.6853 14.5008 14.6853 14.5008 14.6853 14.5041H14.682L14.677 14.5108C14.5983 14.5911 14.5274 14.6787 14.4653 14.7725C14.3753 14.9058 14.277 15.0808 14.1936 15.3025C13.9907 15.8746 13.9401 16.4898 14.047 17.0875C14.2703 18.5291 15.2636 20.4341 17.807 22.9641L19.5703 21.1908C17.1886 18.8241 16.622 17.3841 16.517 16.7041C16.467 16.3808 16.5186 16.2208 16.5336 16.1841C16.542 16.1608 16.5453 16.1591 16.5336 16.1741C16.5189 16.1972 16.5022 16.219 16.4836 16.2391L16.467 16.2558C16.4616 16.261 16.456 16.266 16.4503 16.2708L15.567 15.3875H15.5686ZM17.807 22.9641C20.352 25.4941 22.267 26.4808 23.7103 26.7008C24.4486 26.8141 25.0436 26.7241 25.4953 26.5558C25.7479 26.4623 25.9841 26.3296 26.1953 26.1625C26.224 26.1385 26.2518 26.1135 26.2786 26.0875L26.2903 26.0775L26.2953 26.0725L26.297 26.0691C26.297 26.0691 26.2986 26.0675 25.417 25.1808C24.5336 24.2941 24.5386 24.2925 24.5386 24.2925L24.542 24.2891L24.5453 24.2858L24.5553 24.2775L24.572 24.2608C24.592 24.2428 24.6131 24.2261 24.6353 24.2108C24.652 24.1991 24.647 24.2041 24.6236 24.2141C24.582 24.2291 24.4186 24.2808 24.0903 24.2308C23.4003 24.1241 21.9503 23.5575 19.5703 21.1908L17.807 22.9641ZM15.207 6.93079C13.507 4.66412 10.167 4.30412 8.13862 6.32079L9.90029 8.09412C10.787 7.21245 12.3603 7.30412 13.2053 8.43245L15.2053 6.93079H15.207ZM6.50362 12.4225C6.47029 11.8458 6.73529 11.2425 7.28529 10.6958L5.52029 8.92245C4.62529 9.81245 3.92029 11.0725 4.00529 12.5625L6.50362 12.4225ZM31.037 32.5225C30.5803 32.9791 30.087 33.2358 29.5953 33.2808L29.827 35.7691C31.052 35.6541 32.0536 35.0375 32.8003 34.2958L31.037 32.5225ZM16.927 15.7975C18.5686 14.1658 18.6903 11.5875 17.3086 9.74079L15.307 11.2391C15.9786 12.1375 15.8786 13.3158 15.1653 14.0275L16.927 15.7975ZM32.7936 26.7291C34.1553 27.4691 34.367 29.2125 33.4053 30.1691L35.1686 31.9408C37.402 29.7191 36.7136 26.0141 33.9853 24.5325L32.7936 26.7291ZM27.0586 25.3141C27.6986 24.6775 28.7286 24.5208 29.6086 24.9975L30.802 22.8025C28.9953 21.8191 26.7553 22.0908 25.2953 23.5408L27.0586 25.3141Z"
											fill="#D9D9D9"
										/>
									</svg>
								</div>
								<div className="flex flex-col">
									<p className="uppercase text-white-200 font-medium  text-lg">
										contact us
									</p>
									<p className="text-base font-bold">+62-853-3908-0780</p>
								</div>
							</div>
							<div className="flex flex-row mt-[50px] items-center">
								<div className="bg-gradient-to-br from-[#343434] from-[47.48%] via-[#3D3D3D94] via-100% p-2 rounded-md mr-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="30"
										height="30"
										viewBox="0 0 24 24"
									>
										<path
											fill="white"
											d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173c-1.101 2.047-2.744 3.74-4.098 5.614c-.619.858-1.244 1.75-1.669 2.727c-.141.325-.263.658-.383.992c-.121.333-.224.673-.34 1.008c-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887c-.284-.874-.581-1.713-1.019-2.525c-.51-.944-1.145-1.817-1.79-2.671zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18c.247.31.494.622.737.936l4.984-5.925l-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689l-.058-.05zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626c.176.319.323.683.377 1.045c.068.446.085.773.012 1.22l-.003.016l3.836-4.561A8.382 8.382 0 0 0 14.67.439zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018z"
										/>
									</svg>
								</div>
								<div className="flex flex-col">
									<p className="uppercase text-white-200 font-medium  text-lg">
										Location
									</p>
									<p className="text-base font-bold">
										JL. Sei Mati, Medan Labuhan Sumatera Utara Indonesia
									</p>
								</div>
							</div>
						</div>
						{/* Social Share */}
						<div className="grid grid-cols-3 gap-5 mt-10 justify-items-center md:justify-items-center md:grid-cols-8 lg:grid-cols-3">
							<div className=" bg-gradient-to-br from-[#343434] from-[47.48%] via-[#3D3D3D94] via-100% rounded-full w-[50px] h-[50px] flex flex-col items-center justify-center p-5">
								<div className="">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="30"
										height="30"
										viewBox="0 0 44 43"
										fill="none"
									>
										<path
											d="M28.3811 6.39082H32V0.269548C30.2478 0.0873474 28.4873 -0.0026069 26.7257 5.74863e-05C21.4899 5.74863e-05 17.9095 3.19544 17.9095 9.04722V14.0905H12V20.9433H17.9095V38.4986H24.9933V20.9433H30.8835L31.769 14.0905H24.9933V9.72094C24.9933 7.69977 25.5322 6.39082 28.3811 6.39082Z"
											fill="#F9F9F9"
										/>
									</svg>
								</div>
							</div>
							<div className=" bg-gradient-to-br from-[#343434] from-[47.48%] via-[#3D3D3D94] via-100% to-100% rounded-full w-[50px] h-[50px] flex flex-col items-center justify-center p-5">
								<div className="">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="30"
										height="30"
										viewBox="0 0 1664 1408"
										className="fill-white"
									>
										<path d="M640 960q0 40-12.5 82t-43 76t-72.5 34t-72.5-34t-43-76t-12.5-82t12.5-82t43-76t72.5-34t72.5 34t43 76t12.5 82m640 0q0 40-12.5 82t-43 76t-72.5 34t-72.5-34t-43-76t-12.5-82t12.5-82t43-76t72.5-34t72.5 34t43 76t12.5 82m160 0q0-120-69-204t-187-84q-41 0-195 21q-71 11-157 11t-157-11q-152-21-195-21q-118 0-187 84t-69 204q0 88 32 153.5t81 103t122 60t140 29.5t149 7h168q82 0 149-7t140-29.5t122-60t81-103t32-153.5m224-176q0 207-61 331q-38 77-105.5 133t-141 86t-170 47.5t-171.5 22t-167 4.5q-78 0-142-3t-147.5-12.5t-152.5-30t-137-51.5t-121-81t-86-115Q0 992 0 784q0-237 136-396q-27-82-27-170q0-116 51-218q108 0 190 39.5T539 163q147-35 309-35q148 0 280 32q105-82 187-121t189-39q51 102 51 218q0 87-27 168q136 160 136 398" />
									</svg>
								</div>
							</div>
							<div className=" bg-gradient-to-br from-[#343434] from-[47.48%] via-[#3D3D3D94] via-100% rounded-full w-[50px] h-[50px] flex flex-col items-center justify-center p-5">
								<div className="">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="30"
										height="30"
										viewBox="0 0 32 32"
										className="hover:fill-[#0A66C2] fill-white"
									>
										<path d="M27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047c-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739V11.999h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468c4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912a2.75 2.75 0 0 1-2.751-2.756a2.753 2.753 0 1 1 2.751 2.756m2.374 17.359H4.74V12h4.749zM29.636 0H2.36C1.057 0 0 1.031 0 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307V2.307C32 1.031 30.932 0 29.631 0z" />
									</svg>
								</div>
							</div>
						</div>
					</div>

					{/* Message */}
					<div className="col-span-12 mt-16 lg:col-span-7  lg:col-start-5 lg:mt-10 xl:col-span-8 xl:col-start-6">
						<ContainerItem
							snow={false}
							className="pt-8 px-4 pb-5 lg:pt-[60px] lg:px-10 lg:pb-5"
						>
							<div className="flex flex-col">
								<h2 className="text-xl lg:text-3xl">
									Let's Work <span className="text-blue">Together</span>
								</h2>
								<Input placeholder="Name *" />
								<Input placeholder="Email *" />
								<Input placeholder="Your Subject *" />
								<Input textarea={true} placeholder="Message *" rows="3" />
							</div>
							<Button className="mt-10 bg-white-300 hover:bg-white hover:text-black font-bold text-center py-3 rounded-md cursor-pointer">
								Send Message
							</Button>
						</ContainerItem>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
