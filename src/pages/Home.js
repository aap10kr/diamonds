import React from 'react'
import btn_1 from '../assets/images/btn_01.png'
import btn_2 from '../assets/images/btn_02.png'
import logo_img from '../assets/images/logo.png'
import sec1_img from '../assets/images/section1Img.png'
import sec2_cimg1 from '../assets/images/sec_2_card_img1.png'
import sec2_cimg2 from '../assets/images/sec_2_card_img2.png'
import sec2_cimg3 from '../assets/images/sec_2_card_img3.png'
import sec3_cimg1 from '../assets/images/sec_3_card_img1.png'
import sec3_cimg2 from '../assets/images/sec_3_card_img2.png'
import sec3_cimg3 from '../assets/images/sec_3_card_img3.png'
import sec4_cimg1 from '../assets/images/sec_4_card_img1.png'
import sec4_cimg2 from '../assets/images/sec_4_card_img2.png'
import sec4_cimg3 from '../assets/images/sec_4_card_img3.png'
import sec6_logo1 from '../assets/images/sec6_logo1.png'
import sec6_logo2 from '../assets/images/sec6_logo2.png'
import sec6_logo3 from '../assets/images/sec6_logo3.png'
import sec6_logo4 from '../assets/images/sec6_logo4.png'
import sec6_logo5 from '../assets/images/sec6_logo5.png'
import sec6_logo6 from '../assets/images/sec6_logo6.png'
import sec7_leftImg from '../assets/images/sec7_left_img.png'
import sec8_ringImg from '../assets/images/sec8_ring.png'
import footerImg from '../assets/images/fixed.png'

function Home() {
  return (
    <div>
      {/* section1 start */}
      <div className="section_one pc_screen">
        <div className="container">

          <div className='sec1_main'>
            <div className='sec_1_left'>
              <div className='nav'>
                <img src={logo_img} className="logo_img" alt="" />
              </div>
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
            <div>
              <img src={sec1_img} className="sec1_img" alt="" />
            </div>
          </div>

        </div>
      </div>
      <div className="mobile_section_one mobile_screen">
        <div className="container">
          <div className='sec_1_left'>
          <div className='nav'>
          <img src={logo_img} className="logo_img" alt="" />
          </div>
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

              <img src={sec1_img} className="sec1_img" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* section1 end */}

      {/* section2 start */}
      <div className="section_two spaceY">
        <div className="container">
          <h1 className='title1 text_violet text-center'>
            패기와 능력을 갖춘 <br />
            <span className='fw-bold'>전문직 단체와 정식 제휴</span>
          </h1>
          <p className='para1 text-center mt-2 mt-md-3 mb-5'>특별한 분에게 특별한 만남을</p>
          <div className="sec_2_card_main">
            <div className="sec_2_card cursor_point">
              <div className='sec_2_card_inner'>
                <img src={sec2_cimg1} className="sec2_card_img" alt="" />
                <p className='para2 mt-4 mb-0'>
                  2022년 4월 <br />
                  <span className='fw-bold'>대한공중보건의사협의회 제휴</span>
                </p>
              </div>
            </div>
            <div className="sec_2_card cursor_point">
              <div className='sec_2_card_inner'>
                <img src={sec2_cimg2} className="sec2_card_img" alt="" />
                <p className='para2 mt-4 mb-0'>
                  2021년 3월 <br />
                  <span className='fw-bold'>대한공중보건치과의사협회 제휴</span>
                </p>
              </div>
            </div>
            <div className="sec_2_card cursor_point">
              <div className='sec_2_card_inner'>
                <img src={sec2_cimg3} className="sec2_card_img" alt="" />
                <p className='para2 mt-4 mb-0'>
                  2020년 3월~21년 2월 <br />
                  <span className='fw-bold'>대한공중보건한의사협의회 제휴</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* section2 end */}

      {/* section3 start */}
      <div className="section_three spaceY">
        <div className="container">
          <div className="sec3_main">

            <div className='sec3_card_group'>
              <div className="sec3_card cursor_point">
                <img src={sec3_cimg1} className="sec3_cimg" alt="" />
                <div className='title-wrap'>
                  <p className='title2 mb-2 mb-md-3'>통신사를 통한 본인인증</p>
                  <p className='para2 mb-0'>
                    휴대폰 본인인증을 통해 <br />
                    허위프로필 가입 불가 시스템 구축
                  </p>
                </div>
              </div>
              <div className="sec3_card cursor_point mt-4">
                <img src={sec3_cimg2} className="sec3_cimg" alt="" />
                <div className='title-wrap'>
                  <p className='title2 mb-2 mb-md-3'>학력, 직장, 직업 인증 시스템</p>
                  <p className='para2 mb-0'>
                    약 30만건의 정확한 인증을 통해  <br />
                    검증된 노하우 및 시스템
                  </p>
                </div>
              </div>
              <div className="sec3_card cursor_point mt-4">
                <img src={sec3_cimg3} className="sec3_cimg" alt="" />
                <div className='title-wrap'>
                  <p className='title2 mb-2 mb-md-3'>아는 사람 만나지 않기</p>
                  <p className='para2 mb-0'>
                    저장된 연락처 등록을 통해 아는 <br />
                    사람에게 소개되는 상황 사전 방지
                  </p>
                </div>
              </div>
            </div>

            <div className='sec3_child2'>
              <div>
                <h1 className='title1 text_violet text-center text-lg-start'>
                  지인 소개보다 <br />
                  <span className='fw-bold'>믿을 수 있는</span><br className='pc_screen' />
                  <span className='fw-bold'> 소개팅 <span className='title1'>어플</span></span>
                </h1>
                <p className='para2 text-center text-lg-start'>
                  결혼 정보 회사보다는 편하고 <br />
                  소개팅 앱보다는 진중한 <br className='pc_screen' />
                  인증 소개팅
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* section3 end */}

      {/* section4 start */}
      <div className="section_four spaceY">
        <div className="container">
          <div className="sec4_main">

            <div className='sec4_child1'>
              <div>
                <h1 className='title1 text_violet text-center text-lg-start'>
                  다이아처럼 빛나는 <br />
                  <span className='fw-bold'>당신을 위한 혜택</span>
                </h1>
                <p className='para2 text-center text-lg-start'>
                  다이아매치에서 제공하는 <br />
                  상위 1% 혜택을 마음껏 누려보세요
                </p>
              </div>
            </div>

            <div className='sec4_group'>
              <div className="sec4_card cursor_point">
                <img src={sec4_cimg1} className="sec4_cimg" alt="" />
                <div>
                  <p className='title2 mb-2 mb-md-3'>클린한 서비스 운영</p>
                  <p className='para2 mb-0'>
                    호연 법률 사무소와 전략적 업무 제휴 <br />
                    및 철저한 본인 인증 <br />
                    시스템 구축을 통한 안전한 만남
                  </p>
                </div>
              </div>
              <div className="sec4_card cursor_point mt-4">
                <img src={sec4_cimg2} className="sec4_cimg" alt="" />
                <div>
                  <p className='title2 mb-2 mb-md-3'>24시간 커플매니저 상담소 운영</p>
                  <p className='para2 mb-0'>
                    당신만을 위한 커플 매니저 24시간 <br />
                    운영을 통해 서비스 편의를 보장
                  </p>
                </div>
              </div>
              <div className="sec4_card cursor_point mt-4">
                <img src={sec4_cimg3} className="sec4_cimg" alt="" />
                <div>
                  <p className='title2 mb-2 mb-md-3'>상위 1%의 매력적인 이성 소개</p>
                  <p className='para2 mb-0'>
                    전문직, 아나운서, 모델 등 <br />
                    외모와 능력이 검증된 상위 1% <br />
                    이성을 만나보세요.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* section4 end */}

      {/* section5 start */}
      <div className="section_five spaceY">
        <div className="container">
          <div className="sec_5_grid">
            <div className='sec_5_grid_child'>
              <div className="sec5_main">
                <div className='sec5_child sec5_child1 '>
                  {/* card1 */}
                  <p className='sec5_card2_title invisible'>여성만 인증 가능</p>
                  <h2 className='title2'>빛나는 능력</h2>
                  <hr />
                  <p className='para2'><span className='text_violet fw-bold'>명문대학</span> 인증하기</p>
                  <p className='para2'><span className='text_violet fw-bold'>전문직 </span> 인증하기</p>
                  <p className='para2'><span className='text_violet fw-bold'>고액 자산</span> 인증하기</p>
                  <p className='para2'><span className='text_violet fw-bold'>고액 소득</span> 인증하기</p>
                  <p className='para2'><span className='text_violet fw-bold'>고급 자동차</span> 인증하기</p>
                  <p className='para2'><span className='text_violet fw-bold'>명문집안</span> 인증하기</p>
                  <p className='sec5_left_card_footer_text'>
                    등 다이아매치 내규에 따른 조건 중
                    <br/>
                    1가지 인증하기
                  </p>
                </div>
                <div className='sec5_child sec5_child2'>
                  {/* card 2 */}
                  <p className='sec5_card2_title'>여성만 인증 가능</p>
                  <h2 className='title2'>빛나는 외모</h2>
                  <hr />
                  <p className='para2'><span className='text_violet fw-bold'>프로필 심사 통과</span>
                    <br/>인증하기
                  </p>
                  <p className='sec5_left_card_footer_text'>
                    매력지수 3.0 이상
                  </p>
                  {/* card 2 */}
                </div>
              </div>
            </div>
            <div className='sec_5_grid_child'>
              <div className='title_wrap'>
                <h1 className='title1 text_violet text-center text-lg-start'>
                  다이아매치<br />
                  <span className='fw-bold'>가 입 조 건</span>
                </h1>
                <p className='para2 text-center text-lg-start'>
                  조건 중 1가지를 인증하고 가입해보세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section5 end */}

      {/* section6 start */}
      <div className="section_six spaceY">
        <div className="container">
          <div className="sec6_main">

            <div className='sec6_child sec6_child1'>
              <div>
                <div className='sec6_logo_main'>
                  <div className='sec5_logo_con'>
                    <img src={sec6_logo1} alt="" />
                  </div>
                  <div className='sec5_logo_con'>
                    <img src={sec6_logo2} alt="" />
                  </div>
                </div>
                <div className='text-center text-lg-start'>
                  <h1 className='sec6_title text_violet'>조선일보, 한국경제 등</h1>
                  <h1 className='title1 text_violet fw-bold'>
                    메이저 언론사도 <br />
                    주목하는 다이아매치
                  </h1>
                  <p className='para11'>
                    다이아매치의 특별함을 증명해주는 언론사 보도
                  </p>
                </div>
              </div>
            </div>

            <div className='sec6_child sec6_child2'>
              <div className='sec6_right_logo_card'>
                <div className='sec5_card_logo_con'>
                  <img src={sec6_logo3} alt="" />
                </div>
                <p className='para1 mb-0'>
                  다이아매치, 대한공중보건의사협의회와 정식 제휴 체결 <br />
                  (2022. 05. 17)
                </p>
              </div>
              <div className='sec6_right_logo_card'>
                <div className='sec5_card_logo_con'>
                  <img src={sec6_logo4} alt="" />
                </div>
                <p className='para1 mb-0'>
                  '다이아매치' 대한공중보건치과의사협회와 제휴 협약 <br />
                  (2021. 07. 08)
                </p>
              </div>
              <div className='sec6_right_logo_card'>
                <div className='sec5_card_logo_con'>
                  <img src={sec6_logo2} alt="" />
                </div>
                <p className='para1 mb-0'>
                  누구나 가입 불가.......소개팅앱도 양극화 시대<br />
                  (2021. 02. 27)
                </p>
              </div>
              <div className='sec6_right_logo_card'>
                <div className='sec5_card_logo_con'>
                  <img src={sec6_logo1} alt="" />
                </div>
                <p className='para1 mb-0'>
                  남성은 1억5000만원 슈퍼카나 강남3구, 여성은?<br />
                  (2021. 01. 25)
                </p>
              </div>
              <div className='sec6_right_logo_card'>
                <div className='sec5_card_logo_con'>
                  <img src={sec6_logo5} alt="" />
                </div>
                <p className='para1 mb-0'>
                  [신(新)인류 연애 리포트]'연애도 랜선으로' <br />
                  (2020. 06. 02)
                </p>
              </div>
              <div className='sec6_right_logo_card'>
                <div className='sec5_card_logo_con'>
                  <img src={sec6_logo6} alt="" />
                </div>
                <p className='para1 mb-0'>
                  다이아매치, 대한공중보건한의사협의회와 정식 제휴 <br />
                  (2019. 11. 26)
                </p>
              </div>
              <div className='sec6_right_logo_card'>
                <div className='sec5_card_logo_con'>
                  <img src={sec6_logo2} alt="" />
                </div>
                <p className='para1 mb-0'>
                  콘버스-2017대한민국 디지털 브랜드대상 '대상'수상 <br />
                  (2017. 07. 19)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section6 end */}

      {/* section7 start */}
      <div className="section_seven pc_screen spaceY">
        <div className="container">
          <div className="sec7_main">
            <div className="sec7_child sec7_child1">
              <img src={sec7_leftImg} className="sec7_leftImg" alt="" />
            </div>
            <div className="sec7_child sec7_child2">
              <div className='text-white'>
                <h1 className='sec7_title'>오늘 하루 어땠어?</h1>
                <h1 className='sec7_title1'>
                  오직 <span className='fw-bold'>다이아매치 회원</span>들만<br />
                  이용 가능한 특별한 <br />
                  <span className='fw-bold'>프라이빗 소통 공간</span>
                </h1>
                <p className='para1 mt-2 mt-md-3'>
                  인연의 설레임과 자유로운 수다가 공존하는 라운지
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile_section_seven mobile_screen spaceY">
        <div className="container">
          <div className="sec7_main">
            <div className="sec7_child sec7_child1">
              <img src={sec7_leftImg} className="sec7_leftImg" alt="" />
            </div>
            <div className="sec7_child sec7_child2">
              <div className='text-white'>
                <h1 className='sec6_title'>오늘 하루 어땠어?</h1>
                <h1 className='sec7_title'>
                  오직 <span className='fw-bold'>다이아매치 회원</span>들만<br />
                  이용 가능한 특별한 <br />
                  <span className='fw-bold'>프라이빗 소통 공간</span>
                </h1>
                <p className='para1 mt-2 mt-md-3'>
                  인연의 설레임과 자유로운 수다가 공존하는 라운지
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section7 end */}

      {/* section8 start */}
      <div className="section_eight spaceY">
        <div className="container">
          <div className="sec8_main">
            <div className="sec8_child sec8_child1">
              <div className='sec-8-text'>
                <h1 className='sec_8_title'>상위1%인</h1>
                <h1 className='sec_8_title1'>당신이기에,</h1>
                <h1 className='sec_8_subtitle'>다이아매치</h1>
                <div class="btnArea02">
                  <a href="https://apps.apple.com/kr/app/%EB%8B%A4%EC%9D%B4%EC%95%84%EB%A7%A4%EC%B9%98-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%86%8C%EA%B0%9C%ED%8C%85/id1447077801" rel="noreferrer" target="_blank">
                    <img src={btn_1} alt="" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.dating.diamatch" rel="noreferrer" target="_blank">
                    <img src={btn_2} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="sec8_child sec8_child2">
              
              <div className='sec8_innerDiv'>
              <img src={sec8_ringImg} className="sec8_ringImg" alt="" />
                <p className='sec8_desc'>
                  다이아처럼 매력적인 당신이기에, 불확실한 누군가를 <br />
                  만나는 것은 더욱 쉽지 않은 일이라는 것 잘 알고 있습니다. <br /> <br />

                  하지만 검증된 사람을 만나고자 지인에게 소개팅을 부탁하는 것은<br />
                  왠지 부담스럽습니다. 가입하고자 알아봤던 결혼정보회사는<br />
                  절차가 너무 불편하고 가입하기엔 너무 이른 나이실 겁니다.<br /><br />

                  이젠 다이아매치를 통해 이러한 고민을 해결하실 수 있습니다.<br />
                  다이아매치만의 혁신적인 시스템을 통해<br />
                  검증된 이성만을 소개받고 만나실 수 있습니다.<br /><br />

                  다이아매치에 가입하신 분들은 모두 능력있고 매력적인 이성을<br />
                  만나기 위한 자격을 갖추신 특별한 분들입니다.<br />
                  특별한 회원분들에게 특별한 만남을 선사해드리고자 다이아매치는<br />
                  전문직종 등 특별한 단체와의 제휴를 꾸준히 진행하고 있습니다.<br /><br />

                  물론 결혼정보회사와 다르게 가입비는 일절 없으며 '소개' 등<br />
                  대부분의 서비스는 무료로 이용하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
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
        <a className='mobile_bottom_link' href="https://play.google.com/store/apps/details?id=com.dating.diamatch" rel="noreferrer" target="_blank">
          <img src={footerImg} className='fixed' alt=''/>
        </a>
      </div>
    </div>
  )
}

export default Home