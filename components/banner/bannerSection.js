import BannerBtn from './bannerBtn'
import BannerHeader from './bannerHeader'
import BannerImg from './bannerImage'
import BannerPara from './bannerPara'
import classes from './bannerSection.module.css'

function BannerSection(){
    return(
        <div className={classes.section}>
            <div className={classes.sectiona}>
                <BannerHeader/>
                <BannerPara/>
                <BannerBtn/>

            </div>
            <div className={classes.sectionb}>
                <BannerImg/>

            </div>
        </div>
    )
}
export default BannerSection