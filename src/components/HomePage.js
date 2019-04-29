import React from 'react'
import Banner from './Banner'

function HomePage(){
    return(
        <div>
            <Banner/>
            <div class="columns">
  <div class="column homePageBox has-background-grey-lighter has-text-info ">
    First 3 Steps
  </div>
  <div class="column homePageBox has-background-grey-lighter has-text-info">
    Where Are You Now?
  </div>
  <div class="column homePageBox has-background-grey-lighter has-text-info">
    Medicaid & RN IBCLC
  </div>
  
</div>
<div class="columns">
  <div class="column homePageBox has-background-grey-lighter has-text-info">
    Billing for Mom & Dad
  </div>
  <div class="column homePageBox has-background-grey-lighter has-text-info">
    Integration with Docs
  </div>
  <div class="column homePageBox has-background-grey-lighter has-text-info">
    FAQs
  </div>
  
</div>
        </div>
    )
}

export default HomePage;








//Banner will always be visible
//ContentPanel will toggle which 'content' will show
//navbar will un-hide when content loads
