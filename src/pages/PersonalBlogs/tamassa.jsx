import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogArticleHeader from "../../components/BlogArticleHeader";
import { Box, Center, Flex, Tabs } from "@chakra-ui/react";

const Tamassa = () => {
  return (
    <div className="hero min-h-screen md:min-h-screen mt-3 mx-auto  w-full flex flex-col items-center justify-center mb-5">
      <Header />
      <div className="container mt-28  px-4 md:p-0 mx-auto max-w-5xl pb-5 ">
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
                  <div className="flex flex-col gap-4  p-4 my-4">
                    <p className="font-bold text-xl italic">
                      {item.contentTitle}
                    </p>
                    {/* <p className="italic">
                      <span className="italic font-semibold">
                        Quick Overview :{" "}
                      </span>
                      {item.summary}
                    </p> */}
                  </div>
                  <div className="flex flex-col gap-4">
                    <p>{item.para1}</p>
                    <p>{item.para2}</p>

                    <p>{item.para3}</p>
                    <p>{item.para4}</p>
                    <div className="carousel max-w-4xl h-[400px]  mx-auto">
                      <div id="item1" className="carousel-item max-w-2xl mx-2">
                        <img src={item.img1} className="max-w-2xl rounded-lg" />
                      </div>
                      <div id="item2" className="carousel-item max-w-2xl mx-2">
                        <img src={item.img2} className="max-w-2xl rounded-lg" />
                      </div>
                      <div id="item3" className="carousel-item max-w-2xl mx-2">
                        <img src={item.img3} className="max-w-2xl rounded-lg" />
                      </div>
                      <div id="item4" className="carousel-item max-w-2xl mx-2">
                        <img src={item.img4} className="max-w-2xl rounded-lg" />
                      </div>
                      <div id="item5" className="carousel-item max-w-2xl mx-2">
                        <img src={item.img5} className="max-w-2xl rounded-lg" />
                      </div>
                      <div id="item7" className="carousel-item max-w-2xl mx-2">
                        <img
                          src={item.img11}
                          className="max-w-2xl rounded-lg"
                        />
                      </div>
                      <div id="item6" className="carousel-item max-w-2xl mx-2">
                        <img
                          src={item.img12}
                          className="max-w-2xl rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="flex w-full justify-center gap-2 py-2">
                      <a href="#item1" className="btn btn-xs">
                        1
                      </a>
                      <a href="#item2" className="btn btn-xs">
                        2
                      </a>
                      <a href="#item3" className="btn btn-xs">
                        3
                      </a>
                      <a href="#item4" className="btn btn-xs">
                        4
                      </a>
                      <a href="#item5" className="btn btn-xs">
                        5
                      </a>
                      <a href="#item6" className="btn btn-xs">
                        6
                      </a>
                      <a href="#item7" className="btn btn-xs">
                        7
                      </a>
                    </div>
                    <p>{item.para5}</p>
                    <p>{item.para6}</p>
                    <p>{item.para7}</p>
                    <div className="carousel max-w-4xl h-[400px]  mx-auto">
                      <div id="item-1" className="carousel-item max-w-2xl mx-2">
                        <img
                          src={item.img5a}
                          className="max-w-2xl rounded-lg"
                        />
                      </div>
                      <div id="item-2" className="carousel-item max-w-2xl mx-2">
                        <img src={item.img6} className="max-w-2xl rounded-lg" />
                      </div>
                      <div id="item-3" className="carousel-item max-w-2xl mx-2">
                        <img src={item.img7} className="max-w-2xl rounded-lg" />
                      </div>
                      <div id="item-4" className="carousel-item max-w-2xl mx-2">
                        <img src={item.img8} className="max-w-2xl rounded-lg" />
                      </div>
                      <div id="item-5" className="carousel-item max-w-2xl mx-2">
                        <img src={item.img9} className="max-w-2xl rounded-lg" />
                      </div>
                      <div id="item-6" className="carousel-item max-w-2xl mx-2">
                        <img
                          src={item.img10}
                          className="max-w-2xl rounded-lg"
                        />
                      </div>
                      <div id="item-7" className="carousel-item max-w-2xl mx-2">
                        <img
                          src={item.img13}
                          className="max-w-2xl rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="flex w-full justify-center gap-2 py-2">
                      <a href="#item-1" className="btn btn-xs">
                        1
                      </a>
                      <a href="#item-2" className="btn btn-xs">
                        2
                      </a>
                      <a href="#item-3" className="btn btn-xs">
                        3
                      </a>
                      <a href="#item-4" className="btn btn-xs">
                        4
                      </a>
                      <a href="#item-5" className="btn btn-xs">
                        5
                      </a>
                      <a href="#item-6" className="btn btn-xs">
                        6
                      </a>
                      <a href="#item-7" className="btn btn-xs">
                        7
                      </a>
                    </div>
                    <p>{item.para8}</p>

                    <p className="mb-5">{item.para9}</p>
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
    img1: "../images/tamassa/day1/tamassaentrance.jpg",

    img2: "../images/tamassa/day1/tamassaentrance2.jpg",
    img3: "../images/tamassa/day1/pool.jpg",

    img4: "../images/tamassa/day1/sunset.jpg",

    img5: "../images/tamassa/day1/pic3.jpg",
    img5a: "../images/tamassa/day1/hotelnav.jpg",

    img11: "../images/tamassa/day1/me1.jpg",
    img12: "../images/tamassa/day1/me2.jpg",

    img6: "../images/tamassa/day1/food1.jpg",
    img7: "../images/tamassa/day1/food2.jpg",
    img8: "../images/tamassa/day1/food3.jpg",
    img9: "../images/tamassa/day1/food4.jpg",

    img10: "../images/tamassa/day1/hotel.jpg",
    img13: "../images/tamassa/day1/food5.jpg",

    title: "1",
    contentTitle: "Day 1 - Our Tamassa Hotel Adventure & Birthday",
    summary:
      "It was a hectic yet fun day as we left home later than planned for our stay at Tamassa Hotel. After a minor setback (Mom forgetting her ID!), we finally arrived at the hotel around 5:30 pm. Check-in was a breeze, thanks to my sister handling everything earlier. We spent some time exploring the hotel, then raced to the beach just in time for sunset, enjoying a beautiful walk and snapping photos. Since it was my mom’s birthday, we surprised her with a cake before heading to the buffet dinner at the SHOW Restaurant. The buffet had an impressive selection of seafood, Indian dishes, and desserts, and we tried a local drink called Tamastic. After dinner, we enjoyed some live entertainment, with my mom even getting a special birthday surprise from the hotel staff. We ended the night exhausted but happy, heading back to our rooms to rest",

    para1:
      "I left work at noon on this awesome Friday, ready for the weekend! We were supposed to check in at the hotel by 2 pm, but my mom made us a little late. We ended up leaving home at 4 pm!",
    para2:
      "After a minor setback (Mom forgetting her ID!), we finally arrived at the hotel around 5:30 pm. Check-in was a breeze, thanks to my sister handling everything earlier.",
    para3:
      "We explored the beautiful hotel entrance before heading up to check out our rooms. Oh, and the door! Took a little practice to figure out how to open it with the card.",
    para4:
      "With just 15 minutes before sunset, we rushed to the beach. The view was absolutely stunning! We took a long walk, snapping pictures and selfies along the way.",
    para5:
      "And since it was my mom’s birthday, we brought a cake to surprise her! It was a perfect little moment to celebrate. We got ready for dinner, and decided to do the birthday surprise before heading to the buffet dinner. She loved it! We took a bunch of photos before heading to the SHOW Restaurant.",
    para6:
      "The buffet was pretty amazing! Lots of seafood (mussels, steamed tuna, seafood salad, grilled fish), fried chicken, pasta with different sauces, tons of fruits, salads, Indian food options... you name it. And let’s not forget dessert—it was delicious! The drinks included a local favorite called Tamastic—rum mixed with tamarind. I personally loved it, though we kept it simple with Coca-Cola and Sprite. The alcoholic drinks weren’t top-tier, so we stuck with the basics.",
    para7:
      "After dinner, there was some entertainment—singing and cultural dancing next to the B-BAR restaurant. We sat by the pool, enjoying the performances. Mom was in the mood to dance, so she got out there and enjoyed the night to the fullest! To top it all off, the hotel staff surprised her with a cute birthday cake! A little chocolate cake with a song—so sweet!",
    para8:
      "After watching my family have fun and the entertainment wrapping up, we headed back to the rooms. Let’s just say, we all went straight into a food coma",
    para9: "End",
  },
  {
    img1: "../images/tamassa/day2/pic2.jpg",

    img2: "../images/tamassa/day2/pic7.jpg",
    img3: "../images/tamassa/day2/pic3.jpg",

    img4: "../images/tamassa/day2/playing.jpg",

    img5: "../images/tamassa/day2/pic1.jpg",
    img5a: "../images/tamassa/day2/pic4.jpg",

    img11: "../images/tamassa/day2/pic5.jpg",
    img12: "../images/tamassa/day2/pic1.jpg",

    img6: "../images/tamassa/day2/food1.jpg",
    img7: "../images/tamassa/day2/food2.jpg",
    img8: "../images/tamassa/day2/food3.jpg",
    img9: "../images/tamassa/day2/me2.jpg",

    img10: "../images/tamassa/day2/me1.jpg",
    img13: "../images/tamassa/day2/pic8.jpg",
    title: "2",
    contentTitle: "Day 2 at Tamassa - Pool Fun, Activities & Good Vibes ",
    summary:
      "Day 2 was packed with fun and activities! We started with a delicious breakfast, then hit the pool for some refreshing swim time. After playing a game with a kids’ ball, we had a tasty lunch, with a Truck Burger being the highlight. In the afternoon, we went on a glass-bottom boat ride to explore the underwater world, followed by a sauna and hamam session (though I didn’t last long in either!). We also stumbled upon a foam party at the pool, which was super fun. After tea time, we swam a bit more and then tried our hand at tennis, where I wasn’t exactly a pro! Dinner was a hit, especially with the Rum Coco and Pina Coladas, followed by some dancing at the B-BAR. We ended the night exhausted but happy at 11 pm",
    para1:
      "Woke up at 8:30 am—not really a morning person, but managed to get up in time for breakfast! 😊 The buffet closed at 10 am, so we headed over by 9. So grateful for the variety of food—there were omelettes, sausages, beans, croissants, and even a coffee machine! I’m picky with breakfast, so I just had some fruits, scrambled eggs, and bread. Thankful for simple but tasty options.",
    para2:
      "After breakfast, it was pool time! We changed into our swimwear and jumped into the pool right in front of our villa. The water was just perfect—not too hot or cold. It wasn’t very deep either, which was a plus for someone short like me! 😄 We swam a bit, then started playing ball with everyone. So much laughter and fun! I’m thankful for these silly, joyful family moments.",
    para3:
      "After nearly two hours in the pool, it was time for lunch. Skipped the buffet this time and went for the Truck Burger (only for all-inclusive guests)—no regrets but i FORGOT TO TAKE A PICTURE!!!, it was delicious! Grateful for good food and full bellies.",
    para4:
      " At 2 pm, we went on a glass-bottom boat ride. It was magical—corals, colorful fish, and the deep blue sea. I loved every moment. Thankful for nature’s beauty and this peaceful ride",
    para5:
      "Next stop: sauna and hammam. I really tried… but couldn’t last more than a minute! 😂 My family did much better. At least I got to enjoy the private mini pool nearby. Quiet and refreshing—so thankful for that calm little moment.",
    para6:
      "On our way out, we passed a foam party by the big pool! It looked like too much fun to miss, so we went back later. The pool was packed with foam, music was blasting, and everyone was having a blast. Thankful for spontaneous fun!",
    para7:
      "After all the excitement, it was tea time with some yummy Mauritian cakes and satini. Then, one more swim in the big pool before heading to the tennis court. I’m no tennis pro, so I ended up playing ping pong instead (much more my style!). Thankful for trying new things—even when I’m not great at them!",
    para8:
      "For dinner, we went back to the buffet and I actually enjoyed it way more this time. The drinks? Amazing. Rum Coco and Pina Colada were top-tier. We even danced a bit at the B-BAR—such good vibes. Thankful for music, laughter, and good company.",
    para9:
      "Finally, we called it a night around 11 pm—completely tired but super happy. What a day! 🥰",
  },
  {
    img1: "../images/tamassa/day3/food1.jpg",

    img2: "../images/tamassa/day3/food2.jpg",
    img3: "../images/tamassa/day3/pic1.jpg",

    img4: "../images/tamassa/day3/pic2.jpg",

    img5: "../images/tamassa/day3/pic3.jpg",
    img5a: "../images/tamassa/day3/pic4.jpg",

    img11: "../images/tamassa/day3/pic5.jpg",
    img12: "../images/tamassa/day3/pic6.jpg",

    img6: "../images/tamassa/day3/pic7.jpg",
    img7: "../images/tamassa/day3/pic8.jpg",
    img8: "../images/tamassa/day3/pic9.jpg",
    img9: "../images/tamassa/day3/pic10.jpg",

    img10: "../images/tamassa/day3/pic11.jpg",
    img13: "../images/tamassa/day3/pic12.jpg",
    title: "3",
    contentTitle: "Day 3 - Sunday Chill",
    summary:
      "I started my Sunday with some alone time at the beach, enjoying the peaceful morning view. After breakfast, I swam in the pool, even though the water was colder, but it was still refreshing. We packed up, and luckily, we were able to get a late check-out until 2 pm. For lunch, I decided to switch it up and enjoy kebabs and lamb, which were amazing. We didn’t visit the Playa restaurant since it wasn’t included in the package, but overall, I had a great time. The only downside was the number of cats on the property, which made me worry about them multiplying, so I left a negative review about it",
    para1:
      "Sunday was all about me-time. I woke up at 8 am, freshened up, and headed straight to the beach for a solo nap. The view was calm and beautiful—such a peaceful way to start the day. Truly grateful for that quiet moment.",
    para2:
      "After breakfast, I went for a solo swim. The water was a bit chilly in the morning, but honestly, it felt so refreshing. Loved having the pool all to myself.",
    para3:
      "Later, we packed up and left everything in one room. Thankfully, we got a late check-out till 2 pm, so we didn’t have to rush. Really thankful for that extra bit of time to unwind.",
    para4:
      "Lunch was amazing again. I had my eyes on the burger, but then I saw kebabs, lamb, and a bunch of other tasty options—couldn’t resist! So glad I went for it. No regrets.",
    para5:
      "There was another restaurant, Playa, but since it wasn’t included in our package, we skipped it. Still, I enjoyed every bit of the trip and feel super thankful for the memories.",
    para6:
      "One little thing that bothered me, though—there were so many cats around. Tiny ones, pregnant ones... it felt a bit out of control.",
    para7:
      " I did leave a review about it because I was honestly concerned. Hope they do something about it.",
    para8: "It was a really nice hotel, speacially for families!",
    para9: "Enjoyed my time way more than i expected! Thank you bye.",
  },
];

export default Tamassa;
