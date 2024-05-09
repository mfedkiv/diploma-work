import React, {useState} from 'react';
import {Box, Button, FormControl, FormLabel, Input, useDisclosure} from '@chakra-ui/react';

import SpinnerOverlay from '../spinner-overlay/SpinnerOverlay';
import Modal from '../modal/Modal'

const UPLOAD_URL = 'http://127.0.0.1:5000/upload';

const FileUploadComponent = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()

    const [photoFile, setPhotoFile] = useState();
    const [xlsFile, setXlsFile] = useState();
    const [result, setResult] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handlePhotoChange = (e) => {
        setPhotoFile(e.target.files[0]);
    };

    const handleXlsChange = (e) => {
        setXlsFile(e.target.files[0]);
    };

    const handleSubmit = () => {
        setIsLoading(true);

        const formData = new FormData();

        formData.append('xray', photoFile);
        formData.append('blood', xlsFile);

        fetch(UPLOAD_URL, {
            method: 'POST',
            body: formData
        })
            .then((res) => res.json())
            .then((json) => {
                setIsLoading(false);
                setPhotoFile();
                setXlsFile();

                if (json.error) {
                    throw json;
                }

                setResult(json);
                onOpen();
            })
            .catch((error) => {
                setResult(error);
                onOpen();
            })
    };

    return (
        <>
            <Box position="fixed" left="50%" top="50%" transform="translate(-50%, -50%)">
                <Box position="relative" w="400px" m="auto" p="4" borderWidth="1px" borderRadius="md" display="flex"
                     flexDirection="column">
                    {isLoading && <SpinnerOverlay/>}
                    <FormControl mb={4}>
                        <FormLabel>Upload X-ray image:</FormLabel>
                        <Input alignContent="center" type="file" accept="image/*" onChange={handlePhotoChange}/>
                    </FormControl>

                    <FormControl mb={4}>
                        <FormLabel>Upload blood test results:</FormLabel>
                        <Input alignContent="center" type="file" accept=".xls, .xlsx" onChange={handleXlsChange}/>
                    </FormControl>

                    <Button colorScheme="blue" onClick={handleSubmit} mt="2">Submit</Button>
                </Box>

                <Modal result={result} isOpen={isOpen} onClose={onClose}/>
            </Box>
        </>
    );
};

export default FileUploadComponent;
