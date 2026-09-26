import BottomContent from './BottomContent'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent1 = () => {
   const skills = [
    {
      name: "Angular",
      logo: "https://blog.e-saurio.com/content/images/2023/02/the-seo-guide-to-angular.png",
    },
    {
      name: "Next.js",
      logo: "https://th.bing.com/th/id/OIP.mdLT2ZK_3OlDwK2R-Q2UlQHaGp?w=197&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      name: "TypeScript",
      logo: "https://th.bing.com/th/id/OIP.sUsMgZa-MozU0lcYT-Y5xQHaHa?w=170&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      name: "JavaScript",
      logo: "https://th.bing.com/th/id/OIP.VgcDbZtvRThnSNbJyvtTvQHaHa?w=166&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      name: "Tailwind",
      logo: "https://th.bing.com/th/id/OIP.22tPt9bi1FRyjOYQI8irPQHaD4?w=271&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      name: "Redux",
      logo: "https://th.bing.com/th/id/OIP.fMCFksfCUgQGWL3zS_ZulwHaHD?w=152&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      name: "Node.js",
      logo: "https://th.bing.com/th/id/OIP.GzwNcLewBwyBkK1mBCxoPQHaHa?w=152&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      name: "Express",
      logo: "https://www.cisworld.lk/storage/technologies/express-js-1.jpg",
    },
    {
      name: "Python",
      logo: "https://th.bing.com/th/id/OIP.xeoinwuNrrPBMdn8mcm7NwHaHa?w=154&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      name: "NestJS",
      logo: "https://th.bing.com/th/id/OIP.x4F99xzUMDw89anfCyLGxwHaD-?w=330&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      name: "React",
      logo: "https://th.bing.com/th/id/OIP.eBnSJTFfIBedYR4lU_x16gHaGl?w=169&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
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
