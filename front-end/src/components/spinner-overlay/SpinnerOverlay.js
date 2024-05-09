import React from 'react';
import {Spinner, Flex} from '@chakra-ui/react';

const SpinnerOverlay = () => {
    return (
        <Flex
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            backgroundColor="rgba(255, 255, 255, 0.8)"
            zIndex={9999}
            justifyContent="center"
            alignItems="center"
        >
            <Spinner size="xl" color="blue.500"/>
        </Flex>
    );
};

export default SpinnerOverlay;
