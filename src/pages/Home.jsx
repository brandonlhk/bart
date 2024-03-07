import {Link} from "react-router-dom"
import {Box, Button, Heading, Text, Center, Card, CardHeader, CardBody, CardFooter, OrderedList, ListItem,
    Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, 
    StepStatus, StepTitle, Stepper, useSteps} from '@chakra-ui/react'

export default function Home() {
    const steps = [
        { title: 'First', description: 'Explaination' },
        { title: 'Second', description: 'Tutorial' },
        { title: 'Third', description: 'Experiment' },
        { title: 'Fourth', description: 'Summary' },
    ]

    const {activeStep} = useSteps({
        index: 1,
        count: steps.length,
    })

    return (
        <div style={{backgroundColor: "#3183cf"}}>
            <Center h="100vh">
                <Card variant="elevated" maxW="750px" minW="750px">
                    <CardHeader>
                        <Heading as="h3" size="">
                            Balloon Analogue Risk Test (BART) for COR-STAT 1202 G3T03 experiment
                        </Heading>
                    </CardHeader>

                    <CardBody>
                        <Text>Thank you for agreeing to participate in our experiment, rest assured that the result of the experiment does not indicate anything negative! </Text>

                        <Text mt="5" ><strong>Instructions for the experiment</strong></Text>
                        <OrderedList>
                            <ListItem>You will see a balloon on the screen, your goal is to earn as much money as you can!</ListItem>
                            <ListItem>You will earn money each time you inflate the balloon.</ListItem>
                            <ListItem>However, the balloon might pop at any time and if it does, you will lose <strong>ALL</strong> the money you've earned for that balloon</ListItem>
                            <ListItem>You can cash out at any time and bank the money you've earned so far</ListItem>
                            <ListItem>There will be sounds being played in this experiment, please lower/increase the volume if needed!</ListItem>
                            <ListItem>You will now start a short tutorial for this experiment, click the button below!</ListItem>
                        </OrderedList>
                        
                    </CardBody>

                    <CardFooter>
                        <Button as={Link} to="tutorial" colorScheme='blue'>Start Tutorial</Button>
                    </CardFooter>
                </Card>
            </Center>
            
            {/* Card at the bottom of the page */}
            <Card variant="elevated" width="600px" position="fixed" bottom="0" left="50%" transform="translateX(-50%)" mb="2">
                <Box p={8}>
                    {/* Content of the card at the bottom of the page */}
                    <Stepper size="sm" index={activeStep}>
                        {steps.map((step, index) => (
                            <Step key={index}>
                                <StepIndicator>
                                    <StepStatus
                                    complete={<StepIcon />}
                                    incomplete={<StepNumber />}
                                    active={<StepNumber />}
                                    />
                                </StepIndicator>

                                <Box flexShrink='0'>
                                    <StepTitle>{step.title}</StepTitle>
                                    <StepDescription>{step.description}</StepDescription>
                                </Box>

                                <StepSeparator />
                            </Step>
                        ))}
                    </Stepper>

                </Box>
            </Card>

        </div>
    )
}