import React from 'react'
import sec_one_pc from '../assets/images/section_one_pc.png'
import sec_one_mobile from '../assets/images/section_one_mobile.png'
import sec_two_pc from '../assets/images/section_two_pc.png'
import sec_two_mobile from '../assets/images/section_two_mobile.png'
function Home() {
  return (
    <div>
      {/* section1 start */}
      <div className="section_one">
        <img src={sec_one_pc} className="pc_img" alt="" />
        <img src={sec_one_mobile} className="mobile_img" alt="" />
      </div>
      {/* section1 end */}

      {/* section2 start */}
      <div className="section_two">
        <img src={sec_two_pc} className="pc_img" alt="" />
        <img src={sec_two_mobile} className="mobile_img" alt="" />
      </div>
      {/* section2 end */}

      {/* section3 start */}
      {/* section3 end */}

      {/* section4 start */}
      {/* section4 end */}

      {/* section5 start */}
      {/* section5 end */}

      {/* section6 start */}
      {/* section6 end */}

      {/* section7 start */}
      {/* section7 end */}

      {/* section8 start */}
      {/* section8 end */}
    </div>
  )
}

export default Home