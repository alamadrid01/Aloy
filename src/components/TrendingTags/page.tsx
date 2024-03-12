import React from 'react'

const TrendingTags = () => {
  return (
    <div>
       <ul className="flex flex-col gap-3">
              <Tags topic="Marketing" emoji="📣" />
              <Tags topic="Programming" emoji="💻" />
              <Tags topic="Productivity" emoji="🚀" />
              <Tags topic="Remote work" emoji="🏡" />
              <Tags topic="SaaS" emoji="💻" />
              <Tags topic="Design" emoji="🎨" />
              <Tags topic="Engineering" emoji="👩‍💻" />
              <Tags topic="Sales" emoji="💰" />
              <Tags topic="Customer support" emoji="🤝" />
              <Tags topic="Growth" emoji="🌱" />
              <Tags topic="Startups" emoji="🚀" />
              <Tags topic="Venture capital" emoji="💸" />
              <Tags topic="Bootstrapping" emoji="👢" />
              <Tags topic="Freelancing" emoji="💼" />

            </ul>
    </div>
  )
}

export default TrendingTags


const Tags = ({topic, emoji}: {topic:string, emoji:string}) => (
    <div className="flex cursor-pointer items-center gap-4">
      <div className="w-10 items-center justify-center h-10 flex bg-slate-100 rounded-md"><p className="text-">{emoji}</p></div>
      <p className="text- font-semibold">{topic}</p>
    </div>
  )