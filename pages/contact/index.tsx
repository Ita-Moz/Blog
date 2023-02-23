import emailjs from "@emailjs/browser"
import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react"
function Contact() {
  const form = useRef(null)
  const router = useRouter()
  const sendEmail = (e: any) => {
    e.preventDefault()
    if (
      form.current &&
      process.env.NEXT_PUBLIC_SERVICE_ID &&
      process.env.NEXT_PUBLIC_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          () => {
            alert("Email sent successfully!")
            router.reload()
          },
          () => {
            alert("Email sent failed!")
            router.reload()
          }
        )
    }
  }
  return (
    <div className='mx-auto h-full flex container px-5'>
      <div className='hidden md:block md:basis-3/6 md:relative'>
        <Image src={'/contact1.webp'} width={300} height={300} className="md:w-full md:object-cover md:rounded-lg md:absolute md:left-0 md:top-10" alt="contact"/>
      </div>
      <div className="md:basis-3/6 md:px-10 md:my-5 md:rounded-md">
        <div className='mt-5 flex flex-col items-center gap-5'>
          <h1 className='text-3xl font-bold'>Contact Me</h1>
          <div className='w-[15vw] h-1 bg-primary'></div>
          <h2 className='font-bold text-2xl'>Get in touch!</h2>
          <p className='text-light text-lg text-center'>
            I will read all my emails one by one and I am not going to let them missed. Send me any message you want and
            I will reply that.
          </p>
        </div>
        <form className='flex flex-col mt-5' onSubmit={sendEmail} ref={form}>
          <label htmlFor='full-name' className='font-bold text-lg'>
            Full name:
          </label>
          <input
            type='text'
            id='full-name'
            name='full_name'
            className='w-full border border-light rounded p-2 outline-none focus:border-blue-500 focus:ring-2 mb-3'
            placeholder='Nguyen Van A'
            required
          />
          <label htmlFor='email' className='font-bold text-lg'>
            Email:
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='w-full border border-light rounded p-2 outline-none focus:border-blue-500 focus:ring-2 mb-3'
            placeholder='you@gmail.com'
            required
          />
          <label htmlFor='phone' className='font-bold text-lg'>
            Phone:
          </label>
          <input
            type='number'
            id='phone'
            name='phone'
            className='w-full border border-light rounded p-2 outline-none focus:border-blue-500 focus:ring-2 mb-3'
            placeholder='0923-456-789'
            required
          />
          <label htmlFor='message' className='font-bold text-lg'>
            Message:
          </label>
          <textarea
            id='message'
            name='message'
            cols={30}
            rows={10}
            className='outline-none border-light border rounded focus:border-blue-500 focus:ring-2'></textarea>
          <button className='inline-block text-center my-5 bg-primary p-3 rounded-full uppercase text-white font-bold hover:bg-[#f13e3e] hover:transition-all hover:duration-300'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
