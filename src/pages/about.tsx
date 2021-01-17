import React from "react"
import Layout from "../components/Layout"

interface Props {}

const About: React.FC<Props> = (props) => {
  return (
    <Layout title="about" description="このサイトについて">
      <div className="grid grid-cols-1 md:grid-cols-2 w-screen h-full min-h-screen">
        <div className="flex items-center justify-center bg-primary-800 text-primary-100 h-screen md:h-full">
          <div className="text-2xl font-extrabold">このサイトについて</div>
        </div>
        <div className="pt-24 pb-28 md:mx-5 ml-5 mr-5">
          <h1 className="text-xl text-neutral-600 font-extrabold mb-5 border-b border-neutral-600">
            概要
          </h1>
          <p className="text-neutral-900 leading-relaxed ml-2 my-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          </p>
          <h1 className="text-xl text-neutral-600 font-extrabold mt-7 mb-5 border-b border-neutral-600">
            ご利用規約
          </h1>
          <p className="text-neutral-900 leading-relaxed ml-2 my-2">
            One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.          </p>
        </div>
      </div>
      <div className="relative"></div>
    </Layout>
  )
}

export default About
