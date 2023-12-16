import React from 'react'
import FadeInSection from '/src/components/cards/FadeInSection'
import Nitin from '/src/assets/pic/Nitin-Kumar.jpeg';
import Ashutosh from '/src/assets/pic/ashutosh.jpeg';
import Kishlay from '/src/assets/pic/kishlayjha.jpeg';
import Hiba from '/src/assets/pic/ashraf.jpeg';
import Manish from '/src/assets/pic/manish.jpeg';
import linkedIn from '/src/assets/linkedin.png';

function AdvisorCard(props){
    return(
        <div className='w-56 hover:scale-110 transition-all delay-100'>
                <div className='group hover:bg-lime-600 text-lime-600 hover:text-white shadow-2xl hover:shadow-2xl transition-all delay-100 flex flex-col justify-center items-center w-full h-full p-2 border rounded-2xl'>
                    <img src={props.Img} alt="/src." className='h-44 w-44 m-2 group-hover:grayscale(100%) group-hover:blur-[1px] rounded-full outline outline-3 outline-offset-4 outline-lime-600' />
                    <div className=' h-full w-full absolute bottom-6 group-hover:bottom-[86px] transition-all delay-100 p-3 flex justify-center items-center'>
                        <a href={props.linkedIn} target="_blank"><img src={linkedIn} alt="..." className='h-10 w-10 hover:scale-150 transition-all delay-140 hover:shadow-2xl shadow-black'/></a>
                    </div>
                    <div className='flex justify-center items-center'>
                        <p className='font-title font-bold text-lg'>{props.name}</p>

                    </div>

                    <div className='flex flex-col justify-center items-center m-1'>
                        <ul className='font-content text-sm font-extralight text-black list-disc list-inside'>
                            <li className=''>{props.p1}</li>
                            <li className=''>{props.p2}</li>
                            <li className=''>{props.p3}</li>
                        </ul>
                    </div>

                </div>
            </div>
    )
}

function OurAdvisors() {
  return (
    <div className='mt-4 mb-14'>
        <div className='flex justify-center items-center text-lime-600 text-4xl sm:text-6xl md:text-7xl font-title font-bold pt-8 md:p-8'>
            <FadeInSection>
            <p>OUR MENTORS</p>
            </FadeInSection>
        </div>
        <div className='flex flex-col md:flex-row justify-evenly md:gap-x-4 gap-y-10 lg:gap-x-10 pt-8 items-center'>
            <FadeInSection>
            <AdvisorCard
                Img={Nitin}
                name="Nitin Kumar"
                linkedIn="https://www.linkedin.com/in/nikumar/"
                p1 ="Global CEO"
                p2="Board Member & VC Investor"
                p3="Former Consulting Partner (Strategy, M&A, Transformation)"
            />
            </FadeInSection>
            <FadeInSection>
            <AdvisorCard
                Img={Manish}
                name="Manish Anand"
                linkedIn="https://www.linkedin.com/in/manish-anand-35070"
                p1 = "Senior Consultant at Delloite"
                p2="IIM Lucknow alumnus"
                p3="Former Assistant Manager at Exide"
            />
            </FadeInSection>
            <FadeInSection>
            <AdvisorCard
                Img={Ashutosh}
                name="ASHUTOSH SETTY"
                linkedIn="https://www.linkedin.com/in/ashutosh-setty-mba22rsm/?originalSubdomain=nl"
                p1 = "Senior Consultant at BCG Platinion"
                p2="Former Senior Associate at PwC"
                p3="Rotterdam School of Management, Erasmus University alumnus"
            />
            </FadeInSection>
            <FadeInSection>
                <AdvisorCard
                    Img={Hiba}
                    name="Hiba Ashraf"
                    linkedIn="https://www.linkedin.com/in/hiba-ashraf-b67143135/"
                    p1 = "Consultant at KPMG India"
                    p2="ECE alumus of Birla Institute of Technology, Mesra "
                    p3="Former Leader at BRICS Chamber of Commerce & Industry"
                />
            </FadeInSection>
            <FadeInSection>
                <AdvisorCard
                    Img={Kishlay}
                    name="Kislay Jha"
                    linkedIn="https://www.linkedin.com/in/kislay-jha-52b201104/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in"
                    p1 = "Senior Consultant at BCG"
                    p2="IIM Ahmedabad alumnus"
                    p3="Former  Manager at Tata Steel"
                />
            </FadeInSection>
        </div>
    </div>
  )
}

export default OurAdvisors
