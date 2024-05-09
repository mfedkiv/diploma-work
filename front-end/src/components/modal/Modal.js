import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text
} from '@chakra-ui/react'
  
const ModalWindow = ({result, onClose, isOpen}) => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Analysis result</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {result.error && (
                            <>
                                <Text mb={1} >Your blood test and X-ray results was not processed.</Text>
                                <Text mb={1} >Please see the error message: {result.message}</Text>
                            </>
                        )}
                        {!result.error && (
                            <>
                                <Text mb={1} >Your blood test and X-ray results have been successfully processed.</Text>
                                <Text mb={1}>According to the data obtained, <b>{result.pneumonia ? 'signs of pneumonia were detected' : 'no signs of pneumonia were detected'}</b>.</Text>
                                {result.pneumonia && <Text>It is recommended to consult a doctor or medical institution for consultation and treatment immediately.</Text>}
                            </>
                        )}
                    </ModalBody>
        
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ModalWindow;
