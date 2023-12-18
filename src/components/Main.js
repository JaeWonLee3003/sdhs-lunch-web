import React from 'react';
//import { BrowserRouter as  Link } from 'react-router-dom';
import '../style/Main.css';

const MainPage = () => (
    <div className='Wrap'>
        <p className='SubTitle'>
            매일 다른 급식 매일 다른 리뷰
        </p>
        <h1 className='Title'>
            오늘의 급식
        </h1>
        <a href="#" className='SearchOurSchool'>
            회원가입하고 우리 학교 바로 찾기
        </a>
        <div className='Login_info'>
            <p>계정이 있다면?
                <a href='#'>로그인</a>
                하고 급식 보기
            </p>
        </div>
    </div>
);

export default MainPage;
