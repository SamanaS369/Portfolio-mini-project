import BottomContent from './BottomContent'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent1 = () => {
   const skills = [
    {
      name: "Angular",
      logo: "/images/angular.png",
    },
    {
      name: "Next.js",
      logo: "/images/nextjs.png",
    },
    {
      name: "TypeScript",
      logo: "/images/typescript.png",
    },
    {
      name: "JavaScript",
      logo: "/images/javascript.png",
    },
    {
      name: "Tailwind",
      logo: "/images/tailwind.png",
    },
    {
      name: "Redux",
      logo: "/images/redux.png",
    },
    {
      name: "Node.js",
      logo: "/images/nodejs.png",
    },
    {
      name: "Express",
      logo: "/images/express.png",
    },
    {
      name: "Python",
      logo: "/images/python.png",
    },
    {
      name: "NestJS",
      logo: "/images/nestjs.png",
    },
    {
      name: "React",
      logo: "/images/react.png",
    },
  ];


  return (
   <div
  id="home"
  className="relative z-10 mx-auto flex min-h-125 max-w-262.5 flex-col items-center justify-center gap-10 py-10 lg:flex-row"
>
        <LeftContent />
        <RightContent />
        <BottomContent skills={skills} />
        
      
    </div>
  )
}

export default PageContent1
