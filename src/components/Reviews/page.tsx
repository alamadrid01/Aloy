import React from "react";
import Image from "next/image";

const Reviews = () => {
  return (
    <div className="w-full container bg-black text-white mb-40 mt-20">
      <div className="w-full gap-10 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] inline-flex flex-nowrap">
        <ul className="flex items-center gap-8 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <Tweet
            name="Sam"
            handle="@samsesin"
            text="B💥💥m! The anticipation is building up, and I absolutely can't wait to witness this unfolding masterpiece! 🚀✨"
            subtext="AI user"
            avatar="https://pbs.twimg.com/profile_images/1348046108308733953/nqVODdYk_400x400.jpg"
          />
          <Tweet
            name="Winston"
            handle="@MrWinstonWolf_"
            text="Absolutely enamored with these remarkable businesses. 💖 Each one has its unique charm, making it a joy to appreciate and support. 🌟✨"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/1503565994614210560/TEFE1Sn9_400x400.jpg"
          />
          <Tweet
            name="Anish K.Mitra"
            handle="@anishkmitra"
            text="It's truly the simplicity that holds the most profound beauty. 🌿 Sometimes, it's the uncomplicated things that resonate the most."
            subtext="product guru"
            avatar="https://pbs.twimg.com/profile_images/1104057240024215552/-2uBA2oC_400x400.jpg"
          />
          <Tweet
            name="Swen swenson"
            handle="@severt77"
            text="Immersed in an intense study of these business models! 🧠📚 Planning to embark on your own data journey? Let the exploration begin!"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/636233691031859200/uusI3hR4_400x400.jpg"
          />
          <Tweet
            name="Darkseid"
            handle="@CouncilWiz"
            text="Consistently unleashing the heat! 🔥🚀 Keep those fire moments coming! 🔥🔥"
            subtext="AI user"
            avatar="https://pbs.twimg.com/profile_images/1740836462747140097/d26aSk-9_400x400.jpg"
          />
           <Tweet
            name="Swen swenson"
            handle="@severt77"
            text="This is nothing short of absolute insanity!!"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/636233691031859200/uusI3hR4_400x400.jpg"
          />
        </ul>
        <ul className="flex items-center gap-8 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <Tweet
            name="Okerosi Davis"
            handle="@heyokerosi"
            text="When a simple idea has a massive and enthusiastic community.......profits are certain"
            subtext="Business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/1761043810748952579/AT12GiwF_400x400.jpg"
          />
         <Tweet
            name="Darkseid"
            handle="@CouncilWiz"
            text="You should start a newsletter that uncover all of these data aggregators which are permissionless 👀👀"
            subtext="AI user"
            avatar="https://pbs.twimg.com/profile_images/1740836462747140097/d26aSk-9_400x400.jpg"
          />
          <Tweet
            name="dark matter.fyi"
            handle="@joshua_mak77497"
            text="Love your content, you are so underrated bro. Keep pushing, love from Africa 🌍"
            subtext="product lover"
            avatar="https://pbs.twimg.com/profile_images/1756675936747917315/k8yQW92M_400x400.jpg"
          />
          <Tweet
            name="Thomas Sorheim"
            handle="@ThomasSorheim"
            text="I love this product"
            subtext="Entrepreneur"
            avatar="https://pbs.twimg.com/profile_images/1522481359746445315/ZlVY5tgM_400x400.jpg"
          />
          <Tweet
            name="Rahul Issar"
            handle="@therahulissar"
            text="Here for it!"
            subtext="Business marketer"
            avatar="https://pbs.twimg.com/profile_images/1585418345473404929/MjN6L-OZ_400x400.jpg"
          />
          <Tweet
            name="Okerosi Davis"
            handle="@heyokerosi"
            text="When a simple idea has a massive and enthusiastic community.......profits are certain"
            subtext="Business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/1761043810748952579/AT12GiwF_400x400.jpg"
          />
        </ul>
        <ul className="flex items-center gap-8 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <Tweet
            name="Okerosi Davis"
            handle="@heyokerosi"
            text="When a simple idea has a massive and enthusiastic community.......profits are certain"
            subtext="Business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/1761043810748952579/AT12GiwF_400x400.jpg"
          />
         <Tweet
            name="Darkseid"
            handle="@CouncilWiz"
            text="You should start a newsletter that uncover all of these data aggregators which are permissionless 👀👀"
            subtext="AI user"
            avatar="https://pbs.twimg.com/profile_images/1740836462747140097/d26aSk-9_400x400.jpg"
          />
          <Tweet
            name="dark matter.fyi"
            handle="@joshua_mak77497"
            text="Love your content, you are so underrated bro. Keep pushing, love from Africa 🌍"
            subtext="product lover"
            avatar="https://pbs.twimg.com/profile_images/1756675936747917315/k8yQW92M_400x400.jpg"
          />
          <Tweet
            name="Thomas Sorheim"
            handle="@ThomasSorheim"
            text="I love this product"
            subtext="Entrepreneur"
            avatar="https://pbs.twimg.com/profile_images/1522481359746445315/ZlVY5tgM_400x400.jpg"
          />
          <Tweet
            name="Rahul Issar"
            handle="@therahulissar"
            text="Here for it!"
            subtext="Business marketer"
            avatar="https://pbs.twimg.com/profile_images/1585418345473404929/MjN6L-OZ_400x400.jpg"
          />
          <Tweet
            name="Okerosi Davis"
            handle="@heyokerosi"
            text="When a simple idea has a massive and enthusiastic community.......profits are certain"
            subtext="Business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/1761043810748952579/AT12GiwF_400x400.jpg"
          />
        </ul>
      </div>
      <div className="w-full mt-5 gap-10 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] inline-flex flex-nowrap">
        <ul className="flex items-center gap-8 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <Tweet
            name="Okerosi Davis"
            handle="@heyokerosi"
            text="When a simple idea has a massive and enthusiastic community.......profits are certain"
            subtext="Business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/1761043810748952579/AT12GiwF_400x400.jpg"
          />
         <Tweet
            name="Darkseid"
            handle="@CouncilWiz"
            text="You should start a newsletter that uncover all of these data aggregators which are permissionless 👀👀"
            subtext="AI user"
            avatar="https://pbs.twimg.com/profile_images/1740836462747140097/d26aSk-9_400x400.jpg"
          />
          <Tweet
            name="dark matter.fyi"
            handle="@joshua_mak77497"
            text="Love your content, you are so underrated bro. Keep pushing, love from Africa 🌍"
            subtext="product lover"
            avatar="https://pbs.twimg.com/profile_images/1756675936747917315/k8yQW92M_400x400.jpg"
          />
          <Tweet
            name="Thomas Sorheim"
            handle="@ThomasSorheim"
            text="I love this product"
            subtext="Entrepreneur"
            avatar="https://pbs.twimg.com/profile_images/1522481359746445315/ZlVY5tgM_400x400.jpg"
          />
            <Tweet
            name="Sam"
            handle="@samsesin"
            text="B💥💥m! The anticipation is building up, and I absolutely can't wait to witness this unfolding masterpiece! 🚀✨"
            subtext="AI user"
            avatar="https://pbs.twimg.com/profile_images/1348046108308733953/nqVODdYk_400x400.jpg"
          />
          <Tweet
            name="Winston"
            handle="@MrWinstonWolf_"
            text="Absolutely enamored with these remarkable businesses. 💖 Each one has its unique charm, making it a joy to appreciate and support. 🌟✨"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/1503565994614210560/TEFE1Sn9_400x400.jpg"
          />
        </ul>
        <ul className="flex items-center gap-8 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <Tweet
            name="Sam"
            handle="@samsesin"
            text="B💥💥m! The anticipation is building up, and I absolutely can't wait to witness this unfolding masterpiece! 🚀✨"
            subtext="AI user"
            avatar="https://pbs.twimg.com/profile_images/1348046108308733953/nqVODdYk_400x400.jpg"
          />
          <Tweet
            name="Winston"
            handle="@MrWinstonWolf_"
            text="Absolutely enamored with these remarkable businesses. 💖 Each one has its unique charm, making it a joy to appreciate and support. 🌟✨"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/1503565994614210560/TEFE1Sn9_400x400.jpg"
          />
          <Tweet
            name="Anish K.Mitra"
            handle="@anishkmitra"
            text="It's truly the simplicity that holds the most profound beauty. 🌿 Sometimes, it's the uncomplicated things that resonate the most."
            subtext="product guru"
            avatar="https://pbs.twimg.com/profile_images/1104057240024215552/-2uBA2oC_400x400.jpg"
          />
          <Tweet
            name="Swen swenson"
            handle="@severt77"
            text="Immersed in an intense study of these business models! 🧠📚 Planning to embark on your own data journey? Let the exploration begin!"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/636233691031859200/uusI3hR4_400x400.jpg"
          />
          <Tweet
            name="Darkseid"
            handle="@CouncilWiz"
            text="Consistently unleashing the heat! 🔥🚀 Keep those fire moments coming! 🔥🔥"
            subtext="AI user"
            avatar="https://pbs.twimg.com/profile_images/1740836462747140097/d26aSk-9_400x400.jpg"
          />
           <Tweet
            name="Swen swenson"
            handle="@severt77"
            text="This is nothing short of absolute insanity!!"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/636233691031859200/uusI3hR4_400x400.jpg"
          />
        </ul>
        <ul className="flex items-center gap-8 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <Tweet
            name="Swen swenson"
            handle="@severt77"
            text="This is nothing short of absolute insanity!!"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/636233691031859200/uusI3hR4_400x400.jpg"
          />
         <Tweet
            name="Sam"
            handle="@samsesin"
            text="B💥💥m! The anticipation is building up, and I absolutely can't wait to witness this unfolding masterpiece! 🚀✨"
            subtext="AI user"
            avatar="https://pbs.twimg.com/profile_images/1348046108308733953/nqVODdYk_400x400.jpg"
          />
          <Tweet
            name="Winston"
            handle="@MrWinstonWolf_"
            text="Absolutely enamored with these remarkable businesses. 💖 Each one has its unique charm, making it a joy to appreciate and support. 🌟✨"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/1503565994614210560/TEFE1Sn9_400x400.jpg"
          />
          <Tweet
            name="Anish K.Mitra"
            handle="@anishkmitra"
            text="It's truly the simplicity that holds the most profound beauty. 🌿 Sometimes, it's the uncomplicated things that resonate the most."
            subtext="product guru"
            avatar="https://pbs.twimg.com/profile_images/1104057240024215552/-2uBA2oC_400x400.jpg"
          />
          <Tweet
            name="Swen swenson"
            handle="@severt77"
            text="Immersed in an intense study of these business models! 🧠📚 Planning to embark on your own data journey? Let the exploration begin!"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/636233691031859200/uusI3hR4_400x400.jpg"
          />
          <Tweet
            name="Darkseid"
            handle="@CouncilWiz"
            text="Consistently unleashing the heat! 🔥🚀 Keep those fire moments coming! 🔥🔥"
            subtext="AI user"
            avatar="https://pbs.twimg.com/profile_images/1740836462747140097/d26aSk-9_400x400.jpg"
          />
           <Tweet
            name="Swen swenson"
            handle="@severt77"
            text="This is nothing short of absolute insanity!!"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/636233691031859200/uusI3hR4_400x400.jpg"
          />
        </ul>
      </div>
      <div className="w-full mt-5 gap-10 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] inline-flex flex-nowrap">
        <ul className="flex items-center gap-8 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <Tweet
            name="Swen swenson"
            handle="@severt77"
            text="This is nothing short of absolute insanity!!"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/636233691031859200/uusI3hR4_400x400.jpg"
          />
         <Tweet
            name="Sam"
            handle="@samsesin"
            text="B💥💥m! The anticipation is building up, and I absolutely can't wait to witness this unfolding masterpiece! 🚀✨"
            subtext="AI user"
            avatar="https://pbs.twimg.com/profile_images/1348046108308733953/nqVODdYk_400x400.jpg"
          />
          <Tweet
            name="Winston"
            handle="@MrWinstonWolf_"
            text="Absolutely enamored with these remarkable businesses. 💖 Each one has its unique charm, making it a joy to appreciate and support. 🌟✨"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/1503565994614210560/TEFE1Sn9_400x400.jpg"
          />
          <Tweet
            name="Anish K.Mitra"
            handle="@anishkmitra"
            text="It's truly the simplicity that holds the most profound beauty. 🌿 Sometimes, it's the uncomplicated things that resonate the most."
            subtext="product guru"
            avatar="https://pbs.twimg.com/profile_images/1104057240024215552/-2uBA2oC_400x400.jpg"
          />
          <Tweet
            name="Swen swenson"
            handle="@severt77"
            text="Immersed in an intense study of these business models! 🧠📚 Planning to embark on your own data journey? Let the exploration begin!"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/636233691031859200/uusI3hR4_400x400.jpg"
          />
          <Tweet
            name="Darkseid"
            handle="@CouncilWiz"
            text="Consistently unleashing the heat! 🔥🚀 Keep those fire moments coming! 🔥🔥"
            subtext="AI user"
            avatar="https://pbs.twimg.com/profile_images/1740836462747140097/d26aSk-9_400x400.jpg"
          />
           <Tweet
            name="Swen swenson"
            handle="@severt77"
            text="This is nothing short of absolute insanity!!"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/636233691031859200/uusI3hR4_400x400.jpg"
          />
        </ul>
        <ul className="flex items-center gap-8 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <Tweet
            name="Sam"
            handle="@samsesin"
            text="B💥💥m! The anticipation is building up, and I absolutely can't wait to witness this unfolding masterpiece! 🚀✨"
            subtext="AI user"
            avatar="https://pbs.twimg.com/profile_images/1348046108308733953/nqVODdYk_400x400.jpg"
          />
          <Tweet
            name="Winston"
            handle="@MrWinstonWolf_"
            text="Absolutely enamored with these remarkable businesses. 💖 Each one has its unique charm, making it a joy to appreciate and support. 🌟✨"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/1503565994614210560/TEFE1Sn9_400x400.jpg"
          />
          <Tweet
            name="Anish K.Mitra"
            handle="@anishkmitra"
            text="It's truly the simplicity that holds the most profound beauty. 🌿 Sometimes, it's the uncomplicated things that resonate the most."
            subtext="product guru"
            avatar="https://pbs.twimg.com/profile_images/1104057240024215552/-2uBA2oC_400x400.jpg"
          />
          <Tweet
            name="Swen swenson"
            handle="@severt77"
            text="Immersed in an intense study of these business models! 🧠📚 Planning to embark on your own data journey? Let the exploration begin!"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/636233691031859200/uusI3hR4_400x400.jpg"
          />
          <Tweet
            name="Darkseid"
            handle="@CouncilWiz"
            text="Consistently unleashing the heat! 🔥🚀 Keep those fire moments coming! 🔥🔥"
            subtext="AI user"
            avatar="https://pbs.twimg.com/profile_images/1740836462747140097/d26aSk-9_400x400.jpg"
          />
           <Tweet
            name="Swen swenson"
            handle="@severt77"
            text="This is nothing short of absolute insanity!!"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/636233691031859200/uusI3hR4_400x400.jpg"
          />
        </ul>
        <ul className="flex items-center gap-8 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <Tweet
            name="Sam"
            handle="@samsesin"
            text="B💥💥m! The anticipation is building up, and I absolutely can't wait to witness this unfolding masterpiece! 🚀✨"
            subtext="AI user"
            avatar="https://pbs.twimg.com/profile_images/1348046108308733953/nqVODdYk_400x400.jpg"
          />
          <Tweet
            name="Winston"
            handle="@MrWinstonWolf_"
            text="Absolutely enamored with these remarkable businesses. 💖 Each one has its unique charm, making it a joy to appreciate and support. 🌟✨"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/1503565994614210560/TEFE1Sn9_400x400.jpg"
          />
          <Tweet
            name="Anish K.Mitra"
            handle="@anishkmitra"
            text="It's truly the simplicity that holds the most profound beauty. 🌿 Sometimes, it's the uncomplicated things that resonate the most."
            subtext="product guru"
            avatar="https://pbs.twimg.com/profile_images/1104057240024215552/-2uBA2oC_400x400.jpg"
          />
          <Tweet
            name="Swen swenson"
            handle="@severt77"
            text="Immersed in an intense study of these business models! 🧠📚 Planning to embark on your own data journey? Let the exploration begin!"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/636233691031859200/uusI3hR4_400x400.jpg"
          />
          <Tweet
            name="Darkseid"
            handle="@CouncilWiz"
            text="Consistently unleashing the heat! 🔥🚀 Keep those fire moments coming! 🔥🔥"
            subtext="AI user"
            avatar="https://pbs.twimg.com/profile_images/1740836462747140097/d26aSk-9_400x400.jpg"
          />
           <Tweet
            name="Swen swenson"
            handle="@severt77"
            text="This is nothing short of absolute insanity!!"
            subtext="business enthusiast"
            avatar="https://pbs.twimg.com/profile_images/636233691031859200/uusI3hR4_400x400.jpg"
          />
        </ul>
      </div>
    </div>
  );
};

export default Reviews;

const Tweet = ({
  name,
  handle,
  text,
  subtext,
  avatar,
}: {
  name: String;
  handle: String;
  text: String;
  subtext: String;
  avatar: String;
}) => (
  <div className="flex flex-col gap- w-[250px] md:w-[300px] border border-gray-800 rounded-[10px] p-3 md:p-5">
    <div className="flex gap-4">
      <Image
        src={`${avatar}`}
        alt="avatar"
        className="rounded-full"
        width={50}
        height={50}
      />
      <div className="flex flex-col">
        <span className="font-semibold">{name}</span>
        <span className="text-gray-400 text-xs">{handle}</span>
      </div>
    </div>
    <div className="flex ml-16 mt-3 flex-col">
      <span className="font-semibold md:text-base text-sm">{text}</span>
      <span className="text-gray-400 capitalize mt-3 text-sm">{subtext}</span>
    </div>
  </div>
);
