import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogArticleHeader from "../../components/BlogArticleHeader";
import { Box, Center, Flex, Tabs } from "@chakra-ui/react";

const Tamassa = () => {
  return (
    <div className="hero min-h-screen md:min-h-screen mt-3 mx-auto  w-full flex flex-col items-center justify-center">
      <Header />
      <div className="container mt-28  px-4 md:p-0 mx-auto max-w-5xl ">
        <div className="mb-8">
          <BlogArticleHeader
            title="Tamassa Resort at Bel-Ombre Mauritius"
            subtitle="A Refreshing Break: My 3-Day Stay at TAMASSA Hotel 🌴"
            moredescription="All-inclusive package"
            date="17 Dec 2024"
            readtime="5 mins"
          />
        </div>

        <div className=" mb-16 bg-[#0e1419] p-2 border border-gray-500 rounded-md">
          <img src="../images/tamassa.jpg" alt="" />
        </div>

        {/* Chakra UI Tabs */}
        <Flex minH="dvh">
          <Tabs.Root
            defaultValue="1"
            width="full"
            colorPalette="red"
            variant="outline"
            justify="center"
            fitted="true"
          >
            <Tabs.List className="font-bold">
              {items.map((item, index) => (
                <Tabs.Trigger
                  key={index}
                  value={item.title}
                  className="font-bold"
                >
                  Day {item.title}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            <Box pos="relative" minH="200px" width="full">
              {items.map((item, index) => (
                <Tabs.Content
                  key={index}
                  value={item.title}
                  position="absolute"
                  inset="0"
                  _open={{
                    animationName: "fade-in, scale-in",
                    animationDuration: "300ms",
                  }}
                  _closed={{
                    animationName: "fade-out, scale-out",
                    animationDuration: "120ms",
                  }}
                >
                  <div className="flex flex-col gap-4 bg-[#0e1419] p-4 my-4">
                    <p className="font-bold text-xl italic">
                      {item.contentTitle}
                    </p>
                    <p className="italic">
                      <span className="italic font-semibold">
                        Quick Overview :{" "}
                      </span>
                      {item.summary}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p>{item.para1}</p>
                    <p>{item.para2}</p>
                    <p>{item.para3}</p>
                    <p>{item.para4}</p>
                    <p>{item.para5}</p>
                    <p>{item.para6}</p>
                    <p>{item.para7}</p>
                    <p>{item.para8}</p>
                    <p>{item.para9}</p>
                  </div>
                </Tabs.Content>
              ))}
            </Box>
          </Tabs.Root>
        </Flex>
      </div>
    </div>
  );
};

const items = [
  {
    title: "1",
    contentTitle: "Day 1 - Our Tamassa Hotel Adventure & Birthday",
    summary:
      "It was a hectic yet fun day as we left home later than planned for our stay at Tamassa Hotel. After a minor setback (Mom forgetting her ID!), we finally arrived at the hotel around 5:30 pm. Check-in was a breeze, thanks to my sister handling everything earlier. We spent some time exploring the hotel, then raced to the beach just in time for sunset, enjoying a beautiful walk and snapping photos. Since it was my mom’s birthday, we surprised her with a cake before heading to the buffet dinner at the SHOW Restaurant. The buffet had an impressive selection of seafood, Indian dishes, and desserts, and we tried a local drink called Tamastic. After dinner, we enjoyed some live entertainment, with my mom even getting a special birthday surprise from the hotel staff. We ended the night exhausted but happy, heading back to our rooms to rest",
    para1: "in progress",
    // para1:
    //   "I left work at noon on this awesome Friday, ready for the weekend! We were supposed to check in at the hotel by 2 pm, but my mom made us a little late. We ended up leaving home at 4 pm!",
    // para2:
    //   "There were nine of us in total heading to the Tamassa Hotel, and just five minutes into the drive, we all suddenly wondered... did everyone grab their IDs? Guess who forgot hers? Yep, Mom! We had to make a U-turn at the Caudan roundabout, and of course, we got stuck in traffic for 15 minutes.",
    // para3:
    //   "At 5:30 pm, we were finally on our way from Port-Louis to Bel-Ombre. After an hour and a half of driving, we finally reached the hotel. Since half the family had arrived earlier, the check-in process was all sorted—my sister had already checked us in and taken care of the paperwork! It made everything so much easier. We explored the beautiful hotel entrance before heading up to check out our rooms. Oh, and the door! Took a little practice to figure out how to open it with the card.",
    // para4:
    //   "With just 15 minutes before sunset, we rushed to the beach. The view was absolutely stunning! We took a long walk, snapping pictures and selfies along the way.",
    // para5:
    //   "And since it was my mom’s birthday, we brought a cake to surprise her! It was a perfect little moment to celebrate. We got ready for dinner, and decided to do the birthday surprise before heading to the buffet dinner. She loved it! We took a bunch of photos before heading to the SHOW Restaurant.",
    // para6:
    //   "The buffet was pretty amazing! Lots of seafood (mussels, steamed tuna, seafood salad, grilled fish), fried chicken, pasta with different sauces, tons of fruits, salads, Indian food options... you name it. And let’s not forget dessert—it was delicious! The drinks included a local favorite called Tamastic—rum mixed with tamarind. I personally loved it, though we kept it simple with Coca-Cola and Sprite. The alcoholic drinks weren’t top-tier, so we stuck with the basics.",
    // para7:
    //   "After dinner, there was some entertainment—singing and cultural dancing next to the B-BAR restaurant. We sat by the pool, enjoying the performances. Mom was in the mood to dance, so she got out there and enjoyed the night to the fullest! To top it all off, the hotel staff surprised her with a cute birthday cake! A little chocolate cake with a song—so sweet!",
    // para8:
    //   "After watching my family have fun and the entertainment wrapping up, we headed back to the rooms. Let’s just say, we all went straight into a food coma",
    // para9: "",
  },
  {
    title: "2",
    contentTitle: "Day 2 at Tamassa - Pool Fun, Activities & Good Vibes ",
    summary:
      "Day 2 was packed with fun and activities! We started with a delicious breakfast, then hit the pool for some refreshing swim time. After playing a game with a kids’ ball, we had a tasty lunch, with a Truck Burger being the highlight. In the afternoon, we went on a glass-bottom boat ride to explore the underwater world, followed by a sauna and hamam session (though I didn’t last long in either!). We also stumbled upon a foam party at the pool, which was super fun. After tea time, we swam a bit more and then tried our hand at tennis, where I wasn’t exactly a pro! Dinner was a hit, especially with the Rum Coco and Pina Coladas, followed by some dancing at the B-BAR. We ended the night exhausted but happy at 11 pm",
    para1: "in progress",
    para2: "",
    para3: "",
    para4: "",
    para5: "",
    para6: "",
    para7: "",
    para8: "",
    para9: "",
  },
  {
    title: "3",
    contentTitle: "Day 3 - Sunday Chill",
    summary:
      "I started my Sunday with some alone time at the beach, enjoying the peaceful morning view. After breakfast, I swam in the pool, even though the water was colder, but it was still refreshing. We packed up, and luckily, we were able to get a late check-out until 2 pm. For lunch, I decided to switch it up and enjoy kebabs and lamb, which were amazing. We didn’t visit the Playa restaurant since it wasn’t included in the package, but overall, I had a great time. The only downside was the number of cats on the property, which made me worry about them multiplying, so I left a negative review about it",
    para1: "in progress",
    para2: "",
    para3: "",
    para4: "",
    para5: "",
    para6: "",
    para7: "",
    para8: "",
    para9: "",
  },
];

export default Tamassa;
