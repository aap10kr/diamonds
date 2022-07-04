import React from 'react'
import sec_one_pc from '../assets/images/section_one_pc.png'
import sec_one_mobile from '../assets/images/section_one_mobile.png'
import sec_two_pc from '../assets/images/section_two_pc.png'
import sec_two_mobile from '../assets/images/section_two_mobile.png'
import sec_three_pc from '../assets/images/section_three_pc.png'
import sec_three_mobile from '../assets/images/section_three_mobile.png'
import sec_four_pc from '../assets/images/section_four_pc.png'
import sec_four_mobile from '../assets/images/section_four_mobile.png'
import sec_five_pc from '../assets/images/section_five_pc.png'
import sec_five_mobile from '../assets/images/section_five_mobile.png'
import sec_six_pc from '../assets/images/section_six_pc.png'
import sec_six_mobile from '../assets/images/section_six_mobile.png'
import sec_seven_pc from '../assets/images/section_seven_pc.png'
import sec_seven_mobile from '../assets/images/section_seven_mobile.png'
import sec_eight_pc from '../assets/images/section_eight_pc.png'
import sec_eight_mobile from '../assets/images/section_eight_mobile.png'
import btn_1 from '../assets/images/btn_01.png'
import btn_2 from '../assets/images/btn_02.png'
import m_btn from '../assets/images/m_btn.png'

function Home() {
  return (
    <div>
      {/* section1 start */}
      <div className="section_one">
        <img src={sec_one_pc} className="pc_screen" alt="" />
        <img src={sec_one_mobile} className="mobile_screen" alt="" />
        <div class="btnArea01 pc_screen">
          <a href="https://apps.apple.com/kr/app/%EB%8B%A4%EC%9D%B4%EC%95%84%EB%A7%A4%EC%B9%98-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%86%8C%EA%B0%9C%ED%8C%85/id1447077801" rel="noreferrer" target="_blank">
            <img src={btn_1} alt="" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.dating.diamatch" rel="noreferrer" target="_blank">
            <img src={btn_2} alt="" />
          </a>
        </div>
      </div>
      {/* section1 end */}

      {/* section2 start */}
      <div className="section_two">
        <img src={sec_two_pc} className="pc_screen" alt="" />
        <img src={sec_two_mobile} className="mobile_screen" alt="" />
      </div>
      {/* section2 end */}

      {/* section3 start */}
      <div className="section_three">
        <img src={sec_three_pc} className="pc_screen" alt="" />
        <img src={sec_three_mobile} className="mobile_screen" alt="" />
      </div>
      {/* section3 end */}

      {/* section4 start */}
      <div className="section_four">
        <img src={sec_four_pc} className="pc_screen" alt="" />
        <img src={sec_four_mobile} className="mobile_screen" alt="" />
      </div>
      {/* section4 end */}

      {/* section5 start */}
      <div className="section_five">
        <img src={sec_five_pc} className="pc_screen" alt="" />
        <img src={sec_five_mobile} className="mobile_screen" alt="" />
      </div>
      {/* section5 end */}

      {/* section6 start */}
      <div className="section_six">
        <img src={sec_six_pc} className="pc_screen" alt="" />
        <img src={sec_six_mobile} className="mobile_screen" alt="" />
      </div>
      {/* section6 end */}

      {/* section7 start */}
      <div className="section_seven">
        <img src={sec_seven_pc} className="pc_screen" alt="" />
        <img src={sec_seven_mobile} className="mobile_screen" alt="" />
      </div>
      {/* section7 end */}

      {/* section8 start */}
      <div className="section_eight">
        <img src={sec_eight_pc} className="pc_screen" alt="" />
        <img src={sec_eight_mobile} className="mobile_screen" alt="" />
        <div class="btnArea01 pc_screen">
          <a href="https://apps.apple.com/kr/app/%EB%8B%A4%EC%9D%B4%EC%95%84%EB%A7%A4%EC%B9%98-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%86%8C%EA%B0%9C%ED%8C%85/id1447077801" rel="noreferrer" target="_blank">
            <img src={btn_1} alt="" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.dating.diamatch" rel="noreferrer" target="_blank">
            <img src={btn_2} alt="" />
          </a>
        </div>
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

      <div class="quick_box mobile_screen">
        <a href="https://play.google.com/store/apps/details?id=com.dating.diamatch" rel="noreferrer" target="_blank">
          <img src={m_btn} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Home