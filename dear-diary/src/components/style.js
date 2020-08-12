import styled from 'styled-components';
import loginBackground from './assets/background.jpg';

export const LoginStyle = styled.div`
    background: url(${loginBackground});
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    top: 0;
    margin: 0 auto;
    position: fixed;

    @media screen and (min-width: 700px) {
        font-size: 1.5rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 1rem;
    }
    
    .form-group {
        position: relative;
        background: white;
        margin: 20px;
        border-radius: 0.5rem;
        padding: 0 15px;
        text-align: left;

        @media screen and (min-width: 700px) {
            margin: 0 auto;
            width: 500px;
            padding: 0 25px;
        }
    }

    .form-content {
        display: flex;
        flex-direction: column;

        input {
            margin-top: 10px;

            @media screen and (min-width: 700px) {
                font-size: 1.5rem;
            }

            @media screen and (min-width: 1200px) {
                font-size: 1rem;
            }
        }
         
        button {
            margin: 25px auto;
            text-align: center;
            width: 170px;
            background-color: #38b6ff;
            height: 40px;
            font-size: 1.2rem;

            @media screen and (min-width: 700px) {
                width: 200px;
                font-size: 1.7rem;
                height: 60px;
                margin: 30px auto;
            }

            @media screen and (min-width: 1200px) {
                font-size: 1.4rem;
            }
        }
    }

    a {
        text-decoration: none;
    }
    
    figure {
        position: relative;
        margin: 0px 40px;
        height: 10rem;

        @media screen and (min-width: 370px) {
            height: 14rem;
        }

        @media screen and (min-width: 700px) {
            height: 22rem;
        }

        @media screen and (min-width: 1000px) {
            height: 25rem;
        }

        @media screen and (min-width: 1200px) {
            height: 13rem;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }
`;

export const SignUpStyle = styled.div`
    background: url(${loginBackground});
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    top: 0;
    margin: 0 auto;
    position: fixed;
    font-size: 0.8rem;

    @media screen and (min-width: 700px) {
        font-size: 1.5rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 1rem;
    }
    
    .form-group {
        position: relative;
        background: white;
        margin: 20px;
        border-radius: 0.5rem;
        padding: 0 15px;
        text-align: left;

        @media screen and (min-width: 700px) {
            margin: 0 auto;
            width: 500px;
            padding: 0 25px;
        }
    }

    .form-content {
        display: flex;
        flex-direction: column;

        input {
            margin-top: 10px;

            @media screen and (min-width: 700px) {
                font-size: 1.5rem;
            }

            @media screen and (min-width: 1200px) {
                font-size: 0.8rem;
            }
        }
         
        button {
            margin: 25px auto;
            text-align: center;
            width: 170px;
            background-color: #38b6ff;
            height: 40px;
            font-size: 1.2rem;

            @media screen and (min-width: 700px) {
                width: 200px;
                font-size: 1.7rem;
                height: 60px;
                margin: 30px auto;
            }

            @media screen and (min-width: 1200px) {
                font-size: 1.4rem;
            }
        }
    }

    a {
        text-decoration: none;
    }
    
    figure {
        position: relative;
        margin: 0px 40px;
        height: 8rem;

        @media screen and (min-width: 370px) {
            height: 10rem;
        }

        @media screen and (min-width: 700px) {
            height: 20rem;
        }

        @media screen and (min-width: 1000px) {
            height: 23rem;
        }

        @media screen and (min-width: 1200px) {
            height: 11rem;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }
`;

export const DashboardStyle = styled.div`

`;

export const NavigationStyle = styled.div`
    .MuiAppBar-root {
        background: #38b6ff;
    }
    figure {
        height: 2rem;
        width: 6rem;
        overflow: hidden;
        margin: 0;
        margin-top: 5px;
        margin-right: auto;

        img {
            width: 100%;
            height: 100%;
            transform: scale(3);
        }
    }
`;

export const MenuStyle = styled.div`

`;