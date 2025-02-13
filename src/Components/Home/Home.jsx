import React from "react";


const Home = () => {
  return (
    <div className="">
      <header className="flex flex-col md:flex-row justify-center items-center w-full relative">

        {/* Left Section */}
        <div className="md:absolute left-[1.25%]  top-[45%] w-[95%] md:w-[33.33%] order-2 md:order-1 text-left">
          <h3 className="text-[1.15rem] md:text-[1.5rem] font-bold">Vishal S. Gupta</h3>
          <p className="mt-[0rem] text-gray-700 text-[0.800rem] md:text-[1.1rem]">
            I am a <span className="font-bold text-[#ff5f49] ">Front-End Developer</span> skilled in building attractive websites and web apps using HTML, CSS, Tailwind, JavaScript, and React. I hold a BSc (IT) Degree from Valia College of Commerce and Science, University of Mumbai, with a CGPA of 7.32.
          </p>

          <div className="flex gap-[1rem] mt-[1rem]">
  <a
    href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
    target="_blank"
    className="text-gray-800 text-[1.75rem] md:text-[2rem] transition-transform duration-300 transform hover:scale-125 hover:text-blue-700"
  >
    <i className="fab fa-linkedin"></i>
  </a>
  <a
    href="mailto:VishalGupta25980@gmail.com"
    target="_blank"
    className="text-gray-800 text-[1.75rem] md:text-[2rem] transition-transform duration-300 transform hover:scale-125 hover:text-red-500"
  >
    <i className="fas fa-envelope"></i>
  </a>
  <a
    href="https://wa.me/9773146258"
    target="_blank"
    className="text-gray-800 text-[1.75rem] md:text-[2rem] transition-transform duration-300 transform hover:scale-125 hover:text-green-500"
  >
    <i className="fab fa-whatsapp"></i>
  </a>
  <a
    href="https://www.twitter.com"
    target="_blank"
    className="text-gray-800 text-[1.75rem] md:text-[2rem] transition-transform duration-300 transform hover:scale-125 hover:text-blue-400"
  >
    <i className="fab fa-twitter"></i>
  </a>
  <a
    href="tel:+9773146258"
    className="text-gray-800 text-[1.75rem] md:text-[2rem] transition-transform duration-300 transform hover:scale-125 hover:text-blue-500"
  >
    <i className="fas fa-phone"></i>
  </a>
 
</div>

        </div>
        <div className="absolute flex justify-end items-center  md:right-[55%] md:top-[6rem]  right-[15.5rem] top-[18%] w-[22rem] md:w-[33.33%]">
  <img
    className="w-[30%] md:w-[45%] h-auto opacity-100 -rotate-90 "
    src="data:image/svg+xml,%3csvg%20width='130'%20height='114'%20viewBox='0%200%20130%20114'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M98.0432%2094.8452C101.5%2096.8545%20104.425%2098.2961%20107.011%20100.173C108.384%20101.172%20110.155%20102.919%20110.093%20104.262C110.027%20105.66%20108.221%20107.482%20106.74%20108.202C102.411%20110.311%2097.87%20112.095%2093.3391%20113.712C92.36%20114.063%2090.5774%20113.917%2089.732%20112.851C88.7188%20111.975%2090.6928%20109.962%2091.6734%20109.412C95.4314%20107.345%2099.4116%20105.637%20103.643%20103.644C101.217%20102.234%2099.1739%20101.104%2097.1591%2099.8753C91.7802%2096.5765%2091.3918%2092.8463%2096.2695%2088.9022C103.165%2083.3156%20110.216%2077.9058%20117.206%2072.4032C118.049%2071.744%20118.848%2071.0599%20119.661%2070.3542C121.045%2069.4064%20120.687%2069.0834%20119.359%2069.4895C116.815%2070.3087%20114.261%2071.0939%20111.717%2071.913C107.196%2073.3645%20102.685%2074.85%2098.1554%2076.2676C97.1333%2076.5927%2095.9805%2076.6982%2094.9869%2076.925C93.2374%2077.3157%2091.6929%2076.2169%2090.9458%2075.1794C90.3116%2074.2937%2089.8591%2072.9966%2091.1236%2071.1176C93.8169%2067.2252%2096.7983%2063.529%2099.7887%2059.8667C106.519%2051.599%20113.301%2043.3901%20119.821%2034.7419C116.463%2036.4669%20113.062%2038.1669%20109.756%2039.9508C102.442%2043.8862%2095.2186%2047.9609%2087.8558%2051.7819C85.3355%2053.1034%2082.4463%2055.1584%2079.6748%2052.5134C77.0717%2050.0237%2078.7475%2047.0911%2079.7553%2044.517C82.9568%2036.4389%2086.3427%2028.4392%2089.6426%2020.3895C89.972%2019.5756%2090.1816%2018.7208%2090.7332%2017.0305C85.9467%2019.8786%2081.6759%2022.136%2077.7437%2024.8487C69.4614%2030.5482%2061.319%2036.5014%2053.1281%2042.3402C47.6747%2046.237%2044.6463%2045.0225%2043.7902%2038.2915C42.7062%2029.8769%2041.9153%2021.4028%2040.9671%2012.9522C40.7876%2011.3829%2040.4385%209.85853%2040.0038%207.39402C39.0193%208.89005%2038.3913%209.67403%2037.969%2010.5489C33.0865%2020.58%2028.2255%2030.6235%2023.3519%2040.6886C22.0725%2043.3345%2021.2106%2046.5966%2017.8059%2047.1168C14.244%2047.6604%2012.7821%2044.5415%2011.0033%2042.2149C9.16362%2039.7955%207.41676%2037.3152%204.96041%2034.9682C4.95923%2037.639%204.97053%2040.2883%204.96935%2042.9591C4.96561%2045.1401%205.12815%2047.3315%204.9152%2049.477C4.84489%2050.2405%203.82796%2051.5453%203.34163%2051.4924C2.46734%2051.4151%201.58957%2051.3932%200.916824%2049.8819C0.622659%2049.2513%200.499725%2048.3756%200.493142%2047.5962C0.350705%2042.2566%200.0634687%2036.9191%200.287522%2031.5915C0.36373%2030.0272%201.5598%2027.8211%202.83345%2027.2113C3.89991%2026.7109%206.31666%2027.7422%207.34985%2028.831C10.0035%2031.5799%2012.2287%2034.7692%2014.6218%2037.7687C15.4063%2038.7417%2016.1659%2039.7577%2017.237%2041.1272C18.4775%2038.7459%2019.4809%2036.7725%2020.5182%2034.7901C25.8775%2024.4329%2031.2368%2014.0757%2036.6176%203.73103C36.9954%203.03146%2037.4377%202.36933%2037.932%201.76611C39.6503%20-0.251279%2042.3031%20-0.318001%2043.6171%201.96816C44.8217%204.04711%2045.7711%206.46612%2046.1109%208.84676C47.3492%2017.6384%2048.2945%2026.4894%2049.3416%2035.3135C49.4485%2036.2661%2049.6019%2037.1883%2049.7863%2038.502C55.747%2034.3256%2061.2913%2030.2232%2067.0363%2026.4672C73.8957%2021.9801%2080.886%2017.7128%2087.8977%2013.4579C90.0266%2012.1674%2092.3671%2010.1669%2094.9587%2012.1329C97.5503%2014.0988%2096.7952%2017.0783%2095.9053%2019.5484C93.1001%2027.3399%2089.9998%2035.046%2087.0319%2042.7716C86.5422%2044.0094%2086.0401%2045.2687%2085.9964%2047.0243C90.9836%2044.5227%2095.9709%2042.0211%20100.949%2039.4855C108.271%2035.7843%20115.562%2032.0367%20122.893%2028.3694C124.64%2027.4889%20126.626%2026.3453%20128.356%2028.2125C130.116%2030.1261%20129.195%2032.2048%20127.92%2033.9051C122.709%2040.844%20117.464%2047.792%20112.072%2054.5971C107.71%2060.076%20103.115%2065.3622%2098.8468%2071.4702C102.453%2070.4062%20106.001%2069.194%20109.652%2068.2998C114.253%2067.1539%20118.903%2066.1222%20123.579%2065.3927C125.007%2065.1599%20127.562%2065.7547%20127.898%2066.6105C128.375%2067.8647%20127.803%2070.2324%20126.795%2071.2262C123.071%2074.8646%20119.042%2078.2388%20114.986%2081.5113C109.713%2085.8868%20104.28%2089.9962%2098.0432%2094.8452Z'%20fill='%23002F6C'%20fill-opacity='0.08'/%3e%3c/svg%3e"
    alt="Arrow with Transparent Background"
  />
</div>





        {/* Image Section */}
        <div className="flex justify-center items-center order-1 md:order-2 mt-[9rem]">
          <img
            className="w-[100rem] md:w-[37rem] h-auto "
            src="https://res.cloudinary.com/dwtn2kajc/image/upload/v1739437044/WhatsApp_Image_2025-01-04_at_7.58.42_PM_afdwtu.jpg"
            alt="Hero"
          />
        </div>
        
        {/* Arrow Section */}
<div className="absolute flex justify-end items-center top-[12rem] right-[9%] md:right-[32%] md:top-[22rem]">
  <img
    className="w-[80%] md:w-[100%] h-auto opacity-50"
    src="data:image/svg+xml,%3csvg%20width='75'%20height='55'%20viewBox='0%200%2075%2055'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.42403%2050.0777C11.3824%2045.5352%2017.3426%2041.008%2023.2626%2036.408C23.6748%2036.0919%2023.8821%2035.2563%2023.8573%2034.6832C23.1812%2021.0174%2028.6527%2010.3223%2039.7697%202.56723C41.6177%201.27791%2043.8949%200.557953%2046.5131%200.44952C49.9669%200.299181%2052.4674%202.74368%2052.541%206.20707C52.6072%209.23538%2051.4065%2011.8455%2049.9127%2014.352C46.5856%2019.89%2042.0954%2024.4675%2037.4596%2028.8762C34.5224%2031.6717%2031.4224%2034.285%2028.3128%2037.0708C29.3626%2038.6217%2031.5645%2039.5462%2033.3241%2039.1711C36.6631%2038.4745%2038.1776%2037.5071%2040.5968%2036.1777C48.1899%2032.0075%2054.4706%2026.1791%2059.8489%2019.4821C63.8524%2014.4981%2067.4937%209.23235%2071.2903%204.08736C71.6239%203.64089%2071.9211%203.15223%2072.2605%202.75176C72.7897%202.12518%2073.3609%201.83595%2073.9761%202.14855C74.6238%202.34808%2074.5181%203.37346%2074.4144%203.91583C74.2455%204.80894%2073.8887%205.69431%2073.4247%206.46849C66.22%2018.75%2057.5304%2029.7373%2045.4665%2037.6416C42.8172%2039.3734%2039.8709%2040.7218%2036.9151%2041.8689C32.6654%2043.5044%2028.6731%2043.0834%2025.5406%2039.1917C19.7166%2043.3126%2013.9788%2047.376%208.14137%2051.5141C10.4414%2051.2273%2012.6188%2050.9558%2014.8115%2050.6824C15.1796%2050.6366%2015.5418%2050.5447%2015.9137%2050.5295C16.9199%2050.4818%2018.2138%2050.1181%2018.4855%2051.548C18.7534%2052.9472%2017.4212%2053.1289%2016.5491%2053.2532C12.1311%2053.9131%207.69194%2054.5288%203.24712%2054.974C1.432%2055.1536%200.408856%2054.0666%200.942216%2052.3494C2.43875%2047.3666%204.17484%2042.4318%205.9301%2037.5258C6.09124%2037.0697%206.79105%2036.3128%207.7186%2036.6332C8.41233%2036.9516%208.527%2037.9962%208.39075%2038.527C7.55985%2041.7295%206.58521%2044.9031%205.64315%2048.0883C5.48005%2048.6536%205.2863%2049.2228%205.10787%2049.7901C4.6591%2050.6869%204.95434%2050.4321%205.42403%2050.0777ZM26.5583%2033.3654C26.5811%2033.9232%2027.3193%2033.0993%2027.4458%2032.99C34.0676%2027.2748%2040.4941%2021.3659%2045.5275%2014.1513C46.8755%2012.2236%2047.9361%209.98908%2048.6364%207.73725C49.5554%204.74183%2047.6987%202.96452%2044.6874%203.91615C42.7399%204.53271%2040.752%205.45016%2039.1493%206.70889C32.3225%2012.0293%2027.5184%2021.3331%2026.7747%2027.6079C26.5133%2030.0075%2026.5936%2030.6515%2026.5583%2033.3654Z'%20fill='%23A8B7CB'/%3e%3c/svg%3e"
    alt="Arrow with Transparent Background"
  />
</div>




        {/* Right Section */}
        <div className="absolute right-[-0.1rem]  top-[9%] w-[59vw] md:w-[26vw] md:top-[28%] md:right-[0.5rem] text-left">
          <h3 className="text-[1.15rem] md:text-[1.8rem] font-bold">&lt;Coder/&gt;</h3>
          <p className="mt-[0rem] text-gray-700 text-[3.6vw] md:text-[1.5rem]">
            A <span className="text-[#ff5f49] font-bold">Front-End Developer</span> who writes clean, efficient code with <span className="text-[#ff5f49] font-bold">modern web technologies. 🚀</span> 
          </p>
          
        </div>

        {/* Smile Face (Hidden on Mobile) */}
        <div className="hidden md:block md:absolute right-[0%] md:right-[0%] md:top-[55%] md:w-[25%]">
          <img
            className="opacity-1"
            src="data:image/svg+xml,%3csvg%20width='250'%20height='250'%20viewBox='0%200%20216%20216'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_240_270)'%3e%3cpath%20d='M39.1588%20131.239C31.3359%20108.982%2031.8572%2083.8735%2047.4841%2060.5361C51.6616%2054.2921%2057.5633%2049.0355%2063.2774%2044.0082C91.3551%2019.3465%20140.592%2026.1057%20165.718%2064.0027C183.717%2091.1355%20186.714%20120.111%20171.299%20149.28C150.301%20189.029%2099.2127%20197.718%2064.5864%20168.18C53.7839%20159%2045.9089%20148.068%2039.1588%20131.239ZM132.503%20172.223C147.9%20165.764%20158.409%20155.734%20164.752%20141.691C175.211%20118.519%20173.477%2095.6074%20161.377%2073.6562C151.849%2056.3821%20137.482%2044.6235%20118.194%2039.3425C100.028%2034.3899%2083.3218%2038.4893%2068.2214%2048.7333C62.997%2052.2652%2058.7516%2057.7928%2055.2174%2063.1617C34.1942%2095.2096%2043.5094%20140.784%2075.5645%20163.383C93.377%20175.941%20112.771%20179.383%20132.503%20172.223Z'%20fill='%23002F6C'%20fill-opacity='0.06'/%3e%3cpath%20d='M149.025%20102.506C147.091%20102.159%20145.514%20102.167%20144.238%20101.528C143.283%20101.071%20142.317%20100.433%20142.181%2098.8453C142.072%2097.557%20143.538%2096.7265%20144.303%2096.7015C149.316%2096.6914%20154.329%2096.8362%20159.315%2097.3017C160.212%2097.3785%20161.68%2098.3439%20161.623%20100.07C161.549%20101.989%20160.618%20102.452%20158.778%20102.811C157.661%20103.038%20156.336%20102.976%20154.844%20103.043C154.975%20123.401%20146.01%20138.485%20127.541%20146.878C109.65%20155.01%2092.0027%20152.298%2074.9314%20142.853C73.7898%20144.266%2072.8132%20146.017%2071.3355%20147.131C70.1631%20148%2067.7489%20149.64%2066.9178%20148.484C65.3126%20146.861%2066.3425%20145.244%2066.981%20144.123C69.219%20140.012%2071.7079%20135.988%2074.4849%20132.221C75.3481%20131.042%2077.1961%20129.223%2078.8829%20130.195C81.05%20131.439%2080.0466%20133.201%2079.4228%20134.904C79.1539%20135.631%2078.7836%20136.335%2078.311%20137.328C95.6511%20146.047%20113.017%20147.973%20130.111%20137.68C143.009%20129.921%20148.777%20117.78%20149.025%20102.506Z'%20fill='%23002F6C'%20fill-opacity='0.06'/%3e%3cpath%20d='M122.623%2076.0495C121.411%2073.3103%20120.506%2071.6568%20120.11%2069.3363C119.878%2067.9729%20120.594%2065.6442%20121.611%2065.0852C123.157%2064.2229%20125.111%2065.2427%20125.97%2066.2334C131.439%2072.5151%20135.49%2079.67%20137.471%2087.7717C137.794%2089.13%20136.784%2091.7306%20135.681%2092.2306C134.526%2092.7518%20132.446%2092.8968%20131.056%2090.8787C127.785%2086.2321%20123.394%2077.7562%20122.623%2076.0495Z'%20fill='%23002F6C'%20fill-opacity='0.06'/%3e%3cpath%20d='M69.3025%20107.645C67.3042%20102.617%2066.4809%20100.311%2065.8946%2097.1993C65.6515%2095.9641%2065.5175%2093.7565%2067.24%2093.1029C68.5993%2092.315%2070.5895%2093.816%2071.1968%2094.7206C74.8987%20100.373%2078.9952%20108.811%2082.0353%20116.46C82.8431%20118.493%2083.2545%20120.931%2080.6117%20122.075C77.819%20123.308%2076.3805%20121.247%2075.252%20119.187C72.9259%20114.97%2071.2649%20112.038%2069.3025%20107.645Z'%20fill='%23002F6C'%20fill-opacity='0.06'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_240_270'%3e%3crect%20width='165.785'%20height='165.785'%20fill='white'%20transform='translate(0%2061.2258)%20rotate(-21.6729)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
            alt="Smile Face with Transparent Background"
          />
        </div>
      </header>
    </div>
  );
};

export default Home;
