import { useCallback, useEffect, useState } from "react";
import Test from "./Test";

const HomePage = () => {
  const onRectangle20Click = useCallback(() => {
    // Please sync "Michael Jackson" to the project
  }, []);

  const [data,setData] = useState([]);
  const [search,setSearch] = useState('Michael Jackson')
  const getData = ()=>{
    fetch(`http://localhost:3000/jsonarray?name=${search}`)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error('Error fetching data:', error));
  }


  useEffect(()=>{
    getData();
  },[search])
  
    

  return (
    <a className="[text-decoration:none] bg-fs-search-surface-bg w-[1536px] h-[3109px] overflow-hidden text-left text-sm text-black font-poppins">
      <div className="absolute bottom-[0.47px] left-[0px] flex flex-col items-start justify-start text-fs-search-button-text font-open-sans">
        <div className="relative [background:linear-gradient(95.74deg,_#0076ce,_#9400d3)] w-[1536px] h-[341px]">
          <a
            className="absolute h-[6.41%] w-[1.3%] top-[65.06%] left-[8.46%] [text-decoration:underline] text-center flex items-center justify-center"
            href="https://www.facebook.com/search/top?q=mohitetax"
            target="_blank"
          >
            f
          </a>
          <a
            className="absolute h-[6.41%] w-[1.3%] top-[65.06%] left-[11.59%] [text-decoration:underline] text-center flex items-center justify-center"
            href="https://www.instagram.com/mohitetax_/"
            target="_blank"
          >
            f
          </a>
          <div className="absolute top-[92px] left-[128px] leading-[22px] inline-block w-[272px]">
            India's first platform dedicated to simplifying partner search
          </div>
          <div className="absolute top-[276px] left-[128px] leading-[22px] inline-block w-[681px]">
            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
            Maharashtra
          </div>
          <div className="absolute top-[276px] left-[1240px] w-[168px] h-6 text-center">
            <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/footerssocial-icon.svg"
              />
            </div>
            <div className="absolute top-[0px] left-[48px] flex flex-row items-center justify-start">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/footerssocial-icon1.svg"
              />
            </div>
            <div className="absolute top-[0px] left-[144px] flex flex-row items-center justify-start">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/footerssocial-icon2.svg"
              />
            </div>
            <div className="absolute top-[0px] left-[96px] w-6 h-6 overflow-hidden">
              <img
                className="absolute h-3/5 w-3/5 top-[20%] right-[20.3%] bottom-[20%] left-[19.69%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
              <a
                className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] [text-decoration:underline] flex items-center justify-center w-5 h-5"
                href="https://www.instagram.com/mohitetax_/"
                target="_blank"
              >
                f
              </a>
            </div>
          </div>
          <div className="absolute top-[41px] left-[890px] w-[130px] h-[95px] text-base">
            <b className="absolute top-[0px] left-[0px] text-sm flex items-center w-[130px]">
              RESOURCES
            </b>
            <div className="absolute top-[35px] left-[0px] w-[130px] h-[22px]">
              <div className="absolute w-full top-[0%] left-[0%] leading-[22px] flex items-center">
                Blogs
              </div>
            </div>
            <div className="absolute top-[73px] left-[0px] w-[130px] h-[22px]">
              <div className="absolute w-full top-[0%] left-[0%] leading-[22px] flex items-center">
                Forms
              </div>
            </div>
          </div>
          <div className="absolute top-[41px] left-[1084px] w-[130px] h-[95px] text-base">
            <b className="absolute top-[0px] left-[0px] text-sm flex items-center w-[126.49px]">
              SUPPORT
            </b>
            <div className="absolute top-[35px] left-[0px] w-[130px] h-[22px]">
              <div className="absolute w-full top-[0%] left-[0%] leading-[22px] flex items-center">
                Help
              </div>
            </div>
            <div className="absolute top-[73px] left-[0px] w-[130px] h-[22px]">
              <div className="absolute w-full top-[0%] left-[0%] leading-[22px] flex items-center">
                Contact Us
              </div>
            </div>
          </div>
          <div className="absolute top-[41px] left-[1278px] w-[130px] h-[133px] text-base">
            <b className="absolute top-[0px] left-[0px] text-sm flex items-center w-[63.56px]">
              LEGAL
            </b>
            <div className="absolute top-[35px] left-[0px] w-[130px] h-[22px]">
              <div className="absolute w-full top-[0%] left-[0%] leading-[22px] flex items-center">
                Privacy
              </div>
            </div>
            <div className="absolute top-[73px] left-[0px] w-[130px] h-[22px]">
              <div className="absolute w-full top-[0%] left-[0%] leading-[22px] flex items-center">
                Terms
              </div>
            </div>
            <div className="absolute top-[111px] left-[0px] w-[130px] h-[22px]">
              <div className="absolute w-full top-[0%] left-[0%] leading-[22px] flex items-center">
                Accessibility
              </div>
            </div>
          </div>
          <div className="absolute top-[41px] left-[696px] w-[130px] h-[171px] text-base">
            <b className="absolute top-[0px] left-[0px] text-sm flex items-center w-[101.33px]">
              SOLUTIONS
            </b>
            <div className="absolute top-[35px] left-[0px] w-[130px] h-[22px]">
              <div className="absolute w-full top-[0%] left-[0%] leading-[22px] flex items-center">
                Search
              </div>
            </div>
            <div className="absolute top-[73px] left-[0px] w-[130px] h-[22px]">
              <div className="absolute w-full top-[0%] left-[0%] leading-[22px] flex items-center">
                Connect
              </div>
            </div>
            <div className="absolute top-[111px] left-[0px] w-[130px] h-[22px]">
              <div className="absolute top-[0%] left-[0%] leading-[22px]">
                Research
              </div>
            </div>
            <div className="absolute top-[149px] left-[0px] w-[130px] h-[22px]">
              <div className="absolute top-[0%] left-[0%] leading-[22px]">
                Academy
              </div>
            </div>
          </div>
          <div className="absolute top-[41px] left-[502px] w-[130px] h-[133px] text-base">
            <b className="absolute top-[0px] left-[0px] text-sm flex items-center w-[101.33px]">
              COMPANY
            </b>
            <div className="absolute top-[35px] left-[0px] w-[130px] h-[22px]">
              <div className="absolute w-full top-[0%] left-[0%] leading-[22px] flex items-center">{`About `}</div>
            </div>
            <div className="absolute top-[73px] left-[0px] w-[130px] h-[22px]">
              <div className="absolute w-full top-[0%] left-[0%] leading-[22px] flex items-center">
                Pricing
              </div>
            </div>
            <div className="absolute top-[111px] left-[0px] w-[130px] h-[22px]">
              <div className="absolute w-full top-[0%] left-[0%] leading-[22px] flex items-center">
                Careers
              </div>
            </div>
          </div>
          <img
            className="absolute top-[243.5px] left-[calc(50%_-_640px)] w-[1280px] h-px"
            alt=""
            src="/vector-195.svg"
          />
          <img
            className="absolute top-[calc(50%_-_139.03px)] left-[127px] w-[138px] h-[45px] object-cover mix-blend-luminosity"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <div className="relative bg-black w-[1536px] h-[57px] text-center text-[12px]">
          <div className="absolute top-[calc(50%_-_7.5px)] left-[calc(50%_-_254px)]">
            Registered trademark of India Private Limited © 2023 loerumipsum
            Inc. All Rights Reserved
          </div>
        </div>
      </div>
      <div className="absolute top-[1964px] left-[128px] w-[1279.6px] h-[614.53px]">
        <img
          className="absolute top-[356px] left-[0px] w-[65px] h-[65px] overflow-hidden"
          alt=""
          src="/iconparktwotonesearch.svg"
        />
        <div className="absolute top-[356px] left-[81px] text-xl leading-[32px] inline-block w-[205px]">
          <b>SEARCH</b>
          <span>{` for vital company information `}</span>
        </div>
        <img
          className="absolute top-[356px] left-[318px] w-[65px] h-[65px] overflow-hidden"
          alt=""
          src="/iconparktwotoneenquire.svg"
        />
        <div className="absolute top-[356px] left-[399px] text-xl leading-[32px] inline-block w-[205px]">
          <b>CONNECT</b>
          <span> with the resources to meet your business needs</span>
        </div>
        <img
          className="absolute top-[516px] left-[0px] w-[65px] h-[65px] overflow-hidden"
          alt=""
          src="/iconparktwotonetablereport.svg"
        />
        <div className="absolute top-[516px] left-[81px] text-xl leading-[32px] inline-block w-[205px]">
          <p className="[margin-block-start:0] [margin-block-end:20px]">
            <b className="font-poppins">RESEARCH</b>
            <span>{` and generate reports `}</span>
          </p>
          <p className="m-0">{`that drive growth `}</p>
        </div>
        <img
          className="absolute top-[516px] left-[318px] w-[65px] h-[65px] overflow-hidden"
          alt=""
          src="/iconparktwotonedegreehat.svg"
        />
        <div className="absolute top-[516px] left-[calc(50%_-_240.8px)] text-xl leading-[32px] inline-block w-[205px] font-open-sans">
          <b>ACADEMY</b>
          <span> to give you the skills for success in your career</span>
        </div>
        <b className="absolute top-[0px] left-[calc(50%_-_639.8px)] text-46xl inline-block w-[670px]">
          <p className="m-0">
            <span className="[background:linear-gradient(90.28deg,_#0076ce,_#9400d3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              All-in-One
            </span>
            <span> platform</span>
          </p>
          <p className="m-0">that Makes Easier</p>
        </b>
        <div className="absolute top-[210px] left-[calc(50%_-_639.8px)] text-5xl leading-[38px] inline-block w-[604px]">
          We are more than a platform; We are your success partner. Discover our
          services to achieve your business and educational goals
        </div>
        <img
          className="absolute h-[56.58%] w-[21.13%] top-[0%] right-[0%] bottom-[43.42%] left-[78.87%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/student@2x.png"
        />
        <div className="absolute top-[55px] left-[769px] bg-fs-search-button-text w-[251px] flex flex-col items-end justify-center font-open-sans">
          <div className="rounded-t-mini rounded-br-10xs rounded-bl-mini bg-fs-search-banner-purple flex flex-row items-start justify-start py-2 px-4">
            <div className="relative leading-[160%]">{`Hey, check out loreumipsum services. `}</div>
          </div>
        </div>
        <div className="absolute top-[101px] left-[705px] w-[315px] flex flex-col items-end justify-center font-open-sans">
          <div className="rounded-t-mini rounded-br-10xs rounded-bl-mini bg-fs-search-banner-purple flex flex-row items-start justify-start py-2 px-4">
            <div className="relative leading-[160%]">
              I learned from their videos, got my first job.
            </div>
          </div>
        </div>
        <div className="absolute top-[147px] left-[688px] w-[332px] flex flex-col items-end justify-center font-open-sans">
          <div className="rounded-t-mini rounded-br-10xs rounded-bl-mini bg-fs-search-banner-purple flex flex-row items-start justify-start py-2 px-4">
            <div className="relative leading-[160%]">
              You won't be disappointed with their services.
            </div>
          </div>
        </div>
        <img
          className="absolute h-[56.23%] w-[23.96%] top-[43.77%] right-[23.68%] bottom-[0%] left-[52.36%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/teacher@2x.png"
        />
        <div className="absolute top-[220px] left-[698px] rounded-t-mini rounded-br-mini rounded-bl-10xs bg-fs-search-banner-blue flex flex-row items-start justify-start py-2 px-4">
          <div className="relative leading-[160%]">
            I got a perfect analysis report from them too
          </div>
        </div>
        <div className="absolute top-[266px] left-[883px] rounded-t-mini rounded-br-mini rounded-bl-10xs bg-fs-search-banner-blue flex flex-row items-start justify-start py-2 px-4">
          <div className="relative leading-[160%]">Oh, that's great.</div>
        </div>
      </div>
      <div className="absolute top-[935px] left-[calc(50%_-_774px)] w-[1542px] h-[897px] text-base">
        <div className="absolute top-[114px] left-[calc(50%_-_637px)] text-5xl leading-[38px] text-center inline-block w-[1280px]">
          To remain with us, it is essential that you diligently follow the
          steps provided
        </div>
        <div className="absolute bottom-[29px] left-[0px] w-[1542px] h-[781px]">
          <img
            className="absolute bottom-[24px] left-[6px] w-[1542px] h-[757px]"
            alt=""
            src="/vector-13.svg"
          />
          <div className="absolute top-[781px] left-[6px] [background:linear-gradient(180deg,_#fafbfc,_rgba(250,_251,_252,_0.08))] w-[1536px] h-72" />
        </div>
        <b className="absolute top-[228.5px] left-[149px] text-[35px] flex font-open-sans text-fs-search-button-text items-center w-[24.38px] h-[37.14px]">
          1
        </b>
        <div className="absolute top-[235.5px] left-[133px] rounded-xl bg-fs-search-button-text shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)] w-[405px] h-[266px]" />
        <div className="absolute top-[294.5px] left-[165px] leading-[26px] text-center inline-block w-[341px]">{`Invested shareholders must confirm payment and office address `}</div>
        <div className="absolute top-[362.5px] left-[165px] rounded-3xs bg-fs-search-table-bg w-[341px] h-[113px]" />
        <div className="absolute top-[373.5px] left-[181px] w-[315px] h-[93px] font-open-sans">
          <div className="absolute top-[0px] left-[123px] w-48 h-[93px]">
            <div className="absolute top-[34.5px] left-[0px] leading-[28px] inline-block w-48">
              <b>
                ₹<span className="[text-decoration:underline]">50,000</span>
              </b>
              <span> for the company</span>
            </div>
            <div className="absolute top-[65px] left-[0px] leading-[28px] inline-block w-[186px]">
              <b>
                ₹<span className="[text-decoration:underline]">1,000</span>
              </b>
              <span> /day for directors</span>
            </div>
            <b className="absolute top-[0px] left-[0px] text-lg leading-[28px] text-fs-search-red">
              Penalty fees
            </b>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[115px] h-[84px]">
            <div className="absolute top-[32px] left-[0px] leading-[26px] inline-block w-[115px]">
              <p className="[margin-block-start:0] [margin-block-end:10px]">{`Within 180 `}</p>
              <p className="m-0">{`days `}</p>
            </div>
            <b className="absolute top-[0px] left-[0px] text-lg leading-[28px] inline-block text-roc-primary w-[105.96px]">
              Due date
            </b>
          </div>
        </div>
        <div className="absolute top-[259.5px] left-[165px] text-xl text-center inline-block w-[341px]">
          <b> </b>
          <i className="font-bold">{` `}</i>
        </div>
        <div className="absolute top-[225px] left-[126px] rounded-3xs [background:linear-gradient(95.64deg,_#0076ce,_#9400d3)] w-[46px] h-[46px]" />
        <b className="absolute top-[229px] left-[134px] text-5xl text-fs-search-button-text">
          1st
        </b>
        <div className="absolute top-[236px] left-[570px] rounded-xl bg-fs-search-button-text shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)] w-[405px] h-[266px]" />
        <div className="absolute top-[295px] left-[602px] leading-[26px] text-center inline-block w-[341px]">
          Company informs new auditor and submits ADT.1 form to ROC.
        </div>
        <div className="absolute top-[363px] left-[602px] rounded-3xs bg-fs-search-table-bg w-[341px] h-[113px]" />
        <div className="absolute top-[374px] left-[618px] w-[309px] h-[84px] font-open-sans">
          <div className="absolute top-[0px] left-[123px] w-[186px] h-[63px]">
            <div className="absolute top-[35px] left-[0px] leading-[28px] inline-block w-[186px]">
              <b>
                ₹<span className="[text-decoration:underline]">300</span>
              </b>
              <span> per month.</span>
            </div>
            <b className="absolute top-[0px] left-[0px] text-lg leading-[28px] text-fs-search-red">
              Penalty fees
            </b>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[115px] h-[84px]">
            <div className="absolute top-[32px] left-[0px] leading-[26px] inline-block w-[115px]">
              <p className="[margin-block-start:0] [margin-block-end:10px]">{`Within 30 `}</p>
              <p className="m-0">{`days `}</p>
            </div>
            <b className="absolute top-[0px] left-[0px] text-lg leading-[28px] inline-block text-roc-primary w-[105.96px]">
              Due date
            </b>
          </div>
        </div>
        <b className="absolute top-[260px] left-[602px] text-xl inline-block text-center w-[341px]">
          Auditor Appointment
        </b>
        <div className="absolute top-[224px] left-[563px] rounded-3xs [background:linear-gradient(95.64deg,_#0076ce,_#9400d3)] w-[46px] h-[46px]" />
        <b className="absolute top-[228px] left-[569px] text-5xl text-fs-search-button-text">
          2nd
        </b>
        <div className="absolute top-[547px] left-[1008px] rounded-xl bg-fs-search-button-text shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)] w-[405px] h-[266px]" />
        <div className="absolute top-[606px] left-[1040px] leading-[26px] text-center inline-block w-[341px]">
          Companies must annually report activities and finances to the
          registrar.
        </div>
        <div className="absolute top-[674px] left-[1040px] rounded-3xs bg-fs-search-table-bg w-[341px] h-[113px]" />
        <div className="absolute top-[685px] left-[1056px] w-[309px] h-[91px] font-open-sans">
          <div className="absolute top-[0px] left-[147px] w-[162px] h-[91px]">
            <div className="absolute top-[35px] left-[0px] inline-block w-[162px]">
              <p className="[margin-block-start:0] [margin-block-end:10px]">
                <span className="leading-[28px]">
                  <b className="font-open-sans">
                    ₹<span className="[text-decoration:underline]">200</span>
                  </b>
                </span>
                <span>
                  <span className="leading-[28px]"> per day</span>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="leading-[26px]">(No upper limit)*</span>
                  <span className="leading-[28px]">{` `}</span>
                </span>
              </p>
            </div>
            <b className="absolute top-[0px] left-[0px] text-lg leading-[28px] inline-block text-fs-search-red w-[155.13px]">
              Penalty fees
            </b>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[115px] h-[84px]">
            <div className="absolute top-[32px] left-[0px] leading-[26px] inline-block w-[115px]">
              On or Before 31st December
            </div>
            <b className="absolute top-[0px] left-[0px] text-lg leading-[28px] inline-block text-roc-primary w-[105.96px]">
              Due date
            </b>
          </div>
        </div>
        <b className="absolute top-[571px] left-[1040px] text-xl inline-block text-center w-[341px]">
          MCA Form MGT-7
        </b>
        <div className="absolute top-[535px] left-[1001px] rounded-3xs [background:linear-gradient(95.64deg,_#0076ce,_#9400d3)] w-[46px] h-[46px]" />
        <b className="absolute top-[539px] left-[1008px] text-5xl text-fs-search-button-text">
          6th
        </b>
        <div className="absolute top-[547px] left-[570px] rounded-xl bg-fs-search-button-text shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)] w-[405px] h-[266px]" />
        <div className="absolute top-[606px] left-[602px] leading-[26px] text-center inline-block w-[341px]">
          <p className="m-0">{`It's like an official report card for a `}</p>
          <p className="m-0">company's documents</p>
        </div>
        <div className="absolute top-[674px] left-[602px] rounded-3xs bg-fs-search-table-bg w-[341px] h-[113px]" />
        <div className="absolute top-[720px] left-[770px] leading-[26px] inline-block w-[157px]">
          <p className="[margin-block-start:0] [margin-block-end:10px]">
            <b className="font-poppins">
              ₹<span className="[text-decoration:underline]">200</span>
            </b>
            <span>{` per day `}</span>
          </p>
          <p className="m-0">(No upper limit)*</p>
        </div>
        <b className="absolute top-[685px] left-[770px] text-lg leading-[28px] inline-block text-fs-search-red w-[121px]">
          Penalty fees
        </b>
        <div className="absolute top-[717px] left-[618px] leading-[26px] inline-block w-[123px]">{`On or Before 30th November `}</div>
        <b className="absolute top-[685px] left-[618px] text-lg leading-[28px] inline-block text-roc-primary w-[105.96px]">
          Due date
        </b>
        <b className="absolute top-[571px] left-[602px] text-xl inline-block text-center w-[341px]">
          MCA Form AOC-4
        </b>
        <div className="absolute top-[536px] left-[563px] rounded-3xs [background:linear-gradient(95.64deg,_#0076ce,_#9400d3)] w-[46px] h-[46px]" />
        <b className="absolute top-[540px] left-[570px] text-5xl text-fs-search-button-text">
          5th
        </b>
        <div className="absolute top-[547px] left-[133px] rounded-xl bg-fs-search-button-text shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)] w-[405px] h-[266px]" />
        <div className="absolute top-[606px] left-[165px] leading-[26px] text-center inline-block w-[341px]">
          Companies report money taken from people to ROC; auditors confirm
          details.
        </div>
        <div className="absolute top-[674px] left-[165px] rounded-3xs bg-fs-search-table-bg w-[341px] h-[113px]" />
        <div className="absolute top-[685px] left-[181px] w-[309px] h-[84px] font-open-sans">
          <div className="absolute top-[0px] left-[147px] w-[162px] h-[63px]">
            <div className="absolute top-[35px] left-[0px] leading-[28px] inline-block w-[162px]">
              <b>
                ₹<span className="[text-decoration:underline]">300</span>
              </b>
              <span> per month.</span>
            </div>
            <b className="absolute top-[0px] left-[0px] text-lg leading-[28px] inline-block text-fs-search-red w-[155.13px]">
              Penalty fees
            </b>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[115px] h-[84px]">
            <div className="absolute top-[32px] left-[0px] leading-[26px] inline-block w-[115px]">
              <p className="[margin-block-start:0] [margin-block-end:10px]">{`Within 30 `}</p>
              <p className="m-0">{`days `}</p>
            </div>
            <b className="absolute top-[0px] left-[0px] text-lg leading-[28px] inline-block text-roc-primary w-[105.96px]">
              Due date
            </b>
          </div>
        </div>
        <b className="absolute top-[571px] left-[165px] text-xl inline-block text-center w-[341px]">
          DPT-3
        </b>
        <div className="absolute top-[536px] left-[126px] rounded-3xs [background:linear-gradient(95.64deg,_#0076ce,_#9400d3)] w-[46px] h-[46px]" />
        <b className="absolute top-[540px] left-[133px] text-5xl text-fs-search-button-text">
          4th
        </b>
        <div className="absolute top-[235px] left-[1007px] rounded-xl bg-fs-search-button-text shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)] w-[405px] h-[266px]" />
        <div className="absolute top-[294px] left-[1039px] leading-[26px] text-center inline-block w-[341px]">{`Directors share personal information for identification & verification `}</div>
        <div className="absolute top-[362px] left-[1039px] rounded-3xs bg-fs-search-table-bg w-[341px] h-[113px]" />
        <div className="absolute top-[373px] left-[1055px] w-[309px] h-[61px] font-open-sans">
          <div className="absolute top-[0px] left-[152px] w-[157px] h-[61px]">
            <div className="absolute top-[35px] left-[0px] leading-[26px] inline-block w-[157px]">
              <b>
                ₹<span className="[text-decoration:underline]">5000</span>
              </b>
              <b>{` `}</b>
              <span className="font-open-sans">one time</span>
            </div>
            <b className="absolute top-[0px] left-[0px] text-lg leading-[28px] inline-block text-fs-search-red w-[121px]">
              Penalty fees
            </b>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[123px] h-[58px]">
            <div className="absolute top-[32px] left-[0px] leading-[26px] inline-block w-[123px]">
              Every Year
            </div>
            <b className="absolute top-[0px] left-[0px] text-lg leading-[28px] inline-block text-roc-primary w-[105.96px]">
              Due date
            </b>
          </div>
        </div>
        <b className="absolute top-[259px] left-[1039px] text-xl inline-block text-center w-[341px]">
          DIN eKYC
        </b>
        <div className="absolute top-[224px] left-[1001px] rounded-3xs [background:linear-gradient(95.64deg,_#0076ce,_#9400d3)] w-[46px] h-[46px]" />
        <b className="absolute top-[228px] left-[1008px] text-5xl text-fs-search-button-text">
          3rd
        </b>
        <div className="absolute top-[845px] left-[calc(50%_-_637px)] text-[17px] leading-[26px] inline-block w-[1280px]">
          <span>{`* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 `}</span>
          <b>every day</b>
          <span>
            {" "}
            until you file the form . There is no maximum penalty amount. So, if
            you don't file the form for a year, you will owe ₹73,000 per form
          </span>
        </div>
        <b className="absolute top-[0px] left-[calc(50%_-_332px)] text-46xl inline-block text-center w-[670px]">
          <span>{`Want to  `}</span>
          <span className="[background:linear-gradient(90.05deg,_#0076ce,_#9400d3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Join
          </span>
          <span> Us?</span>
        </b>
      </div>
      <section className="absolute top-[0px] left-[0px] bg-fs-search-button-text shadow-[0px_5.7142863273620605px_11.43px_rgba(0,_0,_0,_0.05)_inset] w-[1536px] h-[803px] overflow-hidden text-left text-46xl text-black font-poppins">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(74.71deg,_#feddee,_#fcf6fc_31.77%,_#c5eaed_64.58%,_#fdddfe)] [filter:blur(500px)] w-[1536px] h-[803px]" />
        <b className="absolute top-[255px] left-[calc(50%_-_640px)] leading-[80px] inline-block w-[670px]">
          <span>{`Find  `}</span>
          <span className="[background:linear-gradient(90.97deg,_#0076ce,_#9400d3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Partners
          </span>
          <span> (CAs) available online</span>
        </b>
        <header className="absolute top-[0px] right-[0px] w-[1536px] h-[85px] text-left text-lg text-black font-poppins">
          <div className="absolute top-[0px] left-[0px] bg-gray w-[1536px] h-[85px]" />
          <button className="cursor-pointer py-2.5 px-5 bg-[transparent] absolute top-[19px] left-[1192px] rounded-3xs box-border w-[100px] overflow-hidden flex flex-row items-center justify-center border-[1.5px] border-solid border-roc-primary">
            <b className="relative text-base leading-[26px] font-poppins text-roc-primary text-center">
              Login
            </b>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-5 bg-roc-primary absolute top-[19px] left-[1308px] rounded-3xs w-[100px] overflow-hidden flex flex-row items-center justify-center box-border">
            <b className="relative text-base leading-[26px] font-poppins text-fs-search-button-text text-center">
              Register
            </b>
          </button>
          <div className="absolute top-[11px] left-[598px] flex flex-row items-start justify-start p-4">
            <b className="relative leading-[30px]">Blogs</b>
          </div>
          <img
            className="absolute top-[calc(50%_-_22.5px)] left-[127px] w-[138px] h-[45px] object-cover"
            alt=""
            src="/image-11@2x.png"
          />
          <div className="absolute top-[11px] left-[689px] h-[62px] flex flex-row items-center justify-start p-4 box-border gap-[2px]">
            <b className="relative">About</b>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/down-arrow.svg"
            />
          </div>
          <div className="absolute top-[11px] left-[297px] h-[62px] flex flex-row items-center justify-start p-4 box-border gap-[2px]">
            <b className="relative">Solutions</b>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/down-arrow.svg"
            />
          </div>
          <div className="absolute top-[11px] left-[450px] h-[62px] flex flex-row items-center justify-start p-4 box-border gap-[2px]">
            <b className="relative">Features</b>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/down-arrow.svg"
            />
          </div>
        </header>
        <div className="absolute top-[431px] left-[128px] text-xl leading-[30px] text-dimgray inline-block w-[676px] h-[55px] font-open-sans">
          <b>{`CONNECT `}</b>
          <span>
            with us where your services are listed and visible to a myriad of
            businesses seeking CA’s for compliance support
          </span>
        </div>
        <div className="absolute top-[546px] left-[128px] w-[670px] h-[73px] text-lg text-darkgray font-inter">
          <input className="absolute top-[0px] left-[0px] rounded-3xs bg-fs-search-button-text box-border w-[670px] h-[73px] border-[1px] border-solid border-silver" placeholder="search exact name" onChange={(e)=>setSearch(e.target.value)} style={{ fontSize: '2rem' }} />
         
          <div
            className="absolute top-[0px] left-[484px] rounded-3xs bg-roc-primary w-[186px] h-[73px] cursor-pointer"
            onClick={onRectangle20Click}
          />
          <b className="absolute top-[27px] left-[550px] text-base text-fs-search-button-text text-center">
            Search
          </b>
        </div>
        <img
          className="absolute right-[0px] bottom-[0px] w-[1536px] h-[210px]"
          alt=""
          src="/vector-1.svg"
        />
        <div className="absolute top-[calc(50%_-_190.5px)] left-[866px] w-[629.74px] flex flex-row items-start justify-start gap-[16.79px]" style={{ height: '500px', overflowY: 'auto' }}>
            {/* <div className="flex-1 flex flex-row items-start justify-start pt-[83.96552276611328px] px-0 pb-0">
              <img
                className="rounded-[20.99px] w-[198.72px] h-[403.03px] object-cover"
                alt=""
                src="/picture1@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start">
              <img
                className="rounded-[20.99px] w-[198.72px] h-[403.03px] object-cover"
                alt=""
                src="/picture2@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start pt-[41.98276138305664px] px-0 pb-0">
              <img
                className="rounded-[20.99px] w-[198.72px] h-[403.03px] object-cover"
                alt=""
                src="/picture3@2x.png"
              />
            </div> */}
            <Test data={data} />
        </div>
      </section>
      
    </a>
  );
};

export default HomePage;
