import { useContext, useState } from "react"
import { ScrollContext } from "./ScrollContext"
import { WindowSizeContext } from "./WindowSizeContext"
import { motion, useMotionValueEvent, useTransform } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function Header(){

	const navigate = useNavigate()
	const navHelper = (link: string) => {
		navigate(`${link}`)
	}

	const [navOpen, setNavOpen] = useState<boolean>(false)

	const scrollYProgress = useContext(ScrollContext)
	const size = useContext(WindowSizeContext)
	if (!size) return null

	const smallPageWidth = 1148

	const [atTop, setAtTop] = useState<boolean>(true)
	useMotionValueEvent(scrollYProgress!, "change", (latest) => {
		setAtTop(latest === 0)
	})
	const borderBottomTransform = useTransform(scrollYProgress!, [0, 0.05], [0, 1])

	// const [expansion, setExpansion] = useState<number>(0)

	// TODO disable scrolling when small navbar is open

	return (
		<header className="fixed top-0 left-0 w-full h-20 flex flex-col justify-center items-center bg-[#0a0a0a]">
			<motion.div className={`flex flex-row w-full max-w-[2000px] justify-between items-center top-0 left-0 h-20 px-2 border-gray-500`}
				style={{
					borderBottomWidth: borderBottomTransform,
				}}
			>

				{/* logo + (headers for big enough page)*/}
				<motion.div className="h-full flex flex-row"
					initial={{
						opacity: 0
					}}
					animate={{
						opacity: 1
					}}
					transition={{
						opacity: {duration: 1.2, ease: "easeInOut"}
					}}
				>
					
					{/* logo */}
					<motion.div className="logo flex items-center h-full ml-4 hover:cursor-pointer"
						onClick={() => navHelper("/")}
						// TODO change this later to css snake anim on each letter
						whileHover={{ y: -5, opacity: 0.5 }}   
						transition={{ y: {duration: 0.4, repeat: 3, repeatType: "mirror", ease: "easeInOut"} }}
					>
						<img 
							src="/bauralis_logo.png" 
							className="
								w-auto h-15
								"
						/>
					</motion.div>

					{ size.width < smallPageWidth ? 
						""
						:
						<div className="ml-10 flex flex-row">
							{/* generator (track with length, bpm, soloing instruments), genre identifier, etc*/}
							<motion.button className="relative group w-auto h-auto my-6 px-5 rounded-4xl flex flex-row justify-center items-center 
								hover:cursor-pointer
								hover:bg-gray-600 text-gray-400 hover:text-white
								"
								initial={{
									y: 40,
									opacity: 0
								}}
								animate={{
									y: 0,
									opacity: 1
								}}
								transition={{
									duration: 0.7
								}}
							>
								<h1 className="mr-2 text-lg">Tools</h1> 
								<div className="relative w-5 h-5">
									<div className="absolute top-[50%] left-0 w-3 h-[2px] bg-gray-400 group-hover:bg-white rotate-45 transition-transform duration-300 ease-in-out group-hover:-rotate-45"/>
									<div className="absolute top-[50%] right-0 w-3 h-[2px] bg-gray-400 group-hover:bg-white -rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-45"/>
								</div>

								{/* tools expansion div */}
								<div className={`absolute group-hover:flex
								hidden h-[250px] w-120 bottom-[-250px] left-0 rounded-md border-gray-500 border-1 flex flex-row justify-center items-center`}>
									<div className="flex flex-col h-full w-[30%]">
										<button className="h-full">WIP</button>
										<button className="h-full">WIP</button>
										<button className="h-full">WIP</button>
									</div>
									<div className="w-[1px] h-[90%] bg-white"/>
									<div className="flex flex-col h-full flex-grow">
										<button className="h-full">WIP</button>
										<button className="h-full">WIP</button>
									</div>
								</div>
							</motion.button>

							{/* In-site docs (like tailwind docs) + link to github + FAQ + contact */}
							<motion.button className="relative group w-auto h-auto my-6 px-3 rounded-4xl flex flex-row justify-center items-center 
								hover:cursor-pointer
								hover:bg-gray-600 text-gray-400 hover:text-white
								"
								initial={{
									y: 40,
									opacity: 0
								}}
								animate={{
									y: 0,
									opacity: 1
								}}
								transition={{
									delay: 0.1,
									duration: 0.7
								}}
							>
								<h1 className="mr-2 text-lg">Docs</h1> 
								<div className="relative w-5 h-5">
									<div className="absolute top-[50%] left-0 w-3 h-[2px] bg-white rotate-45 transition-transform duration-300 ease-in-out group-hover:-rotate-45"/>
									<div className="absolute top-[50%] right-0 w-3 h-[2px] bg-white -rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-45"/>
								</div>

								{/* tools expansion div */}
								<div className={`absolute group-hover:flex
								hidden h-[250px] w-120 bottom-[-250px] left-[-109px] rounded-md border-gray-500 border-1 flex flex-row justify-center items-center`}>
									<div className="flex flex-col h-full w-[30%]">
										<button className="h-full">WIP</button>
										<button className="h-full">WIP</button>
										<button className="h-full">WIP</button>
									</div>
									<div className="w-[1px] h-[90%] bg-white"/>
									<div className="flex flex-col h-full flex-grow">
										<button className="h-full">WIP</button>
										<button className="h-full">WIP</button>
									</div>
								</div>
							</motion.button>

							{/* What does this tool do? How does it work? Is it free? Why should I sign up?*/}
							<motion.button className="relative group w-auto h-auto my-6 px-3 rounded-4xl flex flex-row justify-center items-center 
								hover:cursor-pointer
								hover:bg-gray-600 text-gray-400 hover:text-white
								"
								initial={{
									y: 40,
									opacity: 0
								}}
								animate={{
									y: 0,
									opacity: 1
								}}
								transition={{
									delay: 0.2,
									duration: 0.7
								}}
							>
								<h1 className="mr-2 text-lg">About</h1> 
								<div className="relative w-5 h-5">
									<div className="absolute top-[50%] left-0 w-3 h-[2px] bg-white rotate-45 transition-transform duration-300 ease-in-out group-hover:-rotate-45"/>
									<div className="absolute top-[50%] right-0 w-3 h-[2px] bg-white -rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-45"/>
								</div>

								{/* tools expansion div */}
								<div className={`absolute group-hover:flex
								hidden h-[250px] w-120 bottom-[-250px] left-[-201px] rounded-md border-gray-500 border-1 flex flex-row justify-center items-center`}>
									<div className="flex flex-col h-full w-[30%]">
										<button className="h-full">WIP</button>
										<button className="h-full">WIP</button>
										<button className="h-full">WIP</button>
									</div>
									<div className="w-[1px] h-[90%] bg-white"/>
									<div className="flex flex-col h-full flex-grow">
										<button className="h-full">WIP</button>
										<button className="h-full">WIP</button>
									</div>
								</div>
							</motion.button>
						</div>
					}
					
				</motion.div>



				{/* sign up OR get demo OR (nav bar on small) */}
				{/* if small, always same bar */}
				{ size.width < smallPageWidth ?
					<div className="
							flex items-center relative
							w-10 h-10 mr-5 rounded-full border-1
							border-gray-500 hover:border-white
							group
						"
						onClick={() => setNavOpen(prev => !prev)}
					>
						<div 
							className={`
								bg-white h-[1px] w-[40%] absolute top-[40%] left-[30%]
								transition-transform group-hover:duration-300 group-hover:ease-in-out 
								${navOpen ? "-rotate-90" : "group-hover:-rotate-35"}
							`}
						/>
						<div 
							className={`
								bg-white h-[1px] w-[40%] absolute bottom-[40%] left-[30%]
								transition-transform group-hover:duration-300 group-hover:ease-in-out 
								${navOpen ? "-rotate-90" : "group-hover:-rotate-35"}
							`}
						/>
					</div>
					:
					// else
					// if at top, vs going down
					atTop ? 
						<div className="w-auto h-full flex flex-row items-center justify-right">
							<motion.button className="w-auto px-2 mr-3 h-8 text-center flex items-center rounded-lg border-1 border-gray-500 hover:border-white hover:cursor-pointer"
								onClick={() => navHelper('/contact')}
								initial={{
									y: 60,
									opacity: 0
								}}
								animate={{
									y: 0,
									opacity: 1
								}}
								transition={{
									delay: 0.3,
									duration: 0.7, 
									ease: "easeInOut"
								}}
							>
								Contact
							</motion.button>
							<motion.div className="w-[1px] h-8 bg-white" 
								initial={{
									opacity: 0
								}}
								animate={{
									opacity: 1
								}}
								transition={{
									duration: 2, ease: "easeInOut"
								}}
							/>
							<motion.button className="w-auto px-2 ml-3 mr-2 h-8 text-center flex items-center rounded-lg border-1 border-gray-500 hover:border-white hover:cursor-pointer"
								onClick={() => navHelper('/login')}
								initial={{
									y: 60,
									opacity: 0
								}}
								animate={{
									y: 0,
									opacity: 1
								}}
								transition={{
									delay: 0.45,
									duration: 0.7, 
									ease: "easeInOut"
								}}
							>
								Log in
							</motion.button>
							<motion.button className="w-auto px-2 mr-2 h-8 text-center flex items-center rounded-lg bg-white text-black hover:bg-gray-300 hover:cursor-pointer"
								onClick={() => navHelper('/signup')}
								initial={{
									y: 60,
									opacity: 0
								}}
								animate={{
									y: 0,
									opacity: 1
								}}
								transition={{
									delay: 0.6,
									duration: 0.7, 
									ease: "easeInOut"
								}}
							>
								Sign up
							</motion.button>
						</div>
						:
						// else at bottom
						<motion.button className="w-auto px-4 mr-5 h-10 rounded-lg text-black bg-white hover:bg-gray-300 hover:cursor-pointer"
							onClick={() => navHelper('/generator')}
							initial={{
								x: 100,
								opacity: 0
							}}
							animate={{
								x: 0,
								opacity: 1
							}}
							transition={{
								duration: 0.4, ease: "easeInOut"
							}}
						>
							Generate a song
						</motion.button>
				}

			</motion.div>
			

			{/* small nav bar */}
			{ navOpen ? 
				<motion.div className="absolute bottom-[-423px] bg-black flex flex-col justify-center items-center w-full h-auto my-10 hover:cursor-pointer"
					initial={{
						y: -100,
						opacity: 0
					}}
					animate={{
						y: 0,
						opacity: 1
					}}
					transition={{
						y: {delay: 0,
						duration: 0.1,
						ease: "easeIn"},
						opacity: {
							duration: 0.4,
							ease: "easeIn"
						}
					}}
				
				>
					<motion.button className="flex justify-center items-center w-[90%] mt-5 mb-2 py-3 bg-white text-black rounded-lg"
						initial={{
							y: -100,
							opacity: 0
						}}
						animate={{
							y: 0,
							opacity: 1
						}}
						transition={{
							delay: 0,
							duration: 0.2,
							ease: "easeIn"
						}}
					>
						Sign up
					</motion.button>
					<motion.button className="flex justify-center items-center w-[90%] mt-1 mb-8 py-3 border-1 rounded-lg"
						initial={{
							y: -100,
							opacity: 0
						}}
						animate={{
							y: 0,
							opacity: 1
						}}
						transition={{
							delay: 0,
							duration: 0.2,
							ease: "easeIn"
						}}
					>
						Login
					</motion.button>
					<motion.button className="flex flex-row justify-center items-center w-[95%] my-1 py-2 border-1 rounded-lg"
						initial={{
							y: -100,
							opacity: 0
						}}
						animate={{
							y: 0,
							opacity: 1
						}}
						transition={{
							delay: 0.05,
							duration: 0.2,
							ease: "easeIn"
						}}
					>
						<h1>Tools</h1>
						<div><div/><div/></div>
					</motion.button>
					<motion.button className="flex justify-center items-center w-[95%] my-1 py-2 border-1 rounded-lg"
						initial={{
							y: -100,
							opacity: 0
						}}
						animate={{
							y: 0,
							opacity: 1
						}}
						transition={{
							delay: 0.1,
							duration: 0.2,
							ease: "easeIn"
						}}
					><h1>Docs</h1></motion.button>
					<motion.button className="flex justify-center items-center w-[95%] my-1 py-2 border-1 rounded-lg"
						initial={{
							y: -100,
							opacity: 0
						}}
						animate={{
							y: 0,
							opacity: 1
						}}
						transition={{
							delay: 0.15,
							duration: 0.2,
							ease: "easeIn"
						}}
					><h1>About</h1></motion.button>
					<motion.button className="flex justify-center items-center w-[95%] mt-1 mb-7 py-2 border-1 rounded-lg"
						initial={{
							y: -100,
							opacity: 0
						}}
						animate={{
							y: 0,
							opacity: 1
						}}
						transition={{
							delay: 0.2,
							duration: 0.2,
							ease: "easeIn"
						}}
					><h1>Contact Us</h1></motion.button>
				</motion.div>
				: 
				""
			}
		</header>
	)
}
