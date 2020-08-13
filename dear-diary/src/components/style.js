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
    button {
        position: initial;
    }
`;

export const NavigationStyle = styled.div`
    .MuiAppBar-root {
        background: #38b6ff;
    }

    .logout {
        position: relative;
        text-transform: uppercase;
        display: inline-block;
        padding-bottom: 5px;
        overflow: hidden;
        font-size: 0.8rem;
        color: white;
        text-decoration: none;
        cursor: pointer;

        &:before {
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background: white;
            transform:  translateX(-100%);
            content: '';
            position: absolute;
            transition: transform .5s ease;
        }

        &:hover:before {
            transform:  translateX(0);
        }

        &:hover {
            background-color: transparent;
        }

        &:after {
            content: '';
            position: absolute;
            transition: transform .5s ease;
        }
    }

    @media screen and (min-width: 700px) {
        .logout {
            font-size: 1rem;
        }
    }

    figure {
        height: 2rem;
        width: 6rem;
        overflow: hidden;
        margin: 0;
        margin-top: 5px;
        margin-right: auto;

        @media screen and (min-width: 700px) {
            height: 3rem;
            width: 9rem;
        }

        img {
            width: 100%;
            height: 100%;
            transform: scale(3);
        }
    }
`;

export const MenuStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    height: 100vh;
    text-align: left;
    padding: 1rem;
    padding-top: 0.5rem;
    top: 0;
    left: 0;
    background-color: #38b6ff;
    transition: transform 0.3s ease-in-out;
    transform: ${({open}) => open ? 'translateX(0%)' : 'translateX(-100%)'};

    .close-button {
        color: white;
        font-size: 2.5rem;
        cursor: pointer;
    }

    ul {
        list-style-type: none;
        margin-top: 25vh;

        li {
            margin-bottom: 5vh;
        }
    }

    a {
        position: relative;
        font-size: 1.5rem;
        text-transform: uppercase;
        display: inline-block;
        padding-top: 1rem;
        padding-bottom: 5px;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: white;
        text-decoration: none;
        overflow: hidden;

        &:before {
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background: white;
            transform:  translateX(-100%);
            content: '';
            position: absolute;
            transition: transform .5s ease;
        }

        &:hover:before {
            transform:  translateX(0);
        }

        &:after {
            content: '';
            position: absolute;
            transition: transform .5s ease;
        }
    }
`;