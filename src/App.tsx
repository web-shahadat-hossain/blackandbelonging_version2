// import Lenis from '@studio-freight/lenis';
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Application from "./Application";
import WebsiteLoader from "./components/common/WebsiteLoader/WebsiteLoader";
import ReactGA from "react-ga4";
import { STREAM_DETAILS } from "./utils/constant";

// import { useAppDispatch } from "./app/hooks";
// import { setLoading as setLoadingState } from "./features/loading/loading.slice";


ReactGA.initialize(STREAM_DETAILS.MEASUREMENT_ID);


function App() {
	const [loading, setLoading] = useState(true);
	
	// const dispatch = useAppDispatch();
	useEffect(() => {
		if (Number(localStorage.getItem("reload")) === 0) {
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		}
		localStorage.setItem("reload", JSON.stringify(Number(localStorage.getItem("reload")) + 1))
	}, [])

	useEffect(() => {
		ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: "Homepage" });
	}, [])


	// useEffect(() => {
	// 	const lenis = new Lenis();
	// 	function raf(time: any) {
	// 		lenis.raf(time);
	// 		requestAnimationFrame(raf);
	// 	}
	// 	requestAnimationFrame(raf);
	// }, []);
	// useEffect(() => {
	//   dispatch(setLoadingState(true));
	//   setTimeout(() => {
	//     dispatch(setLoadingState(false));
	//   }, 4500);
	// }, [])

	return (
		<>
			{loading && Number(localStorage.getItem("reload")) === 0 ? <WebsiteLoader /> : null}
			<Toaster
			// toastOptions={{ duration: 100000 }}
			/>
			<Application />
		</>
	)
}

export default App
