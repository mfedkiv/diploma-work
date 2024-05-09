import {
    Alert,
    AlertIcon
  } from '@chakra-ui/react'
  
const InfoAlert = ({text, styles}) => {
    return (
        <Alert status='info' style={styles}>
            <AlertIcon />
            {text}
        </Alert>
    );
};

export default InfoAlert;
