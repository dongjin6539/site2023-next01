import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Member = () => {
  return (
    <section id="memberSection" className="member__wrap gmarket5 section center">
      <h3>레전드 선수</h3>
      <p>레전드 선수를 소개합니다.</p>
      <div className="member__inner container">
          <div className="member">
              <figure className="member__header">
                  {/* <img src="./assets/images/member/member01.png" alt="멤버1" /> */}
                  <Image 
                    width={300}
                    height={400}
                    src="/assets/images/member/member01.png"
                    alt="이미지"
                  />
              </figure>
              <div className="member__body">
                  <h4>마이클 조던</h4>
                  <Link href="/">경력 보기</Link>
              </div>
          </div>
          <div className="member">
              <figure className="member__header">
                  {/* <img src="./assets/images/member/member02.png" alt="멤버1" /> */}
                  <Image 
                    width={300}
                    height={400}
                    src="/assets/images/member/member02.png"
                    alt="이미지"
                  />
              </figure>
              <div className="member__body">
                  <h4>코비 브라이언트</h4>
                  <Link href="/">경력 보기</Link>
              </div>
          </div>
          <div className="member">
              <figure className="member__header">
                  {/* <img src="./assets/images/member/member03.png" alt="멤버1" /> */}
                  <Image 
                    width={300}
                    height={400}
                    src="/assets/images/member/member03.png"
                    alt="이미지"
                  />
              </figure>
              <div className="member__body">
                  <h4>르브론 제임스</h4>
                  <Link href="/">경력 보기</Link>
              </div>
          </div>
      </div>
    </section>
  )
};

export default Member;