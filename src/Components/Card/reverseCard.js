import React from 'react'

export default function reverseCard({svg,title,num,p}) {
    return (
        <section class="my-10  mx-auto tcc md:my-32   "> 
<div class="container relative mx-auto"> 
<div class="absolute md:-bottom-8 lg:-bottom-12 xl:bottom-0 right-0  mr-8 lg:flex items-center justify-center w-40 h-40 hidden"> 
<div style={{display:"block",overflow:'hidden',position:'absolute',top:'0',left:'0',bottom:'0',right:'0',boxSizing:'border-box',margin:'0'}}> 

</div> 
</div> 
<div class="items-center justify-between  md:flex space-y-12 md:space-y-0 "> 
<div class="flex justify-center w-full md:justify-start md:w-1/2"> 
<div style={{display:'inline-block',maxWidth:'100%',overflow:'hidden',position:'relative',boxSizing:'border-box',margin:'0'}}> 
<div style={{boxSizing:'border-box',display:"block",maxWidth:'100%',}}> 
<img style={{maxWidth:'100%',display:"block",margin:'0',border:'none',padding:'0'}} alt="" aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc2NCIgaGVpZ2h0PSIxNjQ0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="/> 
</div> 
<img draggable="false" src={svg} decoding="async" style={{position:'absolute',top:"0",left:"0",bottom:"0",right:"0",boxSizing:"border-box",padding:"0",border:"none",margin:"auto",display:"block",width:"0",height:"0",minWidth:'100%',maxWidth:'100%',minHeight:"100%",maxHeight:'100%',objectFit:'contain'}} /> 
</div> 
</div> 
<div class="flex justify-center bg-skin-darkblue py-3 text-white rounded-xl w-full md:justify-start md:w-1/2"> 
<div class="md:pl-12 md:pr-12"> 
<div class="space-y-6 text-center md:text-left"> 
<div class="space-y-4   max-w-24"> 
<h6 class="font-medium text-lg m-0 ">Reach</h6> 
<h2 class="font-semibold text-4xl m-0 tracking-tight md:text-4xl xl:text-5xl  "> <span style={{ background: 'var(--white)',
    borderRadius:' 50%',
    mozBorderRadius: '50',
    webkitBorderRadius:' 50%',
    color: 'var(--red)',
    display:' inline-block',
    fontWweight:' bold',
    lineHeight: '50px',
    marginRight:' 5px',
    textAlign: 'center',
    width: '50px'}} >{num}</span> {title} </h2> 
<div class="text-xl font-medium md:text-2xl lg:text-3xl"> 
<p> {p}</p> 
</div> 
</div> 
<a class="border-solid border-b-4 inline-block font-medium pb-1 ease-in-out" href="/">How it works</a> 
</div> 
</div> 
</div> 
</div> 
</div> 
</section>

    )
}
