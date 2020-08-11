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
    
    .form-group {
        position: relative;
        background: white;
        margin: 20px;
        border-radius: 0.5rem;
        padding: 0 15px;
        text-align: left;
    }

    .form-content {
        display: flex;
        flex-direction: column;

        input {
            margin-top: 10px;
        }
         
        button {
            margin: 25px 4.5rem;
            background-color: #38b6ff;
            height: 40px;
            font-size: 1.2rem;
        }
    }

    a {
        text-decoration: none;
    }
    
    figure {
        position: relative;
        margin: 0px 40px;
        height: 10rem;

        img {
            width: 100%;
            height: 100%;
        }
    }
`;