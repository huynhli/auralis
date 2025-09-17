import { useContext } from "react"
import { ScrollContext } from "../components/ScrollContext"
import { useMotionValueEvent } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export default function HomePage(){

	const navigate = useNavigate()
	const navHelper = (link: string) => {
		navigate(`${link}`)
	}

	const scrollYProgress = useContext(ScrollContext)

	// tester
	// useEffect(() => {console.log("Scroll progress: " + scrollYProgress)},[scrollYProgress]) --> doesn't work as MotionValue doesn't "change" object

	useMotionValueEvent(scrollYProgress!, "change", (latest)=>{console.log("Scroll progress: " + latest)})

	return (
		<div className={`flex flex-col items-center justify-center h-auto w-full mx-auto py-20 bg-[#0a0a0a]`}>
			{/* Hero */}
			<motion.div className={`w-[95%] max-w-[800px] flex flex-col h-[90vh] justify-center items-center mt-15 px-[10%] mx-auto mb-10 pb-8`}
				initial={{
					opacity: 0
				}}
				animate={{
					opacity: 1
				}}
				transition={{
					duration: 0.5,
					ease: "easeInOut"
				}}
			>
				<motion.h1 className={`text-3xl text-center`}>Running out of lofi songs on your playlists? Want something newer?</motion.h1>
				<div className={`h-1 w-full mx-3 mt-6 mb-3 border-t-[1px] border-white`}></div>
				<h2>
					You've come to the right place. And, it's free!
				</h2>
				<button className="my-6 rounded-lg bg-white text-black hover:bg-gray-300 hover:cursor-pointer px-5 py-2" onClick={() => navHelper('/generator')}>Generate a song</button>
			</motion.div>

			{/* Another page of stuff*/}
			<div className="h-[100vh] w-full">

			</div>
		</div>
	)
}
