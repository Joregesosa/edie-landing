import Design from '@/components/design/index'
import Services from '@/components/services'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col">

      <nav className='flex items-center justify-between p-6 '>
        <h1 className='text-2xl font-extrabold md:text-4xl'>Edie</h1>

        <ul className=' hidden md:flex gap-8 text-2xl font-medium text-[#333]'>
          <li>Home</li>
          <li>Services</li>
          <li>Our Works</li>
          <li>Clients</li>
          <li>Contact</li>
        </ul>
        <Image className=' md:hidden' src='menu.svg' width={40} height={40} alt='menu Icon' />
      </nav>

      <div className=' px-12 py-5 md:pl-[15%]'>
        <h3 className=" text-xs text-[#2D9CDB] font-medium md:text-lg">
          Unhappy with your website?
        </h3>

        <h2 className=' text-2xl font-medium md:text-5xl'>We create beautiful <br />and fast web services</h2>
      </div>

      <div className=" h-36 w-full px-5 md:h-96">
        <Image className=" rounded-2xl w-full   h-36 md:w-full md:h-full object-fill" src='/heroImage.jpg' width={1280} height={720} alt='menu Icon' />
      </div>

      <div className=' px-12 py-5 md:pl-[15%]'>

        <h2 className=' text-2xl font-medium'>
          Story, emotion <br /> and purpose
        </h2>

        <p className='text-[#4F4F4F] w-[275px] text-xs font-normal my-5'>
          We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.
        </p>

        <div>
          <label className=' text-[#828282] text-[10px]'>Want us to contact you?</label>
          <div className=' flex justify-between items-center bg-[#F2F2F2] w-72 h-12 rounded-xl p-1'>
            <input className=" bg-transparent" type='email' placeholder='Email' id='email' />
            <button className=' bg-[#2D9CDB] rounded-xl w-[72px] h-10 text-sm text-[#F2F2F2] font-medium'>Join
            </button>
          </div>

        </div>
      </div>

      {/* it's going to be out of the main */}

      <section>
        <div className=' px-12 pt-20 pb-16 md:pb-0'>

          <h2 className=' text-2xl font-medium'>We offer high <br /> demand services  </h2>
        </div>

        <ul className=' pl-12 gap-12 flex flex-col md:max-w-full md:mt-10 md:justify-center md:flex-row md:gap-10 md:flex-wrap'>
          <Services
            color={''}
            title={''}
            icon={''}
          />
          <Services
            color={''}
            title={''}
            icon={''}
          />
          <Services
            color={''}
            title={''}
            icon={''}
          />

        </ul>



      </section>

      {/* out of the main */}

      <section>
        <div className=' px-12 pt-14 pb-14'>

          <h2 className=' text-2xl font-medium'>
            Good design means <br /> good business
          </h2>
        </div>

        <ul className='flex flex-col md:grid md:grid-cols-2 w-full mb-20x'>
          <Design 
            img ={''}
            title={''}
            subtitle={''}
            pad={''}
          />
          <Design 
            img ={''}
            title={''}
            subtitle={''}
            pad={''}
          />
          <Design 
            img ={''}
            title={''}
            subtitle={''}
            pad={''}
          />
          <Design 
            img ={''}
            title={''}
            subtitle={''}
            pad={''}
          />
        </ul>

        {/* <div>
          <h4 className=' text-lg text-[#2D9CDB] font-medium ml-4'>see more ---</h4>
        </div> */}
      </section>
      {/* out of the main */}


      <section>

        <div className=' mx-4 mt-20'>
          <h3 className=' text-lg text-[#EB5757] font-medium'>Meet the team</h3>
          <h2 className=' text-4xl font-medium my-2'>
            we are chilled <br />
            and a laidback <br />
            team
          </h2>

          <p className=' text-base text-[#4F4F4F] font-normal'>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.
          </p>

          <div className=' w-full h-fit flex items-center gap-x-3 py-8'>
            <div>
              <Image className=' rounded-3xl' src="/person3.png" width={192} height={197} alt="person" />
            </div>
            <div className='flex flex-col gap-y-3'>
              <Image className=' rounded-3xl' src="/person1.png" width={145} height={145} alt="person" />
              <Image className=' rounded-3xl' src="/person2.png" width={162} height={167} alt="person" />
            </div>
          </div>

          <p className=' text-2xl font-medium mt-10'>
            “Fast and outstanding <br /> resutls. Edie understands <br /> their customer’s needs. They <br /> have a young and talented<br /> team.”
          </p>

          <div className='flex items-center'>
            <Image className=' rounded-2xl' src="/person4.png" width={80} height={80} alt="person" />
            <div className=' my-8'>
              <h3 className=' text-2xl font-medium ml-10'>Carlos Tran</h3>
              <h4 className='text-lg text-[#828282] ml-10'>The Decorate Gatsby</h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
