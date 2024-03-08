import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Button, Stat, StatLabel, StatNumber, StatHelpText, CircularProgress, CircularProgressLabel, 
    Grid, GridItem, Card, Image, Box, Center, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, 
    StepStatus, StepTitle, Stepper, useSteps, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody } from '@chakra-ui/react'
import Balloon from "../images/balloon.png"
import inflate from "../sounds/balloon_inflate.mp3"
import cashout from "../sounds/cashout.mp3"
import pop from "../sounds/pop.mp3"


export default function Test() {
    const balloonPop = [4, 6]
    const toast = useToast()
    const [cashoutDisable, setcashoutDisable] = useState(true)
    const [balloon, setBalloons] = useState(0)
    const [balloonPump, setBalloonPump] = useState(0)
    const [currentCash, setCash] = useState(0)
    const [totalCash, setTotalCash] = useState(0)
    const [totalPump, setTotalPump] = useState(0)
    const [progress, setProgress] = useState(50)
    const [balloonSize, setBalloonSize] = useState(300)
    const [showModal, setShowModal] = useState(false)
    
    const steps = [
        { title: 'First', description: 'Explaination' },
        { title: 'Second', description: 'Tutorial' },
        { title: 'Third', description: 'Experiment' },
        { title: 'Fourth', description: 'Summary' },
    ]

    const {activeStep} = useSteps({
        index: 2,
        count: steps.length,
    })

    const playSound = (sound) => {
        const audio = new Audio(sound)
        audio.volume = 0.1
        audio.play()
    }


    const handleInflate = () => {
        playSound(inflate)
        setBalloonPump(balloonPump + 1)
        setcashoutDisable(false)

        // balloon popped
        if (balloonPump === balloonPop[balloon] - 1) {
            playSound(pop)
            setProgress(previousProgress => previousProgress + 5)
            setTotalPump(totalPump + balloonPump + 1)
            setBalloonSize(300)
            setcashoutDisable(true)
            
            // have all balloons been popped?
            if (balloon + 1 === balloonPop.length) {
                setShowModal(true)
            }

            // move to next balloon
            else {
                setBalloons(balloon + 1)
                setCash(0)
                setBalloonPump(0)
            }


            // alert user balloon popped
            toast({
                title: "Balloon popped",
                status: "error",
                description: "The balloon popped and your current cash has been reset to 0",
                duration: 2000,
                isClosable: true,
                position: "top"
            })
        }
        
        else {
            setBalloonSize(prevBalloonSize => prevBalloonSize + 5)
            setCash(currentCash + 1)
        }

    }

    const handleCashOut = () => {
        playSound(cashout)
        setTotalCash(totalCash + currentCash)
        setTotalPump(totalPump + balloonPump)
        setProgress(previousProgress => previousProgress + 50)

        // have finished all balloons?
        if (balloon + 1 === balloonPop.length) {
            setShowModal(true)
        }

        // reset everything for new balloon
        else {
            setcashoutDisable(true)
            setCash(0)
            setBalloonSize(300)
            setBalloonPump(0)
            setBalloons(balloon + 1)
        }

    }


    return (
        <div style={{backgroundColor: "#3183cf"}}>
            <Center h="100vh">
                <Card variant="elevated">
                    <Box borderRadius="lg">
                        <Grid templateColumns="1fr 1fr" gap={0} p="6">
                            {/* Left side */}
                            <GridItem>
                                <Box boxSize="400px" display="flex" alignItems="center" justifyContent="center">
                                    <Image src={Balloon} maxWidth={"400px"} width={balloonSize + "px"}/>
                                </Box>
                            </GridItem>
                            {/* Right side */}
                            <GridItem>

                                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                                    {/* Balloon num */}
                                    <GridItem>
                                        <Stat>
                                            <StatLabel>Balloons</StatLabel>
                                            <StatNumber>
                                                <CircularProgress value={progress}>
                                                    <CircularProgressLabel>{balloon + 1}</CircularProgressLabel>
                                                </CircularProgress>
                                            </StatNumber>
                                            <StatHelpText>Out of 2</StatHelpText>
                                        </Stat>
                                    </GridItem>

                                    {/* Total Cash */}
                                    <GridItem>
                                        <Stat>
                                            <StatLabel>Total Cash</StatLabel>
                                            <StatNumber>${totalCash}</StatNumber>
                                        </Stat>
                                    </GridItem>

                                    {/* Current Cash */}
                                    <GridItem>
                                        <Stat>
                                            <StatLabel>Current Cash</StatLabel>
                                            <StatNumber>${currentCash}</StatNumber>
                                        </Stat>
                                    </GridItem>

                                    <GridItem>
                                        <Stat>
                                            <StatLabel>Total Pumps</StatLabel>
                                            <StatNumber>{totalPump} pump(s)</StatNumber>
                                        </Stat>
                                    </GridItem>

                                    <Button colorScheme='blue' onClick={handleInflate}>Inflate</Button>
                                    <Button colorScheme='blue' onClick={handleCashOut} isDisabled={cashoutDisable}>Cash out</Button>
                                </Grid>
    
                            </GridItem>
                        </Grid>
                    </Box>
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

            {/* Modal when all balloons have been popped */}
            <Modal isOpen={showModal} closeOnOverlayClick={false} closeOnEsc={false} >
                <ModalOverlay />
                <ModalContent style={{ position: "fixed", top: "35%", left: "40%", transform: "translate(-50%, -50%)" }}>
                <ModalHeader>Tutorial completed</ModalHeader>
                <ModalBody>
                    You have finished the tutorial, click the button to move to the experiment!
                </ModalBody>
                <ModalFooter>
                    <Button as={Link} to="/experiment" colorScheme="blue" >
                    Start experiment
                    </Button>
                    
                </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}