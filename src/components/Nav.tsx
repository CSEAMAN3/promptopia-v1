// 'use client'
// import Image from 'next/image'
// import {useState, useEffect} from 'react'
// import {signIn, signOut, useSession, getProviders} from 'next-auth/react'
// import Link from 'next/link'

// export default function Nav() {

//   const isUserLoggedIn = true

//   const [providers, setProviders] = useState(null)
//   const [toggleDropdown, setToggleDropdown] = useState(false)

//   useEffect(()=>{
//     const setTheProviders = async() => {
//       const response : any = await getProviders()
//       setProviders(response)
//     } 
//     setTheProviders()
//   }, [])

//   return (
//     <nav className="flex-between w-full mb-16 pt-3">
//       <Link href="/" className="flex gap-2 flex-center">
//         <Image src="/assets/images/logo.svg" alt="Promptopia logo" width={30} height={30} className="object-contain"/>
//         <p className="logo_text">Promptopia</p>
//       </Link>
//       {/* desktop navigation */}
//       <div className="sm:flex hidden">
//         {isUserLoggedIn ? (
//         <div className="flex gap-3 md:gap-5">
//           <Link href="/create-prompt" className="black_btn">Create Post</Link>
//           <button type="button" onClick={()=>signOut} className="outline_btn">Sign Out</button>
//           <Link href="/profile">
//             <Image src="/assets/images/logo.svg" alt="profile" width={37} height={37} className="rounded-full" />
//           </Link>
//         </div>
//         ) 
//         :( <>
//             {providers && 
//             Object.values(providers).map((provider:any) => (
//               <button key={provider.name} type="button" onClick={() => signIn(provider.id)} className="black_btn">Sign In</button>
//               )
//             )
//             }

//           </>
//         )
//         }
//       </div>
//       {/* mobile navigation */}
//       <div className="sm:hidden flex relative">
//         {isUserLoggedIn ? (
//           <div className="flex">
//             <Image src="/assets/images/logo.svg" alt="Profile" width={37} height={37} className="rounded-full" onClick={()=> setToggleDropdown(prev => !prev)}/>
//             {toggleDropdown && <div className="dropdown">
//                 <Link href="/profile" className="dropdown_link" onClick={()=> setToggleDropdown(false)}>My Profile</Link>
//               </div>}
//           </div> 
//         ): <>
//         {providers && Object.values(providers).map((provider : any) => (
//           <button type="button" key={provider.name} onClick={()=> signIn(provider.id)} className="black_btn">Sign In</button>
//         ))
//         }
//         </>}
//       </div>
//     </nav>
//   )
// }
