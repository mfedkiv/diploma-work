import {ChakraProvider} from '@chakra-ui/react'

import FileUpload from './components/file-upload/FileUpload';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import InfoAlert from './components/alert/InfoAlert'

import {BLOOD_INFO_MESSAGE} from './config/constants';

function App() {
    return (
        <ChakraProvider>
            <div id="root">
                <Header></Header>
                <InfoAlert text={BLOOD_INFO_MESSAGE}
                           styles={{
                               width: '600px',
                               margin: '40px auto 0',
                               borderRadius: '5px',
                           }}>
                </InfoAlert>
                <FileUpload></FileUpload>
                <Footer></Footer>
            </div>
        </ChakraProvider>
    );
};

export default App;
