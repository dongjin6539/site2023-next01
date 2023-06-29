import Image from 'next/image';
import React from 'react';

const Youtube = () => {
  return (
    <section id="youtubeSection" className="youtube__wrap section">
            <div className="youtube__inner container">
                <div className="youtube__text">
                    <h3>추천 유튜브 영상</h3>
                    <p>유튜브를 통해 다양한 농구 영상을 볼 수 있습니다.<br />
                    구독과 좋아요! 부탁드립니다.</p>
                    <a href="#" className="button-green">자세히 보기</a>
                </div>
                <div className="youtube__item">
                    <div className="youtube">
                        {/* <img src="./assets/images/youtube/youtube01.png" alt="유튜브1" /> */}
                        <Image 
                          width={400}
                          height={200}
                          src="/assets/images/youtube/youtube01.png" 
                          alt="유튜브1"
                        />
                    </div>
                    <div className="youtube">
                        {/* <img src="./assets/images/youtube/youtube02.png" alt="유튜브2" /> */}
                        <Image 
                          width={400}
                          height={200}
                          src="/assets/images/youtube/youtube02.png" 
                          alt="유튜브2"
                        />
                    </div>
                    <div className="youtube">
                        {/* <img src="./assets/images/youtube/youtube03.png" alt="유튜브3" /> */}
                        <Image 
                          width={400}
                          height={200}
                          src="/assets/images/youtube/youtube03.png" 
                          alt="유튜브3"
                        />
                    </div>
                    <div className="youtube">
                        {/* <img src="./assets/images/youtube/youtube04.png" alt="유튜브4" /> */}
                        <Image 
                          width={400}
                          height={200}
                          src="/assets/images/youtube/youtube04.png" 
                          alt="유튜브4"
                        />
                    </div>
                </div>  
            </div>
        </section>
  )
};

export default Youtube;