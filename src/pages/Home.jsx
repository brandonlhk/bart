import {Link} from "react-router-dom"
import {Button, Heading, Text, Center} from '@chakra-ui/react'

export default function Home() {
    return (
        <div>
            <Heading as='h1' textAlign="center">Balloon Analogue Risk Test (BART) for COR-STAT 1202 G3T03 experiment</Heading>

            <Text fontSize='lg' textAlign="center" margin="5"> Thank you for agreeing to participate in our experiment, rest assured that the result of the experiment does not indicate anything negative! </Text>

            {/* Also add the instructions of the game */}
                
            <Center margin="2">
                <Button as={Link} to="experiment" colorScheme='blue'>Start test</Button>
            </Center>

        </div>
    )
}