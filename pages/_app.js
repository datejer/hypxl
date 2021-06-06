import { ToastProvider } from 'react-toast-notifications';
import 'react-tippy/dist/tippy.css';
import '../styles/globals.scss';
import '../styles/Colors.module.scss';

function MyApp({ Component, pageProps }) {
	return (
		<ToastProvider>
			<Component {...pageProps} />
		</ToastProvider>
	);
}

export default MyApp;
