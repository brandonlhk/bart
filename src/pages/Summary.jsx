import {Box, Heading, Text, Center, Card, CardHeader, CardBody, Stat, StatLabel, StatNumber,
        Grid, GridItem, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, 
        StepStatus, StepTitle, Stepper, useSteps} from '@chakra-ui/react'

export default function Summary() {
    const steps = [
        { title: 'First', description: 'Explaination' },
        { title: 'Second', description: 'Tutorial' },
        { title: 'Third', description: 'Experiment' },
        { title: 'Fourth', description: 'Summary' },
    ]

    const {activeStep} = useSteps({
        index: 4,
        count: steps.length,
    })
    // const userResultTotalCash = JSON.parse(localStorage.getItem("experimentData")).totalCash
    // const userResultTotalPump = JSON.parse(localStorage.getItem("experimentData")).totalPump

    return (
        <div style={{backgroundColor: "#3183cf"}}>
            <Center h="100vh">
                <Card variant="elevated" maxW="750px" minW="750px">
                    <CardHeader>
                        <Heading as="h3" size="lg">
                            Summary of the experiment
                        </Heading>
                    </CardHeader>

                    <CardBody>
                        <Text>Thank you for participating in our experiment! Please screenshot this page and attach it to the Google Form as an image! </Text>

                        <Heading as="h5"></Heading>
                        <Text mt="5" as="h1"><strong>Experiment results</strong></Text>
                        <Grid templateColumns="1fr 1fr 1fr" gap={0} mt="3">
                            
                            {/* Total Cash */}
                            <GridItem>
                                <Stat>
                                    <StatLabel fontSize="xl">Total Cash Collected</StatLabel>
                                    <StatNumber>$100 💰</StatNumber>
                                </Stat>
                            </GridItem>

                            {/* Total Pumps */}
                            <GridItem>
                                <Stat>
                                    <StatLabel fontSize="xl">Total Pumps</StatLabel>
                                    <StatNumber>100 💨</StatNumber>
                                </Stat>
                            </GridItem>

                        </Grid>
                        
                    </CardBody>

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