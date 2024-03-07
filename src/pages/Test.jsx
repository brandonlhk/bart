import React, { useState } from 'react'
import {Button, Text} from '@chakra-ui/react'

export default function Test() {
    const balloonPop = [9, 4, 9, 5, 15,
                        9, 12, 6, 4, 3,
                        10, 12, 4, 3, 9,
                        11, 13, 14, 4, 6]

    const [balloon, setBalloons] = useState(0)
    const [balloonPump, setBalloonPump] = useState(0)
    const [currentCash, setCash] = useState(0)
    const [totalCash, setTotalCash] = useState(0)
    const [totalPump, setTotalPump] = useState(0)

    const handleInflate = () => {
        setBalloonPump(balloonPump + 1)
        
        // balloon popped
        if (balloonPump === balloonPop[balloon] - 1) {
            
            setTotalPump(totalPump + balloonPump + 1)
            // move to next balloon
            setBalloons(balloon + 1)
            setCash(0)
            setBalloonPump(0)
        }
        
        else {
            setCash(currentCash + 1)
        }

    }

    const handleCashOut = () => {
        setTotalCash(totalCash + currentCash)
        setTotalPump(totalPump + balloonPump)

        // reset everything for new balloon
        setCash(0)
        setBalloonPump(0)
        setBalloons(balloon + 1)
    }



    return (
        <div>
            <Text>Balloon {balloon + 1}</Text>
            <Text>
                Current cash: ${currentCash} |
                <Text as='span'> Total cash: ${totalCash}</Text> | 
                <Text as='span'> Total pumps: {totalPump} pumps</Text>
            </Text>
            
            <Button colorScheme='blue' onClick={handleInflate}>Inflate</Button>
            <Button colorScheme='blue' onClick={handleCashOut}>Cash out</Button>
        </div>
    )
}