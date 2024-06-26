import {ChakraProvider, CSSReset, Box, Flex, extendTheme} from '@chakra-ui/react';
import Sidebar from './features/shared/Sidebar';
import MainContent from './features/shared/MainContent';
import {Provider} from "react-redux";
import {store} from "./store";
import "react-toastify/dist/ReactToastify.css";
import {Bounce, ToastContainer} from "react-toastify";

const theme = extendTheme(/* your theme configuration */);

function App() {
    return (
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <CSSReset/>
                <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Bounce}
                />
                <Flex w="100vw">
                    <Box w="250px">
                        <Sidebar/>
                    </Box>
                    <Flex flex="1" direction="column" maxWidth='100%'>
                        <MainContent/>
                    </Flex>
                </Flex>
            </ChakraProvider>
        </Provider>
    );
}

export default App;