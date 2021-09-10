import React from 'react';
import styled from 'styled-components';
import { Breakpoints } from 'styles/Breakpoints';
import { BuildingFive } from './buildingFive';
import { BuildingFour } from './buildingFour';
import { BuildingOne } from './buildingOne';
import { BuildingSeven } from './buildingSeven';
import { BuildingSix } from './buildingSix';
import { BuildingThree } from './buildingThree';
import { BuildingTwo } from './buildingTwo';

export default function Buildings() {
    return (
        <StyledBuildings>
            <BuildingOne className="building-1" />
            <BuildingTwo className="building-2" />
            <BuildingThree className="building-3" />
            <BuildingFour className="building-4" />
            <BuildingFive className="building-5" />

            <BuildingSix className="building-6" />
            <BuildingSeven className="building-7" />
        </StyledBuildings>
    );
}

const StyledBuildings = styled.section`
    position: relative;
    margin-top: -470px;
    pointer-events: none;
    z-index: -11;
    display: none;

    @media (${Breakpoints.regular}) {
        display: block;
    }

    .building-2 {
        left: -10px;
        position: relative;
    }

    .building-6 {
        bottom: 0;
        position: absolute;
        right: 245px;
        z-index: 1;
    }

    .building-7 {
        bottom: 0;
        position: absolute;
        right: 0;
        z-index: 1;
    }
`;
