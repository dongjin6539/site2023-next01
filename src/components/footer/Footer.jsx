import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div id="footer" className="footer__wrap gmarket5 section" role="contentinfo">
      <div className="footer__inner container">
          <div className="footer__text">
              <h5>Shin DongJin</h5>
              <p>질문 환영😁<br />
                  궁금한 사항은 메일로 문의주세요!</p>
              <address><Link href="mailto:dongjin6539@naver.com">dongjin6539@naver.com</Link></address>                    
              <ul className="sns">
                  <li><Link href="/" className="ir">페이스북
                    {/* <img src="./assets/images/footer/Facebook.svg" alt="페이스북" /> */}
                    <Image 
                        width={20}
                        height={20}
                        src="/assets/images/footer/Facebook.svg"
                        alt="페이스북"
                    />
                  </Link></li>
                  <li><Link href="/" className="ir">인스타그램
                    {/* <img src="./assets/images/footer/Instagram.svg" alt="인스타그램" /> */}
                    <Image 
                        width={20}
                        height={20}
                        src="/assets/images/footer/Instagram.svg"
                        alt="인스타그램"
                    />
                  </Link></li>
                  <li><Link href="/" className="ir">유튜브
                    {/* <img src="./assets/images/footer/YouTube.svg" alt="유튜브" /> */}
                    <Image 
                        width={20}
                        height={20}
                        src="/assets/images/footer/YouTube.svg"
                        alt="유튜브"
                    />
                  </Link></li>
                  <li><Link href="/" className="ir">깃헙
                    {/* <img src="./assets/images/footer/Github.svg" alt="깃헙" /> */}
                    <Image 
                        width={20}
                        height={20}
                        src="/assets/images/footer/Github.svg"
                        alt="깃헙"
                    />
                  </Link></li>
                  <li><Link href="/" className="ir">티스토리
                    {/* <img src="./assets/images/footer/titstory.svg" alt="티스토리" /> */}
                    <Image 
                        width={20}
                        height={20}
                        src="/assets/images/footer/titstory.svg"
                        alt="티스토리"
                    />
                  </Link></li>
              </ul>
          </div>
          <div className="footer__menu">
              <div>
                  <h4>사이트</h4>
                  <ul>
                      <li><Link href="/">웹표준 사이트</Link></li>
                      <li><Link href="/">반응형 사이트</Link></li>
                      <li><Link href="/">패럴렉스 사이트</Link></li>
                      <li><Link href="/">포트폴리오 사이트</Link></li>
                  </ul>
              </div>
              <div>
                  <h4>유형</h4>
                  <ul>
                      <li><Link href="/">이미지 유형</Link></li>
                      <li><Link href="/">카드 유형</Link></li>
                      <li><Link href="/">이미지/텍스트 유형</Link></li>
                      <li><Link href="/">배너 유형</Link></li>
                      <li><Link href="/">텍스트 유형</Link></li>
                      <li><Link href="/">푸터 유형</Link></li>
                  </ul>
              </div>
              <div>
                  <h4>스크립트</h4>
                  <ul>
                      <li><Link href="/">검색 이펙트</Link></li>
                      <li><Link href="/">퀴즈 이펙트</Link></li>
                      <li><Link href="/">마우스 이펙트</Link></li>
                      <li><Link href="/">슬라이드 이펙트</Link></li>
                      <li><Link href="/">페럴렉스 이펙트</Link></li>
                      <li><Link href="/">게임 이펙트</Link></li>
                  </ul>
              </div>
              <div>
                  <h4>레퍼런스</h4>
                  <ul>
                      <li><Link href="/">CSS</Link></li>
                      <li><Link href="/">FONTS</Link></li>
                      <li><Link href="/">BLOG</Link></li>
                      <li><Link href="/">REFERENCE</Link></li>
                      <li><Link href="/">TUTORIAL</Link></li>
                  </ul>
              </div>
          </div>
          <div className="footer__right">
              Copyright 2022. All Rights Reserved. - Designed by Shin DongJin
          </div>
      </div>
    </div>
  )
};

export default Footer;