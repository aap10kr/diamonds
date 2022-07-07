import React from 'react'
import btn_1 from '../assets/images/btn_01.png'
import btn_2 from '../assets/images/btn_02.png'
import m_btn from '../assets/images/m_btn.png'
import sec2_cimg1 from '../assets/images/sec_2_card_img1.png'

function Home() {
  return (
    <div>
      {/* section1 start */}
      <div className="section_one pc_screen">
        <div className="container">
          <div className='nav'>
            <p className='logoText'>다이아매치</p>
          </div>
          <div className='sec_1_left'>
            <div>
              <h1 className='sec_1_title'>상위1%의</h1>
              <h1 className='sec_1_subtitle'>
                검증된만남
                <br />
                다이아매치
              </h1>
              <p className='sec_1_desc'>
                국내 최다 전문직 협회
                <br />
                정식 제휴 소개팅 어플
              </p>
              <div class="btnArea01">
                <a href="https://apps.apple.com/kr/app/%EB%8B%A4%EC%9D%B4%EC%95%84%EB%A7%A4%EC%B9%98-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%86%8C%EA%B0%9C%ED%8C%85/id1447077801" rel="noreferrer" target="_blank">
                  <img src={btn_1} alt="" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.dating.diamatch" rel="noreferrer" target="_blank">
                  <img src={btn_2} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile_section_one mobile_screen">
        <div className="container">
          <div className='nav'>
            <p className='logoText'>다이아매치</p>
          </div>
          <div className='sec_1_left'>
            <div>
              <h1 className='sec_1_title'>상위1%의</h1>
              <h1 className='sec_1_subtitle'>
                검증된만남
                <br />
                다이아매치
              </h1>
              <p className='sec_1_desc'>
                국내 최다 전문직 협회
                <br />
                정식 제휴 소개팅 어플
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section1 end */}

      {/* section2 start */}
      <div className="section_two">
        <div className="container">
          <h1 className='title1 text_violet'>
            패기와 능력을 갖춘 <br />
            <span className='fw-bold'>전문직 단체와 정식 제휴</span>
          </h1>
          <p className='para1 text-center mt-2 mt-md-3 mb-5'>특별한 분에게 특별한 만남을</p>
          <div className="sec_2_card_main">

            <div className="sec_2_card shadow">
              <div>
                <img src={sec2_cimg1} className="sec2_card_img" alt="" />
                <p className='para2 mt-4 mb-0'>
                  2022년 4월 <br />
                  <span className='fw-bold'>대한공중보건의사협의회 제휴</span>
                </p>
              </div>
            </div>
            <div className="sec_2_card shadow">
              <div>
                <img src={sec2_cimg1} className="sec2_card_img" alt="" />
                <p className='para2 mt-4 mb-0'>
                  2022년 4월 <br />
                  <span className='fw-bold'>대한공중보건의사협의회 제휴</span>
                </p>
              </div>
            </div>
            <div className="sec_2_card shadow">
              <div>
                <img src={sec2_cimg1} className="sec2_card_img" alt="" />
                <p className='para2 mt-4 mb-0'>
                  2022년 4월 <br />
                  <span className='fw-bold'>대한공중보건의사협의회 제휴</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* section2 end */}

      {/* section3 start */}
      <div className="section_three">

      </div>
      {/* section3 end */}

      {/* section4 start */}
      <div className="section_four">

      </div>
      {/* section4 end */}

      {/* section5 start */}
      <div className="section_five">

      </div>
      {/* section5 end */}

      {/* section6 start */}
      <div className="section_six">

      </div>
      {/* section6 end */}

      {/* section7 start */}
      <div className="section_seven">

      </div>
      {/* section7 end */}

      {/* section8 start */}
      <div className="section_eight">

      </div>
      {/* section8 end */}

      {/* footer */}
      <footer>
        <p>
          (주)콘버스 / 서울특별시 서초구 강남대로95길 9-18, 3층 <span class="mobile_screen"></span>/ Tel 1668-4312<br />
          대표이사 유신상,서우람 / 사업자등록번호 220-88-61991 <span class="mobile_screen"></span>/ contact@diamatch.co.kr<br />
          통신판매업자신고번호 제 2016-서울서초-1473호
        </p>
        <ul>
          <li><a href="#!">이용약관</a></li>
          <li><a href="#!">개인정보처리방침</a></li>
          <li><a href="#!">청소년보호정책</a></li><span class="mobile_screen"></span>
          <li><a href="#!">사업자정보확인</a></li>
          <li><a href="#!">불법촬영물등 신고</a></li>
        </ul>
        <p>Copyright ⓒ 2022 CONBUS Inc. All rights reserved.</p>
      </footer>
      {/* footer */}

      {/* <div class="quick_box mobile_screen">
        <a href="https://play.google.com/store/apps/details?id=com.dating.diamatch" rel="noreferrer" target="_blank">
          <img src={m_btn} alt="" />
        </a>
      </div> */}
    </div>
  )
}

export default Home