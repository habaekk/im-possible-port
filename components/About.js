"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const About = () => {

  const router = useRouter();

  const handleAboutMeClick = () => {
    router.push('/about_me');
  };

  return(

  <section id="about" className="p-6">
    <h2 className="text-2xl font-bold mb-4">내 정보</h2>
    <div className="flex mb-8">
      <div className="w-1/3">
        <Image
          src="/images/me5.jpg" // 이미지 경로 설정
          alt="Profile Image"
          width={300} // 이미지 너비 설정
          height={500} // 이미지 높이 설정
          className="object-cover rounded-lg"
        />
      </div>
      <div className="w-2/3 pl-8">
      <div className="flex items-center">
            <h3 className="text-xl font-bold">박하백</h3>
            {/* <div
              className="cursor-pointer"
              onClick={handleAboutMeClick}
              style={{
                width: 0,
                height: 0,
                borderTop: '10px solid transparent',
                borderBottom: '10px solid transparent',
                borderLeft: '10px solid skyblue',
                marginLeft: '10px',
              }}
            />
            */}
          </div>
        
        <p className="font-bold">모바일을 좋아하는 프론트엔드 개발자</p>
        <p className="font-bold"></p>

        <br />
        <h3 className="text-xl font-bold mb-1">교육</h3>
        <p><strong>서울과학기술대학교 (학사)</strong></p>
        <p>ITM --{'>'} 컴퓨터공학과 [ 3.93 / 4.5 ]</p>
        <br />
        <p><strong>Udemy (Online Education)</strong></p>
        <p>iOS & Swift - The Complete iOS App Development Bootcamp
        </p>
        <br />
        <h3 className="text-xl font-bold mb-1">자격증</h3>
        <ul className="list-disc list-inside">
          <li>TOEIC - 930/990</li>
          <li>TOEIC Speaking - 170 (AL)</li>
          <li>정보처리기사</li>
          <li>SQLD</li>
        </ul>
      </div>
    </div>    
    
  </section>
  )
};

export default About;
