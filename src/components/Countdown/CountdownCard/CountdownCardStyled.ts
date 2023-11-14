import styled from "styled-components";

const CountdownCardStyled = styled.ul`
box-shadow: 0 2px 5px rgba(0, 0, 0, .7);
    position: relative;
    width: 5rem;
    height: 7rem;
    border-radius: 0.5rem;
    font-size: 5rem;

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        width: 100%;
        border: 1px solid rgba(0,0,0,.1);
    }

    li {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        .container {
            position: relative;
            width: 100%;
            height: 100%;
            perspective: 200px;

            > div {
                position: absolute;
                background: rgba(55,55,55);
                color: #f7f7f7;
                width: 100%;
                height: 50%;
                text-align: center;
                padding: .25em;
                display: flex;
                line-height: .9;
                justify-content: center;
                overflow: hidden;

                &.up {
                    top: 0;
                    border-top-right-radius: 0.1em;
                    border-top-left-radius: 0.1em;
                    
                }

                &.down {
                    bottom: 0;
                    border-bottom-right-radius: 0.1em;
                    border-bottom-left-radius: 0.1em;
                    align-items: flex-end;
                }
            }
        }
        
        &.after {
            .up {
                transform: rotateX(0deg);
                transform-origin: 50% 100%;
                animation: turn2 .5s linear both;
                z-index: 4;
            }

            .down {
                transform: rotateX(90deg);
                transform-origin: 50% 0%;
                animation: turn1 .5s .5s linear both;
                z-index: 4;
            }
        }

        .shadow {
            position: absolute;
            width: 100%;
            height: 50%;
            padding: .25em;
            display: flex;
            overflow: hidden;
        }

        &.before {
            .up {
                .shadow {
                    background: linear-gradient(to bottom, rgba(0, 0, 0, .1) 0%, rgba(0, 0, 0, .5) 100%);
                    animation: hide .5s .3s linear both;
                }
            }

            .down {
                .shadow {
                    background: linear-gradient(to bottom, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .1) 100%);
                    animation: show .5s linear both;
                }
            }
        }

        &.after {
            .up {
                .shadow {
                    background: linear-gradient(to bottom, rgba(0, 0, 0, .1) 0%, rgba(0, 0, 0, .5) 100%);
                    animation: show .5s linear both;
                }
            }

            .down {
                .shadow {
                    background: linear-gradient(to bottom, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .1) 100%);
                    animation: hide .5s .3s linear both;
                }
            }
        }
    }

    @keyframes turn1 {
        0% {
            transform: rotateX(90deg);
        }

        100% {
            transform: rotateX(0deg);
        }
    }

    @keyframes turn2 {
        0% {
            transform: rotateX(0deg);
        }

        100% {
            transform: rotateX(-90deg);
        }
    }

    @keyframes depth1 {
        0% {
            z-index: 0;
        }

        50% { 
            z-index: 0;
        }

        100% {
            z-index: 1;
        }
    }

    @keyframes depth2 {
        0% {
            z-index: 1;
        }

        100% {
            z-index: 0;
        }
    }

    @keyframes show {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    
    @keyframes hide {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

`
export default CountdownCardStyled;
