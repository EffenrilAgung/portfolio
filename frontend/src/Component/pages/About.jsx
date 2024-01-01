import ContainerItem from "../templates/container_content/ContainerItem";
import profile from "../../assets/images/profile.jpeg";

const About = () => {
    return(
        <div className="lg:container mx-5">
            <div className="flex flex-col mt-5">
                <ContainerItem snow={false} width="w-max">
                    <div className="w-[350px] h-[350px] flex justify-center items-center">
                        <div className="w-[310px] h-[292px] relative overflow-hidden rounded-[30px]">
                            <img src={profile} alt="" className="object-cover absolute" />
                        </div>
                    </div>
                </ContainerItem>

                {/* self sumarry */}

                <ContainerItem snow={false} top="-top-[255px]" left="left-4" className="mt-5">
                    <div className="w-full p-5 relative">
                        {/* garis snow */}
                        <div className="bg-sky-500 w-[1px] h-10 absolute top-0 left-10"></div>

                        {/* snow */}
                        <div className="absolute top-8 left-4">
                        <svg
								xmlns="http://www.w3.org/2000/svg"
								width="50"
								height="50"
								viewBox="0 0 50 50"
								fill=""
							>
								<path
									d="M24 6.00005C24.2269 6.00005 24.4446 6.09185 24.6051 6.25524C24.7655 6.41864 24.8557 6.64026 24.8557 6.87134V12.8406L27.0405 10.6253C27.1199 10.5443 27.2143 10.4801 27.3182 10.4362C27.4221 10.3924 27.5334 10.3698 27.6458 10.3698C27.7583 10.3698 27.8696 10.3924 27.9735 10.4362C28.0774 10.4801 28.1717 10.5443 28.2512 10.6253C28.3319 10.7056 28.3959 10.8015 28.4397 10.9073C28.4834 11.0132 28.506 11.1269 28.506 11.2417C28.506 11.3565 28.4834 11.4702 28.4397 11.5761C28.3959 11.6819 28.3319 11.7778 28.2512 11.8581L24.8557 15.3062V21.9614L30.5179 18.6338L31.765 13.9158C31.7943 13.8051 31.8448 13.7012 31.9135 13.6103C31.9821 13.5194 32.0678 13.4431 32.1654 13.3859C32.263 13.3287 32.3708 13.2916 32.4825 13.2767C32.5942 13.2619 32.7077 13.2696 32.8165 13.2994C32.9253 13.3293 33.0272 13.3806 33.1165 13.4505C33.2058 13.5205 33.2807 13.6076 33.3369 13.7071C33.3931 13.8065 33.4296 13.9162 33.4441 14.0299C33.4587 14.1437 33.4511 14.2592 33.4218 14.37L32.6299 17.401L37.7095 14.4164C37.9074 14.3008 38.1424 14.2701 38.3626 14.3309C38.5828 14.3918 38.7703 14.5392 38.8838 14.7408C38.9972 14.9423 39.0274 15.1816 38.9677 15.4058C38.9079 15.6301 38.7631 15.8209 38.5652 15.9365L33.4856 18.9211L36.4623 19.7368C36.5711 19.7666 36.6731 19.818 36.7624 19.8879C36.8516 19.9578 36.9265 20.045 36.9828 20.1444C37.039 20.2438 37.0754 20.3535 37.09 20.4673C37.1045 20.581 37.097 20.6966 37.0677 20.8074C37.0384 20.9181 36.988 21.0219 36.9193 21.1129C36.8506 21.2038 36.765 21.28 36.6673 21.3373C36.5697 21.3945 36.462 21.4316 36.3502 21.4465C36.2385 21.4613 36.125 21.4536 36.0163 21.4238L31.3827 20.1632L25.7205 23.4908L31.3827 26.8183L36.0163 25.5578C36.218 25.5011 36.4332 25.5216 36.6211 25.6156C36.809 25.7095 36.9565 25.8703 37.0358 26.0676V26.1695C37.0795 26.3712 37.0557 26.582 36.9683 26.7684C36.8809 26.9548 36.7349 27.1061 36.5533 27.1984H36.4623L33.4856 28.0141L38.5652 31.045C38.7631 31.1593 38.9084 31.3491 38.969 31.5724C39.0296 31.7958 39.0006 32.0345 38.8883 32.2361C38.8327 32.3359 38.7584 32.4236 38.6695 32.4942C38.5806 32.5647 38.479 32.6168 38.3704 32.6473C38.151 32.709 37.9165 32.6795 37.7186 32.5652L32.639 29.5805L33.4309 32.6115C33.4964 32.8231 33.4801 33.0522 33.3854 33.252C33.2906 33.4518 33.1246 33.6073 32.9212 33.6867H32.8119C32.609 33.745 32.3921 33.7241 32.2035 33.6281C32.0149 33.5321 31.8683 33.3679 31.7924 33.1676V33.075L30.5452 28.357L24.883 25.0201V31.6846L28.2785 35.1327C28.4184 35.2885 28.5019 35.4883 28.5152 35.699C28.5284 35.9096 28.4706 36.1186 28.3513 36.2913L28.2785 36.3747C28.1325 36.5267 27.9364 36.6183 27.7281 36.6319C27.5197 36.6456 27.3137 36.5804 27.1497 36.4489L27.0678 36.3747L24.883 34.1594V40.1287C24.883 40.3598 24.7929 40.5814 24.6324 40.7448C24.4719 40.9082 24.2543 41 24.0273 41C23.8004 41 23.5827 40.9082 23.4222 40.7448C23.2618 40.5814 23.1716 40.3598 23.1716 40.1287V34.1409L20.9868 36.3562C20.8408 36.5081 20.6447 36.5997 20.4364 36.6134C20.228 36.6271 20.0221 36.5619 19.858 36.4304L19.7761 36.3562C19.6362 36.2004 19.5527 36.0006 19.5395 35.7899C19.5262 35.5792 19.584 35.3703 19.7033 35.1976L19.7761 35.1142L23.1716 31.6661V25.0016L17.5094 28.3385L16.2623 33.0564C16.2005 33.25 16.0779 33.4175 15.9134 33.5331C15.7489 33.6487 15.5516 33.7059 15.3519 33.696H15.2518C15.0553 33.6438 14.8838 33.5216 14.7685 33.3514C14.6532 33.1813 14.6018 32.9746 14.6237 32.7691V32.6671L15.4157 29.6361L10.2905 32.5559C10.1938 32.6145 10.0866 32.6531 9.9751 32.6694C9.86365 32.6858 9.75011 32.6796 9.64102 32.6512C9.53192 32.6228 9.42941 32.5727 9.33935 32.5038C9.2493 32.435 9.17347 32.3488 9.11622 32.25C9.01247 32.0448 8.98763 31.8076 9.04655 31.5848C9.10548 31.3619 9.24393 31.1695 9.43483 31.045L14.5144 28.0604L11.5377 27.2447C11.3476 27.1819 11.183 27.0571 11.0695 26.8895C10.956 26.722 10.8998 26.5211 10.9096 26.3178V26.2066C10.9729 26.0147 11.0962 25.8493 11.2605 25.7355C11.4249 25.6216 11.6214 25.5657 11.8199 25.5763H11.92L16.5536 26.8369L22.2795 23.4908L16.6173 20.1632L11.9837 21.4238C11.8706 21.4845 11.7456 21.5187 11.6177 21.5238C11.4899 21.5288 11.3627 21.5046 11.2452 21.453C11.1278 21.4014 11.0233 21.3236 10.9392 21.2254C10.8552 21.1272 10.7939 21.0111 10.7598 20.8856C10.7257 20.7601 10.7196 20.6284 10.7421 20.5002C10.7645 20.372 10.8149 20.2505 10.8895 20.1447C10.9642 20.039 11.0611 19.9516 11.1733 19.889C11.2855 19.8264 11.41 19.7903 11.5377 19.7831L14.5144 18.9675L9.43483 15.9365C9.23686 15.8222 9.09159 15.6325 9.03099 15.4091C8.97038 15.1857 8.9994 14.947 9.11167 14.7454C9.22394 14.5438 9.41025 14.3959 9.62962 14.3342C9.849 14.2725 10.0835 14.302 10.2814 14.4164L15.361 17.401L14.5691 14.37C14.5099 14.1463 14.5405 13.9078 14.654 13.7071C14.7675 13.5063 14.9547 13.3597 15.1744 13.2994C15.3941 13.2392 15.6283 13.2703 15.8255 13.3859C16.0227 13.5015 16.1667 13.6921 16.2258 13.9158L17.4639 18.6338L23.1352 21.9706V15.3154L19.7397 11.8674C19.5887 11.697 19.5052 11.4758 19.5052 11.2463C19.5052 11.0169 19.5887 10.7956 19.7397 10.6253C19.8192 10.5443 19.9135 10.4801 20.0174 10.4362C20.1213 10.3924 20.2326 10.3698 20.3451 10.3698C20.4575 10.3698 20.5688 10.3924 20.6727 10.4362C20.7766 10.4801 20.8709 10.5443 20.9504 10.6253L23.1352 12.8406V6.87134C23.1352 6.75614 23.1576 6.64208 23.2012 6.53576C23.2448 6.42944 23.3086 6.33297 23.389 6.25194C23.4695 6.17092 23.5649 6.10693 23.6697 6.06369C23.7746 6.02046 23.8869 5.99882 24 6.00005Z"
									fill="#2984D9"
								/>
							</svg>
                        </div>

                        <h1 className="text-2xl mb-4 mt-20">Effenril Agung Marpaung</h1>
                        <p>I am a Full-Stack Web Developer based in Medan with a focus on web development, illustration and visual development. I have several projects according to industry needs.</p>
                    </div>
                </ContainerItem>
            </div>
        </div>
    )
}

export default About;