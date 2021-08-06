import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
export default function Prizes() {
    return (
        <StyledPrizes>
            <div className="first-place">
                <div className="first-place__number">
                    <Image
                        src="/images/first.svg"
                        alt="1st"
                        width={196}
                        height={199}
                    />
                </div>
                <div className="first-place__content">
                    Lifetime PRO account on <a href="#">devdojo.com</a>
                </div>
            </div>
            <div className="second-place">
                <div className="second-place__number">
                    <Image
                        src="/images/second.svg"
                        alt="2nd"
                        width={212}
                        height={151}
                    />
                </div>
                <div className="second-place__content">
                    SOMETHING ELSE GREAT
                </div>
            </div>
            <div className="third-place">
                <div className="third-place__number">
                    <Image
                        src="/images/third.svg"
                        alt="2nd"
                        width={211}
                        height={179}
                    />
                </div>
                <div className="third-place__content">SOMETHING ELSE GREAT</div>
            </div>
        </StyledPrizes>
    );
}

const StyledPrizes = styled.section`
    background: url('/images/three-frames.svg') center top no-repeat;
    background-size: 100% auto;
    min-height: 550px;
    position: relative;
    margin-top: -85px;
    font-family: ${(props) => props.theme.peachyKeen};
    text-transform: uppercase;
    display: grid;
    grid-template-columns: 33% 28% 35%;
    font-size: 4rem;
    line-height: 1;
    color: ${(props) => props.theme.black};

    a {
        text-decoration: none;
        color: ${(props) => props.theme.carmineRed};
    }

    .first-place {
        position: relative;
        top: -50px;
        display: flex;

        &__number {
            flex-basis: 196px;
        }

        &__content {
            flex: 1;
            padding-top: 100px;
            position: relative;
            left: -25px;
        }
    }

    .second-place {
        position: relative;
        left: -40px;

        &__number {
        }

        &__content {
            position: relative;
            padding-left: 140px;
            top: -25px;
        }
    }

    .third-place {
        position: relative;
        margin-top: 90px;

        &__number {
        }

        &__content {
            width: 75%;
            position: relative;
            left: 125px;
            top: -50px;
        }
    }
`;
