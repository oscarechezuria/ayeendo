"use client"
import React, { useState } from 'react'
import StepModalOne from './StepModalOne';
import StepModalTwo from './StepModalTwo';
import StepModalThree from './StepModalThree';

export default function StepModalWrapper({stepModal, setStepModal}) {

    const selectionStepModal = () => {

        switch (stepModal) {
            case 1:
                return <StepModalOne/>
                break;
            case 2:
                return <StepModalTwo/>
                break;
            case 3:
                return <StepModalThree/>
                break;
            default:
                break;
        }

    }

    return (
        <div>
            {
                selectionStepModal()
            }
        </div>
    )
}
